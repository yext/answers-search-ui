import Section from './section';

export default class UniversalResults {
  constructor(data) {
    this.queryId = data.queryId || null;

    this.sections = data.sections || [];
  }

  static from(response, urls) {
    return new UniversalResults({
      queryId: response.queryId,
      sections: Section.from(response.modules, urls)
    })
  }
}