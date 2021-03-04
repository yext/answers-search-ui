/** @typedef {import('../models/autocompletedata').default} AutoCompleteData */

/**
 * AutoCompleteService exposes an interface for retrieving autocomplete data
 *
 * @interface
 */
export default class AutoCompleteService {
  /**
   * Autocomplete universal search
   * @param {string} input The input to use for auto-complete
   * @returns {Promise<AutoCompleteData>}
   */
  queryUniversal (input) {}
}
