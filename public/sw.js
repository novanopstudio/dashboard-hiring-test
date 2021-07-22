let cacheData = "appV1";
this.addEventListener("install", (event) => {
   event.waitUntil(caches.open(cacheData).then((cache) => {
      cache.addAll([
         '/static/js/vendors~main.chunk.js',
         '/static/js/0.chunk.js',
         '/static/js/bundle.js',
         '/index.html',
         '/',
         '/manifest.json',
         '/logo192.png',
         '/favicon.ico',
         '/offline.png'
      ])
   }))
})

self.addEventListener('fetch', function (event) {
   if (!navigator.onLine) {
      event.respondWith(
         fetch(event.request).catch(function () {
            return caches.match(event.request);
         })
      );
   }
});
