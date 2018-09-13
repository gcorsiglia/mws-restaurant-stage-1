/** Set Up Cache **/
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
	event.waitUntil(
		caches.open('fend-restaurant-001')
		.then(cache => {
			return cache.addAll(cacheFiles)
			.catch(error => {
				console.log('Caches open failed ' + error);
			});
		})
	);
})
