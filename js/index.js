function ready() {

    function onNfc(nfcEvent) {

        var tag = nfcEvent.tag;
        var tagId = nfc.bytesToHexString(tag.id);
        alert(tagId);

    }

    function win() {
        console.log("Listening for NFC Tags");
    }

    function fail(error) {
        alert("Error adding NFC listener");
    }


    nfc.addTagDiscoveredListener(onNfc, win, fail);
}

function init() {
    document.addEventListener('deviceready', ready, false);
}