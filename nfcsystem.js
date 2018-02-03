document.addEventListener("deviceready", onDeviceReady, msgfail);
function onDeviceReady() {
        // Now safe to use the PhoneGap API
		alert("Check listener!");
		readtagid();
}
function msgfail() {
	alert("deviceready Fail");
	}
function tagidread1() {
	alert("listener add callback");
	}
function tagidread(nfcEvent) {
       var tag = nfcEvent.tag;
       var tagId = nfc.bytesToHexString(tag.id);
       alert("Tag read, ID: "+tagId);
	}
function onSuccess() {
	alert("nfc listener added");
	}
function onFailure(msg) {
	alert(msg);
	}
function readtagid() {
	alert("enter readtagid()");
	nfc.addTagDiscoveredListener(tagidread, onSuccess, onFailure);
	}
$(document).ready(function() {
    //alert("doc ready");
/*	
	nfc.enabled(
  function() {alert('yes!')},
  // msg is one of NO_NFC (no hardware support) or NFC_DISABLED (supported but disabled)
  function(msg) {alert(msg)}
);
*/
});
