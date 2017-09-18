angular.module("iss").directive("issDir", function($timeout) {
  return {
    restrict: "EA",
    templateUrl: "./components/iss-now/iss-now-view.html",
    scope: {},
    //VANILLA JS &/OR J-QUERY BELONG IN LINK (PER STEVEN)
    link: function(scope, elems, attrs) {
      //**^-^-^-^-^-^-^- ISS NOW / LEAFLET -^-^-^-^-^-^-^**//
      var map = L.map("map").setView([0, 0], 2);
      //******** API CALL TO PULL COORDINATES ********//
      function moveISS() {
        $.getJSON(
          "http://api.open-notify.org/iss-now.json?callback=?",
          function(data) {
            var lat = data["iss_position"]["latitude"];
            var lon = data["iss_position"]["longitude"];
            //******** JQUERY PULLS EVERY 5 SECONDS ********//
            iss.setLatLng([lat, lon]);
            isscirc.setLatLng([lat, lon]);
            map.panTo([lat, lon], (animate = true));
          }
        );
        $timeout(moveISS, 5000);
      }
      //******** LEAFLET TILE CODE ********//
      L.tileLayer("mapTest/map/tiles/{z}/{x}/{y}.png", {
        maxZoom: 4
      }).addTo(map);
      //******** LEAFLET ICON CODE FOR ISS ICON ********//
      var ISSIcon = L.icon({
        iconUrl: "mapTest/map/ISSIcon.png",
        iconSize: [50, 30],
        iconAnchor: [25, 15],
        popupAnchor: [50, 25],
        shadowUrl: "mapTest/map/ISSIcon_shadow.png",
        shadowSize: [60, 40],
        shadowAnchor: [30, 15]
      });
      //******** MORE LEAFLET ********//
      var iss = L.marker([0, 0], { icon: ISSIcon }).addTo(map);
      var isscirc = L.circle([0, 0], 2200e3, {
        color: "#000",
        opacity: 0.3,
        weight: 1,
        fillColor: "#000",
        fillOpacity: 0.1
      }).addTo(map);

      //******** INVOKE FUNCTION TO INFINITY & BEYOND ********//
      moveISS();
    }
  };
});
