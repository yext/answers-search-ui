import Section from './section';

export default class UniversalResults {
  constructor(response, urls) {
    this.queryId = response.queryId;

    this.sections = Section.from(response.modules, urls);
  }
}