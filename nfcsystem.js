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
	var tag = nfcEvent.tag;
	var tagId = nfc.bytesToHexString(tag.id);
	$("#nfctagid").html(tagid);
	alert("Tag read, ID: "+tagId);
	}
