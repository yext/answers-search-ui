/**
 * Initializes ANSWERS for jest testing with some functionality disabled
 * @param ANSWERS - The answers instance to initialize
 * @param config Config to add during initialization
 */
export default async function initAnswers (ANSWERS, config = {}) {
  // Don't load the templates during testing
  ANSWERS._loadTemplates = () => Promise.resolve();
  await ANSWERS.init({
    apiKey: 'test',
    experienceKey: 'test',
    // Don't load this polyfill during testing
    disableCssVariablesPonyfill: 'true',
    businessId: '123',
    ...config
  });
}
