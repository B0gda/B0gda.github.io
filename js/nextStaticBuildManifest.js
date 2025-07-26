self.__BUILD_MANIFEST = function(e, s, t, r, a) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: null,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: e,
            errorRate: 1e-4,
            numBits: e,
            numHashes: null,
            bitArray: []
        },
        "/": [s, "static/chunks/pages/index-1f141b14498a9096.js"],
        "/_error": [s, "static/chunks/pages/_error-3caf0ad2b97329e2.js"],
        "/project/[slug]": [a, s, "static/chunks/pages/project/[slug]-2b5ce100ffb05f14.js"],
        "/sitemap.xml": [a, "static/chunks/pages/sitemap.xml-acb9cc76c862b4a0.js"],
        sortedPages: ["/", "/_app", "/_error", "/project/[slug]", "/sitemap.xml"]
    }
}(0, "static/chunks/231-bb63ed56d1a0c316.js", 1e-4, null, "static/chunks/104-080043a3d8ce39df.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
