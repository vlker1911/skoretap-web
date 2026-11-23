// Americano a Mexicano — los kol a pořadí hráčů. rozhodnuti/058, krok 1.
//
// Napsáno znovu ve Skoretapu podle běžných pravidel těchto formátů
// (058, „Čistá stavba"): hráči se po kolech střídají ve dvojicích, každý
// výměna je bod, pořadí určuje součet bodů.
//
// Čistý kód bez serveru a bez prohlížeče: vstup hráči (id jako text),
// výstup kola se zápasy. Testy: nastroje/turnaje.test.mjs.

import { nahoda } from './nahoda.mjs';

/**
 * Kola Americana. Každý hraje s každým jako spoluhráč.
 *
 * - Když je hráčů násobek čtyř a kurtů dost, použije se kruhová metoda:
 *   za n−1 kol hraje **každý s každým právě jednou** ve dvojici.
 * - Jinak (málo kurtů, počet hráčů není násobek čtyř) se kola skládají
 *   tak, aby pauzírovali všichni stejně a dvojice ani soupeři se co nejméně
 *   opakovali.
 *
 * @param {string[]} hraci
 * @param {number} kurty kolik kurtů je k dispozici
 * @param {{ kol?: number, seed?: number }} [moznosti]
 * @returns {{ zapasy: { a: string[], b: string[] }[], pauza: string[] }[]}
 */
export function kolaAmericana(hraci, kurty, moznosti = {}) {
  over(hraci, kurty);
  const n = hraci.length;
  const naKurt = Math.min(kurty, Math.floor(n / 4));
  if (n % 4 === 0 && naKurt * 4 === n && (moznosti.kol == null || moznosti.kol <= n - 1)) {
    return kruhova(hraci).slice(0, moznosti.kol ?? n - 1);
  }
  return chamtive(hraci, naKurt, moznosti.kol ?? n - 1, nahoda(moznosti.seed ?? 1));
}

// Kruhová metoda: první hráč stojí, ostatní se točí. V každém kole vznikne
// n/2 dvojic a každá dvojice spoluhráčů se objeví právě jednou.
function kruhova(hraci) {
  const n = hraci.length;
  const kola = [];
  let kolo = hraci.slice(1);
  for (let r = 0; r < n - 1; r++) {
    const rada = [hraci[0], ...kolo];
    const dvojice = [];
    for (let i = 0; i < n / 2; i++) dvojice.push([rada[i], rada[n - 1 - i]]);
    // Soupeři: dvojice se střídají podle kola, ať nehrají pořád stejní proti sobě.
    const posun = r % (n / 2);
    const serazene = dvojice.slice(posun).concat(dvojice.slice(0, posun));
    const zapasy = [];
    for (let i = 0; i < serazene.length; i += 2) zapasy.push({ a: serazene[i], b: serazene[i + 1] });
    kola.push({ zapasy, pauza: [] });
    kolo = [kolo[kolo.length - 1], ...kolo.slice(0, -1)];
  }
  return kola;
}

// Skládání kola po kole: hrají ti, kdo hráli nejméně; rozdělení do zápasů
// s nejmenší cenou (zopakovaný spoluhráč je horší než zopakovaný soupeř).
function chamtive(hraci, naKurt, kol, los) {
  const odehrano = new Map(hraci.map((h) => [h, 0]));
  const spolu = new Map(); // "a|b" → kolikrát spolu
  const proti = new Map();
  const klic = (x, y) => (x < y ? x + '|' + y : y + '|' + x);
  const pocet = (m, x, y) => m.get(klic(x, y)) || 0;
  const kola = [];
  for (let r = 0; r < kol; r++) {
    // Kdo hraje: nejméně odehraných, při shodě náhodně (pevné semínko).
    const poradi = hraci.map((h) => ({ h, o: odehrano.get(h), x: los() }))
      .sort((p, q) => p.o - q.o || p.x - q.x).map((p) => p.h);
    const hraji = poradi.slice(0, naKurt * 4);
    const pauza = poradi.slice(naKurt * 4);
    let nejlepsi = null, cena = Infinity;
    for (let pokus = 0; pokus < 400 && cena > 0; pokus++) {
      const p = zamichej(hraji, los);
      let c = 0;
      for (let i = 0; i < p.length; i += 4) {
        c += 10 * (pocet(spolu, p[i], p[i + 1]) + pocet(spolu, p[i + 2], p[i + 3]));
        for (const x of [p[i], p[i + 1]]) for (const y of [p[i + 2], p[i + 3]]) c += pocet(proti, x, y);
      }
      if (c < cena) { cena = c; nejlepsi = p; }
    }
    const zapasy = [];
    for (let i = 0; i < nejlepsi.length; i += 4) {
      const z = { a: [nejlepsi[i], nejlepsi[i + 1]], b: [nejlepsi[i + 2], nejlepsi[i + 3]] };
      zapasy.push(z);
      for (const [x, y] of [z.a, z.b]) spolu.set(klic(x, y), pocet(spolu, x, y) + 1);
      for (const x of z.a) for (const y of z.b) proti.set(klic(x, y), pocet(proti, x, y) + 1);
    }
    for (const h of hraji) odehrano.set(h, odehrano.get(h) + 1);
    kola.push({ zapasy, pauza: pauza.sort() });
  }
  return kola;
}

