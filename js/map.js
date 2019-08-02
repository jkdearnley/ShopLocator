var mymap = L.map('mymap', {
    center: [-41.140 , 173.762],
    zoom: 4,
    zoomControl: true,
    scrollWheelZoom: false,
    minZoom: 6,
    maxZoom: 18
});
// MAP STYLE
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ2RibnoiLCJhIjoiY2pweGhiZjU5MHdmYjQzbWMxZDc2ZDFxaiJ9.Cm8_bqYXWROpmzzm_T2a0g'
}).addTo(mymap);