const appName = "sample pwa app";
const assets = [    // all files that will be cached
    "/",
    "/index.html",
    "/js/app.js",
    "/css/style.css",
]

self.addEventListener("install", (InstallEvent) => {
    InstallEvent.waitUntil(
        caches.open(appName).then((cache) => {
            cache.addAll(assets);
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})