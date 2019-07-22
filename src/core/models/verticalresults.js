/** @module VerticalResults */

import Section from './section';
import { merge } from '../util/objects';

export default class VerticalResults {
  constructor (data = {}) {
    merge(this, data);
    Object.freeze(this);
  }

  static from (response) {
    return new VerticalResults(Section.from(response));
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
