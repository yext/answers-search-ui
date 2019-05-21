import Section from './section';

export default class VerticalResults {
  constructor(data = {}) {
    Object.assign(this, data);
  }

  static from(response) {
    return new VerticalResults(Section.from(response));
  }
}
