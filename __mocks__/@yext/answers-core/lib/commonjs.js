const provideCore = function () {
  return {
    universalSearch: jest.fn(() => {
      return Promise.resolve({
        queryId: '123',
        verticalResults: []
      });
    }),
    verticalSearch: jest.fn(() => {
      return Promise.resolve({});
    }),
    universalAutocomplete: jest.fn(() => {
      return Promise.resolve({});
    }),
    verticalAutocomplete: jest.fn(() => {
      return Promise.resolve({});
    }),
    filterSearch: jest.fn(() => {
      return Promise.resolve({});
    }),
    submitQuestion: jest.fn(() => {
      return Promise.resolve({});
    })
  };
};

module.exports = {
  provideCore
};
