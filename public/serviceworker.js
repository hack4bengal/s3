const CACHE_NAME = "version-1";

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/manifest.json', 
                    '/event.js',
                    '/h4bog.png',
                    '/favicon.ico',
                    '/image2vector.svg',
                    '/pre.gif',
                    '/preloader.css',
                    '/preloader.js',
                    '/privacy.txt',
                    '/robots.txt',
                    '/terms.txt',
                    '/assets/CCD-a5f800ed.png',
                    '/assets/egk-daa299d7.png',
                    '/assets/hell-energy-e7a37def.png',
                    '/assets/sabyasachi-min-d9d0eb41.png',
                    '/assets/CodeChamp_LOGO-c4ad9e50.jpg',
                    '/assets/fcf-369bf32f.png',
                    '/assets/hero1-d4c3fc47.png ',
                    '/assets/sc-eab92e99.png',
                    '/assets/Devorld_LOGO-72787efa.png',
                    '/assets/file10-02c1a9c8.png',
                    '/assets/hrittik-min-76559697.png',
                    '/assets/shardeum-51dbd1ea.png',
                    '/assets/Graphlogo1-0e5f7ed6.png/',
                    '/assets/flow-dfd4db5a.png',
                    '/assets/hyperlane-4c765352.png',
                    '/assets/snehangshu-min-2e45cd8b.jpg',
                    '/assets/Hack4Bengal-5cc82358.png',
                    '/assets/fontawesome-webfont-2adefcbc.woff2',
                    '/assets/index-3a12db0a.css',
                    '/assets/snu-90c75dee.png',
                    '/assets/IEIAOT_LOGO-7f517d78.png',
                    '/assets/fontawesome-webfont-7bfcab6d.eot',
                    '/assets/index-3a12db0a.css',
                    '/assets/solana-017649df.png',
                    '/assets/Nishant_Shah-0aebc1d7.jpeg',
                    '/assets/fontawesome-webfont-aa58f33f.ttf',
                    '/assets/intel-24329c14.png ',
                    '/assets/soumyadip-min-f1ff1e03.png',
                    '/assets/Postman-37d09973.png',
                    '/assets/fontawesome-webfont-ad615792.svg',
                    '/assets/jaydip-min-d429bd9d.png ',
                    '/assets/square-grey-logo-with-bottom-text-black-red-3fef9187.png',
                    '/assets/RaihanKhan-cfca2ebf.jpg',
                    '/assets/fontawesome-webfont-ba0c59de.woff',
                    '/assets/jyoti-min-2037df5e.png',
                    '/assets/square-white-logo-with-bottom-text-black-red-8f7118de.png',
                    '/assets/Resourcio_LOGO-1e85a21b.jpg',
                    '/assets/footer-999cd629.gif',
                    '/assets/jyotirmoy-min-a4591d7f.png',
                    '/assets/square-white-logo-with-bottom-text-white-91e44dee.png',
                    '/assets/advaita-min-ced2b9b4.png',
                    '/assets/h4b-form-fc6344fb.png',
                    '/assets/sc-eab92e99.png',
                    '../src/assets/events/landscapes/land1.png',
                    '../src/asets/events/landscapes/land2.png',
                    '../src/asets/events/landscapes/land3.png',
                    '../src/asets/events/landscapes/land4.png',
                    '../src/asets/events/landscapes/land5.png',
                    
                    
                    // Add other URLs for your assets (stylesheets, scripts, images, etc.)
                ]);
            })
    );
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return the response
                if (response) {
                    return response;
                }

                // Clone the request to avoid consuming it
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then((response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response to put it in the cache
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => caches.match('/index.html')); // Adjust the default fallback page
            })
    );
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    );
});
