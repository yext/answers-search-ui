import { Selector } from 'testcafe';

/**
 * Models the user interaction with a {@link VerticalResultsComponent}.
 */
export default class VerticalResultsComponentBlock {
  /**
     * Creates a new instance of {@link VerticalResultsComponentBlock},
     * based on the provided {@link Selector}.
     *
     * @param {Selector} selector The {@link Selector} corresponding to
     *                            this new instance. If one is not provided,
     *                            a default is used.
     */
  constructor (selector = Selector('.yxt-Results')) {
    this._selector = selector;
  }

  /**
     * Returns the title of this vertical results section, wrapped in a
     * {@link Promise}.
     *
     * @returns {Promise} Title of the {@link VerticalResultsComponentBlock},
     *                    wrapped in a {@link Promise}.
     */
  async getTitle () {
    const title = await this._selector.find('.yxt-Results-title').innerText;
    return title;
  }

  async getResultsCountTotal () {
    const resultsCountTotal = Selector('.yxt-ResultsHeader-resultsCountTotal');
    const countText = await resultsCountTotal.innerText;
    return Number.parseInt(countText);
  }
}
