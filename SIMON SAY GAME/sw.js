const CACHE_NAME = 'mindmatrix-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './asset/bg.png',
  './asset/favicon.png',
  './asset/monkey.gif',
  './asset/simon-1.jpg',
  './sound/button.mp3',
  './sound/game.mp3',
  './sound/psy.mp3',
  './sound/success.mp3',
  './sound/wrong.mp3'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
