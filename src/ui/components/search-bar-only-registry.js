/** @module */

import Component from './component';

import SearchComponent from './search/searchcomponent';
import AutoCompleteComponent from './search/autocompletecomponent';

import IconComponent from './icons/iconcomponent.js';

const COMPONENT_CLASS_LIST = [
  // Core Component
  Component,

  // Search Components
  SearchComponent,
  AutoCompleteComponent,

  // Helper Components
  IconComponent
];

/**
 * This component registry is a map that contains all component classes pertaining
 * to the stand-alone SearchBar integration. Each component class has a unique type, which
 * is used as the key for the registry.
 *
 * @type {Object.<string, Component>}
 */
export const SEARCH_BAR_COMPONENTS_REGISTRY = COMPONENT_CLASS_LIST.reduce((registry, clazz) => {
  registry[clazz.type] = clazz;
  return registry;
}, {});
