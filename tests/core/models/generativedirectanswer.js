import GenerativeDirectAnswer from '../../../src/core/models/generativedirectanswer';
import Searcher from '../../../src/core/models/searcher';

it('constructs a generative direct answer from an answers-core generative direct answer response', () => {
  const coreGenerativeDirectAnswerResponse = {
    directAnswer: 'This is some generated text.',
    resultStatus: 'SUCCESS',
    citations: ['uuid-1', 'uuid-2', 'uuid-3']
  };

  const verticalResults = [
    {
      results: [
        {
          rawData: {
            uid: 'uuid-1',
            someField: 'someValue'
          },
          name: 'name-1',
          description: 'description-1',
          link: 'link-1',
          otherData: 'otherData'
        }
      ]
    },
    {
      results: [
        {
          rawData: {
            uid: 'uuid-2',
            someField: 'someValue'
          },
          name: 'name-2',
          description: 'description-2',
          link: 'link-2',
          otherData: 'otherData'
        },
        {
          rawData: {
            uid: 'uuid-3',
            someField: 'someValue'
          },
          name: 'name-3',
          link: 'link-3',
          otherData: 'otherData'
        }
      ]
    }
  ];

  const expectedGenerativeDirectAnswer = {
    directAnswer: 'This is some generated text.',
    resultStatus: 'SUCCESS',
    citations: ['uuid-1', 'uuid-2', 'uuid-3'],
    searcher: Searcher.UNIVERSAL,
    results: [
      {
        uid: 'uuid-1',
        name: 'name-1',
        description: 'description-1',
        link: 'link-1'
      },
      {
        uid: 'uuid-2',
        name: 'name-2',
        description: 'description-2',
        link: 'link-2'
      },
      {
        uid: 'uuid-3',
        name: 'name-3',
        link: 'link-3'
      }
    ]
  };

  const actualGenerativeDirectAnswer = GenerativeDirectAnswer.fromCore(
    coreGenerativeDirectAnswerResponse,
    Searcher.UNIVERSAL,
    verticalResults
  );

  expect(actualGenerativeDirectAnswer).toMatchObject(expectedGenerativeDirectAnswer);
});
