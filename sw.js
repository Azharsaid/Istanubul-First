const VERSION = "first-istanbul-v6";
const base = new URL(self.registration.scope).pathname.replace(/\/$/, "");
const url = path => `${base}${path}` || "/";
const CORE = ["/", "/manifest.webmanifest", "/FIRST-Istanbul-2026.ics", "/gallery.json", "/assets/first-theme.jpg", "/assets/first-logo.png", "/assets/hero-istanbul.png", "/assets/dar-aldawa-logo-transparent.png", "/assets/dr-suliman-soudi.jpg", "/assets/dr-feras-zuriekat.jpg"].map(url);
self.addEventListener("install", event => event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => {
    const fresh = fetch(event.request).then(response => { if (response.ok && response.type !== "opaque") caches.open(VERSION).then(cache => cache.put(event.request, response.clone())); return response; });
    return cached || fresh.catch(() => caches.match(url("/")));
  }));
});
