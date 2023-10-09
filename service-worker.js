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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4fc6e1f41502bf9ea8c5b2e7d3ce5622"
  },
  {
    "url": "assets/css/0.styles.7105a0d8.css",
    "revision": "11adeae715c38d3669dbef6b185946cc"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/avatar.606904e3.jpg",
    "revision": "606904e3199778c994eef7693c7e95c0"
  },
  {
    "url": "assets/img/avatar.jpg",
    "revision": "606904e3199778c994eef7693c7e95c0"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c9295007.js",
    "revision": "56ccc68960bc6d82a46d3d02eb9df03a"
  },
  {
    "url": "assets/js/11.8a762794.js",
    "revision": "dfbd637b366d4f53cb7dca3a06556e4c"
  },
  {
    "url": "assets/js/12.f7f707df.js",
    "revision": "bf6d25d1cb0eef4cf4bba0d3b485553a"
  },
  {
    "url": "assets/js/13.665a9da1.js",
    "revision": "cd1442e4a32a41c216a7215cd86cea91"
  },
  {
    "url": "assets/js/14.fb0e74fb.js",
    "revision": "1c5e4d286784269b2193c17eb99d1a3a"
  },
  {
    "url": "assets/js/15.39244732.js",
    "revision": "72f426bac8c202487c8a6cea8735fb57"
  },
  {
    "url": "assets/js/16.d3857c6d.js",
    "revision": "1f75ff1c973a411350cb24dd31f0e2b0"
  },
  {
    "url": "assets/js/17.5111d43f.js",
    "revision": "5e98b2df6b7ccbb54593879593f6b75c"
  },
  {
    "url": "assets/js/18.d43a0c3d.js",
    "revision": "e8b01a3ea1d135fadb018bd24f368f3a"
  },
  {
    "url": "assets/js/19.4335de67.js",
    "revision": "d1cbe37fc66de2f6134becb631701299"
  },
  {
    "url": "assets/js/2.c8cfe783.js",
    "revision": "ae2956de0d48024b5fa79ae8ed83e1a9"
  },
  {
    "url": "assets/js/20.abc6da06.js",
    "revision": "30b6911f732b1a09251edd1df11109d0"
  },
  {
    "url": "assets/js/21.a3272266.js",
    "revision": "16184d3cb12611d2784169af9e74c061"
  },
  {
    "url": "assets/js/22.3da0a327.js",
    "revision": "d97519a161a3dfbfbc23c1c08c605804"
  },
  {
    "url": "assets/js/23.d925d986.js",
    "revision": "3bf763392b3bff7e0d2d3dc1a2c76a00"
  },
  {
    "url": "assets/js/24.fc7e92ce.js",
    "revision": "f7c27538eda960ba174bdf00321837b6"
  },
  {
    "url": "assets/js/25.6aa48522.js",
    "revision": "753c7c7f4937d34ff359db2f0eb85b65"
  },
  {
    "url": "assets/js/26.02b018a7.js",
    "revision": "75566e57f3c8e88c0f78fec9e3228bf8"
  },
  {
    "url": "assets/js/27.c1391d0d.js",
    "revision": "2807d418bef706ae727cdfdd55eb9c84"
  },
  {
    "url": "assets/js/28.a79f6fa2.js",
    "revision": "eb8fdfb4400a8e0023fdc26d854d7de7"
  },
  {
    "url": "assets/js/29.27cf4176.js",
    "revision": "f652f640e1da903672fe1aa9261dbaa5"
  },
  {
    "url": "assets/js/3.0b24d84b.js",
    "revision": "b87ffc38183fca99c62373e0989d4bf0"
  },
  {
    "url": "assets/js/30.b237c7e1.js",
    "revision": "7e2e51fb6e468f39e93f55f2503093a1"
  },
  {
    "url": "assets/js/31.a1b437d6.js",
    "revision": "a687604e816b021ddea93093d722934b"
  },
  {
    "url": "assets/js/32.8b6c4bf1.js",
    "revision": "8612850ea02f59aba2fa0b7f172a5ff4"
  },
  {
    "url": "assets/js/33.390c5077.js",
    "revision": "6ca7ce4a8101a41a647fc5f28c1f0df6"
  },
  {
    "url": "assets/js/34.dd38a24f.js",
    "revision": "2dfdc5661f47f8055388bb55728fe3f1"
  },
  {
    "url": "assets/js/35.3347653e.js",
    "revision": "9423b38851d90e803e37dc344aca75f5"
  },
  {
    "url": "assets/js/36.bab9a402.js",
    "revision": "0b24eb273d143f81597d73bdae611765"
  },
  {
    "url": "assets/js/37.a6349b4c.js",
    "revision": "006164d40a1d7ae2c917b75bd4b7a95a"
  },
  {
    "url": "assets/js/38.16866546.js",
    "revision": "c91379bfdcdce0a1f1640e15e3e80531"
  },
  {
    "url": "assets/js/39.2d3030f8.js",
    "revision": "500a42d5c8cff93228f91cf0b8969008"
  },
  {
    "url": "assets/js/4.13f947be.js",
    "revision": "2a576a86d8bb6f3558336924d918d497"
  },
  {
    "url": "assets/js/40.cb37a09a.js",
    "revision": "55c897725cc4c2769b3913b25fc8bdea"
  },
  {
    "url": "assets/js/41.137de55c.js",
    "revision": "d32dd8f34df6671a7209c88460d90b6f"
  },
  {
    "url": "assets/js/42.eeae4d12.js",
    "revision": "953725356fc7ec9c72b5063cfc2b0af8"
  },
  {
    "url": "assets/js/43.462beb82.js",
    "revision": "7c33729965608adfb8770e927b22eb47"
  },
  {
    "url": "assets/js/44.d16dec3d.js",
    "revision": "79f973f37ec629712c424de7d626af90"
  },
  {
    "url": "assets/js/45.36a8eca6.js",
    "revision": "632da6b94d00b3d745ec62f022684237"
  },
  {
    "url": "assets/js/46.39ba30ca.js",
    "revision": "f9df54d09ef01e848d3a09597a9e2e3b"
  },
  {
    "url": "assets/js/47.94029564.js",
    "revision": "1fd16566623c9a2e73ef9927eb772d3b"
  },
  {
    "url": "assets/js/5.ad009a2c.js",
    "revision": "e7c418258d7ddab219739398af4d8c33"
  },
  {
    "url": "assets/js/6.ae13a571.js",
    "revision": "5ff2243be7976c768e14bb3eb0ca77c2"
  },
  {
    "url": "assets/js/7.570af84c.js",
    "revision": "df0c8439b8d4b59983666d5137145c82"
  },
  {
    "url": "assets/js/8.801996cf.js",
    "revision": "7ee017ef4520bd2bf6e76b9fb78d3702"
  },
  {
    "url": "assets/js/9.04e8b934.js",
    "revision": "bd11bb9d810c5e02259732f421e6d810"
  },
  {
    "url": "assets/js/app.9f46b244.js",
    "revision": "f195aac1972b0d9e39e6fd340d0f0a67"
  },
  {
    "url": "dayRecord/heart/index.html",
    "revision": "ee670b12e119c7621711e2aede6d50ce"
  },
  {
    "url": "icons/bg.jpg",
    "revision": "c74b51c61561cc4533a449cc928bbeb6"
  },
  {
    "url": "index.html",
    "revision": "fe5879b0d2f0538577a636b4918e2bbd"
  },
  {
    "url": "language/chinese.html",
    "revision": "f9dc942fb42246177abf14aca3f20e9c"
  },
  {
    "url": "language/english.html",
    "revision": "1b1705dd4f3eabe292323828e87187f9"
  },
  {
    "url": "language/index.html",
    "revision": "0964c2d59f571f06199c18e290de78ed"
  },
  {
    "url": "myProject/chartRoom/index.html",
    "revision": "b4d66a18c4da0ebed82c1188c0f94746"
  },
  {
    "url": "myProject/chartRoom/socketIo.html",
    "revision": "5535f297002f8017a5d39a91e43466e1"
  },
  {
    "url": "myProject/chartRoom/webBuild.html",
    "revision": "68804be4d98d9b0e77ba8b7ebe75d364"
  },
  {
    "url": "vuePress/componentGuide/index.html",
    "revision": "94adff7eeea8e3ca6ddf8f57c527de79"
  },
  {
    "url": "vuePress/githubFBGuide/index.html",
    "revision": "3d7b402d5ddb2f52adb26f44671cce44"
  },
  {
    "url": "vuePress/gitOpreation/index.html",
    "revision": "9c73ebe91c0e051efde3e0ca07a27fdf"
  },
  {
    "url": "vuePress/index.html",
    "revision": "fa18a0c265ff8e369d3ff750901e21ff"
  },
  {
    "url": "vuePress/navigationGuide/index.html",
    "revision": "afe1626eef885bd3cea5b72f4f3ca3dd"
  },
  {
    "url": "vuePress/pwaGuide/index.html",
    "revision": "285e861e93d87c16f9b5c74cd52364e8"
  },
  {
    "url": "vuePress/sidebarGuide/index.html",
    "revision": "4471cd6f6f81cee3c7c69055b506f5da"
  },
  {
    "url": "vuePress/vendorGuide/index.html",
    "revision": "40d4cfaea88596cfc92b55ef2800a3c7"
  },
  {
    "url": "vuePress/vuePressGuide/index.html",
    "revision": "819818914465ed6b0d2d26cb96998a2e"
  },
  {
    "url": "web/css/index.html",
    "revision": "ed60016578c6dc910ad104851a88419e"
  },
  {
    "url": "web/echarts/index.html",
    "revision": "5bb13604132dab8ba805a63bac8a9d29"
  },
  {
    "url": "web/element-ui/index.html",
    "revision": "d93f78945f04117793e60664e14c5e31"
  },
  {
    "url": "web/hosp-ui/componentEnvInig.html",
    "revision": "07b0893b93b6cd15369d1d75b1e88042"
  },
  {
    "url": "web/hosp-ui/configInit.html",
    "revision": "c53d8ce00becb8e64bc8f72620531190"
  },
  {
    "url": "web/hosp-ui/css.html",
    "revision": "a5fac3eb1893c99c31d58cb9d0df21e3"
  },
  {
    "url": "web/hosp-ui/example.html",
    "revision": "d5bd7de5cf9269a2bdc5c173716a1f77"
  },
  {
    "url": "web/hosp-ui/index.html",
    "revision": "079d640d9939028580cecabbef3e2ef3"
  },
  {
    "url": "web/hosp-ui/monorepo.html",
    "revision": "051d6a1bf55e1b0593c3839bacd11e1c"
  },
  {
    "url": "web/hosp-ui/start.html",
    "revision": "9ef5a54ffb6e09fa37f2afe6c969d5f8"
  },
  {
    "url": "web/hosp-ui/utils.html",
    "revision": "b9e2b5c4eb8de760dcfd98baf92e8d72"
  },
  {
    "url": "web/index.html",
    "revision": "2521403237b630c096ea446c9cefe493"
  },
  {
    "url": "web/javascript/index.html",
    "revision": "d1f2a13000f18eb167e4be1a9e09e6c9"
  },
  {
    "url": "web/nodejs/index.html",
    "revision": "5ded2b1f99feb05c6eca036199a82dd2"
  },
  {
    "url": "web/plugins/index.html",
    "revision": "58b3f072da1bf6cf750f7ae71b5dbb97"
  },
  {
    "url": "web/vue/index.html",
    "revision": "a96d6cc5fb5bf4e3b07dfb460e381d5f"
  },
  {
    "url": "web/webDescription/index.html",
    "revision": "fcaad23f94b5203d38e4d041045ce7ea"
  },
  {
    "url": "web/webpack/index.html",
    "revision": "3766de570b8a4a990d9fd648f4018885"
  }
].concat(self.__precacheManifest || []);
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
