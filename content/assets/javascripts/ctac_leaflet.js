// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([38.872, -77.265], 13);
map.scrollWheelZoom.disable();

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: '/assets/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl: '/assets/marker-shadow.png'
});

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([38.872, -77.265], {icon: myIcon}).addTo(map).bindPopup('CTAC Headquarters').openPopup();;