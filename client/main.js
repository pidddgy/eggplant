// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://2dbattleroyale.com/
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    var $ = window.$;
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
                    if(cur < prev) {
                        console.log("eggplant smacc time");
                        $.ajax({
                            url: "http://localhost:5000/smacc",
                            success: function(){
                              console.log("done");
                            }
                        });
                        
                        
                    }
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
