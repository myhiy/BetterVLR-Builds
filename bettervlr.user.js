// ==UserScript==
// @name        BetterVLR
// @namespace   BVLR
// @description VLR.GG but better!
// @icon        https://bettervlr.com/assets/favicon.png
// @match       *://*.vlr.gg/*
// @grant       none
// @version     0.0.5
// @author      myhiy
// ==/UserScript==

(function bettervlrJS() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.jsdelivr.net/gh/myhiy/BetterVLR-Builds/browser.js";
    var head = document.getElementsByTagName("head")[0];
    if (!head) return;
    head.appendChild(script);
})();

(function bettervlrCSS() {
    var style = document.createElement("link");
    style.rel = "stylesheet"
    style.href = "https://cdn.jsdelivr.net/gh/myhiy/BetterVLR-Builds/browser.css";
    var head = document.getElementsByTagName("head")[0];
    if (!head) return;
    head.appendChild(style);
})();
