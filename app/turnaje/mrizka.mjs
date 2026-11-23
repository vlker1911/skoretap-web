// Mřížka rozpisu: kurty × čas. rozhodnuti/058, mřížka — část 1
// (zobrazení, posun ťuknutím, hlídání chyb) a část 2 (tah myší, vlastní
// délka zápasu, přichytávání k sousedům).
//
// Pracuje se zápasy tak, jak je vrací server (fed_zapasy): kurt, kdy
// (plánovaný začátek), zacatek/konec (skutečnost z kurtu), stav, tym_a/tym_b.
// Délka plánovaného zápasu = jeho vlastní délka (delka_min), jinak délka
// z nastavení turnaje.
// Testy: nastroje/turnaje.test.mjs.

/** Krok, na který se zaokrouhlí čas při posunu (minuty). */
export const KROK_MIN = 5;
const MIN = 60000;
const KONCI = new Set(['dohrany', 'ukonceny']);
/** Nejkratší a nejdelší délka zápasu (minuty) — stejně jako server (migrace 025). */
export const DELKA_OD = 5, DELKA_DO = 600;
/** Jak blízko (minuty, ostře méně) se okraj přichytí k sousednímu zápasu.
 *  Víc ne: jinak by nešlo nechat mezi zápasy mezeru o jeden krok. */
export const PRICHYT_MIN = 5;

/** Plánovaná délka zápasu v minutách: vlastní, jinak z nastavení turnaje. */
export function delkaZapasu(z, delkaMin) {
  const vlastni = Number(z && z.delka_min);
  return vlastni >= DELKA_OD ? vlastni : Math.max(1, delkaMin || 0);
}

/**
 * Kdy zápas na kurtu stojí: { od, do } v ms, nebo null bez času.
 * Skutečný čas z kurtu má přednost před plánem. Výsledek zapsaný ručně
 * (začátek = konec, zápas se v aplikaci nehrál) zůstane na plánovaném místě.
 */
export function okno(z, delkaMin, ted = Date.now()) {
  const delka = delkaZapasu(z, delkaMin) * MIN;
  const zac = Date.parse(z.zacatek || '');
  const kon = Date.parse(z.konec || '');
  const skutecny = Number.isFinite(zac) && (z.stav === 'bezi' || (Number.isFinite(kon) && kon - zac >= MIN));
  const kdy = Date.parse(z.kdy || '');
  if (skutecny) {
    // Živý zápas končí v plánovaný čas, dokud se opravdu nepřetáhne — pozdní
    // začátek o pár minut sám o sobě kolizi s dalším zápasem nedělá.
    if (z.stav === 'bezi') return { od: zac, do: Math.max(Number.isFinite(kdy) ? kdy + delka : zac + delka, ted, zac + MIN) };
    return { od: zac, do: kon };
  }
  if (!Number.isFinite(kdy)) return null;
  return { od: kdy, do: kdy + delka };
}

/**
 * Podklad pro kreslení: kurty v pořadí z nastavení (a za nimi kurty, které
 * mají jen zápasy), položky s oknem a zápasy bez času (playoff frontou).
 * Začátek a konec mřížky jsou zaokrouhlené na půlhodiny.
 */
export function mrizka(zapasy, kurty, delkaMin, ted = Date.now()) {
  const nazvy = [...(kurty || [])];
  const polozky = [], bezCasu = [];
  for (const z of zapasy) {
    if (z.stav === 'zruseny') continue;
    if (z.kurt && !nazvy.includes(z.kurt)) nazvy.push(z.kurt);
    const w = okno(z, delkaMin, ted);
    if (w) polozky.push({ z, kurt: z.kurt, od: w.od, do: w.do });
    else bezCasu.push(z);
  }
  if (!polozky.length) return { kurty: nazvy, od: null, do: null, polozky, bezCasu };
  const pul = 30 * MIN;
  const od = Math.floor(Math.min(...polozky.map((p) => p.od)) / pul) * pul;
  const doKdy = Math.ceil(Math.max(...polozky.map((p) => p.do)) / pul) * pul;
  return { kurty: nazvy, od, do: Math.max(doKdy, od + pul), polozky, bezCasu };
}

/** Čas zaokrouhlený na krok (výchozí 5 minut). */
export function zaokrouhli(ms, krokMin = KROK_MIN) {
  const k = krokMin * MIN;
  return Math.round(ms / k) * k;
}

