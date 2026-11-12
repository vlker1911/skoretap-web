// Podrobnosti zápasu na webu — jako obrazovka Průběh zápasu v aplikaci
// (rozhodnuti/051). Záložky Průběh, Statistiky, Hráči a Fotostudio.
//
// Všechno počítá jádro (jadro/skoretap-jadro.mjs) — tytéž výpočty jako
// v aplikaci (Statistiky, Rozpis, Studio). Tady se jen kreslí, a všechno
// jako text, nikdy jako HTML z dat. Fotostudio kreslí obrázek stejně jako
// StudioKresleni.kt v aplikaci; obrázek zůstává v prohlížeči.
//
// Použití: vykresliDetail(kontejner, jadro, { en, jazyk, slovnik, kdy }) —
// jádro už musí mít zápas otevřený (obnov nebo zaloz). Jazyk mimo češtinu
// je angličtina přeložená slovníkem (jazyky.js); bez slovníku anglicky.

import { preloz, mistni } from './jazyky.js';

var BARVY = { MODRA: '#003D7C', CERVENA: '#E30613', ZELENA: '#1E7A3C', ZLUTA: '#E0B400', BILA: '#E9E9EE', CERNA: '#3A3A46' };
// Barvy týmů na tmavém podkladu (text) — modrá a černá by zanikly.
var BARVY_TEXT = { MODRA: '#6FA8FF', CERVENA: '#FF5A5F', ZELENA: '#3DCB6C', ZLUTA: '#F2C94C', BILA: '#FFFFFF', CERNA: '#B8B8C8' };
var MICEK = '#C8F000';
// Pozadí místo fotky (pozadi/<jméno>.jpg, 1080 × 1920) — tatáž jako
// POZADI_STUDIA v aplikaci. První je výchozí. (Roman 12. 11. 2026)
var POZADI = ['kurt', 'hala', 'slunce', 'zelena', 'noc', 'rakety'];
var obrazkyPozadi = {};

var TEXTY = {
  cs: {
    prubeh: 'Průběh', statistiky: 'Statistiky', hraci: 'Hráči', studio: 'Fotostudio',
    set: 'set', zapas: 'Zápas', gem: 'gem', podaval: 'podával', brejk: 'BREJK', gemV: 'GEM', celkem: 'celkem', minut: 'min', gemy: 'Gemy',
    esa: 'Esa', dvojchyby: 'Dvojchyby', uspesnost1: 'Úspěšnost 1. servisu', po1: 'Body po 1. servisu', po2: 'Body po 2. servisu',
    brejkboly: 'Odvrácené brejkboly', uhajeno: 'Uhájené gemy', naPodani: 'Body na svém podání', naReturnu: 'Body na returnu',
    poHracich: 'Podání po hráčích', bezRozhodciho: 'Esa, dvojchyby a druhá podání umí zapsat jen rozhodčí. Bez něj se všechny body berou jako první podání.',
    zatimNic: 'Zatím nic k ukázání.', hodinkyNic: 'Hodinky v tomhle zápase nic nenaměřily. Měří se, když je aplikace na hodinkách během zápasu otevřená.',
    tepPrumer: 'Tep průměr', tepMax: 'Tep nejvyšší', kroky: 'Kroky', kalorie: 'Kalorie',
    studioPopis: 'Obrázek se kreslí v prohlížeči. Nikam neodejde, dokud ho sám nesdílíš nebo neuložíš.',
    fotka: 'Vybrat fotku', bezFotky: 'Bez fotky', format: 'Formát', story: 'Story 9:16', prispevek: 'Příspěvek 4:5',
    coUkazat: 'Co bude na obrázku', jmena: 'Jména hráčů', sdilet: 'Sdílet', stahnout: 'Stáhnout obrázek',
    pozadi: 'Pozadí', logo: 'Logo Skoretap', rohy: { VLEVO_NAHORE: 'Vlevo nahoře', VPRAVO_NAHORE: 'Vpravo nahoře', VLEVO_DOLE: 'Vlevo dole', VPRAVO_DOLE: 'Vpravo dole' },
    polozky: { skore: 'Skóre', delka: 'Délka', tep_prumer: 'Tep průměr', tep_max: 'Tep nejvyšší', kalorie: 'Kalorie', kroky: 'Kroky', podani: 'Body na podání', return: 'Body na returnu', narocny_set: 'Nejnáročnější set', datum: 'Datum' },
    vyhrali: 'Vyhráli jsme', prohrali: 'Prohráli jsme',
    bezZdravi: 'Tep, kroky a kalorie tu budou u zápasů, které měřily hodinky. Na web se dostanou, když je v aplikaci v Souhlasy a data → Záloha na server Skoretap zaškrtneš.',
    tymy: { MODRA: 'Modří', CERVENA: 'Červení', ZELENA: 'Zelení', ZLUTA: 'Žlutí', BILA: 'Bílí', CERNA: 'Černí' }
  },
  en: {
    prubeh: 'Progress', statistiky: 'Statistics', hraci: 'Players', studio: 'Photo studio',
    set: 'set', zapas: 'Match', gem: 'game', podaval: 'served', brejk: 'BREAK', gemV: 'GAME', celkem: 'total', minut: 'min', gemy: 'Games',
    esa: 'Aces', dvojchyby: 'Double faults', uspesnost1: '1st serve in', po1: 'Points won on 1st serve', po2: 'Points won on 2nd serve',
    brejkboly: 'Break points saved', uhajeno: 'Service games held', naPodani: 'Points won on serve', naReturnu: 'Points won on return',
    poHracich: 'Serve by player', bezRozhodciho: 'Aces, double faults and second serves can only be entered by a referee. Without one, every point counts as a first serve.',
    zatimNic: 'Nothing to show yet.', hodinkyNic: 'The watch measured nothing in this match. It measures while the app is open on the watch during the match.',
    tepPrumer: 'Avg heart rate', tepMax: 'Max heart rate', kroky: 'Steps', kalorie: 'Calories',
    studioPopis: 'The picture is drawn in your browser. It goes nowhere until you share or save it.',
    fotka: 'Choose a photo', bezFotky: 'No photo', format: 'Format', story: 'Story 9:16', prispevek: 'Post 4:5',
    coUkazat: 'What goes on the picture', jmena: 'Player names', sdilet: 'Share', stahnout: 'Download picture',
    pozadi: 'Background', logo: 'Skoretap logo', rohy: { VLEVO_NAHORE: 'Top left', VPRAVO_NAHORE: 'Top right', VLEVO_DOLE: 'Bottom left', VPRAVO_DOLE: 'Bottom right' },
    polozky: { skore: 'Score', delka: 'Duration', tep_prumer: 'Avg heart rate', tep_max: 'Max heart rate', kalorie: 'Calories', kroky: 'Steps', podani: 'Points on serve', return: 'Points on return', narocny_set: 'Toughest set', datum: 'Date' },
    vyhrali: 'We won', prohrali: 'We lost',
    bezZdravi: 'Heart rate, steps and calories appear for matches the watch measured. They reach the web once you tick them in the app under Consents and data → Backup to the Skoretap server.',
    tymy: { MODRA: 'Blue', CERVENA: 'Red', ZELENA: 'Green', ZLUTA: 'Yellow', BILA: 'White', CERNA: 'Black' }
  }
};

