// Note that the view and control must share the same min/max zoom
var minZoom = 6;
var maxZoom = 15;

var panZoom = new olpz.control.PanZoom({
  imgPath: './resources/zoombar_black',
  minZoom: minZoom,
  maxZoom: maxZoom,
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
    minZoom: minZoom,
    maxZoom: maxZoom,
    zoom: 12
  })
});
