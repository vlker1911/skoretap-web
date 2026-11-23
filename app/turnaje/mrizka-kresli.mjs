// Kreslení mřížky rozpisu (kurty × čas) — stránka pořadatele i veřejné
// výsledky. rozhodnuti/058, mřížka — část 1 (ťuknutí) a část 2 (tah myší,
// zkracování za okraj). Výpočty jsou v mrizka.mjs.
// Všechno se kreslí jako text, nikdy jako HTML.

import { mrizka, zaokrouhli, lzePresunout, tah } from './mrizka.mjs';

const PX_MIN = 4;      // šířka jedné minuty v pixelech (30 min = 120 px)
const MIN = 60000;

let styl = false;
function pridejStyl() {
  if (styl) return; styl = true;
  const s = document.createElement('style');
  s.textContent = `
  .mz-obal { overflow-x: auto; border: 1px solid var(--cara); border-radius: 14px; background: rgba(255,255,255,.03); -webkit-overflow-scrolling: touch; }
  .mz { position: relative; }
  .mz-radek { display: flex; border-bottom: 1px solid var(--cara); }
  .mz-radek:last-child { border-bottom: 0; }
  .mz-kurt { position: sticky; left: 0; z-index: 2; flex: 0 0 72px; padding: 8px; font-size: 13px; font-weight: 700; color: var(--tlumeny); background: #1c1c23; border-right: 1px solid var(--cara); display: flex; align-items: center; }
  .mz-draha { position: relative; height: 64px; flex: 0 0 auto; }
  .mz-hlava .mz-draha { height: 28px; }
  .mz-hlava .mz-kurt { background: #1c1c23; }
  .mz-cas { position: absolute; top: 6px; font-size: 12px; color: var(--tlumeny); transform: translateX(-50%); white-space: nowrap; }
  .mz-cara { position: absolute; top: 0; bottom: 0; width: 1px; background: var(--cara); }
  .mz-ted { position: absolute; top: 0; bottom: 0; width: 2px; background: var(--micek); z-index: 1; }
  .mz-zapas { position: absolute; top: 5px; bottom: 5px; border-radius: 9px; padding: 4px 7px; font-size: 12px; line-height: 1.3; overflow: hidden; border: 1px solid var(--cara); background: rgba(255,255,255,.08); color: var(--text); text-align: left; font-family: inherit; cursor: default; }
  .mz-zapas div { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .mz-zapas .mz-maly { color: var(--tlumeny); font-size: 11px; }
  .mz-zapas.mz-hotovo { opacity: .55; }
  .mz-zapas.mz-bezi { border: 2px solid var(--micek); background: rgba(200,240,0,.12); }
  .mz-zapas.mz-lze { cursor: pointer; }
  .mz-zapas.mz-chyba { border: 2px solid #FF3B2F; }
  .mz-zapas.mz-vybrany { outline: 3px solid var(--micek); outline-offset: 1px; z-index: 3; }
  .mz-draha.mz-cil { cursor: copy; background: repeating-linear-gradient(90deg, transparent 0 14px, rgba(200,240,0,.05) 14px 15px); }
  .mz-legenda { display: flex; flex-wrap: wrap; gap: 14px; font-size: 13px; color: var(--tlumeny); margin: 8px 0; }
  .mz-legenda span::before { content: ""; display: inline-block; width: 12px; height: 12px; border-radius: 4px; margin-right: 6px; vertical-align: -1px; border: 1px solid var(--cara); background: rgba(255,255,255,.08); }
  .mz-legenda .l-bezi::before { border: 2px solid var(--micek); background: rgba(200,240,0,.12); }
  .mz-legenda .l-hotovo::before { opacity: .55; }
  .mz-legenda .l-chyba::before { border: 2px solid #FF3B2F; }
  .mz-fronta { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0; }
  .mz-fronta .mz-zapas { position: static; width: 190px; height: 52px; }
  body.tv .mz-zapas { font-size: 1vw; }
  .mz-zapas.mz-tahne { cursor: grab; }
  .mz-zavreno { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, rgba(255,255,255,.06) 0 6px, transparent 6px 12px); pointer-events: none; }
  .mz-zapas.mz-nanecisto { border-style: dashed; border-width: 2px; border-color: var(--micek); }
  .mz-zapas.mz-pevny { box-shadow: inset 4px 0 0 var(--text); }
  .mz-legenda .l-pevny::before { box-shadow: inset 4px 0 0 var(--text); }
  .mz-zapas.mz-pryc { opacity: .35; }
  .mz-okraj { position: absolute; top: 0; bottom: 0; width: 9px; cursor: ew-resize; touch-action: none; z-index: 2; }
  .mz-okraj::after { content: ""; position: absolute; top: 14px; bottom: 14px; left: 3px; width: 3px; border-radius: 2px; background: rgba(255,255,255,.35); }
  .mz-okraj.mz-l { left: 0; } .mz-okraj.mz-r { right: 0; }
  .mz-duch { position: absolute; top: 5px; height: 54px; border-radius: 9px; border: 2px dashed var(--micek); background: rgba(200,240,0,.15); z-index: 4; pointer-events: none; padding: 4px 7px; font-size: 12px; font-weight: 700; color: var(--text); white-space: nowrap; overflow: hidden; }
  .mz-duch.mz-lepi { border-style: solid; }
  body.mz-tazeni, body.mz-tazeni * { cursor: grabbing !important; user-select: none; }
  `;
  document.head.appendChild(s);
}

