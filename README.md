# Answers
Answers Javascript API Library.

Outline:
1. [Install / Setup](#install-and-setup)
   - [Configuration Options](#configuration-options)
   - [Template Helpers](#template-helpers)
2. [Component Usage](#component-usage)
   - [Base Component Configuration](#base-component-configuration)
   - [Adding a Component](#adding-a-component)
   - [Using a Custom Template](#using-a-custom-template)
   - [Using a Custom Renderer](#using-a-custom-renderer)
   - [Custom Data Formatting](#custom-data-formatting)
   - [Custom Data Transforms](#custom-data-transforms)
3. [Types of Components](#types-of-components)
   - [Navigation Component](#navigation-component)
   - [SearchBar Component](#searchbar-component)
   - [FilterSearch Component](#filtersearch-component)
   - [FilterBox Component](#filterbox-component)
   - [Filter Components](#filter-components)
   - [DirectAnswer Component](#direct-answer-component)
   - [UniversalResults Component](#universal-results-component)
   - [VerticalResults Component](#vertical-results-component)
   - [QASubmission Component](#qa-submission-component)
4. [Analytics](#analytics)
   - [Click Analytics](#click-analytics)
# Install and Setup

To include the answers base CSS (optional).
```html
<link rel="stylesheet" type="text/css" href="https://assets.sitescdn.net/answers/answers.css">
```

Adding the Javascript library
```html
<script src="https://assets.sitescdn.net/answers/answers.min.js" onload="ANSWERS.domReady(initAnswers)" async></script>
```

```js
function initAnswers() {
  ANSWERS.init({
    apiKey: '<API_KEY_HERE>',
    answersKey: '<ANSWERS_KEY_HERE>',
    onReady: function() {
      // Component creation logic here
    })
  })
}
```

## Configuration Options
Below is a list of configuration options that can be used during initialization.

|  option   | type       | description                               | required      |
|-----------|------------|-------------------------------------------|---------------|
| apiKey       | string     | Your API key                              | required      |
| answersKey   | string     | The key used for your answers project     | required      |
| onReady  | function     | Invoked when the Answers component library is loaded/ready | required  |
| onStateChange | function | Invoked when the public sate changes | not required |
| useTemplates | boolean   | default: `true`.  If false, don't fetch pre-made templates. Only use this if you plan to implement custom renders for every component!  | not required  |
| templateUrl  | string     | Use precompiled template hosted by you       | not required  |
| templateBundle  | object     | Provide the precompiled templates      | not required  |
| locale  | string | The locale of the configuration. The locale will affect how queries are interpreted and the results returned. The default locale value is 'en'. | not required |

## Template Helpers
When using handlebars templates, Answers ships with a bunch of pre-built template helpers that you can use. You can learn more about them [here](https://github.com/jonschlinkert/template-helpers).

If you want to register custom template helpers to the handlebars render, you can do so like this:
```js
ANSWERS.registerHelper('noop', function(options) {
  return options.fn(this);
})
```

You can learn more about the interface for registering helpers by taking a look at the [Handlebars Block Helpers](https://handlebarsjs.com/block_helpers.html) documentation.

# Component Usage

The Answers Component Library exposes an easy to use interface for adding and customizing various types of UI components on your page.

Every component requires a containing HTML element.


## Base Component Configuration

Every component has the same base configuration options.

|  option   | type       | description                               | required      |
|-----------|------------|-------------------------------------------|---------------|
| name          | string     | a unique name, if using multiple components of the same type  | optional      |
| container     | string     | the CSS selector to append the component. | required      |
| class         | string     | a custom class to apply to the component  | not required  |
| template      | string     | override internal handlebars template       | not required  |
| render        | function   | override render function. data provided   | not required  |
| transformData | function   | A hook for transforming data before it gets sent to render | not required |
| onMount       | function   | invoked when the HTML is mounted to the DOM | not required |
| analyticsOptions | object | additional properties to send with every analytics event | not required |


## Adding a Component
Adding a component to your page is super easy!
You can add many different [types](#types-of-components) of components to your page.
Each component supports the base configuration options above, as well as their own unique configurations.

To start, every component requires an HTML container.

```html
<div class="search-container"></div>
```

Then, you can add a component to your page through the ANSWERS add interface.

This is an example of the `SearchBar`. See [Types of Components](#types-of-components) below.

```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-container',
  // -- other options --
})
```

## Using a Custom Template
All component templates are written using handlebars.

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

You can format specific entity fields using `fieldFormatters`. These formatters are applied before the `transformData` step. Each formatter takes in three arguments, `(fieldValue, entityData, verticalId, isDirectAnswer)`.

```js
ANSWERS.init({
  apiKey: '<API_KEY_HERE>',
  answersKey: '<ANSWERS_KEY_HERE>',
  fieldFormatters: {
    'name': (name, entityData, verticalId, isDirectAnswer) => name.toUpperCase()
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

# Types of Components

Each type of Component has it's own custom configurations. However, all components share the
base configuration options defined above.

## Navigation Component

The Navigation Component adds a dynamic experience to your pages navigation experience.
When using multiple veritcal searches in a universal search, the navigation ordering will be automatically
updated based on the search results.


```html
<nav class="navigation-container"></nav>
```

```js
ANSWERS.addComponent('Navigation', {
  container: '.navigation-container',
  tabs: [
    {
      label: 'Home',         // The label used for the navigation element
      url: './index.html',   // The link for the navigation element
      isFirst: true,         // optional, will always show this item first
      isActive: true         // optional, will add a special class to the item
    },
    {
      configId: 'locations'  // optional, the vertical search config id
      label: 'Location'      // The label used for the navigation element
      url: 'locations.html'  // The link for the navigation element
    },
    {
      configId: 'employees'  // optional, the vertical search config id
      label: 'Employees'     // The label used for the navigation element
      url: 'employees.html'  // The link for the navigation element
    }
  ]
})
```

## SearchBar Component

The SearchBar component is the main entry point for search querying. It provides the input box, where the user
types their query, as well as the autocomplete behavior.

```html
<div class="search-query-container"></div>
```

There are two types of search experiences. Universal Search and Vertical Search.
Each provide a different way of auto complete.

### For Universal Search:

```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-query-container',
  title: 'Search my Brand',                // optional, defaults to 'Answers'
  searchText: 'What are you looking for?', // optional, defaults to 'What are you interested in?'
  autoFocus: true,                          // optional, defaults to false
  searchCooldown: 2000,                     // optional, defaults to 300ms (0.3 seconds)
  redirectUrl: 'path/to/url'                // optional, redirect search query to url
})
```

### For Vertical Search:
```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-query-container',
  verticalKey: '<VERTICAL_KEY>',      // required
  barKey: '<BAR_KEY>'                 // optional
})
```

## FilterSearch Component

The FilterSearch component provides a text input box for users to type a query and select a preset matching filter. When a filter is selected, a vertical search is performed. If multiple FilterSearch components are on the page, the search will include all selected filters across all of the components.

```html
<div class="filter-search-container"></div>
```

```js
ANSWERS.addComponent('FilterSearch', {
  container: '.filter-search-container',
  verticalKey: '<VERTICAL_KEY>',      // required
  barKey: '<BAR_KEY>',                // optional
  // If true, the selected filter is saved and used for the next search,
  // but does not trigger a search itself. Defaults to false.
  storeOnChange: true
})
```

## FilterBox Component

The FilterBox component shows a list of filters to apply to a search.

```html
<div class="filters-container"></div>
```

```js
ANSWERS.addComponent('FilterBox', {
  container: '.filters-container',
  // List of filter component configurations
  filters: [
    {
      type: 'FilterOptions',
      control: 'multioption',
      options: [
        {
          label: 'Open Now',
          field: 'c_openNow',
          value: 'true'
        },
        {
          label: 'Dog Friendly',
          field: 'c_dogFriendly',
          value: 'true'
        },
        {
          label: 'Megastores',
          field: 'c_storeType',
          value: 'Megastore'
        }
      ]
    }
  ]
});
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
  container: '.filter-container',
  // Control type, singleoption or multioption
  control: 'singleoption',
  // If true, the filter value is saved on change and sent with the next search.
  // Defaults to false.
  storeOnChange: true,
  // List of options
  options: [
    {
      // Label to show next to the filter option
      label: 'Open Now',
      // The api field to filter on, configured on the Yext platform
      field: 'c_openNow',
      // The value for the above field to filter by
      value: 'true'
    },
    {
      label: 'Dog Friendly',
      field: 'c_dogFriendly',
      value: 'true'
    },
    {
      label: 'Megastores',
      field: 'c_storeType',
      value: 'Megastore'
    }
  ]
});
```

### RangeFilter

Displays two numeric inputs for selecting a number range.

```html
<div class="range-filter-container"></div>
```

```js
ANSWERS.addComponent('RangeFilter', {
  container: '.range-filter-container',
  // The api field to filter on
  field: 'outdoorPoolCount',
  // Title to display for the range
  title: 'Number of Outdoor Pools',
  // The label to show next to the min value, optional
  minLabel: 'At Least',
  // The label to show next to the max value, optional
  maxLabel: 'Not More Than',
  // The initial min value to show, defaults to 0
  initialMin: 1,
  // The initial max value to show, defaults to 10
  initialMax: 5
});
```

### DateRangeFilter

Displays two date inputs for selecting a range of dates.

```html
<div class="date-range-filter-container"></div>
```

```js
ANSWERS.addComponent('DateRangeFilter', {
  container: '.date-range-filter-container',
  // The api field to filter on
  field: 'time.start',
  // Title to display for the range
  title: 'Event Start Date',
  // The label to show next to the min date, optional
  minLabel: 'Earliest',
  // The label to show next to the max date, optional
  maxLabel: 'Latest',
  // The initial min date to show in yyyy-mm-dd format, defaults to today
  initialMin: '2019-08-01',
  // The initial max date to show in yyyy-mm-dd format, defaults to today
  initialMax: '2019-09-01'
});
```

### GeoLocationFilter

Displays a "Use My Location" button that filters results to a radius around the user's current position.

```html
<div class="geolocation-filter-container"></div>
```

```js
ANSWERS.addComponent('', {
  container: '.geolocation-filter-container',
  // Radius around the user, in miles, to find results
  radius: 50,
  // The label to show when disabled (initial state)
  disabledLabel: 'Use My Location',
  // The label to show when enabled
  enabledLabel: 'Disable My Location',
  // The label to show when unable to get the user's location
  errorLabel: 'Unable To Use Location',
  // CSS selector of the button
  buttonSelector: '.js-yxt-GeoLocationFilter-button'
});
```

## Direct Answer Component

The Direct Answer Component will render the BEST result, if found,
based on the query.

```html
<div class="direct-answer-container"></div>
```

```js
ANSWERS.addComponent('DirectAnswer', {
  container: '.direct-answer-container'
})
```

## Universal Results Component

The Universal Results component will render the results of a query,
across all configured verticals, seperated by sections.

The most complex component has a ton of overridable configuration options.

```html
<div class="universal-results-container"></div>
```

### Basic Component

```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
})
```

### Custom Render for ALL Result Items

You can override the render function for EACH item in the result list,
as apposed to the entire component.


```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
  renderItem: function(data) {
    return `my item ${data.name}`
  }
})
```

### Custom Template for ALL Result Items

You can override the handlebars template for EACH item in the result list,
as apposed to the entire component.

```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
  itemTemplate: `my item {{name}}`
})
```

### Custom Render For Specific Vertical Result Items

You can override the render function for a particular section within the results list,
by providing a vertical search config id as the context, and using the same options as above.

```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
  config: {
    'locations': { // The vertical search config id
      renderItem: function(data) {
        return `my item ${data.name}`;
      }
    }
  }
})
```

### Custom Template For Specific Vertical Result Items

You can override the handlebars template for a particular section within the results list,
by providing a vertical search config id as the context, and using the same options as above.

```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
  config: {
    'locations': { // The vertical search config id
      itemTemplate: `my item {{name}}`
    }
  }
})
```

## Vertical Results Component

The Vertical Results component shares all the same configurations from Universal Results, but you don't need to specifiy a config or context. You may limit the number of search results returned, with a maximum of 50.

You define all the options at the top level object.

```html
<div class="results-container"></div>
```

```js
ANSWERS.addComponent('VerticalResults', {
  container: '.results-container',
  // The max number of search results to return, defaults to 20
  limit: 25
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
  container: '.question-submission-container',
  nameLabel: 'Your Name:',             // Optional, defaults to 'Name:'
  emailLabel: '*Email:',               // Optional, defaults to '*Email:'
  questionLabel: 'Ask us anything!:',  // Optional, defaults to 'What is your question?'
  privacyPolicyLabel: 'I agree!',      // Optional, defaults to 'I agree to our policy:',
  buttonLabel: 'Submit'                // Optional,  defaults to 'Submit:'
})
```

# Analytics

Answers will track some basic interaction analytics automatically, such as search bar impressions and Call-To-Action clicks. You may add additional, custom analytic events to templates using certain data attributes, explained below.

## Click Analytics

Click analytics can be attached to an element by adding the `data-eventtype` attribute to the element you want to track clicks for. The provided string should be the type of the analytics event. You can optionally include metadata inside the `data-eventoptions` attribute, in a JSON format. Whenever the element is clicked, an analtyics event with that data will be sent to the server.

```html
<button class="driving-directions-button"
        data-eventtype="DRIVING_DIRECTIONS"
        data-eventoptions='{"store": "{{store}}"}'
>
    Drive to {{store}}
</button>
```
