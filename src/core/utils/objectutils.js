/**
 * Nest a value inside an object whose structure is defined by an array of keys
 *
 * Example: if `value` is 'Hello, world!', and `keys` is ['a', 'b'],
 * the function will return the object:
 *
 * {
 *   a: {
 *     b: 'Hello, world!'
 *   }
 * }
 *
 * @param {*} value
 * @param {string[]} keys
 */
export function nestValue (value, keys) {
  return keys.reduceRight((acc, key) => {
    return { [key]: acc };
  }, value);
}
