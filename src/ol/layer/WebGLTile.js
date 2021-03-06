/**
 * @module ol/layer/WebGLTile
 */
import BaseTileLayer from './BaseTile.js';
import WebGLTileLayerRenderer from '../renderer/webgl/TileLayer.js';

/**
 * @typedef {import("./BaseTile.js").Options} Options
 */


/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @api
 */
class WebGLTileLayer extends BaseTileLayer {

  /**
   * @param {Options=} opt_options Tile layer options.
   */
  constructor(opt_options) {
    super(opt_options);
  }

  /**
   * Create a renderer for this layer.
   * @param {import("../renderer/webgl/Map.js").default} mapRenderer The map renderer.
   * @return {import("../renderer/Layer.js").default} A layer renderer.
   * @protected
   */
  createRenderer(mapRenderer) {
    return new WebGLTileLayerRenderer(mapRenderer, this);
  }

}

export default WebGLTileLayer;
