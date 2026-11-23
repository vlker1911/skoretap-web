// Rozpis po kurtech s časy. rozhodnuti/058, krok 1.
//
// Kola jdou po sobě. Zápasy kola se rozdělí na kurty; když je zápasů víc
// než kurtů, zbytek jde do dalšího bloku. Hráč nikdy nehraje dva zápasy
// ve stejném bloku — kolo jde vždycky celé, než začne další.

/**
 * @param {{ zapasy: object[] }[]} kola
 * @param {string[]} kurty názvy kurtů („1", „2", „Centrál"…)
 * @param {{ zacatek: number, delkaMin: number, prestavkaMin?: number }} cas
 *   začátek v ms, délka zápasu a přestávka mezi bloky v minutách
 * @returns {{ kolo: number, zapas: number, kurt: string, kdy: number }[]}
 */
export function rozpis(kola, kurty, cas) {
  if (!kurty.length) throw new Error('Potřeba aspoň jeden kurt.');
  if (!(cas.delkaMin > 0)) throw new Error('Délka zápasu musí být víc než 0 minut.');
  const krok = (cas.delkaMin + (cas.prestavkaMin || 0)) * 60000;
  const vysledek = [];
  let blok = 0;
  kola.forEach((kolo, k) => {
    kolo.zapasy.forEach((_, i) => {
      vysledek.push({
        kolo: k, zapas: i,
        kurt: kurty[i % kurty.length],
        kdy: cas.zacatek + (blok + Math.floor(i / kurty.length)) * krok,
      });
    });
    blok += Math.max(1, Math.ceil(kolo.zapasy.length / kurty.length));
  });
  return vysledek;
}

/** Kolik minut turnaj potrvá podle rozpisu (od začátku do konce posledního zápasu). */
export function delkaTurnaje(kola, pocetKurtu, delkaMin, prestavkaMin = 0) {
  const bloky = kola.reduce((s, k) => s + Math.max(1, Math.ceil(k.zapasy.length / pocetKurtu)), 0);
  return bloky * delkaMin + Math.max(0, bloky - 1) * prestavkaMin;
}
