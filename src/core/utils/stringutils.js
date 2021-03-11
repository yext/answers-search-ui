/**
 * Takes a snake-case string and converts it to camel-case
 * @param {string} str - A string in snake-case
 * @returns {string}
 */
export function snakeCaseToCamelCase (str) {
  return str
    .split('-')
    .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
}
