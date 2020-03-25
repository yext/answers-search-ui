export default function (state, silent) {
  const startPos = state.pos;
  const posMax = state.posMax;
  if (state.src.charAt(startPos) !== '+') { return false; }
  if (startPos + 1 >= posMax || state.src.charAt(startPos + 1) !== '+') {
    return false;
  }
  let pos = startPos + 2;
  while (pos < posMax && state.src.charAt(pos) !== '+') {
    pos++;
  }
  if (pos >= posMax) {
    return false;
  }
  if (state.src.charAt(pos + 1) !== '+') {
    return false;
  }
  if (silent) {
    return true;
  }
  // Skip over the beginning '++'' characters
  state.pos = startPos + 2;
  state.posMax = pos;
  // Push a <u> token
  state.push('yext_underline_open', 'u', 1);
  // Tokenize input between the <u> and </u>,
  // This method also updates state.pos
  state.md.inline.tokenize(state);
  // Push a </u> token
  state.push('yext-underline_close', 'u', -1);
  // Set state.posMax back to the original posMax
  state.posMax = posMax;
  // Skip over the closing '++'' characters
  state.pos += 2;
  return true;
}
