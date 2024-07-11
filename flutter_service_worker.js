'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fb938d9c0e1a4420d27ff763ac818830",
"version.json": "38306938d0d66cb91149cd340bd22c3c",
"index.html": "b6b8de4308bc27e87b1191060d9afcf9",
"/": "b6b8de4308bc27e87b1191060d9afcf9",
"main.dart.js": "e271ec6a650de1c8d956d756bf7af4fd",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "282b0a346d8e0ae2e5c1f6a6846f829d",
"assets/AssetManifest.json": "9bd7f9fa2f936d18f8648812de3a61a8",
"assets/NOTICES": "0c08abcabeaf7129d3199c15b5b88143",
"assets/FontManifest.json": "03b3e8ba266e32b5e5ff4edee9c421c5",
"assets/AssetManifest.bin.json": "117553fbce274e5df72f792376219ecf",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ba2ab48ccf5b3cc26ec4b5e63ba9a803",
"assets/fonts/MaterialIcons-Regular.otf": "e40d6c0ed5635a5d8b46978930165006",
"assets/assets/images/mg-base.png": "deba0329701a59c12f8904235539de19",
"assets/assets/images/button-start-hover.png": "39d7ee03962ad766b66be34336343e75",
"assets/assets/images/fg-light-receive.png": "9981f29fa2d3814768cbf9695eb7b861",
"assets/assets/images/fg-base.png": "9742f524c248f9795e59132bda584982",
"assets/assets/images/select-right.png": "a6c979b3eae49cde6c7d5797dc357034",
"assets/assets/images/mg-light-receive.png": "6e0e1018b6cf20f4747f5c4ef3e6f58d",
"assets/assets/images/fg-light-emit.png": "d398c8fab13becd0da8995be2a3c7799",
"assets/assets/images/bg-base.jpg": "3c258b33e7a71dee7ae8e3c4e83dd04f",
"assets/assets/images/bg-light-receive.png": "2f6ba99f8eea020027e10b9778b666ad",
"assets/assets/images/button-start.png": "748701e42abc14ebc65963234d9a7b6a",
"assets/assets/images/particle-wave.png": "d6b73c1346b8ffd48de351cfab3daaad",
"assets/assets/images/mg-light-emit.png": "076ed5490a67d7d300832d86778adfc0",
"assets/assets/images/select-left.png": "b3fbaf9a7b1b72c26880c5bdfde6e33c",
"assets/assets/gifs/pizza_app.gif": "b85e6941eaa92a828843f07f95c2ae65",
"assets/assets/gifs/food_order_app.gif": "1fcc2241ebceecb5603603a31e8a5e03",
"assets/assets/gifs/health_app.gif": "d8e4a434a31eeb5faca01b0545063714",
"assets/assets/gifs/finance_app.gif": "5652367e2475e2a6f9d496a27f7a3903",
"assets/assets/gifs/parallex_app.gif": "d8fa068d65cf66ac3d36b00ae6db3ce0",
"assets/assets/gifs/background.gif": "311a5fc00978cfbed1892e2a4ee73fcf",
"assets/assets/shaders/orb_shader.frag": "f6e6396d6af101c19c63e326811ccc69",
"assets/assets/shaders/ui_glitch.frag": "925c35858d27f18ff208470bf17bfede",
"assets/assets/fonts/Exo-Medium.ttf": "822a35349a144a97433b82d94df61d1a",
"assets/assets/fonts/Exo-Bold.ttf": "a939d1d0769c88bde068c8570e5f3f22",
"assets/assets/fonts/OFL.txt": "e542a680112942b035ac18d476288952",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
