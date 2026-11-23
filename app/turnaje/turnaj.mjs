// Turnaj pořadatele: nastavení → los → zápasy pro server → výsledky →
// pořadí → další kolo / playoff. rozhodnuti/058, krok 2.
//
// Spojuje mozek turnajů (americano, skupiny, pavouk, rozpis) se zápasy
// na serveru (fed_zapasy, migrace 018/020): zápas má číslo
// „<turnaj>/K<kolo>-<zápas>" nebo „<turnaj>/P<kolo>-<zápas>" (pavouk).
// Čistý kód bez serveru, testy v nastroje/turnaje.test.mjs.
//
// Nastavení (uloží se k turnaji):
//   format: 'americano' | 'mexicano' | 'kazdy' | 'skupiny'
//   hraci: ['Petr', …]               — americano, mexicano
//   tymy: [['Petr','Jan'], …]        — každý s každým, skupiny
//   kurty: ['1','2'], zacatek: ISO, delkaMin, prestavkaMin
//   pocitani: { typ: 'body', do: 24 } | { typ: 'sety', shoda, sety, stb }
//   kol, seed, skupin, postupuje
//   kola: [...]   — vylosovaná kola (doplňuje se: Mexicano)
//   pavouk: [...] — pozice 1. kola playoff, null = ještě není

import { kolaAmericana, koloMexicana, poradiHracu } from './americano.mjs';
import { kolaKazdySKazdym, rozdelDoSkupin, poradiSkupiny, vitez as vitezSetu } from './skupiny.mjs';
import { pavoukZeSkupin, pavoukZNasazeni, stavPavouka } from './pavouk.mjs';
import { rozpis } from './rozpis.mjs';

export const FORMATY = ['americano', 'mexicano', 'kazdy', 'skupiny'];
export const jePoHracich = (n) => n.format === 'americano' || n.format === 'mexicano';
export const idTymu = (i) => 'T' + (i + 1);

/** Jméno účastníka podle id (hráč je jméno sám, tým „T3" → „Petr / Jan"). */
export function jmeno(n, id) {
  if (jePoHracich(n)) return id;
  const t = n.tymy[Number(id.slice(1)) - 1];
  return t ? t.join(' / ') : id;
}

/** Kontrola nastavení před losem. Vrací text chyby, nebo null. */
export function chybaNastaveni(n) {
  if (!FORMATY.includes(n.format)) return 'format';
  if (!n.kurty || !n.kurty.length) return 'kurty';
  if (jePoHracich(n)) {
    if (!n.hraci || n.hraci.length < 4) return 'malo_hracu';
    if (new Set(n.hraci).size !== n.hraci.length) return 'dvakrat';
  } else {
    if (!n.tymy || n.tymy.length < 2) return 'malo_tymu';
    const vsichni = n.tymy.flat();
    if (new Set(vsichni).size !== vsichni.length) return 'dvakrat';
    if (n.format === 'skupiny' && n.tymy.length < (n.skupin || 1) * 2) return 'malo_do_skupin';
  }
  return null;
}

/** Počet skupin podle počtu týmů (do 4 → 1, do 8 → 2, do 12 → 3, …). Grand Padel. */
export function doporucenoSkupin(pocetTymu) { return Math.max(1, Math.ceil(pocetTymu / 4)); }

