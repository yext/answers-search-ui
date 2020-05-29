/**
 * Used to parse config options, defaulting to different synonyms and
 * finally a default value. Option names with periods will be parsed
 * as multiple child object accessors, i.e. trying to access 'first.second.option'
 * will first look for config['first']['second']['option'].
 *
 * This is mostly needed for boolean config values, since boolean operators,
 * which we commonly use for defaulting config options, do not work properly
 * in those cases.
 * @param {Object} topLevelConfig
 * @param  {Array<string>}
 * @param {any} defaultValue
 */
export function parseConfig (topLevelConfig, synonyms, defaultValue) {
  for (let name of synonyms) {
    const accessors = name.split('.');
    let parentConfig = topLevelConfig;
    let skip = false;
    for (let childConfigAccessor of accessors.slice(0, -1)) {
      if (!(childConfigAccessor in parentConfig)) {
        skip = true;
        break;
      }
      parentConfig = parentConfig[childConfigAccessor];
    }
    const configName = accessors[accessors.length - 1];
    if (!skip && configName in parentConfig) {
      return parentConfig[configName];
    }
  }
  return defaultValue;
}
