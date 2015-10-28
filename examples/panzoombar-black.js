var minZoom = 1;
var maxZoom = 19;

/**
 * In OpenLayers 2, the OpenLayers.ImgPath was used to define a directory where
 * native controls fetched their images. The same idea is borrowed here in
 * order to reuse the same images.
 */
var panZoom = new ol.control.PanZoom({
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
