import iterator from 'markdown-it-for-inline';
import RtfConverter from '@yext/rtf-converter';
import { AnswersCoreError } from '../errors/errors';

/**
 * This class leverages the {@link RtfConverter} library to perform Rich Text to
 * HTML conversions.
 */
class RichTextFormatterImpl {
  constructor () {
    RtfConverter.addPlugin(iterator, 'url_new_win', 'link_open', this._urlTransformer);
  }

  /**
   * Generates an HTML representation of the provided Rich Text field value. Note that
   * the HTML will contain a wrapper div. This is to support click analytics for Rich Text
   * links.
   *
   * @param {string} fieldValue A Rich Text field value.
   * @param {string} fieldName The name of the field. This is optional if the formatter
   *                           is being used with DirectAnswers.
   * @returns {string} The HTML representation of the field value, serialized as a string.
   */
  format (fieldValue, fieldName) {
    if (typeof fieldValue !== 'string') {
      throw new AnswersCoreError(
        `Rich text "${fieldValue}" needs to be a string. Currently is a ${typeof fieldValue}`
      );
    }
    const html =
      `<div class="js-yxt-rtfValue" data-field-name="${fieldName}">\n` +
      `${RtfConverter.toHTML(fieldValue)}` +
      `</div>`;
    return html;
  }

  /**
   * An inline token parser for use with the {@link iterator} Markdown-it plugin.
   * This token parser adds a cta-type data attribute to any link it encounters.
   */
  _urlTransformer (tokens, idx) {
    const href = tokens[idx].attrGet('href');
    let ctaType = 'VIEW_WEBSITE';
    if (href.startsWith('mailto')) {
      ctaType = 'EMAIL';
    } else if (href.startsWith('tel')) {
      ctaType = 'TAP_TO_CALL';
    }
    tokens[idx].attrPush(['data-cta-type', ctaType]);
  }
}

const RichTextFormatter = new RichTextFormatterImpl();

export default RichTextFormatter;