/** První los: kola, která se dají vylosovat hned. */
export function prvniLos(n) {
  const kurtu = n.kurty.length;
  if (n.format === 'americano') return kolaAmericana(n.hraci, kurtu, { kol: n.kol || undefined, seed: n.seed || 1 });
  if (n.format === 'mexicano') return [koloMexicana(n.hraci, kurtu)];
  const ids = n.tymy.map((_, i) => idTymu(i));
  if (n.format === 'kazdy') return kolaKazdySKazdym(ids);
  // Skupiny: každá skupina každý s každým; kola skupin se spojí (1. kolo všech skupin, 2. …).
  const skupiny = rozdelDoSkupin(ids, n.skupin || doporucenoSkupin(ids.length));
  const kolaSkupin = skupiny.map((s) => kolaKazdySKazdym(s));
  const nejvic = Math.max(...kolaSkupin.map((k) => k.length));
  const kola = [];
  for (let r = 0; r < nejvic; r++) {
    const zapasy = [], pauza = [];
    kolaSkupin.forEach((ks, g) => {
      const k = ks[r];
      if (!k) return;
      k.zapasy.forEach((z) => zapasy.push({ ...z, skupina: g }));
      pauza.push(...k.pauza);
    });
    kola.push({ zapasy, pauza });
  }
  return kola;
}

/** Skupiny podle losu (pro skupinový formát), jinak []. */
export function skupinyZLosu(n) {
  if (n.format !== 'skupiny') return [];
  const pocet = n.skupin || doporucenoSkupin(n.tymy.length);
  return rozdelDoSkupin(n.tymy.map((_, i) => idTymu(i)), pocet);
}

/** Pravidla zápasu pro server (fed_pravidla). */
export function pravidla(n) {
  const p = n.pocitani || { typ: 'sety' };
  if (p.typ === 'body') return { format: 'americano', americano_do: p.do || 24 };
  return { format: 'klasicky', shoda: p.shoda || 'star_point', sety: p.sety || 2, super_tie_break: !!p.stb };
}

const hraciZapasu = (n, strana) => (Array.isArray(strana) ? strana : [strana])
  .flatMap((id) => (jePoHracich(n) ? [id] : (n.tymy[Number(id.slice(1)) - 1] || [id])))
  .map((j) => ({ jmeno: j }));

/**
 * Zápasy kol pro server, s kurty a časy z rozpisu (časy se počítají přes
 * všechna kola, takže doplněné kolo Mexicana jde časově za předchozí).
 */
export function zapasyKol(n, turnaj, odKola = 0) {
  const zac = n.zacatek ? Date.parse(n.zacatek) : null;
  const r = zac == null || !n.delkaMin ? null
    : n.rezimKurtu === 'skupina' && n.format === 'skupiny' ? rozpisPoSkupinach(n, zac)
    : rozpis(n.kola, n.kurty, { zacatek: zac, delkaMin: n.delkaMin, prestavkaMin: n.prestavkaMin || 0 });
  const ven = [];
  n.kola.forEach((kolo, k) => {
    if (k < odKola) return;
    kolo.zapasy.forEach((z, i) => {
      const misto = r ? r.find((x) => x.kolo === k && x.zapas === i) : null;
      ven.push({
        cislo: turnaj + '/K' + (k + 1) + '-' + (i + 1),
        kurt: misto ? misto.kurt : n.kurty[i % n.kurty.length],
        kdy: misto ? new Date(misto.kdy).toISOString() : null,
        tym_a: hraciZapasu(n, z.a), tym_b: hraciZapasu(n, z.b),
        pravidla: pravidla(n),
      });
    });
  });
  return ven;
}

// Režim kurtů „1 kurt = 1 skupina" (Grand Padel): skupina hraje celá na
// svém kurtu, zápasy po sobě. Víc skupin než kurtů = skupiny se na kurtu
// střídají v pořadí kol.
function rozpisPoSkupinach(n, zac) {
  const krok = (n.delkaMin + (n.prestavkaMin || 0)) * 60000;
  const obsazeno = {};
  const ven = [];
  n.kola.forEach((kolo, k) => kolo.zapasy.forEach((z, i) => {
    const kurt = n.kurty[(z.skupina || 0) % n.kurty.length];
    const poradi = obsazeno[kurt] || 0;
    obsazeno[kurt] = poradi + 1;
    ven.push({ kolo: k, zapas: i, kurt, kdy: zac + poradi * krok });
  }));
  return ven;
}

