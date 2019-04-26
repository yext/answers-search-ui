# Answers
Answers Javascript API Library.

Outline:
1. [Install / Setup](#install-&-setup)
2. [Component Usage](#component-usage)
- [Base Component Configuration](#base-component-configuration)
- [Adding a Component](#adding-a-component)
- [Using a Custom Template](#using-a-custom-template)
- [Using a Custom Renderer](#using-a-custom-renderer)
3. [Types of Components](#types-of-components)
- [Navigation Component](#navigation-component)
- [SearchBar Component](#searchbar-component)
- [UniversalResults Component](#universalresults-component)

# Install & Setup

To include the answers base CSS (optional).
```html
<link rel="stylesheet" type="text/css" href="https://answersjs.netlify.com/answers.css">
```

Adding the Javascript library
```html
<script src="https://answersjs.netlify.com/answers.min.js" onload="initAnswers()"></script>
```

```js
function initAnswers() {
  ANSWERS.init({
    apiKey: '<API_KEY_HERE>',
    answersKey: '<ANSWERS_KEY_HERE>',
    onReady: function() {
      // Component logic her
    })
  })
}
```

# Component Usage

The Answers Component Library exposes an easy to use interface for adding and customizing various types of UI components on your page.

You can add various types of components to a page. Every component requires a containing HTML element.

## Base Component Configuration

Every component has the same base configuration options.

|  option   | type       | description                               | required      |
|-----------|------------|-------------------------------------------|---------------|
| container | string     | the CSS selector to append the component. | required      |
| class     | string     | a custom class to apply to the component  | not required  |
| render    | function   | override render function. data provided   | not required  |
| template  | string     | override internal handlebars template       | not required  |


## Adding a Component
Adding a component to your page is super easy!
You can add many different [types](#types-of-components) of components to your page.
Each component supports the base configuration options above, as well as their own unique configurations.

To start, every component requires an HTML container.

```html

  <div class="search-container"></div>
```

Then, you can add a component to your page through the ANSWERS add interface.

This is an example of the `SearchComponent`. See [Types of Components](#types-of-components) below.

```js
  ANSWERS.addComponent('SearchComponent', {
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

  ANSWERS.addComponent('SearchComponent', {
    container: '.search-container',
    template: customTemplate
  })
````

If you want to use a use your own template language (e.g. soy, mustache, groovy, etc),
you should NOT use the template argument. Instead, you can provide a custom render function to the component.

## Using a Custom Renderer

```js
  ANSWERS.addComponent('SearchComponent', {
    container: '.search-container',
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
      configId: 'locations' // optional, the vertical search config id
      label: 'Location'     // The label used for the navigation element
      url: 'locations.html' // The link for the navigation element
    },
    {
      configId: 'employees' // optional, the vertical search config id
      label: 'Employees'     // The label used for the navigation element
      url: 'employees.html' // The link for the navigation element
    }
  ]
})
```

## SearchBar Component

The SearchBar component is the main entry point for search querying. It provides the input box, where the user
types their query, as well as the autocomplete behavior.

```html
<nav class="search-query-container"></nav>
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
  experienceKey: '<EXPERIENCE_KEY>',  // required
  barKey: '<BAR_KEY>'                 // required
})
```

## Universal Results Component