console.log('WORKER:: running.');

const version = "15::"

const offlineFundamentals = [
    '/dist/app.bundle.css',
    '/dist/app.bundle.js'
]

self.addEventListener('install', function(event) {
    console.log('in install')
    // pre cache a load of stuff:
    event.waitUntil(
        caches
            .open(version + 'fundamentals')
            .then(function(cache) {
                cache.add('//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js')
                return cache.addAll(offlineFundamentals);

            })
            .then(function() {
                console.log('WORKER:: install completed');
            })
    )
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches
            .keys()
            .then(function (keys) {
                // We return a promise that settles when all outdated caches are deleted.
                return Promise.all(
                    keys
                        .filter(function (key) {
                            // Filter by keys that don't start with the latest version prefix.
                            return !key.startsWith(version);
                        })
                        .map(function (key) {
                            return caches.delete(key);
                        })
                );
            })
            .then(function() {
                console.log('WORKER:: activate completed.');
            })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function(response) {
            // Fall back to network
            // if (!response) throw Error("No data");
            //console.log(response ? response : 'no cache' + event.request.url)
            return response || fetch(event.request);
        }).catch(function() {
            /*
            console.log('no cache', event.request.url)
            return caches.open(version + 'fundamentals').then(function(cache) {
                return fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            })
            */
        })
    );
});


