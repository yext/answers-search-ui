import GenerativeDirectAnswer from '../../../src/core/models/generativedirectanswer';
import Searcher from '../../../src/core/models/searcher';

it('constructs a generative direct answer from an answers-core generative direct answer response', () => {
  const coreGenerativeDirectAnswerResponse = {
    directAnswer: 'This is some generated text.',
    resultStatus: 'SUCCESS',
    citations: ['uuid-1', 'uuid-2', 'uuid-3']
  };

  const expectedGenerativeDirectAnswer = {
    directAnswer: 'This is some generated text.',
    resultStatus: 'SUCCESS',
    citations: ['uuid-1', 'uuid-2', 'uuid-3'],
    searcher: Searcher.UNIVERSAL
  };

  const actualGenerativeDirectAnswer = GenerativeDirectAnswer.fromCore(
    coreGenerativeDirectAnswerResponse,
    Searcher.UNIVERSAL
  );

  expect(actualGenerativeDirectAnswer).toMatchObject(expectedGenerativeDirectAnswer);
});
