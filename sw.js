/** Set Up Cache **/
let cacheName = 'fend-restaurant-01';
const cacheFiles = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/css/reset.css',
	'/data/restaurants.json',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/js/dbhelper.js',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg'
];

self.addEventListener('install', event => {
	console.log('[ServiceWorker] Installed');

	event.waitUntil(
		caches.open(cacheName)
		.then(cache => {
			console.log('[ServiceWorker] Caching cacheFiles');

			return cache.addAll(cacheFiles)
			
			.catch(error => {
				console.log('[ServiceWorker] Caches open failed ' + error);
			});
		})
	);
});

self.addEventListener('activate', event => {
	console.log('[ServiceWorker] Activated');

	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(cacheNames.map(thisCacheName => {

				if (thisCacheName !== cacheName) {
					console.log('[ServiceWorker] Removing cached files from ', thisCacheName);

					return caches.delete(thisCacheName);
				}
			}));
		})
		.catch(error => {
			console.log('[ServiceWorker] Failed to delete ' + thisCacheName + error);
		})
	);
});


self.addEventListener('fetch', event => {
	console.log('[ServiceWorker] Fetching', event.request.url);

	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) {
				console.log('[ServiceWorker] Found in cache: ', event.request.url);
				
				return response;
			
			} else {
				console.log('[ServiceWorker] Could not find in cache. Fetching!! ', event.request.url);
				
				return fetch(event.request)
				.then(response => {
					console.log('[ServiceWorker] Adding request to cache ', event.request.url);

					const clonedResponse = response.clone();

					caches.open('cacheName').then(cache => {
						cache.put(event.request, clonedResponse);
					})

					return response;
				})
				.catch(error => {
					console.log('[ServiceWorker] Fetching failed ' + error);
				})
			}
		})
	);
})

