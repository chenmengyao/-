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

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
  "precache-manifest.c19788ca07348ac02ad2a74732a42cf2.js"
=======
  "precache-manifest.038c15a88a99a5b017e73406d530ecd9.js"
>>>>>>> 6d20d5d60111dc2cf53f5a0e141b6eb32d07f979
=======
  "precache-manifest.038c15a88a99a5b017e73406d530ecd9.js"
>>>>>>> 6d20d5d60111dc2cf53f5a0e141b6eb32d07f979
);

workbox.core.setCacheNameDetails({prefix: "webapp"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
