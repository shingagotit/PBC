// Service Worker for Plan B Construction
const CACHE_NAME = 'planb-construction-v1';
const urlsToCache = [
    '/',
    '/main.html',
    '/quote.html',
    '/index.html',
    '/src/img/PBClogo.png',
    '/src/img/PBC.jpg',
    '/src/img/1.jpg',
    '/src/img/2.jpg',
    '/src/img/3.jpg',
    '/src/img/4.jpg',
    '/src/img/repairing.png',
    '/src/img/roof.png',
    '/src/img/sos.png',
    '/src/img/tool-box.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Cache opened');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.log('Service Worker: Cache failed', error);
            })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
            .catch(() => {
                // Fallback for offline
                if (event.request.destination === 'document') {
                    return caches.match('/main.html');
                }
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background Sync for form submissions
self.addEventListener('sync', (event) => {
    if (event.tag === 'contact-form-sync') {
        event.waitUntil(
            // Handle offline form submissions
            handleOfflineFormSubmission()
        );
    }
});

async function handleOfflineFormSubmission() {
    // This would handle form submissions when back online
    console.log('Handling offline form submissions');
}

// Push notifications (for future admin notifications)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New booking received!',
        icon: '/src/img/PBClogo.png',
        badge: '/src/img/PBClogo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Plan B Construction', options)
    );
}); 