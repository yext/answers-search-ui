/**
   * Truncates strings to 250 characters, attempting to preserve whole words
   * @param str {string} the string to truncate
   * @param limit {Number} the maximum character length to return
   * @param trailing {string} a trailing string to denote truncation, e.g. '...'
   * @param sep {string} the word separator
   * @returns {string}
   */
export function truncate (str, limit = 250, trailing = '...', sep = ' ') {
  if (!str || str.length <= limit) {
    return str;
  }

  // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."
  const words = str.split(sep);
  const max = limit - trailing.length;
  let truncated = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (truncated.length + word.length > max ||
      (i !== 0 && truncated.length + word.length + sep.length > max)) {
      truncated += trailing;
      break;
    }

    truncated += i === 0 ? word : sep + word;
  }

  return truncated;
}
