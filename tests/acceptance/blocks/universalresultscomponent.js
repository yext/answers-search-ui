import { Selector } from 'testcafe';
import VerticalResultsComponentBlock from './verticalresultscomponent';

/**
 * This class models interactions with the {@link UniversalResultsComponent}.
 */
export default class UniversalResultsComponentBlock {
  /**
     * Returns the {@link VerticalResultsComponentBlock}s associated
     * with each vertical section. These are wrapped in a {@link Promise}.
     *
     * @returns {Promise} A {@link Promise} containing the various
     *                    {@link VerticalResultsComponentBlock}s.
     */
  async getSections () {
    const selector = Selector('.yxt-Results');
    const sectionCount = await selector.count;

    const sections = [];
    for (let i = 0; i < sectionCount; i++) {
      sections.push(new VerticalResultsComponentBlock(selector.nth(i)));
    }

    return sections;
  }
}
