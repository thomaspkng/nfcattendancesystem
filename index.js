function quitapp() {
	navigator.app.exitApp();
	}
function takein() {
	$("#s_state123").val("1");
	$("#inorout").html("IN<br />上班");
	}
function takeout() {
	$("#s_state123").val("2");
	$("#inorout").html("OUT<br />下班");
	}
function otout() {
	$("#s_state123").val("3");
	$("#inorout").html("OT-OUT<br />超時下班");
	}
function noononstop() {
	$("#s_state123").val("4");
	$("#inorout").html("Noon<br />中直");
	}
function inoutot() {
//	alert("inoutot, OK");
	$("#checkin").click(takein);
	$("#checkout").click(takeout);
	$("#checkotout").click(otout);
	$("#noononstop").click(noononstop);
	}
function duuid() {
	var deviceuuid = device.uuid;
	$("#duuid").html(deviceuuid);
	$("#s_duuid").val(deviceuuid);
	}
function tag2server() {
	url_server = "http://www.ahngau.com.hk/att_records/tagidvalidation.php?";
	qs_1 = "duuid="+$("#s_duuid").val();
	qs_2 = "tagid="+$("#s_tagid").val();
	qs_3 = "gpsn="+$("#gpsn").val();
	qs_4 = "gpse="+$("#gpse").val();
	qs_5 = "state123="+$("#s_state123").val();
	url2go = url_server + qs_1 + "&" + qs_2 + "&" + qs_3 + "&" + qs_4 + "&" + qs_5;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			respText = this.responseText;
			$("#logtagguy").html(respText);
		}
	};
	xhttp.open("GET", url2go, false);
	xhttp.send();
	}
