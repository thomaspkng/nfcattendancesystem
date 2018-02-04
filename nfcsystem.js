function readNFC() {
    // Now safe to use the PhoneGap API
	nfc.addTagDiscoveredListener(tagidread, onSuccess, onFailure);
	}
function onSuccess() {
	alert("nfc listener added");
	}
function onFailure(msg) {
	alert(msg);
	}
function tagidread(nfcEvent) {
	readGPS();
	var tag = nfcEvent.tag;
	var tagId = nfc.bytesToHexString(tag.id);
	document.getElementById('nfctagid').innerHTML = tagId;
//	alert("Tag read, ID: "+tagId);
	}
