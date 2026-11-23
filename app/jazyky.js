// Jazyky webu skoretap.com — stejných 26 jako v aplikaci (JazykyAplikace.kt).
//
// Čeština a angličtina jsou přímo ve stránkách. Ostatní jazyky jsou
// v texty/<kód>.json jako slovník „anglická věta → překlad". Klíčem je
// anglický text, ne pořadí ani jméno: když se anglická věta na stránce
// změní a překlad ještě není, ukáže se anglicky — nic se nerozbije.
// Co chybí, vypíše `node nastroje/web-texty.mjs`. (Roman 12. 11. 2026:
// „můžeme zkusit vícejazyčnost?")
//
// Soubor leží v app/, aby ho webová aplikace měla i bez signálu.

export var JAZYKY = [
  ['cs', 'Čeština'], ['en', 'English'], ['de', 'Deutsch'], ['es', 'Español'],
  ['fr', 'Français'], ['it', 'Italiano'], ['pt', 'Português'], ['nl', 'Nederlands'],
  ['sv', 'Svenska'], ['da', 'Dansk'], ['nb', 'Norsk'], ['fi', 'Suomi'],
  ['pl', 'Polski'], ['sk', 'Slovenčina'], ['hu', 'Magyar'], ['ro', 'Română'],
  ['hr', 'Hrvatski'], ['sl', 'Slovenščina'], ['el', 'Ελληνικά'], ['tr', 'Türkçe'],
  ['uk', 'Українська'], ['ar', 'العربية'], ['ja', '日本語'], ['zh', '中文'],
  ['id', 'Bahasa Indonesia'], ['ru', 'Русский'],
];

function znamy(k) { return JAZYKY.some(function (j) { return j[0] === k; }); }

// Kód z prohlížeče: „pt-BR" → pt, Android „in" → id, „no" → nb.
function kodZ(tag) {
  var k = String(tag || '').toLowerCase().split('-')[0];
  if (k === 'in') return 'id';
  if (k === 'no' || k === 'nn') return 'nb';
  return k;
}

// Jazyk: z adresy (?lang=de), z minulé volby, z prohlížeče, jinak anglicky.
export function zvolenyJazyk() {
  var v = null;
  try { v = new URLSearchParams(location.search).get('lang'); } catch (e) { /* stará adresa */ }
  if (!v) { try { v = localStorage.getItem('skoretap.jazyk'); } catch (e) { /* bez paměti */ } }
  if (v && znamy(kodZ(v))) return kodZ(v);
  var seznam = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
  for (var i = 0; i < seznam.length; i++) { if (znamy(kodZ(seznam[i]))) return kodZ(seznam[i]); }
  return 'en';
}

export function ulozJazyk(k) {
  try { localStorage.setItem('skoretap.jazyk', k); } catch (e) { /* bez paměti */ }
}

// Pro data a časy: „de" → de-DE by si prohlížeč domyslel sám, jen
// angličtina má být britská (24 h, den před měsícem) a čeština česká.
export function mistni(k) { return k === 'en' ? 'en-GB' : k === 'cs' ? 'cs-CZ' : k; }

// Slovník pro jazyk mimo češtinu a angličtinu, nebo null. `zaklad` je cesta
// ke složce app/ z dané stránky ('' v app/, 'app/' v kořeni webu).
export async function nactiSlovnik(k, zaklad) {
  if (k === 'cs' || k === 'en' || !znamy(k)) return null;
  try {
    var odp = await fetch((zaklad || '') + 'texty/' + k + '.json');
    return odp.ok ? await odp.json() : null;
  } catch (e) { return null; }
}

// Přeloží každý text v objektu (i vnořeném); co ve slovníku není, zůstane.
export function preloz(obj, slovnik) {
  if (!slovnik) return obj;
  if (typeof obj === 'string') {
    var klic = obj.replace(/\s+/g, ' ').trim();
    return Object.prototype.hasOwnProperty.call(slovnik, klic) ? slovnik[klic] : obj;
  }
  if (Array.isArray(obj)) return obj.map(function (x) { return preloz(x, slovnik); });
  if (obj && typeof obj === 'object') {
    var ven = {};
    Object.keys(obj).forEach(function (k) { ven[k] = preloz(obj[k], slovnik); });
    return ven;
  }
  return obj;
}

// Stránka s dvojicemi <span lang="cs">/<span lang="en">: ukáže se anglická
// část a její obsah se nahradí překladem. Klíč je obsah sjednocený na
// mezery, stejně jako v nastroje/web-texty.mjs. Vrací, kolik se nenašlo.
export function prelozStranku(k, slovnik) {
  var h = document.documentElement;
  h.lang = k;
  h.dir = k === 'ar' ? 'rtl' : 'ltr';
  if (!slovnik) return 0;
  var chybi = 0;
  document.querySelectorAll('[lang="en"]').forEach(function (e) {
    if (e === h) return;
    var klic = e.innerHTML.replace(/\s+/g, ' ').trim();
    if (Object.prototype.hasOwnProperty.call(slovnik, klic)) {
      e.innerHTML = slovnik[klic];
      e.setAttribute('lang', k);
      e.setAttribute('data-preklad', '');
    } else {
      chybi++;
    }
  });
  return chybi;
}

// Jak jazyk lidi znají z vlajek a domén: CZ, ne CS; UA, ne UK. (Jako v aplikaci.)
export function zkratka(k) { return k === 'cs' ? 'CZ' : k === 'uk' ? 'UA' : k.toUpperCase(); }

// Výběr jazyka: na tlačítku jen zkratka („CZ ▾"), po ťuknutí seznam se
// jménem jazyka v něm samém („Polski", ne „polština") — jako v aplikaci.
// Je to obyčejný <select> položený průhledně přes tlačítko, takže na
// telefonu se otevře systémový seznam. Po změně se stránka načte znovu.
export function vyberJazyka(obal, k) {
  if (!document.getElementById('jazyky-styl')) {
    var st = document.createElement('style');
    st.id = 'jazyky-styl';
    st.textContent = '.vyber-jazyka{position:relative;display:inline-flex;align-items:center;gap:4px}'
      + '.vyber-jazyka select{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;font-size:16px}';
    document.head.appendChild(st);
  }
  obal.classList.add('vyber-jazyka');
  obal.textContent = '';
  obal.appendChild(document.createTextNode(zkratka(k) + ' ▾'));
  var select = document.createElement('select');
  select.setAttribute('aria-label', 'Jazyk / Language');
  JAZYKY.forEach(function (j) {
    var o = document.createElement('option');
    o.value = j[0];
    o.textContent = j[1];
    if (j[0] === k) o.selected = true;
    select.appendChild(o);
  });
  obal.appendChild(select);
  select.onchange = function () {
    ulozJazyk(select.value);
    // Jazyk z adresy by volbu přebil — odstraní se.
    var u = new URL(location.href);
    u.searchParams.delete('lang');
    location.replace(u.toString());
  };
}
