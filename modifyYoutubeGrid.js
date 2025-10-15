// ==UserScript==
// @name         Resize YT frontpage thumbnails
// @namespace    http://tampermonkey.net/
// @version      2025-10-15
// @description  Resize YT frontpage thumbnails
// @author       jreef
// @match        https://www.youtube.com/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

const itemsPerRow = '5';

(function() {
    'use strict';
    function updateRichGrid() {
        const gridRenderer = document.querySelector("#primary ytd-rich-grid-renderer");
        if (gridRenderer) {
            gridRenderer.style.setProperty("--ytd-rich-grid-items-per-row", itemsPerRow);
        } else {
            setTimeout(updateRichGrid, 500);
        }
    }
    updateRichGrid();
})();