/**
 * Další kolo Mexicana: dvojice podle aktuálního pořadí. Ve skupině čtyř
 * hrají 1. a 4. proti 2. a 3. — silní se mezi sebou vyrovnají.
 * Pauzírují ti, kdo odehráli nejvíc (při shodě ti dole v pořadí).
 *
 * @param {string[]} poradi hráči od prvního (1. kolo: podle nasazení)
 * @param {number} kurty
 * @param {Record<string, number>} [odehrano] kolik zápasů kdo odehrál
 */
export function koloMexicana(poradi, kurty, odehrano = {}) {
  over(poradi, kurty);
  const naKurt = Math.min(kurty, Math.floor(poradi.length / 4));
  const pauzaPocet = poradi.length - naKurt * 4;
  const pauza = poradi.map((h, i) => ({ h, i, o: odehrano[h] || 0 }))
    .sort((p, q) => q.o - p.o || q.i - p.i).slice(0, pauzaPocet).map((p) => p.h);
  const hraji = poradi.filter((h) => !pauza.includes(h));
  const zapasy = [];
  for (let i = 0; i < hraji.length; i += 4) {
    zapasy.push({ a: [hraji[i], hraji[i + 3]], b: [hraji[i + 1], hraji[i + 2]] });
  }
  return { zapasy, pauza: pauza.sort() };
}

/**
 * Pořadí hráčů v Americanu a Mexicanu: součet bodů, pak výhry, pak rozdíl
 * bodů. Nerozhodnuto = stejné pořadí (stejné místo).
 *
 * @param {string[]} hraci
 * @param {{ a: string[], b: string[], body?: [number, number] }[]} zapasy jen odehrané mají `body`
 */
export function poradiHracu(hraci, zapasy) {
  const s = new Map(hraci.map((h) => [h, { hrac: h, body: 0, vyhry: 0, rozdil: 0, zapasy: 0 }]));
  for (const z of zapasy) {
    if (!z.body) continue;
    const [ba, bb] = z.body;
    for (const [tym, moje, jejich] of [[z.a, ba, bb], [z.b, bb, ba]]) {
      for (const h of tym) {
        const r = s.get(h);
        if (!r) continue;
        r.body += moje; r.rozdil += moje - jejich; r.zapasy++;
        if (moje > jejich) r.vyhry++;
      }
    }
  }
  const tabulka = [...s.values()].sort((p, q) => q.body - p.body || q.vyhry - p.vyhry || q.rozdil - p.rozdil);
  tabulka.forEach((r, i) => {
    const pred = tabulka[i - 1];
    r.misto = pred && pred.body === r.body && pred.vyhry === r.vyhry && pred.rozdil === r.rozdil ? pred.misto : i + 1;
  });
  return tabulka;
}

function zamichej(pole, los) {
  const p = pole.slice();
  for (let i = p.length - 1; i > 0; i--) {
    const j = Math.floor(los() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return p;
}

function over(hraci, kurty) {
  if (!Array.isArray(hraci) || hraci.length < 4) throw new Error('Americano a Mexicano potřebují aspoň 4 hráče.');
  if (new Set(hraci).size !== hraci.length) throw new Error('Hráč je v seznamu dvakrát.');
  if (!(kurty >= 1)) throw new Error('Potřeba aspoň jeden kurt.');
}
