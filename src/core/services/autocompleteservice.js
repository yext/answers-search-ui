/** @typedef {import('../models/autocompletedata').default} AutoCompleteData */

/**
 * AutoCompleteService exposes an interface for retrieving autocomplete data
 *
 * @interface
 */
export default class AutoCompleteService {
  /**
   * Autocomplete filters
   * @param {string} input The input to use for auto-complete
   * @param {object} config The config to use for filters
   * @param {string} config.verticalKey The vertical key for the config
   * @param {object} config.searchParameters The search parameters for the config v2
   * @returns {Promise<AutoCompleteData>}
   */
  queryFilter (input, config) {}

  /**
   * Autocomplete vertical search
   * @param {string} input The input to use for auto-complete
   * @param {string} verticalKey The vertical key
   * @returns {Promise<AutoCompleteData>}
   */
  queryVertical (input, verticalKey) {}

  /**
   * Autocomplete universal search
   * @param {string} input The input to use for auto-complete
   * @returns {Promise<AutoCompleteData>}
   */
  queryUniversal (input) {}
}
