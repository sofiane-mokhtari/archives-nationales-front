mapboxgl.accessToken = 'pk.eyJ1Ijoid2F4d293IiwiYSI6ImNqcGZzMWJjazBkMXYza3BmdjhzeHpvdWUifQ.MBXFNaFUfyOoqUzB1ifh7g';
var map = new mapboxgl.Map(
{
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 1.5,
    center: [1.8303620284697504, 43.81047291814947]
});

map.on('load', function () {
    lay = place_bite(map, [2.376084880952381, 48.84495494047618], "caca");
});

var btt = document.getElementById("button");
var ann = document.getElementById("anne");
ann.addEventListener('over', function() {console.log(ann.value)});
btt.addEventListener('click', function() {
    lay = place_bite
});

