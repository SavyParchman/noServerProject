//**^-^-^-^-^-^-^- ISS NOW / LEAFLET -^-^-^-^-^-^-^**//

var map = L.map('map').setView([0,0], 2);
//******** API CALL TO PULL COORDINATES ********//
function moveISS() {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
//******** JQUERY PULLS EVERY 5 SECONDS ********//
        iss.setLatLng([lat, lon]);
        isscirc.setLatLng([lat, lon]);
        map.panTo([lat, lon], animate = true);
    });
    setTimeout(moveISS, 5000); 
}
//******** LEAFLET TILE CODE ********//
L.tileLayer('map/tiles/{z}/{x}/{y}.png', {
    maxZoom: 4,
}).addTo(map);
//******** LEAFLET ICON CODE FOR ISS ICON ********//
var ISSIcon = L.icon({
    iconUrl: 'map/ISSIcon.png',
    iconSize: [50, 30],
    iconAnchor: [25, 15],
    popupAnchor: [50, 25],
    shadowUrl: 'map/ISSIcon_shadow.png',
    shadowSize: [60, 40],
    shadowAnchor: [30, 15]
});
//******** MORE LEAFLET ********//
var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);
var isscirc = L.circle([0,0], 2200e3, {color: "#c22", opacity: 0.3, weight:1, fillColor: "#c22", fillOpacity: 0.1}).addTo(map); 

//******** INVOKE FUNCTION TO INFINITY & BEYOND ********//
moveISS();
