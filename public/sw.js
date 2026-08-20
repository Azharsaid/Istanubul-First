const CACHE="first-istanbul-v4";
const CORE=["/","/manifest.webmanifest","/FIRST-Istanbul-2026.ics","/assets/first-theme.jpg","/assets/first-logo.png","/assets/hero-istanbul.png","/assets/first-event-pattern.png","/assets/dar-aldawa-logo-transparent.png","/assets/dr-suliman-soudi.jpg","/assets/dr-feras-zuriekat.jpg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;event.respondWith(fetch(event.request).then(response=>{const clone=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,clone));return response}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match("/"))))});
