const CACHE_NAME = 'sthai-khata-v1';
const assets = [
  './index.html',
  './manifest.json'
];

// ইনস্টল করার সময় ফাইলগুলো ক্যাশ করে নেওয়া
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// অফলাইনে থাকার সময় ক্যাশ থেকে পেজ লোড করা
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
