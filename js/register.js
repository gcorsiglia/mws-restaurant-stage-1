/* Set up service worker */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('/sw.js')
	.then(reg => {
		console.log('SW registration successful ' + reg.scope);
	})
	.catch(error => {
		console.log('Registration failed ' + error);
	})
}