const hhmm = (ms, en) => new Date(ms).toLocaleTimeString(en ? 'en-GB' : 'cs-CZ', { hour: '2-digit', minute: '2-digit' });

/**
 * Nakreslí mřížku do kontejneru.
 * @param {HTMLElement} kam
 * @param {object} p
 *   zapasy     — zápasy ze serveru (kurt, kdy, zacatek, konec, stav)
 *   kurty      — názvy kurtů z nastavení turnaje
 *   delkaMin   — délka plánovaného zápasu
 *   popis(z)   — { a, b, maly } texty do políčka
 *   ted        — teď v ms (čas serveru)
 *   en         — anglicky
 *   X          — texty { kurt, bezCasu, hrajeSe, hotovo, planovano, chyba, pevny }
 *   chybne     — Set čísel zápasů s chybou (červený okraj)
 *   vybrany    — číslo vybraného zápasu (ťuknutí 1)
 *   naZapas(z) — ťuknutí na zápas (bez toho je mřížka jen ke čtení)
 *   naMisto(kurt, ms) — ťuknutí na místo v řádku kurtu, když je něco vybrané
 *   hodiny     — { kurt: { od, do } } v ISO: kdy je kurt volný (mimo šrafovaně)
 *   prestavkaMin — přestávka turnaje; zápas se k sousedovi přilepí s ní
 *   naTah(z, kurt, ms, delkaMin) — puštění zápasu po tahu myší nebo za okraj
 *                (bez toho se netahá; dotykem se dá táhnout jen okraj)
 */