/** Posunout jde jen zápas, který ještě nezačal. */
export function lzePresunout(z) { return !!z && z.stav === 'planovany'; }

/** Zápasy po posunu jednoho z nich (nic se nemění na místě). Délka je nepovinná. */
export function presun(zapasy, cislo, kurt, kdyMs, delkaMin) {
  return zapasy.map((z) => (z.cislo === cislo
    ? { ...z, kurt, kdy: new Date(kdyMs).toISOString(), ...(delkaMin != null ? { delka_min: delkaMin } : {}) }
    : z));
}

/**
 * Kam zápas dopadne při tahu myší. Okraje se přichytí k sousedním zápasům
 * na stejném kurtu (začátek na konec předchozího, konec na začátek dalšího,
 * obojí s mezerou = přestávka turnaje), když jsou blíž než PRICHYT_MIN;
 * jinak se čas zaokrouhlí na KROK_MIN.
 * @param {'posun'|'zacatek'|'konec'} co — co se táhne: celý zápas, nebo okraj
 * @param {{od:number, do:number}} puvodni — okno zápasu před tahem
 * @param {number} posunMs — o kolik se myš posunula
 * @param {{od:number, do:number}[]} sousede — okna ostatních zápasů na cílovém kurtu
 * @param {number} mezeraMin — přestávka mezi zápasy (přichytí se s ní)
 * @returns {{ od:number, delkaMin:number, prichyceno:boolean }}
 */
export function tah(co, puvodni, posunMs, sousede = [], mezeraMin = 0) {
  const lim = PRICHYT_MIN * MIN, mezera = Math.max(0, mezeraMin || 0) * MIN;
  const konce = sousede.map((w) => w.do + mezera), zacatky = sousede.map((w) => w.od - mezera);
  const nejblizsi = (t, kde) => {
    let best = null;
    for (const k of kde) if (Math.abs(k - t) < lim && (best == null || Math.abs(k - t) < Math.abs(best - t))) best = k;
    return best;
  };
  const omez = (d) => Math.min(DELKA_DO, Math.max(DELKA_OD, d));
  if (co === 'posun') {
    const delka = puvodni.do - puvodni.od;
    const od = puvodni.od + posunMs, konec = od + delka;
    const kOd = nejblizsi(od, konce), kDo = nejblizsi(konec, zacatky);
    let nove = null;
    if (kOd != null && (kDo == null || Math.abs(kOd - od) <= Math.abs(kDo - konec))) nove = kOd;
    else if (kDo != null) nove = kDo - delka;
    return { od: nove != null ? nove : zaokrouhli(od), delkaMin: Math.round(delka / MIN), prichyceno: nove != null };
  }
  if (co === 'konec') {
    const konec = puvodni.do + posunMs;
    const k = nejblizsi(konec, zacatky);
    const d = omez(Math.round(((k != null ? k : zaokrouhli(konec)) - puvodni.od) / MIN));
    return { od: puvodni.od, delkaMin: d, prichyceno: k != null && puvodni.od + d * MIN === k };
  }
  // začátek: konec zůstává, mění se začátek i délka
  const od = puvodni.od + posunMs;
  const k = nejblizsi(od, konce);
  const d = omez(Math.round((puvodni.do - (k != null ? k : zaokrouhli(od))) / MIN));
  return { od: puvodni.do - d * MIN, delkaMin: d, prichyceno: k != null && puvodni.do - d * MIN === k };
}

/** Hráči zápasu podle jména (malými písmeny), pro hledání kolizí. */
export function hraciZapasu(z) {
  return [...(z.tym_a || []), ...(z.tym_b || [])]
    .map((h) => String((h && (h.jmeno || h.cislo)) || '').trim().toLowerCase())
    .filter(Boolean);
}

/** Okno { od, do } v ms z { od, do } v ISO (chybějící okraj = bez omezení). */
function oknoZIso(x) {
  const od = Date.parse((x && x.od) || ''), dO = Date.parse((x && x.do) || '');
  return { od: Number.isFinite(od) ? od : -Infinity, do: Number.isFinite(dO) ? dO : Infinity };
}

