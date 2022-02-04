// ==UserScript==
// @name        Youtube Search unfucker
// @match       https://*.youtube.com/results*
// @run-at      document-start
// @grant       none
// ==/UserScript==
document.addEventListener("yt-navigate-finish", function() {
const fuckedURL = window.location.href
if (((/[?&]sp=CAASAhAB/.test(location.search) === false)) && ((/search/.test(location.search) === true))) {
  window.location.href = fuckedURL + "&sp=CAASAhAB"
}
});
