// Vyřazovací pavouk — nasazení, volné losy, postup ze skupin, další kola.
// rozhodnuti/058, krok 1. Napsáno znovu podle běžného tenisového pavouka:
// nasazení 1 a 2 se mohou potkat až ve finále, 1–4 až v semifinále…
// volné losy dostanou nejvýš nasazení.

/**
 * Pořadí nasazených na pozicích pavouka velikosti 2^k (1-based).
 * Pro 8: [1, 8, 4, 5, 2, 7, 3, 6] — první kolo 1–8, 4–5, 2–7, 3–6.
 */
export function poziceNasazenych(velikost) {
  if (velikost < 2 || (velikost & (velikost - 1)) !== 0) throw new Error('Velikost pavouka musí být mocnina dvou.');
  let p = [1, 2];
  while (p.length < velikost) {
    const n = p.length * 2;
    p = p.flatMap((s) => [s, n + 1 - s]);
  }
  return p;
}

/** Nejmenší mocnina dvou, do které se vejde `pocet` týmů. */
export function velikostPavouka(pocet) {
  let v = 2;
  while (v < pocet) v *= 2;
  return v;
}

/**
 * Pavouk z týmů seřazených podle nasazení. Kdo se nevejde do plného
 * pavouka, toho soupeř je volný los (null) — dostanou ho nejvýš nasazení.
 *
 * @param {string[]} nasazeni
 * @returns {(string|null)[]} pozice prvního kola, po dvou je zápas
 */
export function pavoukZNasazeni(nasazeni) {
  if (nasazeni.length < 2) throw new Error('Pavouk potřebuje aspoň 2 týmy.');
  const v = velikostPavouka(nasazeni.length);
  return poziceNasazenych(v).map((s) => nasazeni[s - 1] ?? null);
}

/**
 * Pavouk z výsledků skupin. Vítězové skupin se nasadí jako první; další
 * postupující se rozmístí tak, aby **v prvním kole nehráli proti týmu ze
 * své skupiny** a pokud to jde, byli v jiné polovině než vítěz své skupiny.
 *
 * @param {string[][]} poradiSkupin pro každou skupinu týmy od 1. místa
 * @param {number} postupuje kolik z každé skupiny
 * @returns {(string|null)[]}
 */
export function pavoukZeSkupin(poradiSkupin, postupuje) {
  const postupujici = [];
  for (let m = 0; m < postupuje; m++) {
    poradiSkupin.forEach((sk, g) => { if (sk[m] != null) postupujici.push({ tym: sk[m], skupina: g, misto: m }); });
  }
  const v = velikostPavouka(postupujici.length);
  const pozice = poziceNasazenych(v);
  const sloty = new Array(v).fill(null);
  const vitezove = postupujici.filter((p) => p.misto === 0);
  // Vítězové skupin na místa nasazených 1, 2, 3…
  vitezove.forEach((p, i) => { sloty[pozice.indexOf(i + 1)] = p; });
  // Ostatní: volná místa obsazovat od nejvyššího nasazení dolů, ale tak,
  // aby nešli na kolegu ze skupiny. Hledá se s návratem (backtracking).
  const ostatni = postupujici.filter((p) => p.misto > 0);
  const volna = pozice.map((s, i) => ({ s, i })).filter(({ i }) => !sloty[i])
    .sort((x, y) => x.s - y.s).map(({ i }) => i).slice(0, ostatni.length);
  const polovina = (i) => (i < v / 2 ? 0 : 1);
  const cena = (p, i) => {
    const soused = sloty[i ^ 1];
    if (soused && soused.skupina === p.skupina) return 100; // stejná skupina v 1. kole
    const muj = sloty.findIndex((x) => x && x.skupina === p.skupina && x.misto === 0);
    return muj >= 0 && polovina(muj) === polovina(i) ? 1 : 0; // stejná polovina jako vítěz
  };
  let nejlepsi = null, nejCena = Infinity;
  const prirad = (k, celkem) => {
    if (celkem >= nejCena) return;
    if (k === ostatni.length) { nejCena = celkem; nejlepsi = sloty.slice(); return; }
    for (const i of volna) {
      if (sloty[i]) continue;
      const c = cena(ostatni[k], i);
      sloty[i] = ostatni[k];
      prirad(k + 1, celkem + c);
      sloty[i] = null;
      if (nejCena === 0) return;
    }
  };
  prirad(0, 0);
  return (nejlepsi || sloty).map((p) => (p ? p.tym : null));
}

/**
 * Celý pavouk podle výsledků: kola od prvního po finále. Volný los postoupí
 * sám. Zápas, kde zatím chybí soupeř nebo výsledek, má `vitez: null`.
 *
 * @param {(string|null)[]} prvniKolo pozice, po dvou je zápas
 * @param {Record<string, 0|1>} vysledky „kolo-zapas" (od 0) → vítěz 0 = a, 1 = b
 * @returns {{ a: string|null, b: string|null, vitez: string|null, volny: boolean, klic: string }[][]}
 */
export function stavPavouka(prvniKolo, vysledky = {}) {
  const kola = [];
  let ucastnici = prvniKolo;
  let k = 0;
  while (ucastnici.length >= 2) {
    const kolo = [];
    for (let i = 0; i < ucastnici.length; i += 2) {
      const a = ucastnici[i], b = ucastnici[i + 1];
      const klic = k + '-' + i / 2;
      // Volný los jen v prvním kole; dál je null „soupeř ještě není znám".
      const volny = k === 0 && (a === null || b === null) && (a !== null || b !== null);
      let vitez = null;
      if (volny) vitez = a ?? b;
      else if (a !== null && b !== null && (vysledky[klic] === 0 || vysledky[klic] === 1)) vitez = vysledky[klic] === 0 ? a : b;
      kolo.push({ a, b, vitez, volny, klic });
    }
    kola.push(kolo);
    ucastnici = kolo.map((z) => z.vitez);
    k++;
  }
  return kola;
}
