function readNFC() {
    // Now safe to use the PhoneGap API
	readtagid();
	}
function tagidread1() {
	alert("listener add callback");
	}
function tagidread() {
	alert("tag id read");
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
//	alert("Tag read, ID: "+tagId);
	}
