const CACHE_NAME = 'eps-ubt-v4';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './audio/q21.mp3',
  './audio/q22.mp3',
  './audio/q23.mp3',
  './audio/q24.mp3',
  './audio/q25.mp3',
  './audio/q26.mp3',
  './audio/q27.mp3',
  './audio/q28.mp3',
  './audio/q29.mp3',
  './audio/q29a.mp3',
  './audio/q29b.mp3',
  './audio/q29c.mp3',
  './audio/q29d.mp3',
  './audio/q30.mp3',
  './audio/q30a.mp3',
  './audio/q30b.mp3',
  './audio/q30c.mp3',
  './audio/q30d.mp3',
  './audio/q31.mp3',
  './audio/q31a.mp3',
  './audio/q31b.mp3',
  './audio/q31c.mp3',
  './audio/q31d.mp3',
  './audio/q32.mp3',
  './audio/q32a.mp3',
  './audio/q32b.mp3',
  './audio/q32c.mp3',
  './audio/q32d.mp3',
  './audio/q33.mp3',
  './audio/q33a.mp3',
  './audio/q33b.mp3',
  './audio/q33c.mp3',
  './audio/q33d.mp3',
  './audio/q34.mp3',
  './audio/q35.mp3',
  './audio/q36.mp3',
  './audio/q37.mp3',
  './audio/q37a.mp3',
  './audio/q37b.mp3',
  './audio/q37c.mp3',
  './audio/q37d.mp3',
  './audio/q38.mp3',
  './audio/q39.mp3',
  './audio/q40.mp3',
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

