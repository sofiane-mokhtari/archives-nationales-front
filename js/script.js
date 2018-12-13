mapboxgl.accessToken = 'pk.eyJ1Ijoid2F4d293IiwiYSI6ImNqcGZzMWJjazBkMXYza3BmdjhzeHpvdWUifQ.MBXFNaFUfyOoqUzB1ifh7g';
var map = new mapboxgl.Map(
{
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 4,
    center: [2.43896484375, 46.52863469527167]
});

map.on('load', function () {
  var lay;
  lay = place_point(map, "1988");
});
