/** @module VerticalResults */

import Section from './section';

export default class VerticalResults {
  constructor (data = {}) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  static from (response) {
    return new VerticalResults(Section.from(response));
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
