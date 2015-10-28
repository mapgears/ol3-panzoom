var panZoom = new ol.control.PanZoom({
  className: 'olControlPanZoomBar', // define a different css class
  imgPath: './resources/ol2img',
  slider: true
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
    minZoom: 0,
    maxZoom: 19,
    zoom: 12
  })
});
