import iterator from 'markdown-it-for-inline';
import RtfConverter from '@yext/rtf-converter';
import { AnswersCoreError } from '../errors/errors';

/**
 * This class leverages the {@link RtfConverter} library to perform Rich Text to
 * HTML conversions.
 */
class RichTextFormatterImpl {
  /**
   * Generates an HTML representation of the provided Rich Text field value. Note that
   * the HTML will contain a wrapper div. This is to support click analytics for Rich Text
   * links.
   *
   * @param {string} fieldValue A Rich Text field value.
   * @param {string} target The 'target' attribute to supply to any link. This is optional.
   *                        If no value is specified, the links will not have a 'target' attribute.
   * @param {string} fieldName The name of the field, to be included in the payload of a click
   *                           analytics event. This parameter is optional.
   * @returns {string} The HTML representation of the field value, serialized as a string.
   */
  format (fieldValue, target, fieldName) {
    if (typeof fieldValue !== 'string') {
      throw new AnswersCoreError(
        `Rich text "${fieldValue}" needs to be a string. Currently is a ${typeof fieldValue}`
      );
    }

    const pluginName = 'url_transformer';
    // Because all invocations of this method share the same {@link RtfConverter}, we must make sure to
    // disable any other custom plugins applied previously.
    RtfConverter.disablePlugin(pluginName);
    RtfConverter.addPlugin(
      iterator,
      pluginName,
      'link_open',
      (tokens, idx) => this._urlTransformer(tokens, idx, target));

    fieldName = fieldName || '';
    const html =
      `<div class="js-yxt-rtfValue" data-field-name="${fieldName}">\n` +
      `${RtfConverter.toHTML(fieldValue)}` +
      '</div>';
    return html;
  }

  /**
   * An inline token parser for use with the {@link iterator} Markdown-it plugin.
   * This token parser adds a cta-type data attribute to any link it encounters.
   */
  _urlTransformer (tokens, idx, target) {
    const href = tokens[idx].attrGet('href');
    let ctaType = 'VIEW_WEBSITE';
    if (href.startsWith('mailto')) {
      ctaType = 'EMAIL';
    } else if (href.startsWith('tel')) {
      ctaType = 'TAP_TO_CALL';
    }
    tokens[idx].attrSet('data-cta-type', ctaType);
    target && tokens[idx].attrSet('target', target);
  }
}

const RichTextFormatter = new RichTextFormatterImpl();
export default RichTextFormatter;