/** Odhad, kdy turnaj skončí (ms), nebo null bez času. */
export function konecTurnaje(n) {
  if (!n.zacatek || !n.delkaMin) return null;
  const b = bloky(n);
  return Date.parse(n.zacatek) + (b * n.delkaMin + Math.max(0, b - 1) * (n.prestavkaMin || 0)) * 60000;
}

/**
 * Výsledek zápasu ze serveru → { hotovo, vitez (0/1/null), body?, sety? }.
 * Skreč a nenastoupení = výhra soupeře; „jiný důvod" = bez vítěze.
 */
export function vysledek(z) {
  if (!z || (z.stav !== 'dohrany' && z.stav !== 'ukonceny')) return { hotovo: false, vitez: null };
  const s = z.skore || {};
  if (z.stav === 'ukonceny') {
    const v = /_a$/.test(z.duvod || '') ? 1 : /_b$/.test(z.duvod || '') ? 0 : null;
    return { hotovo: true, vitez: v, body: s.body, sety: s.sety, ukonceno: true };
  }
  if (Array.isArray(s.body) && !s.sety) {
    const [a, b] = s.body;
    return { hotovo: true, vitez: a > b ? 0 : b > a ? 1 : null, body: [a, b] };
  }
  const v = s.vitez === 0 || s.vitez === 1 ? s.vitez : vitezSetu(s.sety);
  return { hotovo: true, vitez: v, sety: s.sety || [] };
}

const podleCisla = (zapasy) => new Map((zapasy || []).map((z) => [z.cislo, z]));

/** Zápasy kol s výsledky v řeči mozku turnajů. */
function odehraneKol(n, turnaj, zapasy) {
  const m = podleCisla(zapasy);
  const ven = [];
  n.kola.forEach((kolo, k) => kolo.zapasy.forEach((z, i) => {
    ven.push({ ...z, kolo: k, cislo: turnaj + '/K' + (k + 1) + '-' + (i + 1), v: vysledek(m.get(turnaj + '/K' + (k + 1) + '-' + (i + 1))) });
  }));
  return ven;
}

/** Je kolo celé dohrané? */
export function koloHotove(n, turnaj, zapasy, k) {
  return odehraneKol(n, turnaj, zapasy).filter((z) => z.kolo === k).every((z) => z.v.hotovo);
}

/**
 * Pořadí. Americano a Mexicano: hráči podle bodů. Každý s každým: jedna
 * tabulka. Skupiny: tabulka pro každou skupinu.
 * @returns {{ skupina: number|null, tabulka: object[] }[]}
 */
export function poradi(n, turnaj, zapasy) {
  const odehrane = odehraneKol(n, turnaj, zapasy).filter((z) => z.v.hotovo);
  if (jePoHracich(n)) {
    const pz = odehrane.filter((z) => Array.isArray(z.v.body)).map((z) => ({ a: z.a, b: z.b, body: z.v.body }));
    return [{ skupina: null, tabulka: poradiHracu(n.hraci, pz) }];
  }
  const pz = odehrane.map((z) => ({ a: z.a, b: z.b, sety: z.v.sety || [], vitez: z.v.ukonceno ? z.v.vitez ?? undefined : undefined }));
  if (n.format === 'kazdy') return [{ skupina: null, tabulka: poradiSkupiny(n.tymy.map((_, i) => idTymu(i)), pz) }];
  return skupinyZLosu(n).map((sk, g) => ({ skupina: g, tabulka: poradiSkupiny(sk, pz.filter((z) => sk.includes(z.a))) }));
}

/** Další kolo Mexicana podle pořadí (jen když je poslední kolo dohrané). */
export function dalsiKoloMexicana(n, turnaj, zapasy) {
  if (n.format !== 'mexicano') throw new Error('Jen pro Mexicano.');
  if (!koloHotove(n, turnaj, zapasy, n.kola.length - 1)) throw new Error('Nejdřív dohrát kolo.');
  const tab = poradi(n, turnaj, zapasy)[0].tabulka;
  const odehrano = Object.fromEntries(tab.map((r) => [r.hrac, r.zapasy]));
  return koloMexicana(tab.map((r) => r.hrac), n.kurty.length, odehrano);
}

