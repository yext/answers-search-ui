import levenshtein from 'js-levenshtein';

/**
 * Checks if the searchTerm is a case-insensitive, Levenshtein match for the value.
 *
 * @param {string} value - The string to compare against
 * @param {string} searchTerm - The term being searched for
 * @returns {boolean} Whether or not the searchTerm is a substring of or a close Levenshtein match
 *          for the value
 */
export function isCloseMatch (value, searchTerm) {
  return isLevenshteinMatch(value.toLowerCase(), searchTerm.toLowerCase());
}

/**
 * Given some value, determines whether it contains a "similar enough" match for the given searchTerm.
 *
 * @param {string} value - The string to compare against, e.g. the display name for the facet
 * @param {string} searchTerm - The term being searched for, e.g. the searchable facets query
 * @returns {boolean} Whether a similar substring exists
 */
function isLevenshteinMatch (value, searchTerm) {
  if (value.includes(searchTerm)) {
    return true;
  }

  // The min search length to try Levenshtein matching
  const minLevenshteinSearchLength = 3;
  if (searchTerm.length < minLevenshteinSearchLength) {
    return false;
  }
  const bestDistance = getBestLevenshteinDistance(value, searchTerm);

  // The maximum Levenshtein distance to be considered a match
  const maxLevenshteinDistance = 1;
  // If the min Levenshtein distance is at or below the max, count it as a match
  if (bestDistance <= maxLevenshteinDistance) {
    return true;
  }
  return false;
}

/**
 * Given some string value, returns the Levenshtein distance for the substring
 * that is of the same length and is "closest" to the given searchTerm.
 *
 * @param {string} value - The string to compare against, e.g. the display name for the facet
 * @param {string} searchTerm - The term being searched for, e.g. the searchable facets query
 * @returns {number} The shortest Levenshtein distance between a substring of the value and the searchTerm
 */
function getBestLevenshteinDistance (value, searchTerm) {
  // All contiguous substrings of value, of length equal to the search term's
  const substrings = [];
  for (let start = 0; start <= value.length - searchTerm.length; start++) {
    substrings.push(value.substr(start, searchTerm.length));
  }
  // Find the substring that is the closest in Levenshtein distance to filter
  let bestDistance = searchTerm.length;
  for (const substring of substrings) {
    const levDist = levenshtein(substring, searchTerm);
    if (levDist < bestDistance) {
      bestDistance = levDist;
    }
  }
  return bestDistance;
}
