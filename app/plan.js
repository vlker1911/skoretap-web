// Naplánovaný zápas ve webové verzi (rozhodnuti/054, verze A, 20. 11. 2026).
//
// Web umí jen to, co potřebuje hráč s iPhonem: vidět „Co tě čeká",
// přijmout nebo odmítnout pozvánku, připojit se kódem nebo z odkazu
// (skoretap.com/z.html?k=…) a sledovat živé skóre. Zápas plánuje a skóre
// zapisuje aplikace pro Android — tady se nic nepočítá ani nezapisuje.
//
// Všechno jde přes funkce v databázi (migrace 017); kdo není účastník,
// nic nedostane.
import { rpc } from './ucet.js';

function el(tag, trida, text) {
  var e = document.createElement(tag);
  if (trida) e.className = trida;
  if (text != null) e.textContent = text;
  return e;
}

/** Kód z odkazu, z QR nebo napsaný rukou (8 znaků), jinak null. Jako Plany.kodZ v aplikaci. */
export function kodZ(text) {
  var t = String(text || '').trim();
  var m = /[?&#]k=([A-Za-z0-9]+)/.exec(t) || /[#&]z=([A-Za-z0-9]+)/.exec(t);
  var kod = (m ? m[1] : t).toUpperCase().replace(/[^A-Z0-9]/g, '');
  return kod.length === 8 ? kod : null;
}

function kdy(iso, jaz) {
  try {
    return new Date(iso).toLocaleString(jaz, { weekday: 'short', day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch (e) { return String(iso); }
}

function kde(z, T) {
  return [z.misto, z.kurt ? T.plKurt.replace('{c}', z.kurt) : ''].filter(Boolean).join(' · ');
}

function jmenaTymu(mista, tym) {
  return (mista || []).filter(function (m) { return m.tym === tym; })
    .sort(function (a, b) { return a.pozice - b.pozice; })
    .map(function (m) { return m.obsazeno ? (m.jmeno || '?') : '–'; }).join(', ');
}

function cekaNaMe(z) {
  var ja = (z.mista || []).filter(function (m) { return m.ja; })[0];
  return !!ja && !ja.potvrzeno && z.stav === 'planovany';
}

/**
 * „Co tě čeká" na úvodu. Kreslí do [kam]; bez signálu nechá, co tam bylo.
 * [sledovat](id) otevře živé skóre, [pripojit]() okno s kódem.
 */
export async function kresliCoTeCeka(kam, T, jaz, sledovat, pripojit) {
  var seznam;
  try { seznam = await rpc('napl_moje', {}); } catch (e) { return 0; }
  kam.textContent = '';
  var aktivni = (seznam || []).filter(function (z) { return z.stav === 'planovany' || z.stav === 'bezi'; });
  kam.appendChild(el('h2', '', T.plCoTeCeka));
  aktivni.forEach(function (z) {
    var k = el('div', 'kartaPlanu' + (cekaNaMe(z) || z.stav === 'bezi' ? ' zvyraznena' : ''));
    var h = el('div', 'kdyPlanu');
    h.appendChild(el('span', '', kdy(z.kdy, jaz)));
    var stitek = z.stav === 'bezi' ? T.plHrajeSe : cekaNaMe(z) ? T.plPozvanka : '';
    if (stitek) h.appendChild(el('span', 'stitek', stitek));
    k.appendChild(h);
    if (kde(z, T)) k.appendChild(el('div', 'kdePlanu', kde(z, T)));
    k.appendChild(el('div', 'kdoPlanu', jmenaTymu(z.mista, 0) + '  vs  ' + jmenaTymu(z.mista, 1)));
    var zapisuje = (z.mista || []).filter(function (m) { return m.zapisovatel; })[0];
    if (z.stav === 'planovany' && zapisuje && !cekaNaMe(z)) {
      k.appendChild(el('div', 'kdePlanu', T.plSpustiZapisovatel.replace('{kdo}', zapisuje.jmeno || '?')));
    }
    var chyba = el('div', 'chybaPlanu');
    if (cekaNaMe(z)) {
      var r = el('div', 'tlacitkaPlanu');
      var ano = el('button', 'malaHlavni', T.plPrijmout);
      var ne = el('button', 'odkaz', T.plOdmitnout);
      [[ano, true], [ne, false]].forEach(function (x) {
        x[0].onclick = async function () {
          try { await rpc('napl_odpovez', { p_zapas: z.id, p_ano: x[1] }); kresliCoTeCeka(kam, T, jaz, sledovat, pripojit); } catch (e) { chyba.textContent = T.plChyba; }
        };
      });
      r.appendChild(ano); r.appendChild(ne);
      k.appendChild(r);
    } else if (z.stav === 'bezi' && !z.zapisovatel_ja) {
      var s = el('button', 'malaHlavni', T.plSledovat);
      s.onclick = function () { sledovat(z.id, z); };
      k.appendChild(s);
    }
    k.appendChild(chyba);
    kam.appendChild(k);
  });
  var p = el('button', 'vedlejsi', T.plPripojit);
  p.onclick = function () { pripojit(null); };
  kam.appendChild(p);
  return aktivni.length;
}

/**
 * Okno pro připojení: kód (nebo z odkazu rovnou), pak náhled a jedno
 * ťuknutí. Odkaz = potvrzení (054, otázka 3). [dialog] je prvek okna,
 * [zavri]() ho zavře, [hotovo]() se zavolá po připojení.
 */
export function oknoPripojeni(dialog, T, jaz, kodZOdkazu, zavri, hotovo) {
  dialog.textContent = '';
  dialog.appendChild(el('h2', '', T.plPripojit));
  var pole = el('input', 'poleKodu');
  pole.placeholder = T.plKodZapasu;
  pole.autocapitalize = 'characters';
  pole.value = kodZOdkazu || '';
  var nahled = el('div', 'nahledPlanu');
  var chyba = el('p', 'chybaPlanu');
  var dal = el('button', 'hlavni', T.pokracovat);
  var zrus = el('button', 'odkaz', T.zrusit);
  zrus.onclick = zavri;
  var nalezeny = null;

  async function hledej() {
    var kod = kodZ(pole.value);
    if (!kod) { chyba.textContent = T.plOdkazNeplati; return; }
    chyba.textContent = '';
    try {
      var n = await rpc('napl_nahled', { p_kod: kod });
      if (!n) { chyba.textContent = T.plOdkazNeplati; return; }
      nalezeny = kod;
      pole.hidden = true;
      nahled.textContent = '';
      nahled.appendChild(el('div', 'kdyPlanu', kdy(n.kdy, jaz)));
      if (kde(n, T)) nahled.appendChild(el('div', 'kdePlanu', kde(n, T)));
      nahled.appendChild(el('div', 'kdoPlanu', jmenaTymu(n.mista, 0) + '  vs  ' + jmenaTymu(n.mista, 1)));
      dal.textContent = T.plPripojitSe;
    } catch (e) { chyba.textContent = T.plChyba; }
  }

  dal.onclick = async function () {
    if (!nalezeny) { hledej(); return; }
    try {
      await rpc('napl_pripoj', { p_kod: nalezeny, p_tym: null, p_pozice: null });
      hotovo();
    } catch (e) { chyba.textContent = /chyba 4/.test(e.message) ? T.plOdkazNeplati : T.plChyba; }
  };
  [pole, nahled, chyba, dal, zrus].forEach(function (x) { dialog.appendChild(x); });
  if (kodZOdkazu) hledej(); else pole.focus();
}

/**
 * Živé skóre: text stejný jako pro kameru (ZapasViewModel.stavProPrenos):
 * jménoA|barvaA|bodyA|jménoB|barvaB|bodyB|podává|gemyA|gemyB|setyA|setyB…
 * Radši nic než špatné skóre — nečitelný text se neukáže.
 */
export function ctiTabuli(text) {
  var c = String(text || '').split('|');
  if (c.length < 11) return null;
  var cislo = function (s) { var n = parseInt(s, 10); return isNaN(n) ? null : n; };
  var barva = function (s) { return /^[0-9A-Fa-f]{8}$/.test(s) ? '#' + s.slice(2) : null; };
  var hraci = function (i) { return (c[i] || '').split('\u001F').filter(function (x) { return x.trim(); }); };
  var t = {
    a: { jmeno: c[0], barva: barva(c[1]), body: c[2], gemy: cislo(c[7]), sety: cislo(c[9]), hraci: hraci(15) },
    b: { jmeno: c[3], barva: barva(c[4]), body: c[5], gemy: cislo(c[8]), sety: cislo(c[10]), hraci: hraci(16) },
    podavaA: c[6] === 'A'
  };
  if (!t.a.barva || !t.b.barva || t.a.gemy == null || t.b.gemy == null || t.a.sety == null || t.b.sety == null) return null;
  return t;
}

/**
 * Sledování: čte stav každé dvě vteřiny, dokud je [kam] vidět a zápas
 * neskončil. Vrací funkci, která čtení zastaví.
 */
export function sleduj(kam, T, jaz, id, zapas) {
  var bezi = true;
  var hlava = el('div', '');
  if (zapas) {
    hlava.appendChild(el('div', 'kdePlanu', kdy(zapas.kdy, jaz)));
    if (kde(zapas, T)) hlava.appendChild(el('div', 'kdePlanu', kde(zapas, T)));
  }
  var tabule = el('div', 'tabulePlanu');
  var stavText = el('p', 'kdePlanu', T.plCekaNaStart);
  var signal = el('p', 'kdePlanu');
  kam.textContent = '';
  [hlava, tabule, stavText, signal].forEach(function (x) { kam.appendChild(x); });

  function radek(tym, podava) {
    var r = el('div', 'radekTabule');
    var pruh = el('span', 'pruh');
    pruh.style.background = tym.barva; // barva týmu plná, bez přechodů (040)
    r.appendChild(pruh);
    var jm = el('span', 'jmena');
    (tym.hraci.length ? tym.hraci : [tym.jmeno]).forEach(function (h) { jm.appendChild(el('div', '', h)); });
    r.appendChild(jm);
    r.appendChild(el('span', 'podava' + (podava ? ' ano' : '')));
    [tym.sety, tym.gemy, tym.body].forEach(function (x) { r.appendChild(el('span', 'cislo', String(x))); });
    return r;
  }

  (async function smycka() {
    while (bezi) {
      var odp = null;
      try { odp = await rpc('napl_tabule_cti', { p_zapas: id }); signal.textContent = ''; } catch (e) { signal.textContent = T.plBezSignalu; }
      if (odp) {
        var t = ctiTabuli(odp.tabule);
        if (t) {
          tabule.textContent = '';
          var hl = el('div', 'radekTabule hlavicka');
          hl.appendChild(el('span', 'jmena'));
          [T.plSety, T.plGemy, T.plBody].forEach(function (x) { hl.appendChild(el('span', 'cislo', x.toUpperCase())); });
          tabule.appendChild(hl);
          tabule.appendChild(radek(t.a, t.podavaA));
          tabule.appendChild(radek(t.b, !t.podavaA));
        }
        stavText.textContent = odp.stav === 'dohrany' ? T.plDohrany : odp.stav === 'zruseny' ? T.plZruseny : t ? '' : T.plCekaNaStart;
        if (odp.stav === 'dohrany' || odp.stav === 'zruseny') break;
      }
      await new Promise(function (h) { setTimeout(h, 2000); });
    }
  })();
  return function () { bezi = false; };
}
