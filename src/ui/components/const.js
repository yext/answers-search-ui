/** @module */

import ComponentManager from './componentmanager';

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

import DirectAnswerComponent from './results/directanswercomponent';
import ResultsComponent from './results/resultscomponent';
import AccordionResultsComponent from './results/accordionresultscomponent.js';
import UniversalResultsComponent from './results/universalresultscomponent';
import PaginationComponent from './results/paginationcomponent';

import ResultsItemComponent from './results/resultsitemcomponent';
import LocationResultsItemComponent from './results/locationresultsitemcomponent';
import EventResultsItemComponent from './results/eventresultsitemcomponent';

import PeopleResultsItemComponent from './results/peopleresultsitemcomponent';

import MapComponent from './map/mapcomponent';
import QuestionSubmissionComponent from './questions/questionsubmissioncomponent';

import IconComponent from './icons/iconcomponent.js';

export const COMPONENT_MANAGER = new ComponentManager()
// Core Component
  .register(Component)

// Navigation Components
  .register(NavigationComponent)

// Search Components
  .register(SearchComponent)
  .register(FilterSearchComponent)
  .register(AutoCompleteComponent)
  .register(SpellCheckComponent)
  .register(LocationBiasComponent)

// Filter Components
  .register(FilterBoxComponent)
  .register(FilterOptionsComponent)
  .register(RangeFilterComponent)
  .register(DateRangeFilterComponent)
  .register(FacetsComponent)
  .register(GeoLocationComponent)

// Results Components
  .register(DirectAnswerComponent)
  .register(UniversalResultsComponent)
  .register(ResultsComponent)
  .register(PaginationComponent)
  .register(ResultsItemComponent)
  .register(AccordionResultsComponent)
  .register(LocationResultsItemComponent)
  .register(EventResultsItemComponent)
  .register(PeopleResultsItemComponent)

  .register(MapComponent)

// Questions Components
  .register(QuestionSubmissionComponent)

// Helper Components
  .register(IconComponent);
