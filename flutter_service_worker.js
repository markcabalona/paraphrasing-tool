'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3c6ed377618c2aa4c2dfd970b54009ff",
".git/config": "37a0335ee2c08d6fa8271dcc113e7e29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "52d4cccf6aed8db9bdaa50550ab40535",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ee1e66c60bd671f3a6cfd8506c8d48d",
".git/logs/refs/heads/main": "36cd73caefa480cad0dd292e5181b526",
".git/logs/refs/remotes/origin/main": "99e9774b33ce1d2da7437632d30de2b8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/1f565fd0dbd9edbdb0942a8963914238258a5e": "4413f3ba8fcf50edcc4029f4434cbd00",
".git/objects/18/58b40a5dea2f9a7959ffe568bf1a3ce3fde835": "aadb95fcc5d8ccffc60af2939bbc8d9b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/747a9498acac9037ade15ab27bfcb22e262995": "989ebe666b77930666513e3d820346f7",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/66f0c7b34cec6e3a13a7b36565574bc897f920": "a918ca3094677602373a99959737f7b9",
".git/objects/2d/8029a919e0abf351500bc96bc186ade729bed7": "d85f3282c3cec51979665cb87e9f619f",
".git/objects/30/e0104ee59675c81f74a177c185bf7317d426cc": "f3d1fcf135b0029d554547585e3b1b90",
".git/objects/3e/900ac05be2de1936776a42e159e821cbbbfd4a": "818572ff12fd8daf00c90f132ef981d8",
".git/objects/3f/33e99fee79d3b7253c3ebfa8c5c1b9d924936f": "97fa51b808c9cee3c6b6d0247a564187",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/bb67d65a3df624d2534cafefa678421af5f626": "52371e8bc7afddd4fe4bced6a2b6491f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/86be5e37017d93f957fa665aa95254876371a4": "00053d55e8dcb53caede99840f6bf57d",
".git/objects/4e/5501e5a2667cda0e4ee2e7b2c4d94c72f0a77a": "7e0d512ab2397b97a9ecd4fa67a73a72",
".git/objects/54/c8476f0003284de88b4583f420688cba3abe0d": "eacbb2ecdf4a3a3e6147a3d3b419caaa",
".git/objects/57/77fc53ee0f2ba09d327b3fe48260fa291b6e8e": "0d3dc0a275f58cf723172ade6b106629",
".git/objects/57/9e1ca3b32ecc687b979feae4523080b8540dbb": "3c737cb94e44277b66ece33b037835f3",
".git/objects/57/e059df997657d7612328e61ed215848530e70b": "8364e38b6f7fe24b18b5d7912323bc0a",
".git/objects/5e/b6edd5588ecd507c4295a373a6f1ade835a492": "4b4b3f9479f536ee0f3268a7fe77b676",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/61/b1a2e4a00e779570cb4e0be7393737cb3d5220": "de428c91c2047ad51d930032742d2538",
".git/objects/6e/dda5f17da0aaae7d2b8fe4cb738ea6dd5d939f": "e8bcc22f9e5e7250b6564a7e75ed03e1",
".git/objects/70/3bae695694134dbf39f7708136d9e13743f337": "ba5f14edb5435617c6f2b23c3a08d9f1",
".git/objects/71/2ff8b837696663dd186b5b8493cc14c8830b21": "fe67931c0009b5076eefbd41a81a28f2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/52807f17f7182fcf298f909eb1867987b44079": "c9c873f4e2f0adb8127c883ae16dee96",
".git/objects/7c/42ae9323eb289c97a04399c5bf58b882e3c08e": "005505d873ebfb453fd370012822cd0d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/86/b9a3693828a273e9bf76fd8d025fc20e9acc20": "3651d54da6751cda442ab92bca72c5a8",
".git/objects/86/d11e34524f5241e546ec3dc8b202ffcd910364": "1eacd736acef1e5a14968e8428d148f3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f4f156bd451c70b6d6a1424209361fd95643e6": "32de250c8edc48a0b68d7ffd6970dde9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/48d6723bd260d230c86fe8324c12e4ac7c1350": "865b945e0f1c414ed7696a93fa13bd9f",
".git/objects/9f/c4821029d4f958a67381e6e18e6fea925256ea": "948809fc9e422b39090f90a6d806f60e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d35225e504b77893472ce7773fab453332a42c": "0980bf0e9a06f2de2c44bfa32359b067",
".git/objects/a4/2d2401b99a4b64097842b8216ba473aa497ed4": "f1141b76c37478c63a23b9fb8001e213",
".git/objects/a8/6304cda2a326b5b542b27ef120f011bdcda5e8": "d1515915b5e2803b5bb1a147228fbc36",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/a5321936b39f628fa07ed97583b8e14d49cfc8": "4389978a82f6ca424cac1460c788e8d0",
".git/objects/af/5fbdc15f8fd5d4c4cdb17f1227f1faefbfc4df": "e7153061a27abcb2b7c739ce3fb66fd7",
".git/objects/b3/44378a3a261afa756e87f69f885728847941c0": "f2d814ccb759b916d1ad97fafedfb788",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8fc009404a3df8246b6b8ab6829f1092b465c7": "007dd966bf16d382d320963f70097b45",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/8b1e6babcb14fa0e0065c4d2c839f4d6910f96": "28a940260f4fa694b866d1a1eb73145c",
".git/objects/c3/403c818ce2b84ad89fcf0b860496b00671a0c3": "08fc181a54b11bf8a43eb173d170d929",
".git/objects/ca/5186248481396ecf5d5278da889e602e4141c0": "6aae3e91454e14b63e2b6f9bccb25b10",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/11d4ea47fd3ae35881a666e915c25cbdf01798": "ed6fec79a2b2915291a6096980ca2aad",
".git/objects/d2/0ce48e5c3448dca9764190d871b264eb15851f": "f0d1c6476a981d07571ddf87ee8a5c29",
".git/objects/d4/b257dda69ee72981a87125e3384e57ace2883e": "097897e20b3a10a1c71cfc7597e01486",
".git/objects/d5/b2f0100c663e38e40689ac3df80da9a8ee6c15": "399967cff8d60f9ae568a177b6e4537a",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/78c3e5a1273e44871691aaf182e5b7424c203e": "5d895e4a5e6906130b556e1acc5bde73",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/9e35357e95ae11497acc7dbba66a439b426287": "0736c7bb9d3b4a1ad483834276e4e4fd",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/09f2146233ccb66232e8ff42f2044cda043a15": "b98267b75daa0b4b31c0ab50b8e005c8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/7e6a69c8c06dead0060bcb2b9142725a0b94ec": "76abeccee15f30f6dd8eb2799bed2710",
".git/ORIG_HEAD": "1d722a035909681e442770f8c253bfc6",
".git/refs/heads/main": "4b4826d59b371fe060e96b4dbdede353",
".git/refs/remotes/origin/main": "4b4826d59b371fe060e96b4dbdede353",
"assets/AssetManifest.json": "4661661fe999972e917592543fb8a0b3",
"assets/assets/icons/pt-icon.png": "b65e5ee5dc2e4c5f4a1c3ee97de89399",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bfb646c838528e5e3f90a7becbd74cd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "645c60f78ec03306ac84bd70942edc62",
"/": "645c60f78ec03306ac84bd70942edc62",
"main.dart.js": "62b51197d24b5b463ce2323e9c7ab1f8",
"manifest.json": "2029c24d855fba23c6c8e114e9c3fe5e",
"version.json": "8111f97007fd8c2b9424ba95bb443917"
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
