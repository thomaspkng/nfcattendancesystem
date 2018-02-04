function takein() {
	$("#state123").val("1");
	$("#inorout").html("IN");
	}
function takeout() {
	$("#state123").val("2");
	$("#inorout").html("OUT");
	}
function otout() {
	$("#state123").val("3");
	$("#inorout").html("OT");
	}
function inoutot() {
	alert("inoutot, OK");
	$("#checkin").click(takein);
	$("#checkout").click(takeout);
	$("#checkotout").click(otout);
	}
function duuid() {
	var deviceuuid = device.uuid;
	$("#duuid").html(deviceuuid);
	}