/**
 * Chyby v rozpisu:
 *   kurt    — dva zápasy na stejném kurtu ve stejnou dobu,
 *   hrac    — hráč má ve stejnou dobu dva zápasy,
 *   pauza   — hráč má mezi zápasy kratší pauzu, než je přestávka turnaje
 *             (jen když turnaj nějakou přestávku má),
 *   zavreno — nezačatý zápas mimo dobu, kdy je kurt volný (omezeni.kurty),
 *   prani   — nezačatý zápas mimo čas, kdy hráč může (omezeni.prani,
 *             klíč = jméno malými písmeny).
 * Dvojice dvou už dohraných zápasů se nehlásí — to je minulost.
 * @param {{ kurty?: Object<string,{od?:string,do?:string}>, prani?: Object<string,{od?:string,do?:string}> }} omezeni
 * @returns {{ typ: 'kurt'|'hrac'|'pauza'|'zavreno'|'prani', a: string, b: string, kurt?: string, hraci?: string[], od: number, do: number }[]}
 */
export function kolize(zapasy, delkaMin, prestavkaMin = 0, ted = Date.now(), omezeni = {}) {
  const s = zapasy
    .filter((z) => z.stav !== 'zruseny')
    .map((z) => ({ z, w: okno(z, delkaMin, ted), hraci: hraciZapasu(z) }))
    .filter((x) => x.w)
    .sort((p, q) => p.w.od - q.w.od);
  const ven = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const a = s[i], b = s[j];
      if (KONCI.has(a.z.stav) && KONCI.has(b.z.stav)) continue;
      const prekryv = a.w.od < b.w.do && b.w.od < a.w.do;
      const spolu = { a: a.z.cislo, b: b.z.cislo, od: Math.max(a.w.od, b.w.od), do: Math.min(a.w.do, b.w.do) };
      if (prekryv && a.z.kurt && a.z.kurt === b.z.kurt) ven.push({ typ: 'kurt', kurt: a.z.kurt, ...spolu });
      const hraci = a.hraci.filter((h) => b.hraci.includes(h));
      if (!hraci.length) continue;
      if (prekryv) ven.push({ typ: 'hrac', hraci, ...spolu });
      else if (prestavkaMin > 0 && b.w.od - a.w.do < prestavkaMin * MIN) ven.push({ typ: 'pauza', hraci, ...spolu, od: a.w.do, do: b.w.od });
    }
  }
  // Omezení platí pro to, co se teprve hraje: kurt zavřený, hráč nemůže.
  for (const x of s) {
    if (x.z.stav !== 'planovany') continue;
    const hod = omezeni.kurty && x.z.kurt && omezeni.kurty[x.z.kurt];
    if (hod) {
      const o = oknoZIso(hod);
      if (x.w.od < o.od || x.w.do > o.do) ven.push({ typ: 'zavreno', kurt: x.z.kurt, a: x.z.cislo, b: x.z.cislo, od: x.w.od, do: x.w.do });
    }
    const mimo = x.hraci.filter((h) => {
      const p = omezeni.prani && omezeni.prani[h];
      if (!p) return false;
      const o = oknoZIso(p);
      return x.w.od < o.od || x.w.do > o.do;
    });
    if (mimo.length) ven.push({ typ: 'prani', hraci: mimo, a: x.z.cislo, b: x.z.cislo, od: x.w.od, do: x.w.do });
  }
  return ven;
}

/**
 * Návrh nanečisto: změny { cislo → { kurt, kdy, delka? } } přes zápasy ze
 * serveru. Změna u zápasu, který mezitím začal, se nepoužije (a vrátí se
 * mezi neplatnými, ať je stránka může zahodit).
 */
export function sNavrhem(zapasy, navrh) {
  const neplatne = [];
  const ven = zapasy.map((z) => {
    const n = navrh && navrh[z.cislo];
    if (!n) return z;
    if (!lzePresunout(z)) { neplatne.push(z.cislo); return z; }
    return { ...z, kurt: n.kurt, kdy: n.kdy, ...(n.delka != null ? { delka_min: n.delka } : {}), nanecisto: true };
  });
  for (const c of Object.keys(navrh || {})) if (!zapasy.some((z) => z.cislo === c)) neplatne.push(c);
  return { zapasy: ven, neplatne };
}

/** Kolize, které se týkají jednoho zápasu (pro dotaz před posunem). */
export function kolizeZapasu(vse, cislo) {
  return vse.filter((k) => k.a === cislo || k.b === cislo);
}
