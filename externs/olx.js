/**
 * @typedef {{
 *     duration: (number|undefined),
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
 * Target.
 * @type {Element|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.target;
