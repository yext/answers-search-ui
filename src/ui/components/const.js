import ComponentManager from './componentmanager';

import Component from './component';
import SearchComponent from './searchcomponent';
import ResultsComponent from './results/resultscomponent';
import ResultsItemComponent from './results/resultsitemcomponent';
import PeopleResultsComponent from './results/peopleresultscomponent';
import PeopleResultsItemComponent from './results/peopleresultsitemcomponent';

export const COMPONENT_MANAGER = new ComponentManager()
      .register(Component)
      .register(SearchComponent)
      .register(ResultsComponent)
      .register(ResultsItemComponent)
      .register(PeopleResultsComponent)
      .register(PeopleResultsItemComponent);