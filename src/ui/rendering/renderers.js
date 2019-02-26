import Renderer from './renderer';

// In the future, this will contain all different types of renderers
// E.g. Mustache, SOY, HandleBars, React, etc.
export const Renderers = {
  SOY: new Renderer() // TODO(billy) This should be a SOYRenderer()
}
