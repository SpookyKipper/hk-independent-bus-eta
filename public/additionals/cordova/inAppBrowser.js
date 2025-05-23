console.log("Additionals - Cordova: In App Browser ")
// Open all links in InAppBrowser //
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;

    document.addEventListener('click', function (event) {
        console.log('click');
        console.log(event.target);
        // Check if the clicked element is an anchor or inside one
        const anchor = event.target.closest('a');
        if (anchor && anchor.href && (!(anchor.href.includes("//localhost")))) { //anchor.href.startsWith("http://") || anchor.href.startsWith("https://") || anchor.href.startsWith("//")
            event.preventDefault(); // Cancel the default navigation
            cordova.InAppBrowser.open(anchor.href, '_blank'); // Open the link in a new tab/window
        }
    });

    window.open = cordova.InAppBrowser.open;

}

