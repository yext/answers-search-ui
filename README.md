# Answers
Answers Javascript API Library.

Includes:

1. Core API Library
2. Component API Library

# Install / Setup

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

## Anatomoy of a Component

Every component has the same base configuration options.

|  option   | type       | description                               | required      |
|-----------|------------|-------------------------------------------|---------------|
| container | string     | the CSS selector to append the component. | required      |
| class     | string     | a custom class to apply to the component  | not required  |
| render    | function   | override render function. data provided   | not required  |
| template  | string     | override internal mustache template       | not required  |

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