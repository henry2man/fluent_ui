'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_9.part.js": "7e9030becdb23057214ba0eff9c4d0f9",
"main.dart.js_7.part.js": "594ab0bcd4257d552f2729076a8c24ef",
"main.dart.js_17.part.js": "8e357c6dbbd1c278aea19868bb25b3c3",
"splash/style.css": "f8e8383c64b765de4871c2b23e30b102",
"splash/img/dark-1x.png": "4485d4d6ec1ccc89f93c3fd4838d0e50",
"splash/img/dark-2x.png": "2d9b17fa4e4ecbc711c838fa5b903c18",
"splash/img/light-3x.png": "e6854e8554dd5216edd8d93e70670117",
"splash/img/dark-3x.png": "e6854e8554dd5216edd8d93e70670117",
"splash/img/light-2x.png": "2d9b17fa4e4ecbc711c838fa5b903c18",
"splash/img/light-1x.png": "4485d4d6ec1ccc89f93c3fd4838d0e50",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"main.dart.js_14.part.js": "6922721775b4cf03239c279a40189691",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_5.part.js": "8c703cd2d027e416c0de04b7274e354c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "19ca671730a4e1cd3c62155414a22af0",
"/": "19ca671730a4e1cd3c62155414a22af0",
"main.dart.js_10.part.js": "21e45afd2e57fbb46a797ca27f93aa47",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"main.dart.js": "13915dfa6fc8b2db9c35acde0416bb18",
"main.dart.js_6.part.js": "3757934ee6b015be61214dae46fcfa7b",
"main.dart.js_22.part.js": "9bbf332734c2ae7037494717766c0319",
"main.dart.js_4.part.js": "de6db273f799ef9dd272613d03a56a5d",
"main.dart.js_13.part.js": "28db58e0c0b272c66359bec81595207a",
"main.dart.js_15.part.js": "7f8d8594740956bdb95171875c9d2cec",
"main.dart.js_2.part.js": "46cfbb66db7aa668501a4683070460ba",
"main.dart.js_21.part.js": "8327c5c07929bbc81116631e44fb968e",
"main.dart.js_18.part.js": "4e0de78a677cb7c54018b14ee3abac43",
"main.dart.js_3.part.js": "c8d94ab2ac8b09cebd2eff943e79a9f2",
"main.dart.js_16.part.js": "f860485d125967dec9b77079dc45cb2c",
"assets/flutter_logo.png": "8ba1d5b022cd7f5999bea3085e87ceb0",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/NOTICES": "1d15271743414402be6010e712ccf301",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/shaders/ink_sparkle.frag": "1ed03b0025463b56a87ebe9d27588c8a",
"main.dart.js_1.part.js": "7ba512c6bdcd0e7bbf03c5ef06b3727b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_12.part.js": "f54f6d7bff5dcbf5a2b6c22a27834482",
"main.dart.js_8.part.js": "78e3b95896a4e98046f7cd1a830dae5e",
"main.dart.js_19.part.js": "76554ba721c7e0e27185c2324c13b10a",
"main.dart.js_11.part.js": "01ef6da02596ac1edb07df9f8e07a1b1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
