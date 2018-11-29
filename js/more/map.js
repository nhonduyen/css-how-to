// nhonduyen@yahoo.com.vn/12345678 https://www.mapbox.com/account/
"use strict";
let defaultLocation = [51.505, -0.09];
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (loc) {
        defaultLocation = [loc.coords.latitude, loc.coords.longitude];
        console.log(defaultLocation);
        showMap(defaultLocation);
    }, function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
        showMap(defaultLocation);
    });
}
else {
    console.log("Your browser does not support geolocation");
    showMap(defaultLocation);
}
function showMap() {
    let map = L.map('mapid').setView(defaultLocation, 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmhvbmR1eWVuIiwiYSI6ImNqcDIwb3MwMTAyMzczd3BoOXdtemwzZngifQ.cBDPpNhVDh7NnGXS7v6jTg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmhvbmR1eWVuIiwiYSI6ImNqcDIwb3MwMTAyMzczd3BoOXdtemwzZngifQ.cBDPpNhVDh7NnGXS7v6jTg'
    }).addTo(map);

    let marker = L.marker(defaultLocation).addTo(map);
    marker.bindPopup("You are here").openPopup();
    let popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
}

