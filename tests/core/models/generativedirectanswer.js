import GenerativeDirectAnswer from '../../../src/core/models/generativedirectanswer';
import Searcher from '../../../src/core/models/searcher';
import RichTextFormatter from '../../../src/core/utils/richtextformatter';

describe('Constructs a generative direct answer from an answers-core generative direct answer response', () => {
  it('GDA on universal search', () => {
    const coreGenerativeDirectAnswerResponse = {
      directAnswer: 'This is some generated text **with bold**.',
      resultStatus: 'SUCCESS',
      citations: ['uuid-1', 'uuid-2', 'uuid-3']
    };

    const verticalResults = [
      {
        results: [
          {
            id: 'entityid-1',
            rawData: {
              uid: 'uuid-1',
              someField: 'someValue'
            },
            name: 'name-1',
            description: 'description-1',
            otherData: 'otherData'
          }
        ],
        resultsCount: 1,
        verticalKey: 'vertical-key-1'
      },
      {
        results: [
          {
            id: 'entityid-2',
            rawData: {
              uid: 'uuid-2',
              someField: 'someValue'
            },
            name: 'name-2',
            description: 'description-2',
            otherData: 'otherData'
          },
          {
            id: 'entityid-3',
            rawData: {
              uid: 'uuid-3',
              someField: 'someValue'
            },
            name: 'name-3',
            otherData: 'otherData'
          },
          {
            id: 'entityid-4',
            rawData: {
              uid: 'uuid-not-in-citations',
              someField: 'someValue'
            },
            name: 'name-4',
            otherData: 'otherData'
          }
        ],
        resultsCount: 3,
        verticalKey: 'vertical-key-2'
      }
    ];

    const directAnswerAsHTML = RichTextFormatter.format(coreGenerativeDirectAnswerResponse.directAnswer, 'gda-snippet');
    const expectedGenerativeDirectAnswer = {
      directAnswer: directAnswerAsHTML,
      resultStatus: 'SUCCESS',
      citations: ['uuid-1', 'uuid-2', 'uuid-3'],
      searcher: Searcher.UNIVERSAL,
      citationsData: [
        {
          id: 'entityid-1',
          name: 'name-1',
          description: 'description-1',
          rawData: {
            uid: 'uuid-1',
            someField: 'someValue'
          }
        },
        {
          id: 'entityid-2',
          name: 'name-2',
          description: 'description-2',
          rawData: {
            uid: 'uuid-2',
            someField: 'someValue'
          }
        },
        {
          id: 'entityid-3',
          name: 'name-3',
          rawData: {
            uid: 'uuid-3',
            someField: 'someValue'
          }
        }
      ],
      verticalKey: ''
    };

    const actualGenerativeDirectAnswer = GenerativeDirectAnswer.fromCore(
      coreGenerativeDirectAnswerResponse,
      Searcher.UNIVERSAL,
      verticalResults
    );

    expect(actualGenerativeDirectAnswer).toMatchObject(expectedGenerativeDirectAnswer);
  });

  it('GDA on vertical search', () => {
    const coreGenerativeDirectAnswerResponse = {
      directAnswer: 'This is some generated text **with bold**.',
      resultStatus: 'SUCCESS',
      citations: ['uuid-2', 'uuid-3']
    };

    const verticalResults = [
      {
        results: [
          {
            id: 'entityid-2',
            rawData: {
              uid: 'uuid-2',
              someField: 'someValue'
            },
            name: 'name-2',
            description: 'description-2',
            otherData: 'otherData'
          },
          {
            id: 'entityid-3',
            rawData: {
              uid: 'uuid-3',
              someField: 'someValue'
            },
            name: 'name-3',
            otherData: 'otherData'
          },
          {
            id: 'entityid-4',
            rawData: {
              uid: 'uuid-not-in-citations',
              someField: 'someValue'
            },
            name: 'name-4',
            otherData: 'otherData'
          }
        ],
        resultsCount: 3,
        verticalKey: 'vertical-key-2'
      }
    ];

    const directAnswerAsHTML = RichTextFormatter.format(coreGenerativeDirectAnswerResponse.directAnswer, 'gda-snippet');
    const expectedGenerativeDirectAnswer = {
      directAnswer: directAnswerAsHTML,
      resultStatus: 'SUCCESS',
      citations: ['uuid-2', 'uuid-3'],
      searcher: Searcher.VERTICAL,
      citationsData: [
        {
          id: 'entityid-2',
          name: 'name-2',
          description: 'description-2',
          rawData: {
            uid: 'uuid-2',
            someField: 'someValue'
          }
        },
        {
          id: 'entityid-3',
          name: 'name-3',
          rawData: {
            uid: 'uuid-3',
            someField: 'someValue'
          }
        }
      ],
      verticalKey: 'vertical-key-2'
    };

    const actualGenerativeDirectAnswer = GenerativeDirectAnswer.fromCore(
      coreGenerativeDirectAnswerResponse,
      Searcher.VERTICAL,
      verticalResults
    );

    expect(actualGenerativeDirectAnswer).toMatchObject(expectedGenerativeDirectAnswer);
  });

  it('GDA citations on universal search are deduplicated', () => {
    const coreGenerativeDirectAnswerResponse = {
      directAnswer: 'This is some generated text **with bold**.',
      resultStatus: 'SUCCESS',
      citations: ['uuid-1']
    };

    const verticalResults = [
      {
        results: [
          {
            id: 'entityid-1',
            rawData: {
              uid: 'uuid-1',
              someField: 'someValue'
            },
            name: 'name-1',
            description: 'description-1',
            otherData: 'otherData'
          }
        ],
        resultsCount: 1,
        verticalKey: 'vertical-key-1'
      },
      {
        results: [
          {
            id: 'entityid-1',
            rawData: {
              uid: 'uuid-1',
              someField: 'someValue'
            },
            name: 'name-1',
            description: 'description-1',
            otherData: 'otherData'
          },
          {
            id: 'entityid-2',
            rawData: {
              uid: 'uuid-2',
              someField: 'someValue'
            },
            name: 'name-2',
            description: 'description-2',
            otherData: 'otherData'
          }
        ],
        resultsCount: 2,
        verticalKey: 'vertical-key-2'
      }
    ];

    const directAnswerAsHTML = RichTextFormatter.format(coreGenerativeDirectAnswerResponse.directAnswer, 'gda-snippet');
    const expectedGenerativeDirectAnswer = {
      directAnswer: directAnswerAsHTML,
      resultStatus: 'SUCCESS',
      citations: ['uuid-1'],
      searcher: Searcher.UNIVERSAL,
      citationsData: [
        {
          id: 'entityid-1',
          name: 'name-1',
          description: 'description-1',
          rawData: {
            uid: 'uuid-1',
            someField: 'someValue'
          }
        }
      ],
      verticalKey: ''
    };

    const actualGenerativeDirectAnswer = GenerativeDirectAnswer.fromCore(
      coreGenerativeDirectAnswerResponse,
      Searcher.UNIVERSAL,
      verticalResults
    );

    expect(actualGenerativeDirectAnswer).toMatchObject(expectedGenerativeDirectAnswer);
  });
});
