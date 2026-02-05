const CACHE_NAME = 'eps-ubt-v2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './q21.mp3',
  './q22.mp3',
  './q23.mp3',
  './q24.mp3',
  './q25.mp3',
  './q26.mp3',
  './q27.mp3',
  './q28.mp3',
  './q29.mp3',
  './q29a.mp3',
  './q29b.mp3',
  './q29c.mp3',
  './q29d.mp3',
  './q30.mp3',
  './q30a.mp3',
  './q30b.mp3',
  './q30c.mp3',
  './q30d.mp3',
  './q31.mp3',
  './q31a.mp3',
  './q31b.mp3',
  './q31c.mp3',
  './q31d.mp3',
  './q32.mp3',
  './q32a.mp3',
  './q32b.mp3',
  './q32c.mp3',
  './q32d.mp3',
  './q33.mp3',
  './q33a.mp3',
  './q33b.mp3',
  './q33c.mp3',
  './q33d.mp3',
  './q34.mp3',
  './q35.mp3',
  './q36.mp3',
  './q37.mp3',
  './q37a.mp3',
  './q37b.mp3',
  './q37c.mp3',
  './q37d.mp3',
  './q38.mp3',
  './q39.mp3',
  './q40.mp3',
  'https://cdn-icons-png.flaticon.com/512/3062/3062634.png'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Gagamit tayo ng return Promise.all para mas madaling makita kung may error sa isang file
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
