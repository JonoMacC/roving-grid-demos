// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5p6qI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "aa7c08f8412ab9ca";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"faleX":[function(require,module,exports) {
/**
 * @typedef {string} KeyCombo - A `+` delimited key combination (e.g. `Ctrl+Home`)
 */ /**
 * @typedef {Object} VKMap - A map between virtual keys and key combinations
 * @property {KeyCombo[]} [TOP_LEFT] - The top left key combination
 * @property {KeyCombo[]} [TOP] - The top key combination
 * @property {KeyCombo[]} [TOP_RIGHT] - The top right key combination
 * @property {KeyCombo[]} [UP] - The up key combination
 * @property {KeyCombo[]} [DOWN] - The down key combination
 * @property {KeyCombo[]} [HOME] - The home key combination
 * @property {KeyCombo[]} [END] - The end key combination
 * @property {KeyCombo[]} [LEFT] - The left key combination
 * @property {KeyCombo[]} [RIGHT] - The right key combination
 * @property {KeyCombo[]} [BOTTOM_LEFT] - The bottom left key combination
 * @property {KeyCombo[]} [BOTTOM] - The bottom key combination
 * @property {KeyCombo[]} [BOTTOM_RIGHT] - The bottom right key combination
 *
 */ /**
 * @typedef {Object} KeyLookup - A map between key combinations and virtual keys
 */ /**
 * @typedef {Object} RoverOptions - Options for roving grid
 * @param {boolean} [options.wrap=true] - Whether focus wraps around lines
 * @param {VKMap} [options.VKMap={}] - The virtual key map for key combos
 */ /**
 * @typedef {MutationObserver|ResizeObserver} AnyObserver
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rovingGrid", ()=>rovingGrid);
parcelHelpers.export(exports, "updateRover", ()=>updateRover);
const state = new Map();
const isRtl = window.getComputedStyle(document.documentElement).direction === "rtl";
/**
 * @type {VKMap}
 */ const DEFAULT_VK_MAP = {
    TOP_LEFT: [],
    TOP: [
        "Ctrl+Home",
        "Meta+ArrowUp"
    ],
    TOP_RIGHT: [],
    UP: [
        "ArrowUp"
    ],
    DOWN: [
        "ArrowDown"
    ],
    HOME: [
        "Home",
        "Meta+ArrowLeft"
    ],
    END: [
        "End",
        "Meta+ArrowRight"
    ],
    LEFT: [
        "ArrowLeft"
    ],
    RIGHT: [
        "ArrowRight"
    ],
    BOTTOM_LEFT: [],
    BOTTOM: [
        "Ctrl+End",
        "Meta+ArrowDown"
    ],
    BOTTOM_RIGHT: []
};
/**
 * Returns a string for the pressed key combination, combining all modifiers
 * with '+' in order: Ctrl (^), Alt (⌥), Shift (⇧), Meta (⌘)
 *
 * @param {KeyboardEvent} e The keyboard event
 * @returns {KeyCombo} The key combination
 */ const keyCombo = (e)=>{
    const modifiers = [
        e.ctrlKey ? "Ctrl" : null,
        e.altKey ? "Alt" : null,
        e.shiftKey ? "Shift" : null,
        e.metaKey ? "Meta" : null
    ].filter(Boolean);
    const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    return modifiers.length > 0 ? modifiers.join("+") + `+${key}` : key;
};
/**
 * Swaps a key combo with a key combo in a list of key combos.
 * Used to translate from Ltr to Rtl for HOME and END virtual keys
 *
 * @param {KeyCombo[]} keys - The key combos to swap with
 * @param {KeyCombo} key - The key to swap
 * @returns {KeyCombo} The swapped key
 */ const swapKeys = (keys, key)=>{
    if ((key.includes("ArrowLeft") || key.length == 1) && !key.includes("Home")) {
        const i = keys.findIndex((k)=>k.includes("ArrowRight") || k.length == 1);
        return i !== -1 ? keys[i] : key;
    } else if ((key.includes("ArrowRight") || key.length == 1) && !key.includes("End")) {
        const i = keys.findIndex((k)=>k.includes("ArrowLeft") || k.length == 1);
        return i !== -1 ? keys[i] : key;
    }
    return key;
};
/**
 * Returns a virtual key lookup for each key combination, handles Rtl
 *
 * @param {VKMap} [VKMap] - The virtual key map
 * @returns {KeyLookup} The virtual key lookup map for each key combination
 */ const keyLookup = (VKMap = {})=>{
    const keyMap = {
        ...DEFAULT_VK_MAP,
        ...VKMap
    };
    if (isRtl) {
        // Swap functionality of LEFT and RIGHT for Rtl
        [keyMap.LEFT, keyMap.RIGHT] = [
            keyMap.RIGHT,
            keyMap.LEFT
        ];
        [keyMap.TOP_LEFT, keyMap.TOP_RIGHT] = [
            keyMap.TOP_RIGHT,
            keyMap.TOP_LEFT
        ];
        [keyMap.BOTTOM_LEFT, keyMap.BOTTOM_RIGHT] = [
            keyMap.BOTTOM_RIGHT,
            keyMap.BOTTOM_LEFT
        ];
        // Swap HOME and END
        const homeKeys = keyMap.HOME;
        const endKeys = keyMap.END;
        keyMap.HOME = homeKeys.map((key)=>swapKeys(endKeys, key));
        keyMap.END = endKeys.map((key)=>swapKeys(homeKeys, key));
    }
    // Convert single characters to uppercase
    for(const action in keyMap)keyMap[action] = keyMap[action].map((keyCombo)=>{
        const keys = keyCombo.split("+");
        const updatedKeys = keys.map((key)=>{
            return key.length === 1 ? key.toUpperCase() : key;
        });
        return updatedKeys.join("+");
    });
    // Convert the keymap into a lookup for faster access
    const keyLookup = {};
    for(const action in keyMap)keyMap[action].forEach((keyCombo)=>{
        keyLookup[keyCombo] = action;
    });
    return keyLookup;
};
// When pointerdown, activate the target
const onPointerDown = (e)=>{
    const { currentTarget: rover } = e;
    const rx = state.get(rover);
    const targetsArray = [
        ...rx.targets
    ];
    for (const [i, t] of targetsArray.entries())if (t.contains(e.target)) {
        e.preventDefault();
        rx.index = i;
        rx.focused = true;
        activate(rover, t);
        state.set("last_rover", rover);
        break;
    }
};
// When focusin, activate the target if not active
const onFocusin = (e)=>{
    const { currentTarget: rover, target } = e;
    if (state.has(rover)) {
        const rx = state.get(rover);
        const targetIndex = [
            ...rx.targets
        ].indexOf(target);
        if (targetIndex !== -1 && rx.index !== targetIndex) {
            rx.index = targetIndex;
            rx.focused = true;
            activate(rover, target);
            state.set("last_rover", rover);
        }
    }
};
const onFocusout = (e)=>{
    const { currentTarget: rover } = e;
    const rx = state.get(rover);
    if (rx) rx.focused = false;
};
const onKeydown = (e)=>{
    const { currentTarget: rover } = e;
    const key = keyCombo(e);
    const { keyBinds } = state.get(rover);
    switch(keyBinds[key]){
        case "RIGHT":
            e.preventDefault();
            focusNextItem(rover);
            break;
        case "LEFT":
            e.preventDefault();
            focusPreviousItem(rover);
            break;
        case "DOWN":
            e.preventDefault();
            focusDownItem(rover);
            break;
        case "UP":
            e.preventDefault();
            focusUpItem(rover);
            break;
        case "HOME":
            e.preventDefault();
            focusHomeItem(rover);
            break;
        case "END":
            e.preventDefault();
            focusEndItem(rover);
            break;
        case "BOTTOM":
            e.preventDefault();
            focusBottomItem(rover);
            break;
        case "TOP":
            e.preventDefault();
            focusTopItem(rover);
            break;
        case "TOP_LEFT":
            e.preventDefault();
            focusTopLeadingItem(rover);
            break;
        case "TOP_RIGHT":
            e.preventDefault();
            focusTopTrailingItem(rover);
            break;
        case "BOTTOM_LEFT":
            e.preventDefault();
            focusBottomLeadingItem(rover);
            break;
        case "BOTTOM_RIGHT":
            e.preventDefault();
            focusBottomTrailingItem(rover);
            break;
    }
};
/**
 * When the elements in the roving grid changes, updates the rows and columns
 * and the focused element while keeping the same row and column index where
 * possible
 *
 * @param {HTMLElement} rover - The roving grid element
 * @param {string} targetSelector - The CSS target selector
 */ const onDOMChange = (rover, targetSelector)=>{
    const updatedTargets = rover.querySelectorAll(targetSelector);
    const columns = numColumns(rover, updatedTargets);
    const rows = numRows(rover, updatedTargets);
    const rx = state.get(rover);
    const currentColumns = rx.columns;
    const currentIndex = rx.index;
    const currentRowIndex = Math.floor(currentIndex / currentColumns);
    const currentColumnIndex = currentIndex % currentColumns;
    const targetIndex = Math.min(currentRowIndex, rows - 1) * columns + Math.min(currentColumnIndex, columns - 1);
    const targetPoint = updatedTargets[targetIndex];
    let startingPoint, index;
    if (!(targetPoint.disabled || targetPoint.inert)) {
        startingPoint = targetPoint;
        index = targetIndex;
    } else {
        for (const target of updatedTargets)if (!target.disabled && !target.inert) {
            startingPoint = target;
            break;
        }
        index = [
            ...updatedTargets
        ].indexOf(startingPoint);
    }
    updatedTargets.forEach((t)=>t.tabIndex = -1);
    startingPoint.tabIndex = 0;
    rx.focused && activate(rover, startingPoint);
    state.set(rover, {
        ...rx,
        targets: updatedTargets,
        columns,
        rows,
        active: startingPoint,
        index
    });
};
/**
 * When the roving grid is resized, updates the number of columns and rows
 * @param {HTMLElement} rover - The roving grid element
 */ const onResize = (rover)=>{
    const rx = state.get(rover);
    const columns = numColumns(rover, [
        ...rx.targets
    ]);
    const rows = numRows(rover, [
        ...rx.targets
    ]);
    state.set(rover, {
        ...rx,
        columns,
        rows
    });
};
/**
 * Observes the roving grid's parent node for mutations (nodes added/removed)
 * When the roving grid is removed, it detaches event listeners and disconnects
 * any observers passed in as arguments
 *
 * @param {HTMLElement} rover - The roving grid element
 * @param {AnyObserver[]} observers - A list of observers for the roving grid
 * @returns {MutationObserver} The mutation observer
 */ const createRoverObserver = (rover, observers = [])=>{
    const parent = rover.parentNode;
    const mo = new MutationObserver((mutationList)=>{
        mutationList.filter((x)=>x.removedNodes.length > 0).forEach((mutation)=>{
            [
                ...mutation.removedNodes
            ].filter((x)=>x.nodeType === 1).forEach((removedEl)=>{
                state.forEach((val, key)=>{
                    if (key === "last_rover") return;
                    if (removedEl.contains(key)) {
                        key.removeEventListener("pointerdown", onPointerDown);
                        key.removeEventListener("focusin", onFocusin);
                        key.removeEventListener("focusout", onFocusout);
                        key.removeEventListener("keydown", onKeydown);
                        state.delete(key);
                        val.targets.forEach((a)=>a.tabIndex = "");
                        if (state.size === 0 || state.size === 1 && state.has("last_rover")) {
                            state.clear();
                            mo.disconnect();
                            observers.forEach((o)=>o.disconnect());
                        }
                    }
                });
            });
        });
    });
    mo.observe(parent, {
        childList: true,
        subtree: true
    });
    return mo;
};
/**
 * Observes the roving grid and its children for mutations (nodes added/removed)
 * and calls onDOMChange callback
 *
 * @param {HTMLElement} rover - The roving grid element
 * @param {string} targetSelector - The CSS target selector
 * @returns {MutationObserver} The mutation observer
 */ const createMutationObserver = (rover, targetSelector)=>{
    const mo = new MutationObserver((mutationList)=>{
        mutationList.forEach((mutation)=>{
            if (mutation.type === "childList" && rover.contains(mutation.target)) onDOMChange(rover, targetSelector);
        });
    });
    mo.observe(rover, {
        childList: true,
        subtree: true
    });
    return mo;
};
/**
 * Observes the roving grid and its targets for size changes and calls
 * onResize callback
 *
 * @param {HTMLElement} rover - The roving grid element
 * @param {string} targetSelector - The CSS target selector
 * @returns {ResizeObserver} The resize observer
 */ const createResizeObserver = (rover, targetSelector)=>{
    const ro = new ResizeObserver(()=>onResize(rover));
    [
        rover,
        ...rover.querySelectorAll(targetSelector)
    ].forEach((el)=>{
        ro.observe(el);
    });
    return ro;
};
/**
 * Calculates the number of columns in a grid layout
 * @param {HTMLElement} container - The container element
 * @param {HTMLElement[]} targets - The target elements in the container
 * @returns {number} The number of columns
 */ const numColumns = (container, targets)=>{
    // If the container uses CSS grid, get the number of columns from the CSS
    const gridComputedStyle = window.getComputedStyle(container);
    const cssGrid = gridComputedStyle.getPropertyValue("grid-template-columns");
    if (cssGrid) return gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
    // Otherwise, calculate the number of columns with brute force using the
    // offset widths and gaps between cells
    const containerWidth = container.offsetWidth;
    const targetsArray = [
        ...targets
    ];
    let acc = 0;
    let n = 0;
    for(let i = 0, m = targetsArray.length; i < m; i++){
        const cell = targetsArray[i];
        acc += Math.floor(cell.offsetWidth);
        const nextCell = targets[i + 1];
        if (nextCell) {
            const gap = nextCell.offsetLeft - (cell.offsetLeft + cell.offsetWidth);
            if (gap > 0) acc += Math.floor(gap);
        }
        if (acc > containerWidth) break;
        n++;
    }
    return n;
};
/**
 * Calculates the number of rows in a grid layout
 * @param {HTMLElement} container - The container element
 * @param {HTMLElement[]} targets - The target elements in the container
 * @returns {number} The number of rows
 */ const numRows = (container, targets)=>{
    // If the container uses CSS grid, get the number of rows from the CSS
    const gridComputedStyle = window.getComputedStyle(container);
    const cssGrid = gridComputedStyle.getPropertyValue("grid-template-rows");
    if (cssGrid) return gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
    // Otherwise, calculate the number of rows as the number of targets divided
    // by the number of columns
    return Math.ceil(targets.length / numColumns(container, targets));
};
const rovingGrid = ({ element: rover, target: targetSelector = ":scope *", wrap = true, VKMap = {} })=>{
    const targets = rover.querySelectorAll(targetSelector);
    let startingPoint;
    for (const target of targets)if (!target.disabled && !target.inert) {
        startingPoint = target;
        break;
    }
    const index = [
        ...targets
    ].indexOf(startingPoint);
    const columns = numColumns(rover, targets);
    const rows = numRows(rover, targets);
    const keyBinds = keyLookup(VKMap);
    rover.tabIndex = -1;
    targets.forEach((t)=>t.tabIndex = -1);
    startingPoint.tabIndex = 0;
    // with the roving container as the key
    // save some state and handy references
    state.set(rover, {
        targets,
        wrap,
        active: startingPoint,
        index,
        rows,
        columns,
        focused: false,
        keyBinds
    });
    rover.addEventListener("pointerdown", onPointerDown);
    rover.addEventListener("focusin", onFocusin);
    rover.addEventListener("focusout", onFocusout);
    rover.addEventListener("keydown", onKeydown);
    const mo = createMutationObserver(rover, targetSelector);
    const ro = createResizeObserver(rover, targetSelector);
    createRoverObserver(rover, {
        observers: [
            mo,
            ro
        ]
    });
};
const updateRover = (rover, options)=>{
    const currentState = state.get(rover);
    if (!currentState) throw new Error("Rover not found");
    const updatedState = {
        ...currentState,
        ...options
    };
    if (options.VKMap) updatedState.keyBinds = keyLookup(options.VKMap);
    state.set(rover, updatedState);
};
const focusNextItem = (rover)=>{
    const rx = state.get(rover);
    const rowIndex = Math.floor(rx.index / rx.columns);
    const maxIndex = rx.wrap ? rx.targets.length - 1 : (rowIndex + 1) * rx.columns - 1;
    let nextIndex = rx.index;
    while(nextIndex < maxIndex){
        nextIndex++;
        const next = rx.targets[nextIndex];
        if (next && !(next.inert || next.disabled)) {
            rx.index = nextIndex;
            activate(rover, next);
            break;
        }
    }
};
const focusPreviousItem = (rover)=>{
    const rx = state.get(rover);
    const rowIndex = Math.floor(rx.index / rx.columns);
    const minIndex = rx.wrap ? 0 : rowIndex * rx.columns;
    let previousIndex = rx.index;
    while(previousIndex > minIndex){
        previousIndex--;
        const prev = rx.targets[previousIndex];
        if (prev && !(prev.inert || prev.disabled)) {
            rx.index = previousIndex;
            activate(rover, prev);
            break;
        }
    }
};
const focusDownItem = (rover)=>{
    const rx = state.get(rover);
    const maxIndex = rx.rows * rx.columns + rx.index % rx.columns;
    let downIndex = rx.index;
    while(downIndex < maxIndex){
        downIndex += rx.columns;
        const down = rx.targets[downIndex];
        if (down && !(down.inert || down.disabled)) {
            rx.index = downIndex;
            activate(rover, down);
            break;
        }
    }
};
const focusUpItem = (rover)=>{
    const rx = state.get(rover);
    const minIndex = rx.index % rx.columns;
    let upIndex = rx.index;
    while(upIndex > minIndex){
        upIndex -= rx.columns;
        const up = rx.targets[upIndex];
        if (up && !(up.inert || up.disabled)) {
            rx.index = upIndex;
            activate(rover, up);
            break;
        }
    }
};
const focusHomeItem = (rover)=>{
    const rx = state.get(rover);
    const rowIndex = Math.floor(rx.index / rx.columns);
    let targetColumnIndex = 0;
    // Find smallest column index that has a target
    while(targetColumnIndex < rx.columns){
        const homeTarget = rx.targets[rowIndex * rx.columns + targetColumnIndex];
        if (homeTarget && !(homeTarget.inert || homeTarget.disabled)) break;
        targetColumnIndex++;
    }
    rx.index = rowIndex * rx.columns + targetColumnIndex;
    const home = rx.targets[rx.index];
    home && activate(rover, home);
};
const focusEndItem = (rover)=>{
    const rx = state.get(rover);
    const rowIndex = Math.floor(rx.index / rx.columns);
    let targetColumnIndex = rx.columns - 1;
    // Find largest column index that has a target
    while(targetColumnIndex >= 0){
        const endTarget = rx.targets[rowIndex * rx.columns + targetColumnIndex];
        if (endTarget && !(endTarget.inert || endTarget.disabled)) break;
        targetColumnIndex--;
    }
    rx.index = rowIndex * rx.columns + targetColumnIndex;
    const end = rx.targets[rx.index];
    end && activate(rover, end);
};
const focusTopItem = (rover)=>{
    const rx = state.get(rover);
    const rowIndex = Math.floor(rx.index / rx.columns);
    let targetRowIndex = 0;
    // Find smallest row index that has a target
    while(targetRowIndex < rowIndex){
        const topTarget = rx.targets[rx.index + (targetRowIndex - rowIndex) * rx.columns];
        if (topTarget && !(topTarget.inert || topTarget.disabled)) break;
        targetRowIndex++;
    }
    rx.index += rx.columns * (targetRowIndex - rowIndex);
    const top = rx.targets[rx.index];
    top && activate(rover, top);
};
const focusBottomItem = (rover)=>{
    const rx = state.get(rover);
    const rowIndex = Math.floor(rx.index / rx.columns);
    let targetRowIndex = rx.rows - 1;
    // Find largest row index that has a target
    while(targetRowIndex > rowIndex){
        const bottomTarget = rx.targets[rx.index + (targetRowIndex - rowIndex) * rx.columns];
        if (bottomTarget && !(bottomTarget.inert || bottomTarget.disabled)) break;
        targetRowIndex--;
    }
    rx.index += rx.columns * (targetRowIndex - rowIndex);
    const bottom = rx.targets[rx.index];
    bottom && activate(rover, bottom);
};
const focusTopLeadingItem = (rover)=>{
    const rx = state.get(rover);
    const topLeading = rx.targets[0];
    if (topLeading && !(topLeading.inert || topLeading.disabled)) {
        rx.index = 0;
        activate(rover, topLeading);
    }
};
const focusTopTrailingItem = (rover)=>{
    const rx = state.get(rover);
    const topTrailing = rx.targets[rx.columns - 1];
    if (topTrailing && !(topTrailing.inert || topTrailing.disabled)) {
        rx.index = rx.columns - 1;
        activate(rover, topTrailing);
    }
};
const focusBottomLeadingItem = (rover)=>{
    const rx = state.get(rover);
    const bottomLeading = rx.targets[rx.columns * (rx.rows - 1)];
    if (bottomLeading && !(bottomLeading.inert || bottomLeading.disabled)) {
        rx.index = rx.columns * (rx.rows - 1);
        activate(rover, bottomLeading);
    }
};
const focusBottomTrailingItem = (rover)=>{
    const rx = state.get(rover);
    const bottomTrailing = rx.targets[rx.columns * rx.rows - 1];
    if (bottomTrailing && !(bottomTrailing.inert || bottomTrailing.disabled)) {
        rx.index = rx.columns * rx.rows - 1;
        activate(rover, bottomTrailing);
    }
};
const activate = (rover, item)=>{
    const rx = state.get(rover);
    rx.active.tabIndex = -1;
    rx.active = item;
    rx.active.tabIndex = 0;
    rx.active.focus();
    rx.focused = true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["5p6qI"], null, "parcelRequiree3ac")

//# sourceMappingURL=glyph-browser.412ab9ca.js.map
