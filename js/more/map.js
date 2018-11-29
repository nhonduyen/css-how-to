// nhonduyen@yahoo.com.vn/12345678 https://www.mapbox.com/account/
"use strict";
let map = L.map("mapid").setView([[51.505, -0.09], 13]);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmhvbmR1eWVuIiwiYSI6ImNqcDIwb3MwMTAyMzczd3BoOXdtemwzZngifQ.cBDPpNhVDh7NnGXS7v6jTg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmhvbmR1eWVuIiwiYSI6ImNqcDIwb3MwMTAyMzczd3BoOXdtemwzZngifQ.cBDPpNhVDh7NnGXS7v6jTg'
}).addTo(map);

L.maker([51.5, -0.09]).addTo(map)
    .bindPopup("You are here")
    .openPopup();

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
map.on('click', onMapClick);