var STYL = '\
.dt { margin-top: 12px; }\
.dt-tabule { background: rgba(255,255,255,.05); border-radius: 14px; padding: 4px 12px; }\
.dt-r { display: flex; align-items: center; gap: 10px; padding: 9px 0; }\
.dt-r + .dt-r { border-top: 1px solid rgba(255,255,255,.1); }\
.dt-p { width: 6px; align-self: stretch; border-radius: 3px; }\
.dt-j { flex: 1; font-weight: 700; overflow-wrap: anywhere; }\
.dt-c { display: flex; gap: 8px; font-size: 20px; font-weight: 800; color: rgba(255,255,255,.55); font-variant-numeric: tabular-nums; }\
.dt-c span { min-width: 24px; text-align: center; }\
.dt-c .v { color: #fff; }\
.dt-c .g { color: ' + MICEK + '; }\
.dt-casy { color: rgba(255,255,255,.62); font-size: 14px; margin: 10px 2px 0; }\
.dt-zal { display: flex; gap: 6px; overflow-x: auto; margin: 16px 0 12px; scrollbar-width: none; }\
.dt-zal button, .dt-volby button { flex: none; font: inherit; font-size: 14px; font-weight: 700; padding: 8px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14); background: transparent; color: #fff; cursor: pointer; }\
.dt-zal button[aria-pressed="true"], .dt-volby button[aria-pressed="true"] { background: ' + MICEK + '; color: #14141A; border-color: ' + MICEK + '; }\
.dt-volby { display: flex; flex-wrap: wrap; gap: 6px; margin: 4px 0 12px; }\
.dt-h { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.6); margin: 18px 0 8px; }\
.dt-gem { border-left: 4px solid transparent; padding: 6px 0 6px 10px; margin-bottom: 6px; }\
.dt-gem .n { display: flex; justify-content: space-between; gap: 10px; font-size: 13px; color: rgba(255,255,255,.62); }\
.dt-gem .v { font-weight: 800; color: #fff; white-space: nowrap; }\
.dt-gem .v.brejk { color: #FF3B2F; }\
.dt-gem .b { display: flex; flex-wrap: wrap; gap: 2px 10px; font-variant-numeric: tabular-nums; }\
.dt-pil { font-size: 10px; font-weight: 800; background: rgba(255,255,255,.12); border-radius: 4px; padding: 1px 4px; margin-left: 3px; }\
.dt-hlava { display: flex; justify-content: space-between; font-weight: 800; font-size: 14px; margin-bottom: 4px; }\
.dt-st { padding: 10px 0; border-top: 1px solid rgba(255,255,255,.08); }\
.dt-st .popis { text-align: center; font-size: 13px; color: rgba(255,255,255,.62); }\
.dt-st .hodnoty { display: flex; justify-content: space-between; font-weight: 800; font-variant-numeric: tabular-nums; margin: 2px 0 6px; }\
.dt-st .hodnoty small { font-weight: 500; color: rgba(255,255,255,.55); margin: 0 6px; }\
.dt-pruh { display: flex; gap: 4px; height: 6px; }\
.dt-pruh span { border-radius: 3px; }\
.dt-hrac { background: rgba(255,255,255,.05); border-radius: 12px; padding: 10px 12px; margin-bottom: 8px; }\
.dt-hrac .jm { font-weight: 800; margin-bottom: 4px; }\
.dt-udaj { display: flex; gap: 10px; font-size: 14px; padding: 3px 0; }\
.dt-udaj .p { flex: 1; color: rgba(255,255,255,.65); }\
.dt-udaj .x { font-variant-numeric: tabular-nums; }\
.dt-udaj .pc { min-width: 44px; text-align: right; font-weight: 800; }\
.dt-pozn { color: rgba(255,255,255,.55); font-size: 13px; margin-top: 10px; }\
.dt-mriz { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }\
.dt-mriz div { background: rgba(255,255,255,.05); border-radius: 12px; padding: 10px 12px; }\
.dt-mriz b { display: block; font-size: 22px; color: ' + MICEK + '; }\
.dt-studio { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 16px; align-items: start; }\
@media (max-width: 700px) { .dt-studio { grid-template-columns: 1fr; } }\
.dt-studio canvas { width: 100%; height: auto; border-radius: 12px; background: #000; display: block; }\
.dt-pozadi { display: flex; gap: 10px; margin: 4px 0 12px; overflow-x: auto; scrollbar-width: none; }\
.dt-pozadi button { flex: none; width: 54px; height: 96px; border-radius: 10px; border: 3px solid transparent; background-size: cover; background-position: center; cursor: pointer; }\
.dt-pozadi button[aria-pressed="true"] { border-color: ' + MICEK + '; }\
.dt-zaskrt { display: flex; flex-wrap: wrap; gap: 6px; }\
.dt-zaskrt label { display: flex; align-items: center; gap: 6px; font-size: 14px; background: rgba(255,255,255,.06); border-radius: 999px; padding: 6px 12px; cursor: pointer; }\
.dt-akce { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }\
.dt-akce button, .dt-akce label { font: inherit; font-weight: 800; font-size: 15px; border-radius: 12px; padding: 11px 16px; cursor: pointer; border: 1px solid rgba(255,255,255,.14); background: transparent; color: #fff; }\
.dt-akce .hl { background: ' + MICEK + '; color: #14141A; border-color: ' + MICEK + '; }\
';

