import ComponentManager from './componentmanager';

import Component from './component';
import SearchComponent from './searchcomponent';
import ResultsComponent from './resultscomponent';
import ResultsItemComponent from './resultsitemcomponent';

export const COMPONENTS = new ComponentManager()
      .register(Component)
      .register(SearchComponent)
      .register(ResultsComponent)
      .register(ResultsItemComponent);