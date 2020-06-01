
/**
 * Groups an array by a given key function.
 * @param {string} url
 * @param {params} Object
 * @returns {string}
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
