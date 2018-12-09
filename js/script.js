mapboxgl.accessToken = 'pk.eyJ1Ijoid2F4d293IiwiYSI6ImNqcGZzMWJjazBkMXYza3BmdjhzeHpvdWUifQ.MBXFNaFUfyOoqUzB1ifh7g';
var map = new mapboxgl.Map(
{
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 4,
    center: [2.43896484375, 46.52863469527167]
});

map.on('load', function () {
  lay = place_bite(map, [2.43896484375, 46.52863469527167] , "18_08_1980-Paris");
  var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
      });

  map.on('mouseenter', '18_08_1980-Paris', function(e) {
      map.getCanvas().style.cursor = 'pointer';
      var coordinates = e.features[0].geometry.coordinates.slice();
      var pop = '<a href="html/presentation_discours.html?discour=';
      pop = pop.concat(encodeURIComponent(e.features[0].source));
      pop = pop.concat('">WORLD</a>');
      console.log(pop);
      console.log(e.features[0].source);
      popup.setLngLat(coordinates)
          .setHTML(pop)
          .addTo(map);
  });

  map.on('click', '18_08_1980-Paris', function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
  });
});