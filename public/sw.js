// var CACHE_NAME = "info-sepakbola-v.7.7";
// var urlsToCache = [
// 	"/",
// 	"/assets/football.png",
// 	"/assets/laliga_2014.jpg",
// 	"/css/materialize.min.css",
// 	"/js/materialize.min.js",
// 	"/js/nav.js",
// 	"/pages/favorit.html",
// 	"/pages/jadwal.html",
// 	"/pages/klasemen.html",
// 	"/index.html",
// 	"/manifest.json",
// 	"/navigasi.html",
// 	"/push.js",
// 	"/js/api.js",
// 	"/tim.html",
// 	"/js/idb.js",
// 	"/js/db.js",
// 	"/req.js",
// 	"/sw-workbox.js",
// 	"/js/workbox-sw.js"
// ];

// self.addEventListener("install", function(event){
// 	console.log("Installing...");

// 	event.waitUntil(
// 		caches.open(CACHE_NAME).then(function(cache){
// 			return cache.addAll(urlsToCache);
// 		})
// 	);
// });

// self.addEventListener("activate", function(event){
// 	event.waitUntil(
// 		caches.keys().then(function(cacheNames){
// 			return Promise.all(
// 				cacheNames.map(function(cacheName){
// 					if(cacheName != CACHE_NAME && cacheName.startsWith("info-sepakbola")){
// 						console.log("ServiceWorker - cache", + cacheName + "deleted");
// 						return caches.delete(cacheName);
// 					}
// 				})
// 			);
// 		})
// 	);
// });

// self.addEventListener("fetch", function(event){
// 	const base_url = "https://api.football-data.org/v2";
// 	if(event.request.url.indexOf(base_url) > -1){
// 		event.respondWith(
// 			caches.open(CACHE_NAME).then(function(cache){
// 				return fetch(event.request).then(function(response){
// 					cache.put(event.request.url, response.clone());
// 					return response;
// 				})
// 			})
// 		);
// 	}else{
// 		event.respondWith(
// 			caches.match(event.request, {"ignoreSearch": true})
// 			.then(function(response){
// 				return response || fetch (event.request);
// 			})
// 		)
// 	}
// });


