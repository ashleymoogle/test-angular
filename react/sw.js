console.log('WORKER:: running.');

const version = "v1::"
const staticCacheName = `${version}static-resources`;

const offlineStuff = [
    '/dist/app.bundle.css',
    '/dist/app.bundle.js'
]

self.addEventListener('install', (event) => {
    console.log('in install')
    // pre cache a load of stuff:
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then((cache) => {
                cache.add('//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js')
                return cache.addAll(offlineStuff);

            })
            .then(() => {
                console.log('WORKER:: install completed');
            })
    )
});

self.addEventListener('activate',  (event) => {
    event.waitUntil(
        caches
            .keys()
            .then( (keys) => {
                // We return a promise that settles when all outdated caches are deleted.
                return Promise.all(
                    keys
                        .filter( (key) => {
                            // Filter by keys that don't start with the latest version prefix.
                            return !key.startsWith(version);
                        })
                        .map( (key) => {
                            return caches.delete(key);
                        })
                );
            })
            .then(() => {
                console.log('WORKER:: activate completed.');
            })
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then((response) => {
            // Fall back to network
            // if (!response) throw Error("No data");
            //console.log(response ? response : 'no cache' + event.request.url)
            return response || fetch(event.request);
        }).catch(() => {
            /*console.log('no cache', event.request.url)
            return caches.open(version + 'fundamentals').then((cache) => {
                return fetch(event.request).then((response) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            })*/
        })
    );
});


