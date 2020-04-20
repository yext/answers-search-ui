
/**
 * Groups an array by a given key function.
 * @param {string} url
 * @param {params} Object
 * @returns {string}
 */
export function groupArray (arr, keyFunc) {
  return arr.reduce((groups, element) => {
    const key = keyFunc(element);
    if (!groups[key]) {
      groups[key] = [ element ];
    } else {
      groups[key].push(element);
    }
    return groups;
  }, {});
}