/** Jsou všechny zápasy skupin dohrané? */
export function skupinyHotove(n, turnaj, zapasy) {
  return odehraneKol(n, turnaj, zapasy).every((z) => z.v.hotovo);
}


// ------------------------------------------------------------ playoff
//
// Podle Grand Padel (058): bez playoff / vyřazovací pavouk / Final Four
// (nejlepší čtyři, i zápas o 3. místo) / pásma po čtyřech (hrají všichni
// o umístění). Pavouků může být víc (pásma); každý má číslo zápasu
// „/P<kolo>-<zápas>" (první) nebo „/B<pásmo>P<kolo>-<zápas>" (další),
// zápas o 3. místo „/P3M" nebo „/B<pásmo>P3M".
//
// n.playoff = { typ: 'pavouk' | 'final4' | 'pasma', o3: true/false }
// n.pavouky = [{ od, pozice, o3 }] — založené playoff (od = nejlepší místo pásma)
// Starší turnaj má jen n.pavouk (pozice) — bere se jako jeden pavouk bez o 3. místo.

export const PLAYOFFY = ['pavouk', 'final4', 'pasma'];

/** Pavouky turnaje (i starší n.pavouk). */
export function pavouky(n) {
  if (Array.isArray(n.pavouky)) return n.pavouky;
  if (Array.isArray(n.pavouk)) return [{ od: 1, pozice: n.pavouk, o3: false }];
  return [];
}

/**
 * Celkové pořadí týmů napříč skupinami: místo ve skupině, pak výhry,
 * sety, gemy, nasazení. Z něj se bere Final Four a pásma.
 */
export function celkovePoradi(n, turnaj, zapasy) {
  const radky = [];
  poradi(n, turnaj, zapasy).forEach((p) => p.tabulka.forEach((r, i) => radky.push({ ...r, mistoVeSkupine: i })));
  radky.sort((a, b) => a.mistoVeSkupine - b.mistoVeSkupine || b.vyhry - a.vyhry || b.sety - a.sety || b.gemy - a.gemy || a.nasazeni - b.nasazeni);
  return radky.map((r) => r.tym);
}

/** Založí playoff po skupinách (nebo po každém s každým) podle n.playoff. */
export function zalozPlayoff(n, turnaj, zapasy) {
  if (n.format !== 'skupiny' && n.format !== 'kazdy') throw new Error('Playoff jen po skupinách nebo po každém s každým.');
  const typ = (n.playoff && n.playoff.typ) || 'pavouk';
  const o3 = !!(n.playoff && n.playoff.o3);
  const celkem = celkovePoradi(n, turnaj, zapasy);
  if (typ === 'final4') return [{ od: 1, pozice: pavoukZNasazeni(celkem.slice(0, 4)), o3: true }];
  if (typ === 'pasma') {
    const ven = [];
    for (let i = 0; i < celkem.length; i += 4) {
      const tymy = celkem.slice(i, i + 4);
      if (tymy.length < 2) break; // poslední sám — jeho místo je dané
      ven.push({ od: i + 1, pozice: pavoukZNasazeni(tymy), o3: tymy.length === 4 });
    }
    return ven;
  }
  // Vyřazovací pavouk: ze skupin bez střetu ze stejné skupiny, z každého s každým podle pořadí.
  if (n.format === 'skupiny') {
    const tabulky = poradi(n, turnaj, zapasy).map((p) => p.tabulka.map((r) => r.tym));
    return [{ od: 1, pozice: pavoukZeSkupin(tabulky, n.postupuje || 2), o3 }];
  }
  // Po každém s každým: do pavouka jde nejlepších n.postupuje (výchozí čtyři).
  return [{ od: 1, pozice: pavoukZNasazeni(celkem.slice(0, n.postupuje || 4)), o3 }];
}

