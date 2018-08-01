importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "happy-birthday",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2f9097da8fa941199d4e.js",
    "revision": "1baa16cb6c5a2677223a83f9d99db501"
  },
  {
    "url": "/_nuxt/layouts_default.aaac32e980cad06d994e.js",
    "revision": "bc2d0fb98dd9551ec57d126a665deadd"
  },
  {
    "url": "/_nuxt/manifest.d9262e8c8d93dd20611b.js",
    "revision": "88e6a969243dfeb9cc03126c9159502a"
  },
  {
    "url": "/_nuxt/pages_aboutyou.e31783eb3875f54a2c67.js",
    "revision": "ed214f05cb3c4f4051b4321668b93180"
  },
  {
    "url": "/_nuxt/pages_final.5911bfbabfce7e06251f.js",
    "revision": "f68497b0ea8dbf90662bf82cef540f84"
  },
  {
    "url": "/_nuxt/pages_foryou.47a0cd30baa6c942ebd7.js",
    "revision": "ebae41de6f7478ba266e21d7350ccc71"
  },
  {
    "url": "/_nuxt/pages_index.7e2b3c6e0e9a0eba245a.js",
    "revision": "e0a8e646189d31e315cb0e93187cda62"
  },
  {
    "url": "/_nuxt/pages_reasons.051ded4891074081ba78.js",
    "revision": "1fe4389b9c2bc702e21cd6ec65d0c694"
  },
  {
    "url": "/_nuxt/vendor.52f4ebf3bb684687a4f7.js",
    "revision": "5e1db92cc055ef78315108f825d31855"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

