/** @module */

import Component from './component';

import SearchComponent from './search/searchcomponent';
import AutoCompleteComponent from './search/autocompletecomponent';

const COMPONENT_CLASS_LIST = [
  // Core Component
  Component,
  // Search Components
  SearchComponent,
  AutoCompleteComponent,
];

/**
 * The component registry is a map that contains
 * all available component classes used for creation or extension.
 * Each component class has a unique type, which is used as the key for the registry
 * @type {Object.<string, Component>}
 */
export const COMPONENT_REGISTRY = COMPONENT_CLASS_LIST.reduce((registry, clazz) => {
  registry[clazz.type] = clazz;
  return registry;
}, {});
