goog.provide('olpz.control.ZoomSlider');



/**
 * @constructor
 * @param {olx.control.ZoomSliderOptions=} opt_options Options.
 * @extends {ol.control.ZoomSlider}
 * @api
 */
olpz.control.ZoomSlider = function(opt_options) {

  /**
   * @type {Element}
   * @protected
   */
  this.element = null;

  goog.base(this, opt_options);
};
goog.inherits(olpz.control.ZoomSlider, ol.control.ZoomSlider);


/**
 * @return {Element}
 * @api
 */
olpz.control.ZoomSlider.prototype.getElement = function() {
  return this.element;
};
