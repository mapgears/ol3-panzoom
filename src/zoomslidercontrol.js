goog.provide('OL3ZoomSlider');



/**
 * @constructor
 * @param {olx.control.ZoomSliderOptions=} opt_options Options.
 * @extends {ol.control.ZoomSlider}
 * @api
 */
var OL3ZoomSlider = function(opt_options) {

  /**
   * @type {Element}
   * @protected
   */
  this.element = null;

  goog.base(this, opt_options);
};
goog.inherits(OL3ZoomSlider, ol.control.ZoomSlider);


/**
 * @return {Element}
 * @api
 */
OL3ZoomSlider.prototype.getElement = function() {
  return this.element;
};
