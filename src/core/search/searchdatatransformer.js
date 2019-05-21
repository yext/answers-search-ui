import UniversalResults from '../models/universalresults';
import DirectAnswer from '../models/directanswer';
import Navigation from '../models/navigation';
import VerticalResults from '../models/verticalresults';

/**
 * A Data Transformer that takes the response object from a Search request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 */
export default class SearchDataTransformer {
  static transform(data, urls) {
    let response = data.response;
    console.log(new UniversalResults(response, urls));
    return {
      navigation: new Navigation(response.modules),
      directAnswer: new DirectAnswer(response.directAnswer),
      universalResults: new UniversalResults(response, urls)
    };
  }

  static transformVertical(data) {
    return {
      verticalResults: new VerticalResults(data.response)
    };
  }
}