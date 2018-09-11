/**
let cacheID = 'fend-restaurant-001';

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheID)
		.then(cache => {
			return cache
			.addAll([
				'/',
				'/index.html',
				'/restaurant.html',
				'/css/styles.css',
				'/data/restaurants.json',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/js/register.js',
				'/js/dbhelper.js'
			])
			.catch(error => {
				console.log('Caches open failed ' + error);
			});
		})
	)
})
**/
