// Skoretap na webu — práce bez signálu (rozhodnuti/050).
//
// Zápas se počítá v telefonu a na síť nikdy nečeká. Proto se celá aplikace
// uloží do mezipaměti a otevře se i bez signálu. Při nové verzi se změní
// VERZE a stará mezipaměť se smaže.
var VERZE = 'skoretap-app-12';
// Překlad (texty/<jazyk>.json) se uloží sám při prvním otevření se
// signálem — stahovat předem všech 24 jazyků by bylo zbytečné.
var SOUBORY = [
  './',
  './index.html',
  './manifest.webmanifest',
  './jadro/skoretap-jadro.mjs',
  './detail.js',
  './jazyky.js',
  './pozadi/kurt.jpg', './pozadi/hala.jpg', './pozadi/slunce.jpg', './pozadi/zelena.jpg', './pozadi/noc.jpg', './pozadi/rakety.jpg',
  './archivo.ttf',
  './ikona-180.png',
  './ikona-192.png',
  './ikona-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERZE).then(function (c) { return c.addAll(SOUBORY); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (klice) {
    return Promise.all(klice.filter(function (k) { return k !== VERZE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Nejdřív síť (ať se nová verze projeví hned), bez signálu mezipaměť.
// `no-cache`: prohlížeč se vždycky zeptá, jestli je soubor nový. Bez toho
// mu GitHub dovolí držet starou kopii 10 minut — 11. 11. 2026 tak oprava
// na skoretap.com chvíli nebyla vidět.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request.url, { cache: 'no-cache' }).then(function (odpoved) {
      var kopie = odpoved.clone();
      caches.open(VERZE).then(function (c) { c.put(e.request, kopie); });
      return odpoved;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true });
    })
  );
});
