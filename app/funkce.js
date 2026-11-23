// Funkce, které jsou postavené, ale zapnou se až spolu s něčím mimo kód.
//
// UPOZORNENI_HRACUM (rozhodnuti/059): e-maily o změně rozpisu (přepínač
// v účtu) a „kdy můžu hrát" při přihlášce do turnaje. Zapne se ve chvíli,
// kdy je v Supabase heslo schránky u Wedosu (Vault, 'smtp_heslo') a na webu text
// v zásadách (obchod/navrh-soukromi-upozorneni.md). Server je hotový;
// bez hesla nic neposílá.
export const UPOZORNENI_HRACUM = false;