/** Starší jméno: jeden pavouk ze skupin (pozice). */
export function zalozPavouk(n, turnaj, zapasy) {
  return pavoukZeSkupin(poradi(n, turnaj, zapasy).map((p) => p.tabulka.map((r) => r.tym)), n.postupuje || 2);
}

const predpona = (b) => (b === 0 ? '/P' : '/B' + (b + 1) + 'P');

/**
 * Stav všech pavouků: kola, zápas o 3. místo, konečná místa.
 * @returns {{ od, o3, predpona, kola, o3zapas: {a,b,vitez,cislo}|null, mista: string[] }[]}
 */
export function stavPlayoffu(n, turnaj, zapasy) {
  const m = podleCisla(zapasy);
  return pavouky(n).map((p, b) => {
    const pre = turnaj + predpona(b);
    const vysl = {};
    for (const [cislo, z] of m) {
      if (!cislo.startsWith(pre)) continue;
      const x = /^(\d+)-(\d+)$/.exec(cislo.slice(pre.length));
      if (!x) continue;
      const v = vysledek(z);
      if (v.hotovo && v.vitez !== null) vysl[(x[1] - 1) + '-' + (x[2] - 1)] = v.vitez;
    }
    const kola = stavPavouka(p.pozice, vysl);
    // O 3. místo: poražení ze semifinále (obě semifinále dohraná, bez volného losu).
    let o3zapas = null;
    const semi = kola.length >= 2 ? kola[kola.length - 2] : null;
    if (p.o3 && semi && semi.length === 2 && semi.every((z) => !z.volny)) {
      const porazeny = (z) => (z.vitez ? (z.vitez === z.a ? z.b : z.a) : null);
      const z3 = m.get(pre + '3M');
      const v3 = vysledek(z3);
      const a = porazeny(semi[0]), bb = porazeny(semi[1]);
      o3zapas = { a, b: bb, cislo: pre + '3M', vitez: a && bb && v3.hotovo && v3.vitez !== null ? (v3.vitez === 0 ? a : bb) : null };
    }
    // Konečná místa, jakmile jsou známá.
    const fin = kola[kola.length - 1][0];
    const mista = [];
    if (fin.vitez) {
      mista.push(fin.vitez, fin.vitez === fin.a ? fin.b : fin.a);
      if (o3zapas && o3zapas.vitez) mista.push(o3zapas.vitez, o3zapas.vitez === o3zapas.a ? o3zapas.b : o3zapas.a);
    }
    return { od: p.od, o3: !!p.o3, predpona: pre, kola, o3zapas, mista };
  });
}

/** Stav prvního pavouka (starší volání). */
export function pavouk(n, turnaj, zapasy) {
  const st = stavPlayoffu(n, turnaj, zapasy);
  return st.length ? st[0].kola : null;
}

/** Zápasy playoffu, které už mají oba soupeře a na serveru ještě nejsou. */
export function noveZapasyPavouka(n, turnaj, zapasy) {
  const m = podleCisla(zapasy);
  const ven = [];
  const pridej = (cislo, a, b) => {
    if (m.has(cislo)) return;
    // Kurty po řadě; čas ne — playoff jde frontou, jak se kurty uvolní.
    ven.push({ cislo, kurt: n.kurty[ven.length % n.kurty.length], kdy: null, tym_a: hraciZapasu(n, a), tym_b: hraciZapasu(n, b), pravidla: pravidla(n) });
  };
  for (const p of stavPlayoffu(n, turnaj, zapasy)) {
    p.kola.forEach((kolo, k) => kolo.forEach((z, i) => {
      if (z.volny || z.a === null || z.b === null) return;
      pridej(p.predpona + (k + 1) + '-' + (i + 1), z.a, z.b);
    }));
    if (p.o3zapas && p.o3zapas.a && p.o3zapas.b) pridej(p.o3zapas.cislo, p.o3zapas.a, p.o3zapas.b);
  }
  return ven;
}

