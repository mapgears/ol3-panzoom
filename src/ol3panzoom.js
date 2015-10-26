goog.provide('PanZoom');



/**
 * @constructor
 * @param {olx.control.PanZoomOptions=} opt_options Options.
 * @extends {ol.control.Control}
 * @api
 */
var PanZoom = function(opt_options) {

  var options = opt_options || {};

  var className = options.className ? options.className : 'ol-panzoom';

  var cssClasses = [
    className,
    'ol-unselectable',
    'ol-control'
  ].join(' ');

  var element = document.createElement('div');
  element.className = cssClasses;

  goog.base(this, /** olx.control.ControlOptions */ ({
    element: element,
    target: options.target
  }));

};
goog.inherits(PanZoom, ol.control.Control);

ol.control.PanZoom = PanZoom;
