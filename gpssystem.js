function readGPS() {
	navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError);
}
// onSuccess Geolocation
//
function gpsSuccess(position) {
	var gpsn_read = position.coords.latitude;
	var gpse_read = position.coords.longitude;
	$("#gpsn").val(gpsn_read);
	$("#gpse").val(gpse_read);
	
	var element = document.getElementById('geolocation');
	element.innerHTML = 'NE reading Ready!<br />';
}
// onError Callback receives a [PositionError](PositionError/positionError.html) object
//
function gpsError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}