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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3cf026414d141f3fb21c5af636a4293e"
  },
  {
    "url": "assets/css/1.styles.f1db1464.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/2.styles.5083f594.css",
    "revision": "e7d587538528e4b0c6e1665f7e8f4d68"
  },
  {
    "url": "assets/css/styles.bb9da5b7.css",
    "revision": "8a8e87718e39e190570c8e4799308e54"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f1db1464.js",
    "revision": "fd128f2da8ae52d6c0b7b508434914cb"
  },
  {
    "url": "assets/js/2.5083f594.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/3.84a5dcab.js",
    "revision": "46fbd86f11c3ce235d9fea38a18f0f77"
  },
  {
    "url": "assets/js/4.d94d639e.js",
    "revision": "811017b69a5ce17314dd9882183099d2"
  },
  {
    "url": "assets/js/5.c4977749.js",
    "revision": "1ea9d6402de16247f9bd511e5bd51da2"
  },
  {
    "url": "assets/js/6.e1b1b8f1.js",
    "revision": "0afd8ae678657dcb7586f6f05b756c00"
  },
  {
    "url": "assets/js/app.bb9da5b7.js",
    "revision": "51ecd24e4b2969d954d140a88bedacd7"
  },
  {
    "url": "es/guide/index.html",
    "revision": "f3b230fc3dcfd09d8264ce0e8deec1ba"
  },
  {
    "url": "es/index.html",
    "revision": "0dbc33c8475d9dbe05c1519e93b26735"
  },
  {
    "url": "guide/index.html",
    "revision": "5c812b46e6b408264d60c3be3ed21bab"
  },
  {
    "url": "img/psp-icon.svg",
    "revision": "c1035c0cd4aba75181a9b79aad500b46"
  },
  {
    "url": "img/psp-logo.png",
    "revision": "a576bd29a1446017a809ff137d6f4b24"
  },
  {
    "url": "img/psp-logo.svg",
    "revision": "545a2c900ec309b02602db5ad5889758"
  },
  {
    "url": "index.html",
    "revision": "d34038bfa05c9cae2cab4254125d3175"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
