var view = new ol.View({
  center: ol.proj.transform([-70, 50], 'EPSG:4326', 'EPSG:3857'),
  zoom: 5
});

var map = new ol.Map({
  controls: ol.control.defaults({
    zoom: false
  }).extend([
    new ol.control.PanZoom()
  ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: view
});