function el(tag, trida, text) {
  var e = document.createElement(tag);
  if (trida) e.className = trida;
  if (text != null) e.textContent = text;
  return e;
}
function minuty(s) { return s > 0 ? Math.max(1, Math.round(s / 60)) : 0; }
function volby(polozky, vybrana, zmena, trida) {
  var o = el('div', trida || 'dt-volby');
  polozky.forEach(function (p) {
    var b = el('button', '', p[1]);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(p[0] === vybrana));
    b.onclick = function () { zmena(p[0]); };
    o.appendChild(b);
  });
  return o;
}

export function vykresliDetail(kontejner, J, nastaveni) {
  var en = !!(nastaveni && nastaveni.en);
  var jazyk = (nastaveni && nastaveni.jazyk) || (en ? 'en' : 'cs');
  var T = preloz(en ? TEXTY.en : TEXTY.cs, en && nastaveni ? nastaveni.slovnik : null);
  var kdy = (nastaveni && nastaveni.kdy) || Date.now();
  if (!document.getElementById('dt-styl')) {
    var s = document.createElement('style');
    s.id = 'dt-styl';
    s.textContent = STYL;
    document.head.appendChild(s);
  }
  var p = JSON.parse(J.pohled());
  var pr = JSON.parse(J.prubeh() || '{"gemy":[]}');
  var stat = JSON.parse(J.statistiky() || '[]');
  var hraci = JSON.parse(J.hraci() || '[]');
  var studio = JSON.parse(J.studio() || 'null');
  var nazev = function (i) { var t = p.tymy[i]; return t.hraci.length ? t.hraci.join(' / ') : T.tymy[t.barva]; };
  var barva = function (i) { return BARVY[p.tymy[i].barva]; };
  var barvaText = function (i) { return BARVY_TEXT[p.tymy[i].barva]; };

  var o = el('div', 'dt');

  // Skóre: dohrané sety a k tomu rozehraný set, který se nedohrál. Kde už
  // je skóre vidět (karta v Mém účtu), se nekreslí podruhé.
  var tab = el('div', 'dt-tabule');
  if (nastaveni && nastaveni.bezTabule) tab.hidden = true;
  var gemy = p.tymy[0].gemy + p.tymy[1].gemy > 0;
  [0, 1].forEach(function (i) {
    var r = el('div', 'dt-r');
    var pr2 = el('span', 'dt-p'); pr2.style.background = barva(i);
    r.appendChild(pr2);
    r.appendChild(el('span', 'dt-j', nazev(i)));
    var c = el('span', 'dt-c');
    p.sety.forEach(function (st) { c.appendChild(el('span', st[i] > st[1 - i] ? 'v' : '', String(st[i]))); });
    if (p.format === 'AMERICANO') c.appendChild(el('span', 'v', p.tymy[i].body));
    else if (gemy) c.appendChild(el('span', 'g', String(p.tymy[i].gemy)));
    r.appendChild(c);
    tab.appendChild(r);
  });
  o.appendChild(tab);
  if (pr.celkemS > 0) {
    o.appendChild(el('p', 'dt-casy', pr.setyS.map(function (x, n) { return (n + 1) + '. ' + T.set + ' ' + minuty(x) + ' ' + T.minut; }).join(' · ') + ' · ' + T.celkem + ' ' + minuty(pr.celkemS) + ' ' + T.minut));
  }

  var obsah = el('div');
  var zalozka = 'prubeh';
  function prepni(z) {
    zalozka = z;
    zal.replaceWith(zal = volby([['prubeh', T.prubeh], ['statistiky', T.statistiky], ['hraci', T.hraci], ['studio', T.studio]], z, prepni, 'dt-zal'));
    obsah.textContent = '';
    if (z === 'prubeh') kresliPrubeh();
    if (z === 'statistiky') kresliStatistiky(0);
    if (z === 'hraci') kresliHrace();
    if (z === 'studio') kresliStudio();
  }
  var zal = el('div');
  o.appendChild(zal);
  o.appendChild(obsah);

  // ---------------------------------------------------- Průběh
  function kresliPrubeh() {
    var sety = [];
    pr.gemy.forEach(function (g) { if (sety.indexOf(g.set) < 0) sety.push(g.set); });
    if (!sety.length) { obsah.appendChild(el('p', 'dt-pozn', T.zatimNic)); return; }
    var vybrany = sety[sety.length - 1];
    var seznam = el('div');
    function kresli(set) {
      vybrany = set;
      seznam.textContent = '';
      if (sety.length > 1) seznam.appendChild(volby(sety.map(function (x) { return [x, x + '. ' + T.set]; }), set, kresli));
      pr.gemy.filter(function (g) { return g.set === set; }).forEach(function (x) {
        var g = el('div', 'dt-gem');
        if (x.vitez != null) g.style.borderLeftColor = barva(x.vitez);
        var n = el('div', 'n');
        var t = p.tymy[x.podava];
        var kdo = x.tieBreak ? 'tie-break' : T.podaval + ' ' + (t.hraci[x.podavaHrac] || t.hraci[0] || T.tymy[t.barva]);
        n.appendChild(el('span', '', x.gem + '. ' + T.gem + ' · ' + kdo + (x.trvaniS > 0 ? ' · ' + minuty(x.trvaniS) + ' ' + T.minut : '')));
        if (x.vitez != null) {
          var brejk = !x.tieBreak && x.vitez !== x.podava;
          n.appendChild(el('span', 'v' + (brejk ? ' brejk' : ''), (brejk ? T.brejk : T.gemV) + ' ' + (x.skore || '')));
        }
        g.appendChild(n);
        var b = el('div', 'b');
        x.body.forEach(function (bod, i) {
          var sp = el('span', '', bod);
          String(x.znacky[i] || '').split(' ').forEach(function (z) { if (z) sp.appendChild(el('span', 'dt-pil', z)); });
          b.appendChild(sp);
        });
        g.appendChild(b);
        seznam.appendChild(g);
      });
    }
    obsah.appendChild(seznam);
    kresli(vybrany);
  }

  // ---------------------------------------------------- Statistiky
  function radek(popis, a, b, textA, textB, maxPruh) {
    var r = el('div', 'dt-st');
    r.appendChild(el('div', 'popis', popis));
    var h = el('div', 'hodnoty');
    var la = el('span', '', textA);
    var lb = el('span', '', textB);
    h.appendChild(la); h.appendChild(lb);
    r.appendChild(h);
    var celek = maxPruh || (a + b) || 1;
    var pruh = el('div', 'dt-pruh');
    var pa = el('span'); pa.style.flex = String(Math.max(a, 0) / celek || 0.0001); pa.style.background = barva(0);
    var mezera = el('span'); mezera.style.flex = String(Math.max(0, 1 - (a + b) / celek) || 0); mezera.style.background = 'rgba(255,255,255,.08)';
    var pb = el('span'); pb.style.flex = String(Math.max(b, 0) / celek || 0.0001); pb.style.background = barva(1);
    pruh.appendChild(pa); if (maxPruh) pruh.appendChild(mezera); pruh.appendChild(pb);
    r.appendChild(pruh);
    return r;
  }
  function procentoText(pc, x, z) { return pc == null ? '–' : pc + ' % (' + x + '/' + z + ')'; }
  function kresliStatistiky(i) {
    obsah.textContent = '';
    if (!stat.length) { obsah.appendChild(el('p', 'dt-pozn', T.zatimNic)); return; }
    if (stat.length > 1) obsah.appendChild(volby(stat.map(function (s, n) { return [n, s.set == null ? T.zapas : s.set + '. ' + T.set]; }), i, kresliStatistiky));
    var s = stat[i] || stat[0];
    var hl = el('div', 'dt-hlava');
    var na = el('span', '', nazev(0)); na.style.color = barvaText(0);
    var nb = el('span', '', nazev(1)); nb.style.color = barvaText(1);
    hl.appendChild(na); hl.appendChild(nb);
    obsah.appendChild(hl);
    var a = s.a, b = s.b;
    if (s.maRozhodciho) {
      obsah.appendChild(radek(T.esa, a.esa, b.esa, String(a.esa), String(b.esa)));
      obsah.appendChild(radek(T.dvojchyby, a.dvojchyby, b.dvojchyby, String(a.dvojchyby), String(b.dvojchyby)));
      obsah.appendChild(radek(T.uspesnost1, a.prvniServisProcenta || 0, b.prvniServisProcenta || 0, procentoText(a.prvniServisProcenta, a.poPrvnimCelkem, a.podaniCelkem), procentoText(b.prvniServisProcenta, b.poPrvnimCelkem, b.podaniCelkem)));
    }
    obsah.appendChild(radek(T.po1, a.poPrvnimProcenta || 0, b.poPrvnimProcenta || 0, procentoText(a.poPrvnimProcenta, a.poPrvnimVyhrane, a.poPrvnimCelkem), procentoText(b.poPrvnimProcenta, b.poPrvnimVyhrane, b.poPrvnimCelkem)));
    if (s.maRozhodciho) {
      obsah.appendChild(radek(T.po2, a.poDruhemProcenta || 0, b.poDruhemProcenta || 0, procentoText(a.poDruhemProcenta, a.poDruhemVyhrane, a.poDruhemCelkem), procentoText(b.poDruhemProcenta, b.poDruhemVyhrane, b.poDruhemCelkem)));
    }
    obsah.appendChild(radek(T.uhajeno, a.gemuUhajenoProcenta || 0, b.gemuUhajenoProcenta || 0, procentoText(a.gemuUhajenoProcenta, a.gemuUhajeno, a.gemuPodano), procentoText(b.gemuUhajenoProcenta, b.gemuUhajeno, b.gemuPodano)));
    obsah.appendChild(radek(T.naReturnu, a.returnProcenta || 0, b.returnProcenta || 0, procentoText(a.returnProcenta, a.returnVyhrane, a.returnCelkem), procentoText(b.returnProcenta, b.returnVyhrane, b.returnCelkem)));
    obsah.appendChild(radek(T.brejkboly, a.brejkboluOdvraceno, b.brejkboluOdvraceno, a.brejkboluOdvraceno + '/' + a.brejkboluCelkem, b.brejkboluOdvraceno + '/' + b.brejkboluCelkem));

    var radky = s.hraci.filter(function (h) { return h.cisla.podaniCelkem > 0 || h.cisla.returnCelkem > 0; });
    if (radky.length) {
      obsah.appendChild(el('div', 'dt-h', T.poHracich));
      radky.forEach(function (h) { obsah.appendChild(kartaHrace(h)); });
    }
    if (!s.maRozhodciho) obsah.appendChild(el('p', 'dt-pozn', T.bezRozhodciho));
  }
  function udaj(popis, pomer, pc, barvaPc) {
    var r = el('div', 'dt-udaj');
    r.appendChild(el('span', 'p', popis));
    r.appendChild(el('span', 'x', pomer));
    var c = el('span', 'pc', pc == null ? '' : pc + ' %');
    if (barvaPc) c.style.color = barvaPc;
    r.appendChild(c);
    return r;
  }
  function kartaHrace(h) {
    var c = h.cisla;
    var k = el('div', 'dt-hrac');
    var jm = el('div', 'jm', h.jmeno); jm.style.color = barvaText(h.tym);
    k.appendChild(jm);
    if (c.gemuPodano > 0) k.appendChild(udaj(T.uhajeno, c.gemuUhajeno + '/' + c.gemuPodano, c.gemuUhajenoProcenta, barvaText(h.tym)));
    if (c.podaniCelkem > 0) k.appendChild(udaj(T.naPodani, c.bodyNaPodaniVyhrane + '/' + c.podaniCelkem, c.bodyNaPodaniProcenta, barvaText(h.tym)));
    if (c.returnCelkem > 0) k.appendChild(udaj(T.naReturnu, c.returnVyhrane + '/' + c.returnCelkem, c.returnProcenta, barvaText(h.tym)));
    if (c.maRozhodciho) {
      k.appendChild(udaj(T.esa, String(c.esa), null));
      k.appendChild(udaj(T.dvojchyby, String(c.dvojchyby), null));
    }
    return k;
  }

  // ---------------------------------------------------- Hráči (hodinky)
  function kresliHrace() {
    var s = stat[0];
    if (s) s.hraci.forEach(function (h) {
      var k = kartaHrace(h);
      var m = hraci.filter(function (u) { return u.tym === h.tym && u.poradi === h.poradi; })[0];
      if (m) {
        var mriz = el('div', 'dt-mriz');
        mriz.style.marginTop = '8px';
        [[T.tepPrumer, m.tepPrumer], [T.tepMax, m.tepMax], [T.kroky, m.kroky], [T.kalorie, m.kalorie == null ? null : m.kalorie + ' kcal']].forEach(function (x) {
          if (x[1] == null) return;
          var d = el('div');
          d.appendChild(el('b', '', String(x[1])));
          d.appendChild(document.createTextNode(x[0]));
          mriz.appendChild(d);
        });
        k.appendChild(mriz);
      }
      obsah.appendChild(k);
    });
    // Na webu nemusí být data z hodinek jen proto, že se nesměla zálohovat —
    // „hodinky nic nenaměřily" by mohla být nepravda.
    if (!hraci.length) obsah.appendChild(el('p', 'dt-pozn', T.bezZdravi));
  }

  // ---------------------------------------------------- Fotostudio
  // Logo výchozí vpravo dole — jako v aplikaci (StudioKresleni.Roh).
  // Pozadí místo fotky: první z POZADI, null = černé („Bez fotky").
  var stav = { fotka: null, format: 'STORY', vyber: null, jmena: true, logo: 'VPRAVO_DOLE', jazyk: jazyk, pozadi: POZADI[0] || null };
  function kresliStudio() {
    if (!studio) { obsah.appendChild(el('p', 'dt-pozn', T.zatimNic)); return; }
    if (!stav.vyber) stav.vyber = studio.dostupne.filter(function (x) { return x !== 'datum' || true; });
    var mriz = el('div', 'dt-studio');
    var platno = el('canvas');
    var ovladani = el('div');
    ovladani.appendChild(el('p', 'dt-pozn', T.studioPopis));

    var akce = el('div', 'dt-akce');
    var vyberFotky = el('label', 'hl', T.fotka);
    var vstup = el('input'); vstup.type = 'file'; vstup.accept = 'image/*'; vstup.hidden = true;
    vstup.onchange = function () {
      var f = vstup.files && vstup.files[0];
      if (!f) return;
      var img = new Image();
      img.onload = function () { stav.fotka = img; prekresli(); };
      img.src = URL.createObjectURL(f);
    };
    vyberFotky.appendChild(vstup);
    akce.appendChild(vyberFotky);
    var bez = el('button', '', T.bezFotky);
    bez.type = 'button';
    bez.onclick = function () { stav.fotka = null; stav.pozadi = null; prekresli(); };
    akce.appendChild(bez);
    ovladani.appendChild(akce);

    // Pozadí Skoretapu — náhledy, jako v aplikaci (POZADI_STUDIA).
    var nahledy = el('div', 'dt-pozadi');
    if (POZADI.length) {
      ovladani.appendChild(el('div', 'dt-h', T.pozadi));
      ovladani.appendChild(nahledy);
    }

    ovladani.appendChild(el('div', 'dt-h', T.format));
    var form = el('div');
    ovladani.appendChild(form);
    ovladani.appendChild(el('div', 'dt-h', T.coUkazat));
    var zaskrt = el('div', 'dt-zaskrt');
    studio.dostupne.forEach(function (pol) {
      var l = el('label');
      var c = el('input'); c.type = 'checkbox'; c.checked = stav.vyber.indexOf(pol) >= 0;
      c.onchange = function () {
        stav.vyber = studio.dostupne.filter(function (x) { return x === pol ? c.checked : stav.vyber.indexOf(x) >= 0; });
        prekresli();
      };
      l.appendChild(c);
      l.appendChild(document.createTextNode(T.polozky[pol]));
      zaskrt.appendChild(l);
    });
    var lj = el('label');
    var cj = el('input'); cj.type = 'checkbox'; cj.checked = stav.jmena;
    cj.onchange = function () { stav.jmena = cj.checked; prekresli(); };
    lj.appendChild(cj); lj.appendChild(document.createTextNode(T.jmena));
    zaskrt.appendChild(lj);
    ovladani.appendChild(zaskrt);
    ovladani.appendChild(el('div', 'dt-h', T.logo));
    var rohy = el('div');
    ovladani.appendChild(rohy);
    // Hráč musí vědět, proč tu tep chybí, a co s tím (memory: hráč musí vědět).
    if (studio.tepPrumer == null && studio.kroky == null && studio.kalorie == null) {
      ovladani.appendChild(el('p', 'dt-pozn', T.bezZdravi));
    }

    var ven = el('div', 'dt-akce');
    var sdilet = el('button', 'hl', T.sdilet);
    sdilet.type = 'button';
    sdilet.onclick = function () {
      platno.toBlob(function (blob) {
        var soubor = new File([blob], 'skoretap.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [soubor] })) navigator.share({ files: [soubor] }).catch(function () {});
        else stahni(blob);
      }, 'image/png');
    };
    var dolu = el('button', '', T.stahnout);
    dolu.type = 'button';
    dolu.onclick = function () { platno.toBlob(stahni, 'image/png'); };
    ven.appendChild(sdilet); ven.appendChild(dolu);
    ovladani.appendChild(ven);

    mriz.appendChild(platno);
    mriz.appendChild(ovladani);
    obsah.appendChild(mriz);

    function prekresli() {
      form.textContent = '';
      form.appendChild(volby([['STORY', T.story], ['PRISPEVEK', T.prispevek]], stav.format, function (f) { stav.format = f; prekresli(); }));
      nahledy.textContent = '';
      POZADI.forEach(function (p) {
        var b = el('button');
        b.type = 'button';
        b.style.backgroundImage = 'url(' + new URL('pozadi/' + p + '.jpg', import.meta.url).href + ')';
        b.setAttribute('aria-pressed', String(!stav.fotka && stav.pozadi === p));
        b.onclick = function () { stav.fotka = null; stav.pozadi = p; prekresli(); };
        nahledy.appendChild(b);
      });
      rohy.textContent = '';
      rohy.appendChild(volby(['VLEVO_NAHORE', 'VPRAVO_NAHORE', 'VLEVO_DOLE', 'VPRAVO_DOLE'].map(function (r) { return [r, T.rohy[r]]; }),
        stav.logo, function (r) { stav.logo = r; prekresli(); }));
      // Pozadí se načte jednou; do té doby se kreslí na černé.
      var obr = stav.pozadi && obrazkyPozadi[stav.pozadi];
      if (stav.pozadi && !obr) {
        obr = obrazkyPozadi[stav.pozadi] = new Image();
        obr.onload = prekresli;
        obr.src = new URL('pozadi/' + stav.pozadi + '.jpg', import.meta.url).href;
      }
      kresliObrazek(platno, studio, Object.assign({}, stav, {
        fotka: stav.fotka || (obr && obr.complete && obr.naturalWidth ? obr : null),
      }), T, kdy);
    }
    nactiPismo().then(prekresli, prekresli);
  }
  function stahni(blob) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'skoretap.png';
    a.click();
  }

  prepni(zalozka);
  kontejner.appendChild(o);
}

