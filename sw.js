if (!self.define) {
    let e, s = {};
    const i = (i, a) => (i = new URL(i + ".js", a).href, s[i] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = i, e.onload = s, document.head.appendChild(e)
        } else e = i, importScripts(i), s()
    })).then((() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e
    })));
    self.define = (a, n) => {
        const r = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[r]) return;
        let t = {};
        const c = e => i(e, r), b = {module: {uri: r}, exports: t, require: c};
        s[r] = Promise.all(a.map((e => b[e] || c(e)))).then((e => (n(...e), t)))
    }
}
define(["./workbox-1de034db"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.clientsClaim(), e.precacheAndRoute([], {ignoreURLParametersMatching: [/.*/]}), e.cleanupOutdatedCaches(), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, (...rest) => {
        console.dir(rest);
    }, "GET")
}));
