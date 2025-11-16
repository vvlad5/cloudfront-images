if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const d =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[d]) return;
    let n = {};
    const r = (e) => a(e, d),
      t = { module: { uri: d }, exports: n, require: r };
    s[d] = Promise.all(c.map((e) => t[e] || r(e))).then((e) => (i(...e), n));
  };
}
define(["./workbox-d84cbe57"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute([], { ignoreURLParametersMatching: [/.*/] });
});
