
Module {
  String id; // NOTE(billy) This might be better as a integer
  // More meta data
}

Response {
  Map<String, Module> modules; // ModuleId -> Module
}

// A basic model for the results for a Vertical Search
ResultsModule extends Module {
  String id = 'results';
  ResultType type; // The 'data' type, e.g. Location, Event, People
  String verticalConfigKey: 'string',
  List<Result> values
}

// A basic model for the results of a Universal Search
UniversalResultsModule extends Module {
  String id = 'universalResults';
  List<ResultModule> results;
}

FiltersModule extends Module {
  String id = 'filters';
  List<Facet> facets; // TBD
}

PaginationModule extends Module {
  String id = 'pagination';
  List<Page> pages; // Page contains information about the index and url
}

NavigationModule extends Module {
  String id = 'navigation';
  List<Tab> navigationTabs; // An ordered list of navigatin tabs
                            // A tab includes the URL and Label, etc.
}