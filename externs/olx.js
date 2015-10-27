/**
 * @typedef {{
 *     duration: (number|undefined),
 *     pixelDelta: (number|undefined),
 *     target: (Element|undefined)
 * }}
 * @api
 */
olx.control.PanZoomOptions;


/**
 * Animation duration in milliseconds. Default is `250`.
 * @type {number|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.duration;


/**
 * Pixel delta. Default is `125`.
 * @type {number|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.pixelDelta;


/**
 * Target.
 * @type {Element|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.target;