// ------------------------------------------------------------ z Grand Padel: los dvojic, kurty, délka kola

/**
 * Pohlaví z řádku seznamu: „Jana Malá (Ž)", „(Z)", „(F)", „(W)" = žena,
 * „(M)" = muž. Vrací { jmeno, pohlavi: 'M' | 'Z' | null }.
 */
export function prectiHrace(radek) {
  const m = /^(.*?)\s*\((M|Ž|Z|F|W)\)\s*$/i.exec(radek.trim());
  if (!m) return { jmeno: radek.trim(), pohlavi: null };
  return { jmeno: m[1].trim(), pohlavi: m[2].toUpperCase() === 'M' ? 'M' : 'Z' };
}

/**
 * Jednotlivci → dvojice (Grand Padel): když je pohlaví zadané, nejdřív
 * mix muž + žena, zbytek náhodně. Lichý poslední zůstane sám (dvojice
 * o jednom hráči — pořadatel ho doplní).
 * @param {string[]} radky
 * @param {() => number} los náhoda 0..1
 * @returns {string[][]}
 */
export function rozlosujDvojice(radky, los = Math.random) {
  const lide = radky.map(prectiHrace).filter((h) => h.jmeno);
  const zamichej = (p) => { for (let i = p.length - 1; i > 0; i--) { const j = Math.floor(los() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } return p; };
  const muzi = zamichej(lide.filter((h) => h.pohlavi === 'M'));
  const zeny = zamichej(lide.filter((h) => h.pohlavi === 'Z'));
  const dvojice = [];
  while (muzi.length && zeny.length) dvojice.push([muzi.pop().jmeno, zeny.pop().jmeno]);
  const zbytek = zamichej([...muzi, ...zeny, ...lide.filter((h) => !h.pohlavi)]).map((h) => h.jmeno);
  for (let i = 0; i < zbytek.length; i += 2) dvojice.push(zbytek.slice(i, i + 2));
  return dvojice;
}

/** Kolik bloků (časových oken) turnaj zabere — kola po sobě, zápasy na kurty. */
export function bloky(n) {
  if (n.rezimKurtu === 'skupina' && n.format === 'skupiny') {
    // Každá skupina na svém kurtu: rozhoduje kurt s nejvíc zápasy.
    const naKurtu = {};
    n.kola.forEach((k) => k.zapasy.forEach((z) => { const kurt = n.kurty[(z.skupina || 0) % n.kurty.length]; naKurtu[kurt] = (naKurtu[kurt] || 0) + 1; }));
    return Math.max(0, ...Object.values(naKurtu));
  }
  return n.kola.reduce((s, k) => s + Math.max(1, Math.ceil(k.zapasy.length / n.kurty.length)), 0);
}

/**
 * Délka zápasu z času konce turnaje (Grand Padel: „délku kola spočítá
 * systém"): (konec − začátek − přestávky) / bloky, nejvýš 60 minut.
 * Pod 10 minut se turnaj nestihne.
 * @returns {{ delkaMin: number|null, chyba: 'nestihne' | null }}
 */
export function delkaZKonce(n, konecIso) {
  const celkem = (Date.parse(konecIso) - Date.parse(n.zacatek)) / 60000;
  const b = bloky(n);
  if (!(celkem > 0) || !b) return { delkaMin: null, chyba: 'nestihne' };
  const delka = Math.floor((celkem - (b - 1) * (n.prestavkaMin || 0)) / b);
  if (delka < 10) return { delkaMin: null, chyba: 'nestihne' };
  return { delkaMin: Math.min(60, delka), chyba: null };
}
