// ==UserScript==
// @name         Twitch Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  tries to click on the button every three seconds
// @author       Jil Sahm
// @match        www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(check, 3000);
})();

function check() {
    'use strict';
    var button = document.querySelector("button.tw-button");
    if (button) {
        console.log("Will click button");
        button.click();
    } else {
        console.log("Button not available")
    }
}