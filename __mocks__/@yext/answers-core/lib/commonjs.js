const provideCore = function () {
  return {
    universalSearch: jest.fn(),
    verticalSearch: jest.fn(),
    universalAutocomplete: jest.fn(),
    verticalAutocomplete: jest.fn(),
    filterSearch: jest.fn(),
    submitQuestion: jest.fn()
  };
};

module.exports = {
  provideCore
};
