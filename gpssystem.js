function readGPS() {
	navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError);
}
// onSuccess Geolocation
//
function gpsSuccess(position) {
	var element = document.getElementById('geolocation');
	element.innerHTML = 'N: ' + position.coords.latitude + '<br />' + 'E: ' + position.coords.longitude + '<br />';
}
// onError Callback receives a [PositionError](PositionError/positionError.html) object
//
function gpsError(error) {
	alert('code: ' + error.code    + '\n' + 'message: ' + error.message + '\n');
}
