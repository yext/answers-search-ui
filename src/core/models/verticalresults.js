import Section from './section';

export default class VerticalResults {
  constructor(response) {
    Object.assign(this, Section.from(response))
  }
}
