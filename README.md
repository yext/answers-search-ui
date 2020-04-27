# Answers
Answers Javascript API Library.

Outline:
1. [Install / Setup](#install-and-setup)
2. [ANSWERS.init Configuration Options](#answersinit-configuration-options)
   - [Vertical Pages Configuration](#vertical-pages-configuration)
   - [Search Configuration](#search-configuration)
   - [Vertical No Results Configuration](#vertical-no-results-configuration)
   - [onVerticalSearch Configuration](#onverticalsearch-configuration)
   - [onUniversalSearch Configuration](#onuniversalsearch-configuration)
3. [Component Usage](#component-usage)
   - [Base Component Configuration](#base-component-configuration)
   - [Adding a Component](#adding-a-component-to-your-page)
   - [Removing Components](#removing-components)
4. [Types of Built-in Components](#types-of-built-in-components)
   - [SearchBar Component](#searchbar-component)
   - [DirectAnswer Component](#direct-answer-component)
   - [UniversalResults Component](#universal-results-component)
   - [VerticalResults Component](#vertical-results-component)
   - [Pagination Component](#pagination-component)
   - [FilterBox Component](#filterbox-component)
   - [FilterSearch Component](#filtersearch-component)
   - [Filter Components](#filter-components)
   - [Navigation Component](#navigation-component)
   - [QASubmission Component](#qa-submission-component)
   - [SpellCheck Component](#spell-check-component)
   - [LocationBias Component](#location-bias-component)
   - [SortOptions Component](#sort-options-component)
   - [Map Component](#map-component)
5. [Customizing Components](#customizing-components)
   - [Using a Custom Renderer](#using-a-custom-renderer)
   - [Custom Data Formatting](#custom-data-formatting)
   - [Custom Data Transforms](#custom-data-transforms)
   - [Using a Custom Template for a Component](#using-a-custom-template-for-a-component)
   - [Creating Custom Components](#creating-custom-components)
6. [Template Helpers](#template-helpers)
7. [Analytics](#analytics)
   - [Custom Analytics Using JavaScript](#custom-analytics-using-javascript)
   - [Custom Analytics Using Data Attributes](#custom-analytics-using-data-attributes)
   - [Conversion Tracking](#conversion-tracking)
   - [On-Search Analytics](#on-search-analytics)

# Install and Setup

The Answers Javascript API Library does not need to be installed locally. Instead, it can be called
with script tags on an HTML page. The instructions below explain how to do this; they will walk you through
adding the Answers stylesheet, JS library, and an intialization script to an HTML page.
After doing this, you can view your page in the browser.

Include the Answers CSS
```html
<link rel="stylesheet" type="text/css" href="https://assets.sitescdn.net/answers/answers.css">
```

Add the Javascript library and placeholder elements for [Answers components](#component-usage).
```html
<script src="https://assets.sitescdn.net/answers/answers.min.js" onload="ANSWERS.domReady(initAnswers)" defer async></script>

<div id="SearchBarContainer"></div>
<div id="UniversalResultsContainer"></div>
```

Add an initialization script with an apiKey, experienceKey and onReady function. In the example below, we've initialized two
basic components: [SearchBar](#searchbar-component) and [UniversalResults](#universal-results-component).
```js
function initAnswers() {
  ANSWERS.init({
    apiKey: '<API_KEY_HERE>', // See [1]
    experienceKey: '<EXPERIENCE_KEY_HERE>',
    onReady: function() {
      ANSWERS.addComponent('SearchBar', {
        container: '#SearchBarContainer',
      });

      ANSWERS.addComponent('UniversalResults', {
        container: '#UniversalResultsContainer',
      });
    }
  })
}
```

[1] Learn more about [getting your API key](https://developer.yext.com/docs/guides/get-started/).

# ANSWERS.init Configuration Options

The configuration provided here is configuration that is shared across components.

```js
function initAnswers() {
  ANSWERS.init({
    // Required, your Yext Answers API key
    apiKey: '<API_KEY_HERE>',
    // Required, the key used for your Answers experience
    experienceKey: '<EXPERIENCE_KEY_HERE>',
    // Required, initialize components here, invoked when the Answers component library is loaded/ready
    onReady: function() {},
    // Optional*, Yext businessId, *required to send analytics events
    businessId: 'businessId',
    // Optional, if false, the library will not fetch pre-made templates. Only use change this to false if you provide a
    //    template bundle in the `templateBundle` config option or implement custom renders for every component
    useTemplates: true,
    // Optional, additional templates to register with the renderer
    templateBundle: {},
    // Optional, provide configuration for each vertical that is shared across components, see Vertical Pages Configuration below
    verticalPages: [],
    // Optional, search specific settings, see Search Configuration below
    search: {},
    // Optional, vertical no results settings, see Vertical No Results below
    search: {},
    // Optional, the locale will affect how queries are interpreted and the results returned. Defaults to 'en'.
    locale: 'en',
    // Optional, the Answers Experience version to use for api requests
    experienceVersion: 'PRODUCTION',
    // Optional, prints full Answers error details when set to `true`. Defaults to false.
    debug: false,
    // Optional, If true, the search session is tracked. If false, there is no tracking. Defaults to true.
    sessionTrackingEnabled: true,
    // Optional, invoked when the state of any component changes
    onStateChange: function() {},
    // Optional, analytics callback after a vertical search, see onVerticalSearch Configuration for additional details
    onVerticalSearch: function() {},
    // Optional, analytics callback after a universal search, see onUniversalSearch Configuration for additional details
    onUniversalSearch: function() {},
  })
}
```

## Vertical Pages Configuration
Below is a list of configuration options related to vertical pages in navigation and no results, used in the [base configuration](#configuration-options) above.

```js
verticalPages: [
  {
    // Required, the label for this page
    label: 'Home',
    // Required, the link to this page
    url: './index.html',
    // Optional*, the verticalKey, *required for vertical pages (must omit this property for universal)
    verticalKey: 'locations',
    // Optional, the icon name to use in no results, defaults to no icon
    icon: 'star',
    // Optional, the URL icon to use in no results, defaults to no icon
    iconUrl: '',
    // Optional, if true, will show this page first in the Navigation Component, defaults to false
    isFirst: false,
    // Optional, if true, will add a special styling to this page in the Navigation Component, defaults to false
    isActive: false,
    // Optional, if true, hide this tab in the Navigation Component, defaults to false
    hideInNavigation: false,
  },
  ...
]
```

## Search Configuration
Below is a list of configuration options related to search, used in the [base configuration](#configuration-options) above.

```js
    {
      // Optional, the vertical key to use for searches
      verticalKey: 'verticalKey',
      // Optional, the number of results to display per page, defaults to 20
      limit: '20',
      // Optional, Vertical Pages only, a default search to use on page load when the user hasn't provided a query
      defaultInitialSearch: 'What is Yext Answers?',
    },
```

## Vertical No Results Configuration
Below is a list of configuration options related to no results on Vertical Pages, used in the [base configuration](#configuration-options) above.

```js
    {
      // Optional, whether to display all results for the Vertical when a query has no results, defaults to false
      displayAllResults: false,
      // Optional, a custom template for the no results card
      template: '',
    },
```

## onVerticalSearch Configuration

The onVerticalSearch Configuration is a function, used in the [base configuration](#configuration-options) above.

It allows you to send an analytics event each time a search is run on a Vertical page. This function should take in one parameter, `searchParams`, which contains information about the search, and return the desired analytics event.

Like all Answers Javascript API Library analytics, this will only work if there is a businessId in the ANSWERS.init.

The search information exposed in `searchParams` is shown below.

```js
function (searchParams) => {
    /**
     * Vertical key used for the search.
     * @type {string}
     */
    const verticalKey = searchParams.verticalKey;

    /**
     * The string being searched for.
     * @type {string}
     */
    const queryString = searchParams.queryString;

    /**
     * The total number of results found.
     * @type {number}
     */
    const resultsCount = searchParams.resultsCount;

    /**
     * Either 'normal' or 'no-results'.
     * @type {string}
     */
    const resultsContext = searchParams.resultsContext;

    let analyticsEvent = new ANSWERS.AnalyticsEvent('ANALYTICS_EVENT_TYPE');
    analyticsEvent.addOptions({
      label: 'Sample analytics event',
      searcher: 'VERTICAL',
      query: queryString,
      resultsCount: resultsCount,
      resultsContext: resultsContext,
    });
    return analyticsEvent;
  },
}),
```

## onUniversalSearch Configuration

The onUniversalSearch Configuration is a function, used in the [base configuration](#configuration-options) above.

It allows you to send an analytics event each time a search is run
on a Universal page. This function should take in one parameter, `searchParams`, which contains information about the
search, and return the desired analytics event.

Like all Answers Javascript API Library analytics, this will only work if there is a businessId in the ANSWERS.init.

The search information exposed in `searchParams` is shown below.
```js
function (searchParams) => {
    /**
     * The string being searched for.
     * @type {string}
     */
    const queryString = searchParams.queryString;

    /**
     * The total number of results found.
     * @type {number}
     */
    const sectionsCount = searchParams.sectionsCount;

    let analyticsEvent = new ANSWERS.AnalyticsEvent('ANALYTICS_EVENT_TYPE');
    analyticsEvent.addOptions({
      type: 'ANALYTICS_EVENT_TYPE',
      label: 'Sample analytics event',
      searcher: 'UNIVERSAL',
      query: queryString
      sectionsCount: sectionsCount,
    });
    return analyticsEvent;
  },
}),
```

# Component Usage

The Answers Component Library exposes an easy to use interface for adding and customizing various types of UI components on your page.

## What is a Component?

At a high level, components are the individual pieces of an Answers page. The Answers Javascript API Library comes with many types of components. Each component is an independent, reusable piece of code. A component fills an HTML element container that the implementer provides on the page. Components are updated from their config, the config from the ANSWERS.init, and potentially an API response.

Each type of Component has its own custom configurations. Additionally, all components share the base configuration options defined above. We will provide a brief description below of what each component does, along with describing how it can be configured.


## Base Component Configuration

Every component has the same base configuration options.
```js
  {
    // Required, the selector for the container element where the component will be injected
    container: 'container',
    // Optional, a unique name for the component
    name: 'name',
    // Optional, a custom HTML classname for the component
    class: 'class',
    // Optional, handlebars template or HTML to override built-in handlebars template for the component
    template: 'template',
    // Optional, override render function
    render: function(data) {},
    // Optional, a hook for transforming data before it gets sent to render
    transformData: function(data) {},
    // Optional, invoked when the HTML is mounted to the DOM, note, this overrides any built-in onMount function for a component
    onMount: function(data) {},
    // Optional, additional properties to send with every analytics event
    analyticsOptions: {},
  }
```


## Adding a Component to Your Page
Adding a component to your page is super easy!
You can add many different [types](#types-of-components) of components to your page.
Each component supports the base configuration options above, as well as their own unique configurations.

To start, every component requires an HTML container.

```html
<div class="search-container"></div>
```

Then, you can add a component to your page through the ANSWERS add interface. You need to call `addComponent` from `onReady`.

This is an example of the `SearchBar`. See [Types of Built-in Components](#types-of-built-in-components) below.

```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-container'
})
```

## Removing Components
If you'd like to remove a component and all of its children, you can do it. Simply `ANSWERS.removeComponent(<component name>)`:

```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-container',
  name: 'MySearchBar'
})

ANSWERS.removeComponent('MySearchBar');
```

# Types of Built-in Components

## SearchBar Component

The SearchBar component is the main entry point for search querying. It provides the input box, where the user
types their query, as well as the autocomplete behavior.

```html
<div class="search-query-container"></div>
```

If the `verticalKey` config option is omitted, the SearchBar will perform Universal searches. Universal
searches return results across multiple Verticals; Vertical searches search within one Vertical. Additionally, Universal search and Vertical search provide a different way of auto complete.

```js
ANSWERS.addComponent('SearchBar', {
  // Required, the selector for the container element where the component will be injected
  container: '.search-query-container',
  // Required* for Vertical pages, omit for Universal pages
  verticalKey: '<VERTICAL_KEY>',
  // Optional, title is not present by default
  title: 'Search my Brand',
  // Optional, the initial query string to use for the input box
  query: 'query',
  // Optional, defaults to 'Conduct a search'
  labelText: 'What are you looking for?',
  // Optional, used for labeling the submit button, also provided to the template
  submitText: 'Submit',
  // Optional, used for labeling the clear button, also provided to the template
  clearText: 'Clear',
  // Optional, used to specify a different built-in icon for the submit button
  submitIcon: 'iconName',
  // Optional, a url for a custom icon for the submit button
  customIconUrl: 'path/to/icon',
  // Optional, the query text to show as the first item for auto complete
  promptHeader: 'Header',
  // Optional, no default
  placeholderText: 'Start typing...',
  // Optional, defaults to false
  autoFocus: true,
  // Optional, when auto focus on load,  open the autocomplete
  autoCompleteOnLoad: false,
  // Optional, defaults to 300ms (0.3 seconds)
  searchCooldown: 2000,
  // Optional, asks the user for their geolocation when "near me" intent is detected
  promptForLocation: true,
  // Optional, displays an "x" button to clear the current query when true
  clearButton: true,
  // Optional, redirect search query to url
  redirectUrl: 'path/to/url',
  // Optional, defaults to native form node within container
  formSelector: 'form',
  // Optional, the input element used for searching and wires up the keyboard interaction
  inputEl: '.js-yext-query'
})
```

## Direct Answer Component

This component is for Universal pages only.

The Direct Answer Component will render the BEST result, if found, based on the query.

```html
<div class="direct-answer-container"></div>
```

```js
ANSWERS.addComponent('DirectAnswer', {
  // Required, the selector for the container element where the component will be injected
  container: '.direct-answer-container',
  // Optional, the selector for the form used for submitting the feedback
  formEl: '.js-directAnswer-feedback-form',
  // Optional, the selector to bind ui interaction to for reporting
  thumbsUpSelector: '.js-directAnswer-thumbUp',
  // Optional, the selector to bind ui interaction to for reporting
  thumbsDownSelector: '.js-directAnswer-thumbDown',
  // Optional, the display text for the View Details click to action link
  viewDetailsText: 'View Details',
  // Optional, the screen reader text for positive feedback on the answer
   positiveFeedbackSrText: 'This answered my question',
  // Optional, the screen reader text for negative feedback on the answer
   negativeFeedbackSrText: 'This did not answer my question',
  // Optional, the footer text to display on submission of feedback
   footerTextOnSubmission: 'Thank you for your feedback!'
})
```

## Universal Results Component

The Universal Results component will render the results of a query,
across all configured verticals, seperated by sections.

The most complex component has a ton of overridable configuration options.

```html
<div class="universal-results-container"></div>
```

```js
ANSWERS.addComponent('UniversalResults', {
  // Required, the selector for the container element where the component will be injected
  container: '.universal-results-container',
  // Optional, the max number of search results to return, defaults to 10
  limit: 5,
  // Optional, configuration for each vertical's results
  config: {
    'locations': { // The verticalKey
      // Optional, whether to use the AccordionResults component instead of VerticalResults for this vertical
      useAccordion: false,
      // Optional, text for the view all links to the vertical page for this vertical. Default is no text
      viewAllText: "Go to this vertical's search",
      // Optional, whether to include a map with this vertical's results, defaults to false
      includeMap: true,
      // Optional*, if includeMap is true, this is required
      mapConfig: {
        // Required, either 'mapbox' or 'google', not case sensitive
        mapProvider: 'google',
        // Required, API key for the map provider
        apiKey: '<<< enter your api key here >>>',
        // Optional, configuration for the map's behavior when a query returns no results
        noResults: {
          // Optional, whether to display all results in the vertical when no results are found. Defaults to false, in which case only the no results card will be shown.
          displayAllResults: true
        },
        // Optional, whether the map should display itself when it recieves no result data
        showEmptyMap: false,
      },
      // Optional, override the render function for each result in this vertical
      renderItem: function(data) {},
      // Optional, override the handlebars template for each item in this vertical
      itemTemplate: `my item {{name}}`,
    }
  },
  // Optional, override the render function for each item in the result list
  renderItem: function(data) {},
  // Optional, override the handlebars template for each item in the result list
  itemTemplate: `my item {{name}}`,
})
```

## Vertical Results Component

The Vertical Results component shares all the same configurations from Universal Results, but you don't need to specifiy a config or context. You may limit the number of search results returned, with a maximum of 50.

You define all the options at the top level object.

```html
<div class="vertical-results-container"></div>
```

```js
ANSWERS.addComponent('VerticalResults', {
  // Required, the selector for the container element where the component will be injected
  container: '.vertical-results-container',
  // Optional, function to give each result item custom rendering
  renderItem: () => {},
  // Optional, string to give custom template to result item
  itemTemplate: `<div> Custom template </div>`,
  // Optional, set a max number of columns to display at the widest breakpoint. Possible values are 1, 2, 3 or 4, defaults to 1
  maxNumberOfColumns: 1,
  // Optional, whether to display the total number of results, default true
  showResultCount: true,
  // Optional, the card used to display each individual result, see the Cards section for more details,
  card: {
    // Optional, The type of card, built-in types are: 'Standard', 'Accordion', and 'Legacy'. Defaults to 'Standard'
    cardType: 'Standard',
    // Optional, see Data Mappings for more details
    dataMappings: () => {},
    // Optional, see Calls To Action for more details
    callsToAction: () => []
  },
  // Optional, configuration for what to display when no results are found.
  noResults: {
    // Optional, used to specify a custom template for the no results card, defaults to a built-in template.
    template: '<div> <em>No results found!</em> Try again? </div>',
    // Optional, whether to display all results in the vertical when no results are found. Defaults to false, in which case only the no results card will be shown.
    displayAllResults: false
  }
})
```

## Cards

Cards are used in Universal/Vertical Results for configuring the UI for a result on a per-item basis.

Cards take in a dataMappings attribute, which contains configuration for the card, and a callsToAction
attribute, which contains config for any callToAction buttons in the card.

callsToAction config is common throughout all cards, whereas different cards such as Standard vs BigImage
have specialized configuration depending on the card. See [Calls To Action](#Calls-To-Action)

There are three built-in cards, the [Standard Card](#Standard-Card), the [Accordion Card](#Accordion-Card)
and [Legacy Card](#Legacy-Card).

## Calls To Action

callsToActions are specified as either an array of CTA configs, or a function that returns
an array of CTA configs. An array of CTA configs is an object of either static config options
or functions that return the desired config option.

Examples are detailed below.

Note: A CTA without both a label and icon will not be rendered.

1. an array of static CTA config objects

```js
const callsToAction = [{
  // Label below the CTA icon, default null
  label: 'cta label',
  // Icon name for the CTA that is one of the built-in icons, defaults to undefined (no icon). If your icon
  // is not recognized it will default to 'star'.
  icon: 'star',
  // URL to a custom icon for the cta. This takes priority over icon if both are present, default is
  // no icon url.
  iconUrl: 'https://urltomyicon.com/customicon.gif',
  // Click through url for the icon and label
  // Note, a protocol like https:// is required here.
  url: 'https://yext.com',
  // Analytics event that should fire, defaults to 'CTA_CLICK':
  //       'TITLE_CLICK',
  //       'CTA_CLICK',
  //       'TAP_TO_CALL',
  //       'ORDER_NOW',
  //       'ADD_TO_CART',
  //       'APPLY_NOW',
  //       'DRIVING_DIRECTIONS',
  //       'VIEW_WEBSITE',
  //       'EMAIL',
  //       'BOOK_APPOINTMENT',
  //       'RSVP'
  analytics: 'CTA_CLICK',
  // The target attribute for the CTA link, defaults to '_blank'. To open in a new window use '_blank'
  target: '_blank',
  // The eventOptions needed for the event to fire. Either a valid json string, an object, or a function that
  // takes in the result data response.
  // By default, if no event options are specified the SDK will try to add verticalKey, entityId, and searcher options
  // to the analytics event.
  eventOptions: result => {
    return {
      // The vertical key for the CTA. If unspecified, this defaults to the vertical key this cta is a part of
      verticalKey: "people",
      // The entity id of the result this cta is a part of, defaults to the entityId field in Knowledge Graph
      entityId: result.id,
      // If the CTA is inside a vertical search, defaults to the value "VERTICAL",
      // if is inside a universal search, defaults to the value "UNIVERSAL"
      searcher: "VERTICAL"
    };
  }
}]
```

2. as a function that returns a cta config object.
NOTE: we do not allow multiple nested functions, to avoid messy user configurations.

```js
const callsToAction = item => [{
  label: item.name,
  url: "https://yext.com",
  analytics: "CTA_CLICK",
  target: '_blank',
  icon: "briefcase",
  eventOptions: `{ "verticalKey": "credit-cards", "entityId": "${item.id}", "searcher":"UNIVERSAL", "ctaLabel": "cards"}`
}, {
  label: 'call now',
  url: "https://maps.google.com",
  analytics: "CTA_CLICK",
  target: '_blank',
  icon: "phone",
  eventOptions: `{ "verticalKey": "credit-cards", "entityId": "${item.id}", "searcher":"UNIVERSAL", "ctaLabel": "cards"}`
}]
```

3. Each individual field in a CTA config can also be a function that operates on the result item.

```js
const callsToAction = item => [{
  label: item => item.name,
  url: "https://yext.com",
  analytics: "CTA_CLICK",
  target: '_self',
  icon: "briefcase",
  eventOptions: item => `{ "verticalKey": "credit-cards", "entityId": "${item.id}", "searcher":"UNIVERSAL", "ctaLabel": "cards"}`
}]
```

callsToActions can then be included in a card object like so:

```js
ANSWERS.addComponent('VerticalResults', {
  /* ...other vertical results config... */
  card: {
    /* ...other card config...*/
    callsToAction: item => [{
      label: item => item.name,
      url: "https://yext.com",
    }]
  }
  /* ...other vertical results config... */
})
```

## Data Mappings

The dataMappings config option define how a card's attributes, such as title and details, will be rendered.
They can be configured either through a function that returns a dataMappings object
or a static dataMappings object.

Each attribute of a dataMappings object is also either a function or a static value.

Below is an example of dataMappings as function.

```js
ANSWERS.addComponent('VerticalResults', {
  /* ...other vertical results config... */
  card: {
    /* ...other card config...*/
    dataMappings: item => ({
      title: item.name,
      subtitle: `Department: ${item.name} `,
      details: item.description,
      image: item.headshot ? item.headshot.url : '',
      url: 'https://yext.com',
      showMoreLimit: 500,
      showMoreText: "show more",
      showLessText: "put it back",
      target: '_blank'
    })
  }
  /* ...other vertical results config... */
})
```

And below is an example of dataMappings as an object with functions inside it.
You can use both static attributes and function attributes together.

```js
ANSWERS.addComponent('VerticalResults', {
  /* ...other vertical results config... */
  card: {
    /* ...other card config...*/
    dataMappings: {
      title: item => item.name,
      subtitle: item => `Department: ${item.name} `,
      details: item => item.description,
      image: item => item.headshot ? item.headshot.url : '',
      url: 'https://yext.com',
      showMoreLimit: 500,
      showMoreText: "show more",
      showLessText: "put it back",
      target: '_blank'
    }
  }
  /* ...other vertical results config... */
})
```


## Standard Card

The data mappings for a Standard Card has these attributes

```js
const dataMappings = item => {
  return {
    // Title for the card, defaults to the name of the entity
    title: item.title,
    // Subtitle, defaults to null
    subtitle: `Department: ${item.name} `,
    // Details, defaults to the entity's description
    details: item.description,
    // Image to display, defaults to null
    image: item.headshot ? item.headshot.url : '',
    // Url for the title/subtitle, defaults to the entity's website url
    // Note, a protocol like https://yext.com is required, as opposed to just yext.com
    url: item.link || item.website,
    // Character limit to hide remaining details and display a show more button, defaults to no limit.
    showMoreLimit: 350,
    // Text for show more button, defaults to 'Show More'
    showMoreText: "show more",
    // Text for show less button, defaults to 'Show Less'
    showLessText: "put it back",
    // The target attribute for the title link, defaults to '_self'. To open in a new window use '_blank'
    target: '_blank',
    // Whether to show the ordinal of this card in the results, i.e. first card is 1 second card is 2,
    // defaults to false
    showOrdinal: false,
    // A tag to display on top of an image, always overlays the image, default no tag
    tagLabel: 'On Sale!'
  };
}
```

## Accordion Card

The data mappings for an Accordion Card has these attributes

```js
const dataMappings = item => {
  return {
    // Title for the card, defaults to the name of the entity
    title: item.title,
    // Subtitle, defaults to null
    subtitle: `Department: ${item.name} `,
    // Details, defaults to the entity's description
    details: item.description,
    // Whether the first Accordion Card shown in vertical/universal results should be open on page load, defaults to false
    expanded: false
  };
}
```

## Legacy Card

The Legacy Card is very similar to the Standard Card, but with the legacy DOM structure and class names
from before v0.13.0. New users should not use the Legacy Card; instead, use the Standard Card. Features
added after v0.13.0 may not work with the Legacy Card.

The data mappings for a legacy card has these attributes

```js
const dataMappings = item => {
  return {
    // Title for the card, defaults to the name of the entity
    title: item.title,
    // Subtitle, defaults to null
    subtitle: `Department: ${item.name} `,
    // Details, defaults to the entity's description
    details: item.description,
    // Image to display, defaults to null
    image: item.headshot ? item.headshot.url : '',
    // Url for the title/subtitle, defaults to the entity's website url
    url: item.link || item.website,
    // The target attribute for the title link, defaults to '_self'. To open in a new window use '_blank'
    target: '_blank',
    // Whether to show the ordinal of this card in the results, i.e. first card is 1 second card is 2,
    // defaults to false
    showOrdinal: false
  };
}
```

## Pagination Component

This component is only for Vertical pages.

The Pagination component allows users to page through vertical search results.

```html
<div class="pagination-container"></div>
```

```js
ANSWERS.addComponent('Pagination', {
  // Required, the selector for the container element where the component will be injected
  container: '.pagination-component',
  // Required*, the vertical for pagination, *if omitted, will fall back to the search base config
  verticalKey: 'verticalKey',
  // Optional, display a double arrow allowing users to jump to the first page of results
  showFirst: true,
  // Optional, display a double arrow allowing users to jump to the last page of results
  showLast: true,
  // Optional, label for a page of results
  pageLabel: 'Page'
});
```

## FilterBox Component

This component is only for Vertical pages.

The FilterBox component shows a list of filters to apply to a search.

```html
<div class="filters-container"></div>
```

```js
ANSWERS.addComponent('FilterBox', {
  // Required, the selector for the container element where the component will be injected
  container: '.filters-container',
  // Required, list of filter component configurations
  filters: [
    {
      type: 'FilterOptions',
      control: 'multioption',
      options: [
        {
          label: 'Open Now',
          field: 'c_openNow',
          value: true
        },
        {
          label: 'Dog Friendly',
          field: 'c_dogFriendly',
          value: true
        },
        {
          label: 'Megastores',
          field: 'c_storeType',
          value: 'Megastore'
        }
      ]
    }
  ],
  // Required, the vertical key for the search, default null
  verticalKey: 'verticalKey',
  // Optional, title to display above the filter
  title: 'Filters',
  // Optional, show number of results for each filter
  showCount: true,
  // Optional, execute a new search whenever a filter selection changes
  searchOnChange: false,
  // Optional, show a reset button per filter group
  resetFilter: false,
  // Optional, the label to use for the reset button above
  resetFilterLabel: 'reset',
  // Optional, show a reset-all button for the filter control
  resetFilters: true,
  // Optional, the label to use for the reset-all button above
  resetFiltersLabel: 'reset-all',
  // Optional, allow collapsing excess filter options after a limit
  showMore: true,
  // Optional, the max number of filter to show before collapsing extras
  showMoreLimit: 5,
  // Optional, the label to show for displaying more filter
  showMoreLabel: 'show more',
  // Optional, the label to show for displaying less filter
  showLessLabel: 'show less',
  // Optional, allow expanding and collapsing entire groups of filters
  expand: true,
  // Optional, show the number of applied filter when a group is collapsed
  showNumberApplied: true,
  // Optional, the label to show on the apply button
  applyLabel: 'apply',
  // Optional, whether or not this filterbox contains dynamic filters, default false
  isDynamic: true
});
```

## Facets Component

This component is only for Vertical pages.

The Facets component displays filters relevant to the current search, configured on the server, automatically.

```html
<div class="facets-container"></div>
```

```js
ANSWERS.addComponent('Facets', {
  // Required, the selector for the container element where the component will be injected
  container: '.facets-container',
  // Required
  verticalKey: '<VERTICAL_KEY>',
  // Optional, title to display above the facets
  title: 'Filters',
  // Optional, show number of results for each facet
  showCount: true,
  // Optional, execute a new search whenever a facet selection changes
  searchOnChange: false,
  // Optional, show a reset button per facet group
  resetFacet: false,
  // Optional, the label to use for the reset button above
  resetFacetLabel: 'reset',
  // Optional, show a reset-all button for the facets control
  resetFacets: true,
  // Optional, the label to use for the reset-all button above
  resetFacetsLabel: 'reset-all',
  // Optional, allow collapsing excess facet options after a limit
  showMore: true,
  // Optional, the max number of facets to show before collapsing extras
  showMoreLimit: 5,
  // Optional, the label to show for displaying more facets
  showMoreLabel: 'show more',
  // Optional, the label to show for displaying less facets
  showLessLabel: 'show less',
  // Optional, allow expanding and collapsing entire groups of facets
  expand: true,
  // Optional, show the number of applied facets when a group is collapsed
  showNumberApplied: true,
  // Optional, the label to show on the apply button
  applyLabel: 'apply'
});
```

## FilterSearch Component

The FilterSearch component provides a text input box for users to type a query and select a preset matching filter. When a filter is selected, a vertical search is performed. If multiple FilterSearch components are on the page, the search will include all selected filters across all of the components.

```html
<div class="filter-search-container"></div>
```

```js
ANSWERS.addComponent('FilterSearch', {
  // Required, the selector for the container element where the component will be injected
  container: '.filter-search-container',
  // Required
  verticalKey: '<VERTICAL_KEY>',
  // Optional, no default
  placeholderText: 'Start typing...',
  // Optional, if true, the selected filter is saved and used for the next search,
  // but does not trigger a search itself. Defaults to false.
  storeOnChange: true,
  // Optional, defaults to native form node within container
  formSelector: '.js-form',
  // Optional, the input element used for searching and wires up the keyboard interaction
  inputEl: '.js-query',
  // Optional, provided to the template as a data point
  title: 'title',
  // Optional, the search text used for labeling the input box, also provided to template
  searchText: 'What do you want to search',
  // Optional, the query text to show as the first item for auto complete
  promptHeader: 'Header',
  // Optional, auto focuses the input box if set to true, default false
  autoFocus: true,
  // Optional, redirect search query to url
  redirectUrl: 'path/to/url',
  // Optional, the search parameters for autocompletion
  searchParameters: {
    // List of fields to query for
    fields: [{
      // Field id to query for e.g. c_customFieldName, buildin.location
      fieldId: "builtin.location",
      // Entity type api name e.g. healthcareProfessional, location, ce_person
      entityTypeId: "ce_person",
      // Optional, if true sections search results by search filter, default false
      sectioned: false,
    }]
  }
})
```

## Filter Components

Filter components can be used in a FilterBox or on their own to affect a search.

### FilterOptions

FilterOptions displays a set of filters with either checkboxes or radio buttons.

```html
<div class="filter-container"></div>
```

```js
ANSWERS.addComponent('FilterOptions', {
  // Required, the selector for the container element where the component will be injected
  container: '.filter-container',
  // Required, control type: 'singleoption' or 'multioption'
  control: 'singleoption',
  // Required, list of options
  options: [
    {
      // Required, label to show next to the filter option
      label: 'Open Now',
      // Required, the field's API name to filter on, configured in the Yext platform
      field: 'c_openNow',
      // Required, the value for the above field to filter by
      value: true,
      // Optional, whether the option is selected by default
      selected: true,
    },
    ...
  ],
  // Optional, if true, the filter value is saved on change and sent with the next search. Defaults to false.
  storeOnChange: false,
  // Optional, the selector used for options in the template, defaults to '.js-yext-filter-option'
  optionSelector: '.js-yext-filter-option',
  // Optional, if true, triggers a search on each change to a filter, default false
  searchOnChange: true,
  // Optional, if true, show a reset button
  showReset: false,
  // Optional, the label to use for the reset button, defaults to 'reset'
  resetLabel: 'reset',
  // Optional, allow collapsing excess filter options after a limit, defaults to true
  showMore: true,
  // Optional, the max number of filter options to show before collapsing extras, defaults to 5
  showMoreLimit: 5,
  // Optional, the label to show for displaying more options, defaults to 'show more'
  showMoreLabel: 'show more',
  // Optional, the label to show for displaying less options, defaults to 'show less'
  showLessLabel: 'show less',
  // Optional, allow expanding and collapsing the filter, defaults to true
  showExpand: true,
  // Optional, show the number of applied options when a group is collapsed, defaults to true
  showNumberApplied: true,
  // Optional, the callback function to call when changed
  onChange: function() {},
  // Optional, the label to be used in the legend, defaults to 'Filters'
  label: 'Filters'
});
```

### RangeFilter

Displays two numeric inputs for selecting a number range.

```html
<div class="range-filter-container"></div>
```

```js
ANSWERS.addComponent('RangeFilter', {
  // Required, the selector for the container element where the component will be injected
  container: '.range-filter-container',
  // Required, the API name of the field to filter on
  field: 'outdoorPoolCount',
  // Optional, title to display for the range control, defaults to empty legend
  title: 'Number of Outdoor Pools',
  // Optional, the label to show next to the min value, defaults to no label
  minLabel: 'At Least',
  // Optional, the placeholder text for the min value, defaults to 'Min'
  minPlaceholderText: 'Min',
  // Optional, the label to show next to the max value, defaults to no label
  maxLabel: 'Not More Than',
  // Optional, the placeholder text for the max value, defaults to 'Max'
  maxPlaceholderText: 'Max',
  // Optional, the initial min value to show, defaults to 0
  initialMin: 1,
  // Optional, the initial max value to show, defaults to 10
  initialMax: 5,
  // Optional, the callback function to call when changed
  onChange: function() {}
});
```

### DateRangeFilter

Displays two date inputs for selecting a range of dates.

```html
<div class="date-range-filter-container"></div>
```

```js
ANSWERS.addComponent('DateRangeFilter', {
  // Required, the selector for the container element where the component will be injected
  container: '.date-range-filter-container',
  // Required, the API name of the field to filter on
  field: 'time.start',
  // Optional, title to display for the range, defaults to empty legend
  title: 'Event Start Date',
  // Optional, the label to show next to the min date, defaults to no label
  minLabel: 'Earliest',
  // Optional, the label to show next to the max date, defaults to no label
  maxLabel: 'Latest',
  // Optional, the initial min date to show in yyyy-mm-dd format, defaults to today
  initialMin: '2019-08-01',
  // Optional, the initial max date to show in yyyy-mm-dd format, defaults to today
  initialMax: '2019-09-01',
  // Optional, whether to store the filter on change to input
  storeOnChange: true,
  // Optional, if true, this filter represents an exclusive range, rather than an inclusive one, defaults to false
  isExclusive: false,
  // Optional, the callback function to call when changed
  onChange: function() {}
});
```

### GeoLocationFilter

Displays a "Use My Location" button that filters results to a radius around the user's current position.

```html
<div class="geolocation-filter-container"></div>
```

For all optional config in the example, unless otherwise specified, the default is the example value.

```js
ANSWERS.addComponent('GeoLocationFilter', {
  // Required, the selector for the container element where the component will be injected
  container: '.geolocation-filter-container',
  // Optional, the vertical key to use
  verticalKey: 'verticalKey',
  // Optional, radius around the user, in miles, to find results, default 50
  radius: 50,
  // Optional, the text to show when enabled
  enabledText: 'Disable My Location',
  // Optional, the text to show ehn loading the user's location
  loadingText: 'Loading',
  // Optional, The label to show when unable to get the user's location
  errorText: 'Unable To Use Location',
  // Optional, CSS selector of the button
  buttonSelector: '.js-yxt-GeoLocationFilter-button',
  // Optional, Css selector of the query input
  inputSelector: '.js-yxt-GeoLocationFilter-input',
  // Optional, if true, triggers a search on each change to a filter, default false
  searchOnChange: true,
  // Optional, the icon url to show in the geo button
  geoButtonIcon: 'path/to/url',
  // Optional, the alt text to use with the geo button's icon
  geoButtonIconAltText: 'Use My Location',
  // Optional, the text to show in the geo button
  geoButtonText: 'Use my location',
  // Optional, Search parameters for the geolocation autocomplete
  searchParameters: {
    // List of fields to query for
    fields: [{
      // Field id to query for e.g. c_customFieldName, buildin.location
      fieldId: "builtin.location",
      // Entity type api name e.g. healthcareProfessional, location, ce_person
      entityTypeId: "ce_person",
      // Optional, if true sections search results by search filter, default false
      sectioned: false,
    }]
  },
});
```

## Navigation Component

The Navigation Component adds a dynamic experience to your pages navigation experience.

When using multiple vertical searches in a universal search, the navigation ordering will be automatically updated based on the search results. By default, tabs that do not fit in the container will go inside a dropdown menu.

Vertical configurations should be provided the ANSWERS.init's `verticalPages` configuration. Find more info in the [Vertical Pages Configuration](#vertical-pages-configuration) section.


```html
<div class="navigation-container"></nav>
```

```js
ANSWERS.addComponent('Navigation', {
  // Required, the selector for the container element where the component will be injected
  container: '.navigation-container',
  // Optional, controls if navigation shows a scroll bar or dropdown for mobile. Options are COLLAPSE and INNERSCROLL
  mobileOverflowBehavior: 'COLLAPSE',
  // Optional, the aria-label to set on the navigation, defaults to 'Search Page Navigation'
  ariaLabel: 'Search Page Navigation',
  // Optional, the label to display on the dropdown menu button when it overflows, defaults to 'More'
  overflowLabel: 'More',
  // Optional, name of the icon to show on the dropdown button instead when it overflows
  overflowIcon: null,
})
```

## QA Submission Component

The QA Submission component provides a form for submitting a QA question,
when a search query is run.

```html
<div class="question-submission-container"></div>
```

```js
ANSWERS.addComponent('QASubmission', {
  // Required, the selector for the container element where the component will be injected
  container: '.question-submission-container',
  // Required. Set this to the Entity ID of the organization entity in the Knowledge Graph
  entityId: 123,
  // Required. Defaults to ''
  privacyPolicyUrl: 'https://mybiz.com/policy',
  // Optional, defaults to native form node within container
  formSelector: '.js-form',
  // Optional, ;abel for name input
  nameLabel: 'Name',
  // Optional, label for email input
  emailLabel: 'Email',
  // Optional, label for question input
  questionLabel: 'Question',
  // Optional, title displayed for the form
  sectionTitle: 'Ask a question',
  // Optional, teaser displayed for the form, next to the title
  teaser: 'Can\'t find what you’re looking for? Ask a question below.',
  // Optional, description for the form
  description: 'Enter your question and contact information, and we\'ll get back to you with a response shortly.'
  // Optional, text before the privacy policy link
  privacyPolicyText: 'By submitting my email address, I consent to being contacted via email at the address provided.',
  // Optional, label for the privacy policy url
  privacyPolicyUrlLabel: 'Learn more here.',
  // Optional, error message displayed when the privacy policy is not selected
  privacyPolicyErrorText: '* You must agree to the privacy policy to submit feedback.',
  // Optional, error message displayed when an invalid email is not submitted
  emailFormatErrorText: '* Please enter a valid email address.'
  // Optional, placeholder displayed in all required fields
  requiredInputPlaceholder: '(required)',
  // Optional, confirmation displayed once a question is submitted
  questionSubmissionConfirmationText: 'Thank you for your question!',
  // Optional, label displayed on the button to submit a question
  buttonLabel: 'Submit',
  // Optional, set this to whether or not the form is expanded by default when a user arrives on the  page
  expanded: true,
  // Optional, error message displayed when there is an issue with the QA Submission request
  networkErrorText: 'We\'re sorry, an error occurred.'
})
```

## Spell Check Component

The spell check component shows spell check suggestions/autocorrect.

```html
<div class="spell-check-container"></div>
```

```js
ANSWERS.addComponent('SpellCheck', {
  // Required, the selector for the container element where the component will be injected
  container: '.spell-check-container',
  // Optional, the help text to display when suggesting a query
  suggestionHelpText: 'Did you mean:',
})
```

## Location Bias Component

The location bias component shows location that used for location bias and allow user to improve accuracy with HTML5 geolocation.

```html
<div class="location-bias-container"></div>
```

```js
ANSWERS.addComponent('LocationBias', {
  // Required, the selector for the container element where the component will be injected
  container: '.location-bias-container',
  // Optional, the vertical key for the search, default null
  verticalKey: 'verticalKey',
  // Optional, the element used for updating location
  updateLocationEl: '.js-locationBias-update-location',
  // Optional, help text to inform someone their IP was used for location
  ipAccuracyHelpText: 'based on your internet address',
  // Optional, help text to inform someone their device was used for location
  deviceAccuracyHelpText: 'based on your device',
  // Optional, text used for the button to update location
  updateLocationButtonText: 'Update your location'
})
```

## Sort Options Component

The sort options component displays a list of radio buttons that allows users to sort the results of a vertical search.
Currently, there may be only one sort options component per page.

```html
<div class='sort-options-container'></div>
```

```js
// note: showExpand and showNumberApplied options are explicitly not included:
// sorting will always be exposed to the user if added.
ANSWERS.addComponent('SortOptions', {
  // Required, the selector for the container element where the component will be injected
  container: '.sort-options-container',
  // Optional: The label used for the “default” sort (aka sort the order provided by the config), defaults to 'Best Match'
  defaultSortLabel: 'Best Match',
  // Required: List of component configurations
  options: [
    {
      // Required: Either FIELD, ENTITY_DISTANCE, or RELEVANCE
      type: 'FIELD',
      // Required only if type is FIELD, field name to sort by
      field: 'c_popularity',
      // Required only if type is FIELD, direction to sort by
      direction: 'ASC',
      // Required: Label for the sort option's radio button
      label: 'Popularity',
    },
    {
      type: "ENTITY_DISTANCE",
      label: 'Distance'
    },
    {
      type: 'RELEVANCE',
      label: 'Relevance'
    }
  ],
  // Required: the vertical key used
  verticalKey: 'KM',
  // Optional: the selector used for options in the template, defaults to '.yxt-SortOptions-optionSelector'
  optionSelector: '.yxt-SortOptions-optionSelector',
  // Optional: if true, triggers a resorts on each change to the sort options,
  // if false the component also renders an apply button that applies the sort, defaults to false
  searchOnChange: false,
  // Optional: Show a reset button, defaults to false
  showReset: false,
  // Optional: The label to use for the reset button, defaults to 'reset'
  resetLabel: 'reset',
  // Optional: Allow collapsing excess filter options after a limit, defaults to true
  // Note: screen readers will not read options hidden by this flag, without clicking show more first
  showMore: true,
  // Optional: The max number of filter options to show before collapsing extras, defaults to 5
  showMoreLimit: 5,
  // Optional: The label to show for displaying more options, defaults to 'Show more'
  showMoreLabel: 'Show more',
  // Optional: The label to show for displaying less options, defaults to 'Show less'
  showLessLabel: 'Show less',
  // Optional, the callback function to call when changed, defaults to function() => {}
  // runs BEFORE search triggered by searchOnChange if searchOnChange is true
  onChange: function() {},
  // Optional, the label to be used in the legend, defaults to 'Sorting'
  label: 'Sorting',
  // Optional, the label to be used on the apply button
  // only appears if searchOnChange is false, defaults to 'Apply'
  applyLabel: 'Apply'
});
```

## Map Component
The Map component displays a map with a pin for each result that has Yext display coordinates.

```html
<div class='map-container'></div>
```

```js
ANSWERS.addComponent('Map', {
  // Required. This is the class of the target HTML element the component will be mounted to
  container: '.map-container',
  // Required. Supported map providers include: `google` or `mapBox`, not case-sensitive
  mapProvider: 'mapBox',
  // Required*. The API Key used for interacting with the map provider; (*except for Google Maps if provided `clientId`)
  apiKey: '',
  // Optional, can be used for Google Maps in place of the API key
  clientId: '',
  // Optional, determines whether or not to collapse pins at the same lat/lng
  collapsePins: false,
  // Optional, the zoom level of the map, defaults to 14
  zoom: 14,
  // Optional, the default coordinates to display if there are no results returned used if showEmptyMap is set to true
  defaultPosition: { lat: 37.0902, lng: -95.7129 },
  // Optional, determines if an empty map should be shown when there are no results
  showEmptyMap: false,
  // Optional, callback to invoke when a pin is clicked. The clicked item(s) are passed to the callback
  onPinClick: null,
  // Optional, callback to invoke once the Javascript is loaded
  onLoaded: function () {},
  // Optional, the custom configuration override to use for the map markers, function
  pin: function () {
    return {
      icon: {
        anchor: null, // e.g. { x: 1, y: 1 }
        svg: null,
        url: null,
        scaledSize: null // e.g. { w: 20, h: 20 }
      },
      labelType: 'numeric'
    };
  },
};

# Customizing Components

## Using a Custom Renderer

If you want to use a use your own template language (e.g. soy, mustache, groovy, etc),
you should NOT use the template argument. Instead, you can provide a custom render function to the component.

```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-container',
  render: function(data) {
    // Using native ES6 templates -- but you can replace this with soy,
    // or any other templating language as long as it returns a string.
    return `<div class="my-search">${data.title}</div>`
  }
})
```

## Custom Data Formatting

You can format specific entity fields using `fieldFormatters`.
These formatters are applied before the `transformData` step.

Each formatter takes in an object with the following properties :
- `entityProfileData`
- `entityFieldValue`
- `highlightedEntityFieldValue`
- `verticalId`
- `isDirectAnswer`

Below is an example usage.
```js
ANSWERS.init({
  apiKey: '<API_KEY_HERE>',
  experienceKey: '<EXPERIENCE_KEY_HERE>',
  fieldFormatters: {
    'name': (formatterObject) => formatterObject.entityFieldValue.toUpperCase(),
    'description' : (formatterObject) => formatterObject.highlightedEntityFieldValue
  }
});
```

## Custom Data Transforms

If you want to mutate the data thats provided to the render/template before it gets rendered,
you can use the `transformData` hook.

All properties and values that you return from here will be accessible from templates.


```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-container',
  transformData: (data) => {
    // Extend/overide the data object
    return Object.assign({}, data, {
      title: data.title.toLowerCase()
    })
  },
  render: function(data) {
    // Using native ES6 templates -- but you can replace this with soy,
    // or any other templating language as long as it returns a string.
    return `<div class="my-search">${data.title}</div>`
  }
})
```

## Using a Custom Template for a Component
All component templates are written using [Handlebars templates](https://handlebarsjs.com/).

It's easy to override these templates with your own templates.
Keep in mind, that you must provide valid handlebars syntax here.

```js
// Use handlebars syntax to create a template string
let customTemplate = `<div class="my-search">{{title}}</div>`

ANSWERS.addComponent('SearchBar', {
  container: '.search-container',
  template: customTemplate
})
```

## Creating Custom Components
You can create custom Answers components with the same power of the builtin components. First, create
a subtype of ANSWERS.Component and register it.

For ES6:
```js
class MyCustomComponent extends ANSWERS.Component {
  constructor (config) {
    super(config);
    this.myProperty = config.myProperty;
  }

  static defaultTemplateName () {
    return 'default';
  }

  static areDuplicateNamesAllowed () {
    return false;
  }

  static get type () {
    return 'MyCustomComponent';
  }
}
ANSWERS.registerComponentType(MyCustomComponent); // Register the component with the library
```

For ES5:
```js
function MyCustomComponent (config) {
  ANSWERS.Component.call(this, config);

  this.myProperty = config.myProperty;
}

MyCustomComponent.prototype = Object.create(ANSWERS.Component.prototype);
MyCustomComponent.prototype.constructor = MyCustomComponent;
MyCustomComponent.defaultTemplateName = function () { return 'default' };
MyCustomComponent.areDuplicateNamesAllowed = function () { return false };
Object.defineProperty(MyCustomComponent, 'type', { get: function () { return 'MyCustomComponent' } });

ANSWERS.registerComponentType(MyCustomComponent); // Register the component with the library
```

Now you can use your custom component like any built-in component:

```js
ANSWERS.addComponent('MyCustomComponent', {
  container: '.my-component-container',
  template: `<div>{{_config.myProperty}}</div>`,
  myProperty: 'my property'
});
```

# Template Helpers

When using handlebars templates, Answers ships with a bunch of pre-built template helpers that you can use. You can learn more about them [here](https://github.com/jonschlinkert/template-helpers).

If you want to register custom template helpers to the handlebars render, you can do so like this:
```js
ANSWERS.registerHelper('noop', function(options) {
  return options.fn(this);
})
```

You can learn more about the interface for registering helpers by taking a look at the [Handlebars Block Helpers](https://handlebarsjs.com/block_helpers.html) documentation.

# Analytics

If a businessId is supplied in the config, Answers will track some basic interaction analytics automatically, such as search bar impressions and Call-To-Action clicks.
If you would like to add custom analytics on top of the built-in ones, use the following:

## Custom Analytics Using JavaScript

You may send analytics from external code with the below interface.

```js
  const event = new ANSWERS.AnalyticsEvent('CUSTOM');
  event.addOptions({ myData: 'data' });
  ANSWERS.AnalyticsReporter.report(event)
```

## Custom Analytics Using Data Attributes

You may add additional, custom analytic events to templates using certain data attributes. Click analytics can be attached to an element by adding the `data-eventtype` attribute to the element you want to track clicks for. The provided string should be the type of the analytics event. You can optionally include metadata inside the `data-eventoptions` attribute, in a JSON format. Whenever the element is clicked, an analtyics event with that data will be sent to the server.

```html
<button class="driving-directions-button"
        data-eventtype="DRIVING_DIRECTIONS"
        data-eventoptions='{"store": "{{store}}"}'
>
    Drive to {{store}}
</button>
```

## Conversion Tracking

By default, Answers does not perform conversion tracking for analytics. To opt-in to this behavior, use the `setConversionsOptIn` method after initialization:

```js
ANSWERS.init({ ... });
agreementButton.onclick = function() { ANSWERS.setConversionsOptIn(true); };
```

You must also add the following to your HTML:

```html
<script src="https://assets.sitescdn.net/ytag/ytag.min.js"></script>
```

## On-Search Analytics

You can find instructions for configuring on search analytics above in these sections: [onVerticalSearch Configuration](#onverticalsearch-configuration), [onUniversalSearch Configuration](#onuniversalsearch-configuration).

