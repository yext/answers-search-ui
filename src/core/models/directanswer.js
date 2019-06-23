export default class DirectAnswer {
  constructor (directAnswer = {}) {
    Object.assign(this, directAnswer);
    Object.freeze(this);
  }
}
