/** @module MockQuestionAnswerService */

/** @typedef {import('../services/questionanswerservice').default} QuestionAnswerService */

/**
 * @implements {QuestionAnswerService}
 */
export default class MockQuestionAnswerService {
  /** @inheritdoc */
  submitQuestion (question) {
    // TODO(amullings): Make actual response object once we're using it for
    // something
    return Promise.resolve({});
  }
}
