var panZoom = new ol.control.PanZoom({
  imgPath: './resources/ol2img',
  slider: true // enables the slider
});

var map = new ol.Map({
  controls: ol.control.defaults({
    zoom: false
  }).extend([
    panZoom
  ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center:[-7910321, 6179398],
    // the control default min/max zoom are 0/19. It's important to match
    // those in the view as well
    minZoom: 0,
    maxZoom: 19,
    zoom: 12
  })
});
