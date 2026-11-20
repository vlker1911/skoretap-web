// Přihlášení na skoretap.com — společné pro Můj účet (ucet.html) a webovou
// verzi (app/), 17. 11. 2026. Relace leží jen v tomhle prohlížeči
// (localStorage), obnovuje se sama. Rozhodnutí 051.
//
// Veřejný klíč aplikace je veřejný schválně (jde i v aplikaci), sám nic
// neotevře; data hlídá databáze (RLS).
export var SERVER = 'https://pvnajakrgtbzbuqxjecx.supabase.co';
export var KLIC = 'sb_publishable_F83Okmt0lTt-6-xjRm2GJg_AbPUGTJH';
var ULOZISTE = 'skoretap.ucet';

export function relace() { try { return JSON.parse(localStorage.getItem(ULOZISTE) || 'null'); } catch (e) { return null; } }
export function ulozRelaci(r) {
  try {
    if (r) localStorage.setItem(ULOZISTE, JSON.stringify(r));
    else { localStorage.removeItem(ULOZISTE); localStorage.removeItem('skoretap.jmeno'); }
  } catch (e) { /* bez paměti */ }
}

// Platný přístupový klíč, nebo null (nepřihlášený). Bez signálu vyhodí
// chybu — relace se tím nesmaže, smaže ji jen odmítnutí serverem.
export async function platnyPristup() {
  var r = relace();
  if (!r) return null;
  if (r.platiDo - 60000 > Date.now()) return r.pristup;
  var odp = await fetch(SERVER + '/auth/v1/token?grant_type=refresh_token', {
    method: 'POST', headers: { apikey: KLIC, 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: r.obnova })
  });
  if (!odp.ok) { ulozRelaci(null); return null; }
  var d = await odp.json();
  ulozRelaci({ pristup: d.access_token, obnova: d.refresh_token, platiDo: Date.now() + (d.expires_in || 3600) * 1000 });
  return d.access_token;
}

// Volání funkce v databázi jako přihlášený. Vrací odpověď jako JSON.
export async function rpc(funkce, telo) {
  var pristup = await platnyPristup();
  if (!pristup) throw new Error('odhlasen');
  var odp = await fetch(SERVER + '/rest/v1/rpc/' + funkce, {
    method: 'POST',
    headers: { apikey: KLIC, Authorization: 'Bearer ' + pristup, 'Content-Type': 'application/json' },
    body: JSON.stringify(telo)
  });
  if (odp.status === 401) { ulozRelaci(null); throw new Error('odhlasen'); }
  if (!odp.ok) throw new Error('chyba ' + odp.status);
  var text = await odp.text();
  return text ? JSON.parse(text) : null;
}
