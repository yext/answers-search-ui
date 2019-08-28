/** @module */

import ComponentManager from './componentmanager';

import Component from './component';

import NavigationComponent from './navigation/navigationcomponent';

import SearchComponent from './search/searchcomponent';
import FilterSearchComponent from './search/filtersearchcomponent';
import AutoCompleteComponent from './search/autocompletecomponent';

import FilterBoxComponent from './filters/filterboxcomponent';
import FilterOptionsComponent from './filters/filteroptionscomponent';
import RangeFilterComponent from './filters/rangefiltercomponent';
import DateRangeFilterComponent from './filters/daterangefiltercomponent';
import DynamicFiltersComponent from './filters/dynamicfilterscomponent';
import GeoLocationComponent from './filters/geolocationcomponent';

import DirectAnswerComponent from './results/directanswercomponent';
import ResultsComponent from './results/resultscomponent';
import UniversalResultsComponent from './results/universalresultscomponent';

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

// Filter Components
  .register(FilterBoxComponent)
  .register(FilterOptionsComponent)
  .register(RangeFilterComponent)
  .register(DateRangeFilterComponent)
  .register(DynamicFiltersComponent)
  .register(GeoLocationComponent)

// Results Components
  .register(DirectAnswerComponent)
  .register(UniversalResultsComponent)
  .register(ResultsComponent)
  .register(ResultsItemComponent)
  .register(LocationResultsItemComponent)
  .register(EventResultsItemComponent)
  .register(PeopleResultsItemComponent)

  .register(MapComponent)

// Questions Components
  .register(QuestionSubmissionComponent)

// Helper Components
  .register(IconComponent);