// Písmo značky (Archivo) a ikona pro logo jen pro fotostudio, načtou se až tady.
var pismo = null;
var ikona = null;
function nactiPismo() {
  if (pismo) return pismo;
  var obr = new Image();
  var ikonaHotova = new Promise(function (hotovo) {
    obr.onload = function () { ikona = obr; hotovo(); };
    obr.onerror = function () { hotovo(); }; // bez ikony jen nápis
  });
  obr.src = new URL('ikona-192.png', import.meta.url).href;
  if (!('FontFace' in window)) return (pismo = ikonaHotova);
  var url = new URL('archivo.ttf', import.meta.url).href;
  var f = new FontFace('SkoretapArchivo', 'url(' + url + ')', { weight: '100 900' });
  pismo = Promise.all([f.load().then(function (n) { document.fonts.add(n); }), ikonaHotova]);
  return pismo;
}

// Stejné jako StudioKresleni.kt: fotka na střed, ztmavení odspodu, značka,
// čísla ve dvou sloupcích, skóre po setech, výsledek a datum.
function kresliObrazek(platno, d, stav, T, kdy) {
  var w = 1080, h = stav.format === 'STORY' ? 1920 : 1350;
  platno.width = w; platno.height = h;
  var c = platno.getContext('2d');
  var font = function (vaha, velikost) { return vaha + ' ' + velikost + 'px SkoretapArchivo, system-ui, sans-serif'; };
  c.clearRect(0, 0, w, h);
  if (stav.fotka) {
    var f = stav.fotka;
    var m = Math.max(w / f.naturalWidth, h / f.naturalHeight);
    var sw = w / m, sh = h / m;
    c.drawImage(f, (f.naturalWidth - sw) / 2, (f.naturalHeight - sh) / 2, sw, sh, 0, 0, w, h);
  } else {
    c.fillStyle = '#0B0B0F';
    c.fillRect(0, 0, w, h);
  }
  var g = c.createLinearGradient(0, h * 0.38, 0, h);
  g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.9)');
  c.fillStyle = g; c.fillRect(0, h * 0.38, w, h);
  var g2 = c.createLinearGradient(0, 0, 0, 220);
  g2.addColorStop(0, 'rgba(0,0,0,.6)'); g2.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g2; c.fillRect(0, 0, w, 220);

  // Logo: ikona a nápis v rohu, který hráč zvolí. Dole pro něj čísla
  // uhnou o řádek výš. Stejné míry jako StudioKresleni.kt.
  var okraj = 64, strana = 72;
  var vlevo = /^VLEVO/.test(stav.logo), nahore = /NAHORE$/.test(stav.logo);
  c.textBaseline = 'alphabetic';
  c.fillStyle = MICEK; c.font = font(800, 44);
  if ('letterSpacing' in c) c.letterSpacing = '3px';
  var sirkaLoga = strana + 18 + c.measureText('SKORETAP').width;
  var xl = vlevo ? okraj : w - okraj - sirkaLoga;
  var yl = nahore ? 64 : h - 64 - strana;
  if (ikona) {
    c.save();
    c.beginPath();
    if (c.roundRect) c.roundRect(xl, yl, strana, strana, strana * 0.22); else c.rect(xl, yl, strana, strana);
    c.clip();
    c.drawImage(ikona, xl, yl, strana, strana);
    c.restore();
  }
  c.fillText('SKORETAP', xl + strana + 18, yl + strana / 2 + 16);
  if ('letterSpacing' in c) c.letterSpacing = '0px';

  var y = nahore ? h - 72 : h - 64 - strana - 56;
  var jazyk = stav.jazyk || 'cs';
  var hodnoty = {
    delka: d.delkaMinut ? d.delkaMinut + ' ' + T.minut : null,
    tep_prumer: d.tepPrumer, tep_max: d.tepMax,
    kalorie: d.kalorie == null ? null : d.kalorie + ' kcal',
    kroky: d.kroky,
    podani: d.podaniProcenta == null ? null : d.podaniProcenta + ' %',
    return: d.returnProcenta == null ? null : d.returnProcenta + ' %',
    narocny_set: d.narocnySet ? d.narocnySet[0] + '. ' + T.set + ' · ' + d.narocnySet[1] + ' kcal' : null,
    datum: new Date(kdy).toLocaleDateString(mistni(jazyk), { day: 'numeric', month: 'long', year: 'numeric' })
  };
  var cisla = stav.vyber.filter(function (x) { return x !== 'skore' && x !== 'datum' && hodnoty[x] != null; });
  var radku = Math.ceil(cisla.length / 2), vyskaRadku = 140, sloupec = (w - 2 * okraj) / 2;
  cisla.forEach(function (pol, i) {
    var r = Math.floor(i / 2), s = i % 2;
    var zakladY = y - (radku - 1 - r) * vyskaRadku;
    var x = okraj + s * sloupec;
    c.fillStyle = 'rgba(255,255,255,.75)'; c.font = font(500, 30);
    c.fillText(T.polozky[pol], x, zakladY - 70);
    var text = String(hodnoty[pol]);
    var vel = 66;
    c.font = font(800, vel);
    while (c.measureText(text).width > sloupec - 24 && vel > 34) { vel -= 2; c.font = font(800, vel); }
    c.fillStyle = MICEK;
    c.fillText(text, x, zakladY);
  });
  y -= radku * vyskaRadku + 30;

  if (stav.vyber.indexOf('skore') >= 0) {
    var radek = 120;
    [1, 0].forEach(function (tym, i) {
      var zakladY = y - i * radek;
      c.fillStyle = BARVY[tym === 0 ? d.barvaA : d.barvaB];
      zaoblene(c, okraj, zakladY - 52, 22, 54, 11);
      var hraci = tym === 0 ? d.hraciA : d.hraciB;
      var nazev = stav.jmena && hraci.length ? hraci.join(' / ') : T.tymy[tym === 0 ? d.barvaA : d.barvaB];
      c.font = font(700, 50); c.fillStyle = '#FFFFFF';
      var misto = w - 2 * okraj - 60 - d.sety.length * 110;
      c.fillText(zkrat(c, nazev, misto), okraj + 46, zakladY);
      c.font = font(800, 92);
      d.sety.forEach(function (set, k) {
        // Rozehraný set nikdo nevyhrál — nesvítí (jako StudioKresleni.kt).
        var rozehrany = d.rozehranySet && k === d.sety.length - 1;
        c.fillStyle = !rozehrany && set[tym] > set[1 - tym] ? MICEK : '#FFFFFF';
        var t = String(set[tym]);
        var x = w - okraj - (d.sety.length - k) * 110 + (110 - c.measureText(t).width) / 2;
        c.fillText(t, x, zakladY + 12);
      });
    });
    y -= 2 * radek + 10;
    if (d.mujTym != null && d.vitez != null) {
      c.font = font(800, 40); c.fillStyle = MICEK;
      c.fillText((d.vitez === d.mujTym ? T.vyhrali : T.prohrali).toUpperCase(), okraj, y);
      y -= 66;
    }
  }
  if (stav.vyber.indexOf('datum') >= 0) {
    c.font = font(500, 32); c.fillStyle = 'rgba(255,255,255,.8)';
    c.fillText(hodnoty.datum, okraj, y);
  }
}
function zaoblene(c, x, y, sirka, vyska, r) {
  c.beginPath();
  c.moveTo(x + r, y); c.arcTo(x + sirka, y, x + sirka, y + vyska, r); c.arcTo(x + sirka, y + vyska, x, y + vyska, r);
  c.arcTo(x, y + vyska, x, y, r); c.arcTo(x, y, x + sirka, y, r); c.closePath(); c.fill();
}
function zkrat(c, text, sirka) {
  if (c.measureText(text).width <= sirka) return text;
  var s = text;
  while (s.length > 1 && c.measureText(s + '…').width > sirka) s = s.slice(0, -1);
  return s + '…';
}
