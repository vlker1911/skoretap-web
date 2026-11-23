// Startovné: QR platba přímo pořadateli. rozhodnuti/058, krok 6.
//
// Skoretap peníze nedrží ani nepřevádí — hráč platí ze své banky rovnou na
// účet pořadatele. Tady se jen skládá text QR kódu, který banka přečte:
//   - CZK: česká „QR Platba" (SPAYD 1.0, standard České bankovní asociace),
//   - EUR: evropský EPC QR (SEPA Credit Transfer, „GiroCode").
// Variabilní symbol = číslo přihlášky, aby pořadatel platbu spároval.
// Testy: nastroje/turnaje.test.mjs.

/** IBAN bez mezer a velkými písmeny. */
export function cistyIban(iban) {
  return String(iban || '').replace(/\s+/g, '').toUpperCase();
}

/** Platný IBAN podle kontrolního součtu (mod 97 = 1). */
export function platnyIban(iban) {
  const i = cistyIban(iban);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(i)) return false;
  const preskupeny = i.slice(4) + i.slice(0, 4);
  let zbytek = 0;
  for (const z of preskupeny) {
    const c = /\d/.test(z) ? z : String(z.charCodeAt(0) - 55);
    for (const cislice of c) zbytek = (zbytek * 10 + Number(cislice)) % 97;
  }
  return zbytek === 1;
}

/** IBAN po čtveřicích pro čtení člověkem. */
export function hezkyIban(iban) {
  return cistyIban(iban).replace(/(.{4})/g, '$1 ').trim();
}

// Texty v QR bez diakritiky: ne každá banka ji v QR přečte a knihovna na
// kreslení QR (qrcodejs) s ní špatně spočítá velikost kódu („code length
// overflow", nalezeno 23. 11. 2026 při zkoušce s názvem „Páteční turnaj").
const bezDiakritiky = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\x20-\x7E]/g, '');
// SPAYD nesmí obsahovat „*" (oddělovač); text zprávy se zkrátí a zbaví hvězdiček.
const spaydText = (s, max) => bezDiakritiky(s).replace(/\*/g, ' ').slice(0, max);

/**
 * Text QR kódu. Vrací null, když platbu nejde složit (špatný IBAN, částka).
 * @param {{ iban: string, castka: number, mena: 'CZK'|'EUR', vs?: number|string, zprava?: string, prijemce?: string }} p
 */
export function qrPlatby(p) {
  const iban = cistyIban(p.iban);
  if (!platnyIban(iban) || !(p.castka > 0) || p.castka > 999999) return null;
  const castka = (Math.round(p.castka * 100) / 100).toFixed(2);
  if (p.mena === 'CZK') {
    const casti = ['SPD', '1.0', 'ACC:' + iban, 'AM:' + castka, 'CC:CZK'];
    if (p.vs) casti.push('X-VS:' + String(p.vs).replace(/\D/g, '').slice(0, 10));
    if (p.zprava) casti.push('MSG:' + spaydText(p.zprava, 60));
    if (p.prijemce) casti.push('RN:' + spaydText(p.prijemce, 35));
    return casti.join('*');
  }
  if (p.mena === 'EUR') {
    // EPC069-12: řádky v pevném pořadí; BIC smí být prázdný (verze 002).
    const zprava = bezDiakritiky([p.vs ? 'VS ' + p.vs : '', p.zprava || ''].filter(Boolean).join(' ')).slice(0, 140);
    return ['BCD', '002', '1', 'SCT', '', bezDiakritiky(p.prijemce).slice(0, 70), iban, 'EUR' + castka, '', '', zprava].join('\n');
  }
  return null;
}
