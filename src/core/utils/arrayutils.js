
/**
 * Groups an array into an object using a given key and value function, and an initial object
 * to add to. By default the key and value functions will not perform any transformations
 * on the array elements.
 * @param {Array<any>} arr array to be grouped
 * @param {Function} keyFunc function that evaluates what key to give an array element.
 * @param {Function} valueFunc function that evaluates what value to give an array element.
 * @param {Object} intitial the initial object to add to, defaulting to {}
 * @returns {Object}
 */
export function groupArray (arr, keyFunc, valueFunc, initial) {
  keyFunc = keyFunc || (key => key);
  valueFunc = valueFunc || (value => value);
  return arr.reduce((groups, element, idx) => {
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
