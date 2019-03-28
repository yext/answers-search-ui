import ComponentManager from './componentmanager';

import Component from './component';
import SearchComponent from './search/searchcomponent';
import ResultsComponent from './results/resultscomponent';
import ResultsItemComponent from './results/resultsitemcomponent';
import EventResultsComponent from './results/eventresultscomponent';
import EventResultsItemComponent from './results/eventresultsitemcomponent';

export const COMPONENT_MANAGER = new ComponentManager()
      .register(Component)
      .register(SearchComponent)
      .register(ResultsComponent)
      .register(ResultsItemComponent)
      .register(EventResultsComponent)
      .register(EventResultsItemComponent);