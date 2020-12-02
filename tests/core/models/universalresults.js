import coreUniversalResponse from '../../fixtures/core/coreuniversalresponse.json';
import sdkUniversalResults from '../../fixtures/core/sdkuniversalresults.json';
import UniversalResults from '../../../src/core/models/universalresults';

it('constructs a universal results model from an answers-core universal results model', () => {
  const urls = {
    people: './people.html',
    faq: './faq.html'
  };

  const actualUniversalResults = UniversalResults.fromCore(coreUniversalResponse, urls);

  expect(actualUniversalResults).toMatchObject(sdkUniversalResults);
});
