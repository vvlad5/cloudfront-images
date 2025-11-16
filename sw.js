if (!self.define) {
    let e, a = {};
    const s = (s, i) => (s = new URL(s + ".js", i).href, a[s] || new Promise((a => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = s, e.onload = a, document.head.appendChild(e)
        } else e = s, importScripts(s), a()
    })).then((() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e
    })));
    self.define = (i, d) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (a[c]) return;
        let n = {};
        const r = e => s(e, c), t = {module: {uri: c}, exports: n, require: r};
        a[c] = Promise.all(i.map((e => t[e] || r(e)))).then((e => (d(...e), n)))
    }
}
define(["./workbox-445a40b5"], (function (e) {
    "use strict";
    importScripts("fallback-28d0d403-fa27-44e6-a276-2526efad7dcb.js"), self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.clientsClaim(), e.precacheAndRoute([], {ignoreURLParametersMatching: [/.*/]}), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 604800
        }), {handlerDidError: async ({request: e}) => self.fallback(e)}]
    }), "GET"), e.registerRoute((() => !1), new e.NetworkOnly({
        cacheName: "others",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {handlerDidError: async ({request: e}) => self.fallback(e)}]
    }), "GET")
}));
