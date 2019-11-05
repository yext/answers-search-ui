/* global ANSWERS:readonly */

const config = JSON.parse(document.getElementById('config').textContent);

window.initAnswers = async function initAnswers () {
  const {
    mock,
    templateUrl,
    apiKey,
    experienceKey,
    verticalKey,
    mapProvider,
    mapApiKey,
    businessId,
    search
  } = config;
  const verticalConfig = config.verticals[verticalKey];
  const mapConfig = {
    includeMap: true,
    mapConfig: {
      mapProvider,
      apiKey: mapApiKey
    }
  };
  const searchConfig = Object.assign(
    {},
    search,
    verticalConfig ? verticalConfig.search : {},
    verticalKey ? { verticalKey } : {});

  ANSWERS.init({
    mock,
    templateUrl,
    apiKey,
    experienceKey,
    businessId,
    search: searchConfig,
    onReady: function () {
      ANSWERS.addComponent('Navigation', {
        container: '.navigation-container',
        tabs: [
          {
            label: 'Home',
            url: 'index.html',
            isFirst: true,
            isActive: !verticalKey
          },
          ...Object.keys(config.verticals).map(v => ({
            configId: v,
            label: v,
            url: `${v}.html`,
            isActive: verticalKey === v
          }))
        ]
      });

      ANSWERS.addComponent('SearchBar', {
        container: '.search-container',
        verticalKey,
        allowEmptySearch: verticalConfig && verticalConfig.allowEmptySearch
      });

      if (!verticalKey) {
        ANSWERS.addComponent('DirectAnswer', {
          container: '.direct-answer-container'
        });

        ANSWERS.addComponent('UniversalResults', {
          container: '.universal-results-container',
          config: Object.fromEntries(
            Object.entries(config.verticals)
              .filter(([ key, config ]) => config.map)
              .map(([ key, config ]) => [ key, mapConfig ])
          )
        });

        ANSWERS.addComponent('QASubmission', {
          container: '.question-submission-container',
          entityId: 13171501
        });
      } else {
        ANSWERS.addComponent('VerticalResults', {
          container: '.results-container',
          ...(verticalConfig.map ? mapConfig : {})
        });

        ANSWERS.addComponent('FilterSearch', {
          container: '.filter-search-container',
          verticalKey
        });

        ANSWERS.addComponent('DynamicFilters', {
          container: '.dynamic-filter-container',
          verticalKey
        });

        if (verticalConfig.filters) {
          ANSWERS.addComponent('FilterBox', {
            container: '.filters-container',
            verticalKey,
            filters: verticalConfig.filters
          });
        }
      }
    }
  });
};
