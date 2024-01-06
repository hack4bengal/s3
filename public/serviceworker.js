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
                    '/serviceworker.js',
                    '/favicon.ico',
                    '/dist/registerSW.js',
                    'dist/manifest.webmanifest',
                    'dist/index.html',
                    'dist/assets/linkedin_logo-1d5155e8.svg',
                    'dist/assets/nftday-0eea9e94.svg',
                    'dist/assets/quine-398a506b.svg',
                    'dist/assets/facebook_logo-d3d55584.svg',
                    'dist/assets/facebook_logo-d3d55584.svg',         
                    'dist/assets/twitter_logo-ab1481c6.svg',         
                    'dist/assets/instagram_logo-59951254.svg',         
                    'dist/assets/flow-c60852d2.svg',                  
                    'dist/assets/github_logo-d15b7c06.svg',            
                    'dist/assets/skd-87461c66.png',                    
                    'dist/assets/rd-355fde3a.png',                    
                     'dist/assets/dc-dad020eb.png',                    
             'dist/assets/ds-b82b21bf.png',                    
             'dist/assets/sc-8e8204cd.png',                    
             'dist/assets/solana-d66c586e.svg',                    
             'dist/assets/xyz-3b3d5765.webp',                  
             'dist/assets/zeeve-99d167be.png',                 
             'dist/assets/ag-7897f256.png',                    
             'dist/assets/intel-52b2c221.webp',                
             'dist/assets/mule-73539189.png',                  
             'dist/assets/hell-a29777d3.jpg',                  
             'dist/assets/devfolio-5c9760c1.png',  
             'dist/assets/foss-b5b142fa.png',                  
             'dist/assets/github-9e7933cb.png',                
             'dist/assets/flutterkolkata-fbc48140.svg',         
             'dist/assets/navbar_h4b_logo-69272949.png',       
             'dist/assets/blob_left-9ebf8ae6.png',             
             'dist/assets/hyperlane-e3c3863f.png',             
             'dist/assets/blob_right-eea1c2c5.png',            
             'dist/assets/six-192e5312.jpg',                   
             'dist/assets/logitech-b441fe98.jpg',              
             'dist/assets/akshita-51ca1f1a.png',               
             'dist/assets/polygon-3dd64a40.png',               
             'dist/assets/filbangalore-ca7e1ee6.svg',           
             'dist/assets/soumyadip-82d928fa.png',             
             'dist/assets/edu-7cb084aa.png',                   
             'dist/assets/devfestsiliguri2023-3efb775b.svg',    
             'dist/assets/RaihanKhan-ada1ec1c.png',            
             'dist/assets/kolkatapolygonguild-8a38d419.svg',    
             'dist/assets/saby-d668ce67.png',                  
             'dist/assets/postman-37d09973.png',               
             'dist/assets/hrittik-35c246f4.png',               
             'dist/assets/five-4501f1dc.jpg',                  
             'dist/assets/anubhav-09442182.png',               
             'dist/assets/kazi-d2896b75.png',                  
             'dist/assets/sunit-f3193b27.png',                 
             'dist/assets/gccd2023-843c8cb0.svg',               
             'dist/assets/35-53a00184.jpg',                   
             'dist/assets/43-46b9cf96.jpg',                    
             'dist/assets/jyoti-30f65cf1.png',                 
             'dist/assets/bridge-d149341b.png',                
             'dist/assets/Advaita-cf0cfb5b.png',               
             'dist/assets/niloy-c4e1d3dc.png',                 
             'dist/assets/sabyasachi-db0a2596.png',            
             'dist/assets/gourav-cb018238.png',                
             'dist/assets/snehangshu-dc71542e.png',            
             'dist/assets/hackthisfall-fc89c3dd.svg',           
             'dist/assets/four-fcf58ba4.jpg',                  
             'dist/assets/jaydip-ddd581a9.png',                
             'dist/assets/riddhi-c2a12e97.png',                
             'dist/assets/Nishant-fe29fcaf.png',               
             'dist/assets/richik-60ccf703.png',                
             'dist/assets/ff-01613893.png',                    
             'dist/assets/jyotirmoy-7aea07f1.png',             
             'dist/assets/nasirul-54187871.png',               
             'dist/assets/fvm-86d57b72.webp',                  
             'dist/assets/5-415cbdd6.jpg',                     
             'dist/assets/gdg-c3041dd9.png',                   
             'dist/assets/kolkatafoss-c1742935.svg',            
             'dist/assets/7-fcc097d0.jpg',                     
             'dist/assets/web3reinvent-84d603f7.svg',           
             'dist/assets/brb-9e18ef98.svg',                    
             'dist/assets/brandLogo-8f7118de.png',             
             'dist/assets/dataverseos-02b4ad07.svg',            
             'dist/assets/nordek-41e94c45.svg',                 
             'dist/assets/wbgov-d3cc45ac.svg',                  
             'dist/assets/victoria-b173ae24.png',             
             'dist/assets/snu-90c75dee.png',                  
             'dist/assets/hackverse-38778618.svg',              
             'dist/assets/wbgovcs-27b0f99e.svg',                
             'dist/assets/footer_h4b_logo-0a47d99b.svg',       
             'dist/assets/PrizesBox2-9626c145.png',           
             'dist/assets/footer_bg-5b4bb7e1.svg',             
             'dist/assets/index-67f9fe9d.css',                  
             'dist/assets/index-2727c8e6.js', 
                    
                    
                    
                    
                ]);
            })
    );
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                
                if (response) {
                    return response;
                }

                
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then((response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                       
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => caches.match('/index.html')); 
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
