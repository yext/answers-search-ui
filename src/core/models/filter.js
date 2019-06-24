export default class Filter {
  constructor (data = {}) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  static from (responseFilter) {
    return new Filter(JSON.parse(responseFilter));
  }

  static or (...filters) {
    return new Filter({
      '$or': filters
    });
  }

  static and (...filters) {
    return new Filter({
      '$and': filters
    });
  }
}
