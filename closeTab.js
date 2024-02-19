var doClose = true;

function closeTab() {

    var referrer = document.referrer.split("?")[0];
    var currentLoc = window.location.href.split("?")[0];

    if (referrer != currentLoc)
        return;

    if (doClose) {
        window.close()
    }
}

function checkUserActivity() {

    count = 0;

    document.addEventListener('mousemove', function () {
        count++;

        if (count > 100)
            doClose = false;

        console.log( "mouse moved" )
    });
}

setTimeout(closeTab, 5000)
setTimeout(checkUserActivity, 1000)

window.addEventListener('beforeunload', function (e) {
    alert('beforeunload called')
});