export function kresliMrizku(kam, p) {
  pridejStyl();
  const ted = p.ted || Date.now();
  const g = mrizka(p.zapasy, p.kurty, p.delkaMin, ted);
  // Pořadatel potřebuje místo i za posledním zápasem (playoff z fronty, posun dozadu).
  if (p.naMisto && g.od != null) g.do += 60 * MIN;
  const staryPosun = kam.querySelector('.mz-obal') ? kam.querySelector('.mz-obal').scrollLeft : null;
  kam.textContent = '';
  const el = (tag, trida, text) => { const e = document.createElement(tag); if (trida) e.className = trida; if (text != null) e.textContent = text; return e; };

  const leg = el('div', 'mz-legenda');
  [['l-plan', p.X.planovano], ['l-bezi', p.X.hrajeSe], ['l-hotovo', p.X.hotovo]].concat(p.X.pevny && p.zapasy.some((z) => z.pevny_cas) ? [['l-pevny', p.X.pevny]] : [])
    .concat(p.chybne && p.chybne.size ? [['l-chyba', p.X.chyba]] : [])
    .forEach(([t, x]) => leg.appendChild(el('span', t, x)));
  kam.appendChild(leg);

  const policko = (z, styl) => {
    const lze = p.naZapas && lzePresunout(z);
    const b = el(lze ? 'button' : 'div', 'mz-zapas'
      + (z.stav === 'bezi' ? ' mz-bezi' : '') + (z.pevny_cas ? ' mz-pevny' : '') + (z.nanecisto ? ' mz-nanecisto' : '') + (z.stav === 'dohrany' || z.stav === 'ukonceny' ? ' mz-hotovo' : '')
      + (lze ? ' mz-lze' : '') + (p.chybne && p.chybne.has(z.cislo) ? ' mz-chyba' : '') + (p.vybrany === z.cislo ? ' mz-vybrany' : ''));
    if (lze) b.type = 'button';
    Object.assign(b.style, styl || {});
    const t = p.popis(z);
    b.appendChild(el('div', 'mz-maly', t.maly || ''));
    b.appendChild(el('div', '', t.a || '…'));
    b.appendChild(el('div', '', t.b || '…'));
    b.title = [t.maly, t.a, t.b].filter(Boolean).join('\n');
    if (lze) b.addEventListener('click', (e) => { e.stopPropagation(); if (poTahu) { poTahu = false; return; } p.naZapas(z); });
    return b;
  };

  // ---- Tah myší (část 2). Celý zápas táhne myš nebo pero; dotyk by tím
  // zablokoval posouvání mřížky prstem, proto prstem jen ťuknutí a okraje.
  let poTahu = false;
  const drahy = new Map(); // kurt → element dráhy
  const priprav = (b, x) => {
    const z = x.z;
    if (!p.naTah || !lzePresunout(z)) return;
    b.classList.add('mz-tahne');
    const l = el('div', 'mz-okraj mz-l'), rr = el('div', 'mz-okraj mz-r');
    b.appendChild(l); b.appendChild(rr);
    const zacni = (co) => (e) => {
      if (e.button) return;
      if (co === 'posun' && e.pointerType === 'touch') return;
      e.stopPropagation();
      const x0 = e.clientX, y0 = e.clientY;
      let hnuto = false, cil = null, duch = null;
      const obal = kam.querySelector('.mz-obal');
      const sl0 = obal ? obal.scrollLeft : 0;
      const kurtPod = (y) => {
        if (co !== 'posun') return x.kurt;
        for (const [k, d] of drahy) { const r2 = d.getBoundingClientRect(); if (y >= r2.top && y < r2.bottom) return k; }
        return cil ? cil.kurt : x.kurt;
      };
      const pohyb = (ev) => {
        if (!hnuto && Math.abs(ev.clientX - x0) < 4 && Math.abs(ev.clientY - y0) < 4) return;
        if (!hnuto) { hnuto = true; b.classList.add('mz-pryc'); document.body.classList.add('mz-tazeni'); }
        if (obal) { // u okraje se mřížka sama posouvá
          const ro = obal.getBoundingClientRect();
          if (ev.clientX > ro.right - 40) obal.scrollLeft += 12; else if (ev.clientX < ro.left + 112) obal.scrollLeft -= 12;
        }
        const dx = ev.clientX - x0 + (obal ? obal.scrollLeft - sl0 : 0);
        const kurt = kurtPod(ev.clientY);
        const sousede = g.polozky.filter((q) => q.kurt === kurt && q.z.cislo !== z.cislo);
        const v = tah(co, { od: x.od, do: x.do }, dx / PX_MIN * MIN, sousede, p.prestavkaMin);
        cil = { kurt, ...v };
        const d = drahy.get(kurt);
        if (!duch) duch = el('div', 'mz-duch');
        if (duch.parentNode !== d) d.appendChild(duch);
        duch.className = 'mz-duch' + (v.prichyceno ? ' mz-lepi' : '');
        duch.style.left = ((v.od - g.od) / MIN * PX_MIN + 1) + 'px';
        duch.style.width = Math.max(24, v.delkaMin * PX_MIN - 3) + 'px';
        duch.textContent = hhmm(v.od, p.en) + '–' + hhmm(v.od + v.delkaMin * MIN, p.en) + ' · ' + v.delkaMin + ' min';
      };
      const konec = (ev, zrusit) => {
        window.removeEventListener('pointermove', pohyb);
        window.removeEventListener('pointerup', pust);
        window.removeEventListener('pointercancel', zrus);
        window.removeEventListener('keydown', klav);
        document.body.classList.remove('mz-tazeni');
        if (duch) duch.remove();
        b.classList.remove('mz-pryc');
        if (!hnuto) return;
        poTahu = true; setTimeout(() => { poTahu = false; }, 0);
        if (zrusit || !cil) return;
        if (cil.kurt === x.kurt && cil.od === x.od && cil.delkaMin * MIN === x.do - x.od) return;
        p.naTah(z, cil.kurt, cil.od, cil.delkaMin);
      };
      const pust = (ev) => konec(ev, false);
      const zrus = (ev) => konec(ev, true);
      const klav = (ev) => { if (ev.key === 'Escape') konec(ev, true); };
      window.addEventListener('pointermove', pohyb);
      window.addEventListener('pointerup', pust);
      window.addEventListener('pointercancel', zrus);
      window.addEventListener('keydown', klav);
      e.preventDefault();
    };
    b.addEventListener('pointerdown', zacni('posun'));
    l.addEventListener('pointerdown', zacni('zacatek'));
    rr.addEventListener('pointerdown', zacni('konec'));
    // ťuknutí na okraj nemá vybrat zápas
    [l, rr].forEach((o) => o.addEventListener('click', (e) => e.stopPropagation()));
  };

  if (g.od != null) {
    const sirka = (g.do - g.od) / MIN * PX_MIN;
    const obal = el('div', 'mz-obal'); kam.appendChild(obal);
    const mz = el('div', 'mz'); mz.style.width = (sirka + 72) + 'px'; obal.appendChild(mz);
    // Hlavička s časy po půlhodinách
    const hl = el('div', 'mz-radek mz-hlava'); mz.appendChild(hl);
    hl.appendChild(el('div', 'mz-kurt', p.X.kurt));
    const hd = el('div', 'mz-draha'); hd.style.width = sirka + 'px'; hl.appendChild(hd);
    for (let t = g.od; t <= g.do; t += 30 * MIN) {
      const c = el('div', 'mz-cas', hhmm(t, p.en)); c.style.left = Math.min(sirka - 18, Math.max(18, (t - g.od) / MIN * PX_MIN)) + 'px'; hd.appendChild(c);
    }
    g.kurty.forEach((k) => {
      const r = el('div', 'mz-radek'); mz.appendChild(r);
      r.appendChild(el('div', 'mz-kurt', k));
      const d = el('div', 'mz-draha' + (p.vybrany && p.naMisto ? ' mz-cil' : '')); d.style.width = sirka + 'px'; r.appendChild(d);
      drahy.set(k, d);
      for (let t = g.od; t <= g.do; t += 30 * MIN) { const c = el('div', 'mz-cara'); c.style.left = (t - g.od) / MIN * PX_MIN + 'px'; d.appendChild(c); }
      // Kdy je kurt zavřený (mimo nastavenou dobu): šrafované.
      const hod = p.hodiny && p.hodiny[k];
      if (hod) {
        const ho = Date.parse(hod.od || ''), hd = Date.parse(hod.do || '');
        const pruh = (a, b) => { if (b <= a) return; const s = el('div', 'mz-zavreno'); s.style.left = (a - g.od) / MIN * PX_MIN + 'px'; s.style.width = (b - a) / MIN * PX_MIN + 'px'; d.appendChild(s); };
        if (Number.isFinite(ho)) pruh(g.od, Math.min(ho, g.do));
        if (Number.isFinite(hd)) pruh(Math.max(hd, g.od), g.do);
      }
      if (ted > g.od && ted < g.do) { const n = el('div', 'mz-ted'); n.style.left = (ted - g.od) / MIN * PX_MIN + 'px'; d.appendChild(n); }
      // Zápasy, které se na kurtu kryjí (kolize), jdou pod sebe, ať jsou čitelné.
      const naKurtu = g.polozky.filter((x) => x.kurt === k).sort((a, b) => a.od - b.od);
      const konceDrah = [];
      naKurtu.forEach((x) => {
        let i = konceDrah.findIndex((konec) => konec <= x.od);
        if (i < 0) { i = konceDrah.length; konceDrah.push(0); }
        konceDrah[i] = x.do; x.draha = i;
      });
      const drah = Math.max(1, konceDrah.length);
      d.style.height = (64 * drah) + 'px';
      naKurtu.forEach((x) => {
        const b = policko(x.z, { left: ((x.od - g.od) / MIN * PX_MIN + 1) + 'px', width: Math.max(24, (x.do - x.od) / MIN * PX_MIN - 3) + 'px',
          top: (x.draha * 64 + 5) + 'px', bottom: 'auto', height: '54px' });
        priprav(b, x);
        d.appendChild(b);
      });
      if (p.naMisto) d.addEventListener('click', (e) => {
        if (!p.vybrany) return;
        const x = e.clientX - d.getBoundingClientRect().left;
        p.naMisto(k, zaokrouhli(g.od + x / PX_MIN * MIN));
      });
    });
    if (staryPosun != null) obal.scrollLeft = staryPosun;
    else if (ted > g.od && ted < g.do) obal.scrollLeft = Math.max(0, (ted - g.od) / MIN * PX_MIN - 120);
  }

  if (g.bezCasu.length) {
    kam.appendChild(el('p', 'pozn', p.X.bezCasu));
    const f = el('div', 'mz-fronta'); kam.appendChild(f);
    g.bezCasu.forEach((z) => f.appendChild(policko(z)));
  }
  return g;
}
