
/**
 * Groups an array into an object using a given key and value function, an initial object
 * to add to, and a skip function. By default the key and value functions will not perform
 * any transformations, and no elements will be skipped.
 * @param {Array<any>} arr array to be grouped
 * @param {Function} keyFunc function that evaluates what key to give an array element.
 * @param {Function} valueFunc function that evaluates what value to give an array element.
 * @param {Object} intitial the initial object to add to, defaulting to {}
 * @param {Function} skipFunc function that evaluates whether to skip an element.
 * @returns {Object}
 */
export function groupArray (arr, keyFunc, valueFunc, initial, skipFunc) {
  keyFunc = keyFunc || (key => key);
  valueFunc = valueFunc || (value => value);
  skipFunc = skipFunc || (() => false);
  return arr.reduce((groups, element, idx) => {
    if (skipFunc(element, idx)) {
      return groups;
    }
    const key = keyFunc(element, idx);
    const value = valueFunc(element, idx);
    if (!groups[key]) {
      groups[key] = [ value ];
    } else {
      groups[key].push(value);
    }
    return groups;
  }, initial || {});
}
