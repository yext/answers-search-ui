export function isValidContext (context) {
  // should be both valid JSON and a map
  let parsed;
  try {
    parsed = JSON.parse(context);
  } catch (e) {
    return false;
  }

  if (!parsed) {
    return false;
  }

  return typeof parsed === 'object' && !Array.isArray(parsed);
}
