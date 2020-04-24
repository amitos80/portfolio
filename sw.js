/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js"
  },
  {
    "url": "1bfc9850-674029a6970ab3fbeb64.js.map",
    "revision": "e1ca078b1d20c649264983cc10081ef0"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js"
  },
  {
    "url": "252f366e-36b492e5794f9d1e61c1.js.map",
    "revision": "2b7af209568896d43ae1fcf6195d532e"
  },
  {
    "url": "404.html",
    "revision": "6a5b7ea07111ada1ab5d3f8f2d398582"
  },
  {
    "url": "404/index.html",
    "revision": "f2521fe526c9416e4261a59ee52c3ef9"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js"
  },
  {
    "url": "95b64a6e-7df4b477ec432349209d.js.map",
    "revision": "d6c63b2ca14736c51bb6d230c2300200"
  },
  {
    "url": "app-ec5c54057c83de9b60eb.js"
  },
  {
    "url": "app-ec5c54057c83de9b60eb.js.map",
    "revision": "1d54b232ddd770e6a3db20aa6c82fff3"
  },
  {
    "url": "chunk-map.json",
    "revision": "3ddee5c3d28d5109995f5f4cde9bd8fa"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-18b9bd78e89bbe4752a5.js.map",
    "revision": "62178bfc944a09db661e9157ace17cbe"
  },
  {
    "url": "component---src-pages-404-js-f041753f241893c6a803.js"
  },
  {
    "url": "component---src-pages-404-js-f041753f241893c6a803.js.map",
    "revision": "f3c2f59e70f621e379afc2ba8eb4fea1"
  },
  {
    "url": "component---src-pages-index-js-fcf8027589fbaa734401.js"
  },
  {
    "url": "component---src-pages-index-js-fcf8027589fbaa734401.js.map",
    "revision": "2cc04a4c1b9214fffbdbe694f0403aa3"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "60e4e9c72296b98f6d366846eb00660d"
  },
  {
    "url": "framework-972833c791692296cdd7.js"
  },
  {
    "url": "framework-972833c791692296cdd7.js.map",
    "revision": "f85b605096898e9453bfc50ac66c3f90"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "aa6736162640665185e1d71965f6e8b7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "f4dd8f0401ff0562d771e6e87189d0a3"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "6708fea9cdf67b642b1c0c8012eac416"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c30ec65a9f6e9069a17760cf750cda9f"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "b285aa0999af991ce831684181618730"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "83803c6f96711ef00e791c4cbdc9c70a"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "79331da520575a9372537d87a292ac7e"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "1a909eb19bf2f185dc432889061c56c6"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "9215051407b601cb80a741f8a9822503"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "79030751105fba0881c2df2d7b5a66ca"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "09ee42860c3d0ef5e3174e9f3ae5c37a"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "c628f5f075112896faf48f76ba2d912e"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "static/d/1013331041.json"
  },
  {
    "url": "static/d/1163432668.json"
  },
  {
    "url": "static/d/1281174074.json"
  },
  {
    "url": "static/d/2594087537.json"
  },
  {
    "url": "static/d/297506416.json"
  },
  {
    "url": "static/d/3208941252.json"
  },
  {
    "url": "static/d/353842809.json"
  },
  {
    "url": "static/d/3731995382.json"
  },
  {
    "url": "static/d/765055119.json"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js"
  },
  {
    "url": "styles-6b8affa5cc22cb60670e.js.map",
    "revision": "1720725fc6619054e7d1014b20e71571"
  },
  {
    "url": "styles.28c8650698d995b47809.css"
  },
  {
    "url": "webpack-runtime-8ef48d81a6e026c61eb9.js"
  },
  {
    "url": "webpack-runtime-8ef48d81a6e026c61eb9.js.map",
    "revision": "12ed6c499affa2d133dede1880a1b785"
  },
  {
    "url": "webpack.stats.json",
    "revision": "b2d56502a726ef15e808b4bd8ea8f80a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-ec5c54057c83de9b60eb.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
