/**
 * @typedef {{
 *     className: (string|undefined),
 *     duration: (number|undefined),
 *     imgPath: (string|undefined),
 *     maxExtent: (ol.Extent|undefined),
 *     pixelDelta: (number|undefined),
 *     slider: (boolean|undefined),
 *     target: (Element|undefined),
 *     zoomDelta: (number|undefined)
 * }}
 * @api
 */
olx.control.PanZoomOptions;


/**
 * Name of the CSS class. Default is `ol-panzoom`.
 * @type {string|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.className;


/**
 * Animation duration in milliseconds. Default is `100`.
 * @type {number|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.duration;


/**
 * The directory that holds the images for the components.
 * @type {string|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.imgPath;


/**
 * Extent to zoom to.  If set, adds the zoom to max extent button.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.maxExtent;


/**
 * Pixel delta. Default is `125`.
 * @type {number|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.pixelDelta;


/**
 * Whether to include a slider or not, in which case a zoom to max extent
 * button is added instead. Default is `false`.
 * @type {number|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.slider;


/**
 * Target.
 * @type {Element|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.target;


/**
 * Zoom delta. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.control.PanZoomOptions.prototype.zomDelta;
