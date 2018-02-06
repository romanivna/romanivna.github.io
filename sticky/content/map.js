    /*google maps*/
window.onload = function () {
var LatLng = {lat: 43.520039, lng: -96.738216};

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 16,
center: LatLng
});

var marker = new google.maps.Marker({
position: LatLng,
map: map,
title: 'Random coords'
});
};
