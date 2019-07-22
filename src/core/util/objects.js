/** @module Objects */

export function merge (target, ...sources) {
  if (Object.assign) {
    return Object.assign(target, ...sources);
  } else {
    sources.forEach(s => {
      Object.keys(s).forEach(k => {
        target[k] = s[k];
      });
    });

    return target;
  }
}
