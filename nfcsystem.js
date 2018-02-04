function readNFC() {
    // Now safe to use the PhoneGap API
	nfc.addTagDiscoveredListener(tagidread, onSuccess, onFailure);
	}
function onSuccess() {
//	alert("nfc listener added");
	}
function onFailure(msg) {
	alert("cannot add listener!\n"+msg);
	}
function tagidread(nfcEvent) {
	readGPS();
	var tag = nfcEvent.tag;
	var tagId = nfc.bytesToHexString(tag.id);
	$("#s_tagid").val(tagId);
	document.getElementById('nfctagid').innerHTML = "Tag Read!";
	tag2server();
//	alert("Tag read, ID: "+tagId);
	}
