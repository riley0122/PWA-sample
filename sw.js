const appName = "sample pwa app";
const root = "/pwa-sample"
const assets = [    // all files that will be cached
    `${root}/`,
    `${root}/index.html`,
    `${root}/js/app.js`,
    `${root}/css/style.css`,
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