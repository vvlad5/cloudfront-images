if (!self.define) {
    let a, e = {};
    const s = (s, c) => (s = new URL(s + ".js", c).href, e[s] || new Promise((e => {
        if ("document" in self) {
            const a = document.createElement("script");
            a.src = s, a.onload = e, document.head.appendChild(a)
        } else a = s, importScripts(s), e()
    })).then((() => {
        let a = e[s];
        if (!a) throw new Error(`Module ${s} didn’t register its module`);
        return a
    })));
    self.define = (c, i) => {
        const n = a || ("document" in self ? document.currentScript.src : "") || location.href;
        if (e[n]) return;
        let r = {};
        const t = a => s(a, n), b = {module: {uri: n}, exports: r, require: t};
        e[n] = Promise.all(c.map((a => b[a] || t(a)))).then((a => (i(...a), r)))
    }
}
define(["./workbox-d84cbe57"], (function (a) {
    "use strict";
    self.addEventListener("message", (a => {
        a.data && "SKIP_WAITING" === a.data.type && self.skipWaiting()
    })), a.clientsClaim(), a.precacheAndRoute([], {ignoreURLParametersMatching: [/.*/]}), a.cleanupOutdatedCaches(), a.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new a.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new a.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 604800
        }), {handlerDidError: async ({request: a}) => self.fallback(a)}]
    }), "GET")
}));
