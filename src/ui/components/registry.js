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

import CardComponent from './cards/cardcomponent';
import StandardCardComponent from './cards/standardcardcomponent';
import AccordionCardComponent from './cards/accordioncardcomponent';
import LegacyCardComponent from './cards/legacycardcomponent';

import AlternativeVerticalsComponent from './results/alternativeverticalscomponent';
import MapComponent from './map/mapcomponent';
import QuestionSubmissionComponent from './questions/questionsubmissioncomponent';

import IconComponent from './icons/iconcomponent.js';
import CTAComponent from './ctas/ctacomponent';
import CTACollectionComponent from './ctas/ctacollectioncomponent';
import ResultsHeaderComponent from './results/resultsheadercomponent';

import VerticalResultsCountComponent from './results/verticalresultscountcomponent';
import AppliedFiltersComponent from './results/appliedfilterscomponent';

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
  AccordionResultsComponent,
  MapComponent,
  AlternativeVerticalsComponent,
  ResultsHeaderComponent,

  // Card Components
  CardComponent,
  StandardCardComponent,
  AccordionCardComponent,
  LegacyCardComponent,

  // Questions Components
  QuestionSubmissionComponent,

  // Helper Components
  IconComponent,
  CTAComponent,
  CTACollectionComponent,
  VerticalResultsCountComponent,
  AppliedFiltersComponent
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
