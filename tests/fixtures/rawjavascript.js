const TranslationFlagger = require('../../src/ui/i18n/translationflagger');

// Interpolation values
const maxPage = 3;
const resultsCount = 3;

TranslationFlagger.flag({
  phrase: 'We are unable to determine your location'
});

TranslationFlagger.flag({
  phrase: 'Go to page [[maxPage]] of results',
  interpolationValues: {
    maxPage: maxPage
  }
});

TranslationFlagger.flag({
  phrase: '([[resultsCount]] result)',
  pluralForm: '([[resultsCount]] results)',
  count: resultsCount,
  interpolationValues: {
    resultsCount: resultsCount
  }
});

TranslationFlagger.flag({
  phrase: 'What are you interested in?',
  context: 'Labels an input field'
});

TranslationFlagger.flag({
  phrase: '[[resultsCount]] autocomplete option found',
  pluralForm: '[[resultsCount]] autocomplete options found',
  count: resultsCount,
  resultsCount: resultsCount,
  context: 'Alt-text'
});
