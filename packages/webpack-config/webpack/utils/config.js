'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function isObject(val) {
  if (val === null) {
    return false;
  }
  return typeof val === 'function' || typeof val === 'object';
}
/**
 * Given a config option that could evalutate to true, config, or null; return a config.
 * e.g.
 * `polyfill: true` returns the `config`
 * `polyfill: {}` returns `{}`
 */
function enableWithPropertyOrConfig(prop, config, merge = false) {
  // Value is truthy but not a replacement config.
  if (prop) {
    if (isObject(prop) && merge) {
      return Object.assign({}, config, prop);
    }
    // Return the default config
    return config;
  }
  // Return falsey or replacement config.
  return prop;
}
exports.enableWithPropertyOrConfig = enableWithPropertyOrConfig;
/**
 * Used for features that are enabled by default unless specified otherwise.
 */
function overrideWithPropertyOrConfig(prop, config, merge = false) {
  if (prop === undefined) {
    return config;
  }
  return enableWithPropertyOrConfig(prop, config, merge);
}
exports.overrideWithPropertyOrConfig = overrideWithPropertyOrConfig;
//# sourceMappingURL=config.js.map
