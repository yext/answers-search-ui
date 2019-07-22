import { merge } from '../util/objects';

/** @module DirectAnswer */

export default class DirectAnswer {
  constructor (directAnswer = {}) {
    merge(this, directAnswer);
    Object.freeze(this);
  }
}
