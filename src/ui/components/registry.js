/** @module */

import Component from './component';

import NavigationComponent from './navigation/navigationcomponent';

import SearchComponent from './search/searchcomponent';
import FilterSearchComponent from './search/filtersearchcomponent';
import AutoCompleteComponent from './search/autocompletecomponent';
import SpellCheckComponent from './search/spellcheckcomponent';
import LocationBiasComponent from './search/locationbiascomponent';

import FilterBoxComponent from './filters/filterboxcomponent';
import FilterOptionsComponent from './filters/filteroptionscomponent';
import RangeFilterComponent from './filters/rangefiltercomponent';
import DateRangeFilterComponent from './filters/daterangefiltercomponent';
import FacetsComponent from './filters/facetscomponent';
import GeoLocationComponent from './filters/geolocationcomponent';
import SortOptionsComponent from './filters/sortoptionscomponent';

import DirectAnswerComponent from './results/directanswercomponent';
import AccordionResultsComponent from './results/accordionresultscomponent.js';
import VerticalResultsComponent from './results/verticalresultscomponent';
import UniversalResultsComponent from './results/universalresultscomponent';
import PaginationComponent from './results/paginationcomponent';

import ResultsItemComponent from './results/resultsitemcomponent';

import MapComponent from './map/mapcomponent';
import QuestionSubmissionComponent from './questions/questionsubmissioncomponent';

import IconComponent from './icons/iconcomponent.js';

const COMPONENT_CLASS_LIST = [
  // Core Component
  Component,

  // Navigation Components
  NavigationComponent,

  // Search Components
  SearchComponent,
  FilterSearchComponent,
  AutoCompleteComponent,
  SpellCheckComponent,
  LocationBiasComponent,

  // Filter Components
  FilterBoxComponent,
  FilterOptionsComponent,
  RangeFilterComponent,
  DateRangeFilterComponent,
  FacetsComponent,
  GeoLocationComponent,
  SortOptionsComponent,

  // Results Components
  DirectAnswerComponent,
  UniversalResultsComponent,
  VerticalResultsComponent,
  PaginationComponent,
  ResultsItemComponent,
  AccordionResultsComponent,
  MapComponent,

  // Questions Components
  QuestionSubmissionComponent,

  // Helper Components
  IconComponent
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
