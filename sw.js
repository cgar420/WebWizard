if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D94r3PGy.css",revision:null},{url:"assets/index-DjciXag6.js",revision:null},{url:"index.html",revision:"a40928dcbffb0c2a043e9e9e0940411a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-192x192.png",revision:"a9f0d65e2c29db558ebaa5e86e6a8fa8"},{url:"icon-256x256.png",revision:"983cfc716900d2b7544828d6a308afef"},{url:"icon-384x384.png",revision:"38f6933e4ab11ffc945fc9bb5b3a7b7c"},{url:"icon-512x512.png",revision:"c2126e19a4622edac7e9e2d482a52198"},{url:"manifest.webmanifest",revision:"1d8a24214c2730e8307422ab14f670f5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
