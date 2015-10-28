var panZoom = new ol.control.PanZoom({
  imgPath: './resources/ol2img'
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
    center: ol.proj.transform([-70, 50], 'EPSG:4326', 'EPSG:3857'),
    zoom: 5
  })
});
