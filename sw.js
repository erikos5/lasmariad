const CACHE_NAME = 'lasmari-restaurant-v1.2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './images/logo/website_logo_large.png',
  './images/slideshow/d1467d04-1ad0-4a2e-8839-2f0d91366755.JPG',
  './images/slideshow/DSC04796.JPEG',
  './images/slideshow/DSC04822%20(1).JPEG',
  './images/slideshow/IMG_8525.JPEG',
  './images/slideshow/IMG_8568.JPEG',
  './images/background/d1467d04-1ad0-4a2e-8839-2f0d91366755.JPG',
  './images/background/DSC04796.JPEG',
  './images/background/DSC04822%20(1).JPEG',
  './images/background/IMG_8525.JPEG',
  './images/background/IMG_8568.JPEG',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Cache failed:', error);
        // Continue even if some resources fail to cache
        return Promise.resolve();
      })
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // If both cache and network fail, return offline page
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      }
    )
  );
});

// Activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
