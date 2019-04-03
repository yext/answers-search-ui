import ComponentManager from './componentmanager';

import Component from './component';
import SearchComponent from './search/searchcomponent';
import ResultsComponent from './results/resultscomponent';

import ResultsItemComponent from './results/resultsitemcomponent';
import LocationResultsItemComponent from './results/locationresultsitemcomponent';
import EventResultsItemComponent from './results/eventresultsitemcomponent';
import PeopleResultsItemComponent from './results/peopleresultsitemcomponent';

export const COMPONENT_MANAGER = new ComponentManager()
      .register(Component)
      .register(SearchComponent)
      .register(ResultsComponent)
      .register(ResultsItemComponent)
      .register(LocationResultsItemComponent)
      .register(EventResultsItemComponent)
      .register(PeopleResultsItemComponent)