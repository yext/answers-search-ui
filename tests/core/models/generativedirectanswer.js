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
            rawData: {
              uid: 'uuid-1',
              someField: 'someValue'
            },
            name: 'name-1',
            description: 'description-1',
            link: 'link-1',
            otherData: 'otherData'
          }
        ],
        resultsCount: 1,
        verticalKey: 'vertical-key-1'
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
          },
          {
            rawData: {
              uid: 'uuid-not-in-citations',
              someField: 'someValue'
            },
            name: 'name-4',
            link: 'link-4',
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
      ],
      verticalKey: '_universalInternal'
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
          },
          {
            rawData: {
              uid: 'uuid-not-in-citations',
              someField: 'someValue'
            },
            name: 'name-4',
            link: 'link-4',
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
});
