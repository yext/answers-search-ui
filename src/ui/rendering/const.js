import Renderer from './renderer';
import HandleBarsRenderer from './handlebarsrenderer';

// In the future, this will contain all different types of renderers
// E.g. Mustache, SOY, HandleBars, React, etc.
export const Renderers = {
  SOY: new Renderer(),
  HandleBars: new HandleBarsRenderer()
}
