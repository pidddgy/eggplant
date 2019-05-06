// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://surviv.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // ui-health-depleted
    var target = document.getElementById('ui-health-depleted');

    var config = { attributes: true };
    var prev;
    
    var callback = function(mutationsList) {
        for(var mutation of mutationsList) {
            if (mutation.type == 'attributes') {
                if(prev) {
                    var cur = target.style.width.slice(0, target.style.width.length-1);
                    if(cur < prev) console.log("eggplant smacc time");
                }

                prev = parseInt( target.style.width.slice(0, target.style.width.length-1));
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(target, config);
})();
