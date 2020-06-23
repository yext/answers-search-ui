export function isValidContext (context) {
  // should be both valid JSON and a map
  let parsed;
  try {
    parsed = JSON.parse(context);
  } catch (e) {
    return false;
  }

  if (Array.isArray(parsed)) {
    return false;
  }
  if (typeof parsed === 'string') {
    return false;
  }
  if (!parsed) {
    return false;
  }

  return true;
}
