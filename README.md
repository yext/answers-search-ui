# Answers
Answers Javascript API Library.

Outline:
1. [Install / Setup](#install-&-setup)
   - [Configuration Options](#configuration-options)
   - [Template Helpers](#template-helpers)
2. [Component Usage](#component-usage)
   - [Base Component Configuration](#base-component-configuration)
   - [Adding a Component](#adding-a-component)
   - [Using a Custom Template](#using-a-custom-template)
   - [Using a Custom Renderer](#using-a-custom-renderer)
   - [Custom Data Transforms](#custom-data-transforms)
3. [Types of Components](#types-of-components)
   - [Navigation Component](#navigation-component)
   - [SearchBar Component](#searchbar-component)
   - [DirectAnswer Component](#direct-answer-component)
   - [UniversalResults Component](#universal-results-component)
   - [VerticalResults Component](#vertical-results-component)

# Install & Setup

To include the answers base CSS (optional).
```html
<link rel="stylesheet" type="text/css" href="https://answersjs.netlify.com/answers.css">
```

Adding the Javascript library
```html
<script src="https://answersjs.netlify.com/answers.min.js" onload="initAnswers()" async></script>
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
| useTemplates | boolean   | default: `true`.  If false, don't fetch pre-made templates. Only use this if you plan to implement custom renders for every component!  | not required  |
| templateUrl  | string     | Use precompiled template hosted by you       | not required  |

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
| container     | string     | the CSS selector to append the component. | required      |
| class         | string     | a custom class to apply to the component  | not required  |
| template      | string     | override internal handlebars template       | not required  |
| render        | function   | override render function. data provided   | not required  |
| transformData | function   | A hook for transforming data before it gets sent to render | not required |
| onMount       | function   | invoked when the HTML is mounted to the DOM | not required |


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
````

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
````

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
````

## Custom Data Transforms

If you want to mutate the data thats provided to the render/template before it gets rendered,
you can use the `transformData` hook.

All properties and values that you return from here will be accessible from templates.


```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-container',
  transformData: (data) => {
    // Extend/overide the data object
    return Object.assign(data, {
      title: data.title.toLowerCase()
    })
  },
  render: function(data) {
    // Using native ES6 templates -- but you can replace this with soy,
    // or any other templating language as long as it returns a string.
    return `<div class="my-search">${data.title}</div>`
  }
})
````

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
  searchText: 'What are you looking for?'  // optional, defaults to 'What are you interested in?'
})
```

### For Vertical Search:
```js
ANSWERS.addComponent('SearchBar', {
  container: '.search-query-container',
  verticalKey: '<EXPERIENCE_KEY>',    // required
  barKey: '<BAR_KEY>'                 // optional
})
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

### Basic Component

```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
})
```

## Universal Results Component

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
````

### Custom Template for ALL Result Items

You can override the handlebars template for EACH item in the result list,
as apposed to the entire component.

```js
ANSWERS.addComponent('UniversalResults', {
  container: '.universal-results-container',
  itemTemplate: `my item {{name}}`
})
````

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

The Vertical Results component shares all the same configurations from Universal Results, but you don't need to specifiy a config or context.

You define all the options at the top level object.

```html
<div class="results-container"></div>
```

```js
ANSWERS.addComponent('VerticalResults', {
  container: '.results-container',
})
```
