// ==UserScript==
// @name        Youtube Search unfucker
// @match       https://*.youtube.com/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
// We now listen globally on YouTube.com as we intercept search url's before they are fully loaded, hence we now listen on document-end

// This variable is used to check if the script is currently redirecting the user to a new URL.
// It is used to prevent occasional infinite loops when searching for videos.
// More importantly it fixes an issue where modifying the filter settings results in an infinite loop every time.
let redirecting = false;


// Add an event listener that listens for the "yt-navigate-finish" event, which is fired when the page is fully loaded.
document.addEventListener("yt-navigate-finish", function() {
    // Check if the script is currently in the process of redirecting the user to a new URL.
    if (redirecting) {
        // If the script is currently redirecting, return and do nothing.
        return;
    }

    // Get the current URL of the page.
    const fuckedURL = window.location.href;
    
    // Check if the current URL is a search page and if the "&sp=CAASAhAB" string is not already in the URL.
    if (((/[?&]sp=CAASAhAB/.test(location.search) === false)) && ((/search/.test(fuckedURL) === true))) {
        // Set the "redirecting" variable to "true" before performing the redirection.
        redirecting = true;
        // Create the new URL by appending the "&sp=CAASAhAB" string to the current URL.
        const newURL = fuckedURL + "&sp=CAASAhAB";
        // Don't use this, it may cause errors
        // window.location.href = fuckedURL + "&sp=CAASAhAB"
        // Instead we use the replace() method to redirect the user to the new URL, this will replace the current URL in the browser's history too.
        window.location.replace(newURL);
    }
});
