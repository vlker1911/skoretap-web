// Každý s každým a skupiny — los, rozdělení do skupin a pořadí.
// rozhodnuti/058, krok 1. Napsáno znovu podle běžných sportovních postupů
// (kruhová metoda, rozdělení „hadem" podle nasazení).
//
// Tým = pevná dvojice (id jako text). Výsledek zápasu jsou sety jako ve
// Skoretapu: [[6,4],[3,6],[10,8]]; set nad 7 gemů je super tie-break.

/**
 * Každý s každým: kola, ve kterých hraje každý tým nejvýš jednou.
 * Lichý počet = v každém kole jeden tým stojí.
 *
 * @param {string[]} tymy
 * @returns {{ zapasy: { a: string, b: string }[], pauza: string[] }[]}
 */
export function kolaKazdySKazdym(tymy) {
  if (!Array.isArray(tymy) || tymy.length < 2) throw new Error('Potřeba aspoň 2 týmy.');
  if (new Set(tymy).size !== tymy.length) throw new Error('Tým je v seznamu dvakrát.');
  const t = tymy.length % 2 ? [...tymy, null] : tymy.slice();
  const n = t.length;
  const kola = [];
  let tocit = t.slice(1);
  for (let r = 0; r < n - 1; r++) {
    const rada = [t[0], ...tocit];
    const zapasy = [], pauza = [];
    for (let i = 0; i < n / 2; i++) {
      let a = rada[i], b = rada[n - 1 - i];
      if (a === null || b === null) { pauza.push(a ?? b); continue; }
      // Střídat, kdo je „doma", ať první tým není pořád vlevo.
      if (r % 2 === 1 && i === 0) [a, b] = [b, a];
      zapasy.push({ a, b });
    }
    kola.push({ zapasy, pauza });
    tocit = [tocit[tocit.length - 1], ...tocit.slice(0, -1)];
  }
  return kola;
}

/**
 * Rozdělení do skupin „hadem": nasazení 1, 2, 3, 4 jdou do skupin A, B, C, D,
 * nasazení 5–8 zpátky D, C, B, A. Silní se tak rozloží rovnoměrně.
 *
 * @param {string[]} tymy podle nasazení, první je nejsilnější
 * @param {number} pocetSkupin
 * @returns {string[][]}
 */
export function rozdelDoSkupin(tymy, pocetSkupin) {
  if (!(pocetSkupin >= 1) || tymy.length < pocetSkupin * 2) throw new Error('Do každé skupiny patří aspoň 2 týmy.');
  const skupiny = Array.from({ length: pocetSkupin }, () => []);
  tymy.forEach((t, i) => {
    const vlna = Math.floor(i / pocetSkupin), pozice = i % pocetSkupin;
    skupiny[vlna % 2 === 0 ? pozice : pocetSkupin - 1 - pozice].push(t);
  });
  return skupiny;
}

/** Je set super tie-break? (gemů víc než 7 — v běžném setu nejvýš 7:6) */
export function jeSuperTieBreak(set) { return Math.max(set[0], set[1]) > 7; }

/**
 * Kdo vyhrál zápas podle setů: 0 = A, 1 = B, null = nedohráno / nerozhodně.
 * @param {number[][]} sety
 */
export function vitez(sety) {
  let a = 0, b = 0;
  for (const s of sety || []) { if (s[0] > s[1]) a++; else if (s[1] > s[0]) b++; }
  return a > b ? 0 : b > a ? 1 : null;
}

/**
 * Pořadí ve skupině. Kritéria v tomhle pořadí (výchozí, pořadatel může změnit):
 * 1. výhry, 2. vzájemný zápas (jen když jsou na stejném počtu výher dva),
 * 3. rozdíl setů, 4. rozdíl gemů (super tie-break = jeden gem), 5. nasazení.
 *
 * Ukončený zápas (skreč, nenastoupení) se počítá jako výhra soupeře; jeho
 * sety se do rozdílů nepočítají, jen výhra.
 *
 * @param {string[]} tymy podle nasazení
 * @param {{ a: string, b: string, sety?: number[][], vitez?: 0|1 }[]} zapasy
 */
export function poradiSkupiny(tymy, zapasy) {
  const s = new Map(tymy.map((t, i) => [t, { tym: t, nasazeni: i, zapasy: 0, vyhry: 0, sety: 0, gemy: 0 }]));
  const odehrane = zapasy.filter((z) => s.has(z.a) && s.has(z.b) && (z.vitez === 0 || z.vitez === 1 || vitez(z.sety) !== null));
  for (const z of odehrane) {
    const v = z.vitez ?? vitez(z.sety);
    const A = s.get(z.a), B = s.get(z.b);
    A.zapasy++; B.zapasy++;
    (v === 0 ? A : B).vyhry++;
    if (z.vitez == null) {
      for (const set of z.sety) {
        const [ga, gb] = jeSuperTieBreak(set) ? (set[0] > set[1] ? [1, 0] : [0, 1]) : set;
        A.gemy += ga - gb; B.gemy += gb - ga;
        if (set[0] > set[1]) { A.sety++; B.sety--; } else if (set[1] > set[0]) { B.sety++; A.sety--; }
      }
    }
  }
  const vzajemny = (x, y) => {
    const z = odehrane.find((z) => (z.a === x && z.b === y) || (z.a === y && z.b === x));
    if (!z) return 0;
    const v = z.vitez ?? vitez(z.sety);
    const vyhralX = (z.a === x && v === 0) || (z.b === x && v === 1);
    return vyhralX ? -1 : 1;
  };
  const tab = [...s.values()];
  tab.sort((p, q) => {
    if (q.vyhry !== p.vyhry) return q.vyhry - p.vyhry;
    const stejne = tab.filter((r) => r.vyhry === p.vyhry).length;
    if (stejne === 2) { const v = vzajemny(p.tym, q.tym); if (v) return v; }
    return q.sety - p.sety || q.gemy - p.gemy || p.nasazeni - q.nasazeni;
  });
  tab.forEach((r, i) => { r.misto = i + 1; });
  return tab;
}
