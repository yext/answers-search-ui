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
   * @param {string} fieldName The name of the field, to be included in the payload of a click
   *                           analytics event. This parameter is optional.
   * @param {Object|string} targetConfig Configuration object specifying the 'target' behavior for
   *                          the various types of links. If a string is provided, it is assumed that
   *                          is the 'target' behavior across all types of links. This parameter is optional.
   * @returns {string} The HTML representation of the field value, serialized as a string.
   */
  format (fieldValue, fieldName, targetConfig) {
    if (typeof fieldValue !== 'string') {
      throw new AnswersCoreError(
        `Rich text "${fieldValue}" needs to be a string. Currently is a ${typeof fieldValue}`
      );
    }

    const pluginName = this._generatePluginName();
    RtfConverter.addPlugin(
      iterator,
      pluginName,
      'link_open',
      (tokens, idx) => this._urlTransformer(tokens, idx, targetConfig));

    fieldName = fieldName || '';
    const html =
      `<div class="js-yxt-rtfValue" data-field-name="${fieldName}">\n` +
      `${RtfConverter.toHTML(fieldValue)}` +
      '</div>';

    // Because all invocations of this method share the same {@link RtfConverter}, we must make sure to
    // disable the plugin added above. Otherwise, it will be applied in all subsequent conversions.
    RtfConverter.disablePlugin(pluginName);

    return html;
  }

  /**
   * An inline token parser for use with the {@link iterator} Markdown-it plugin.
   * This token parser adds a cta-type data attribute to any link it encounters.
   */
  _urlTransformer (tokens, idx, targetConfig) {
    targetConfig = targetConfig || {};
    let target;
    if (typeof targetConfig === 'string') {
      target = targetConfig;
    }

    const href = tokens[idx].attrGet('href');
    let ctaType;
    if (href.startsWith('mailto')) {
      ctaType = 'EMAIL';
      target = target || targetConfig.email;
    } else if (href.startsWith('tel')) {
      ctaType = 'TAP_TO_CALL';
      target = target || targetConfig.phone;
    } else {
      ctaType = 'VIEW_WEBSITE';
      target = target || targetConfig.url;
    }

    tokens[idx].attrSet('data-cta-type', ctaType);
    target && tokens[idx].attrSet('target', target);
  }

  /**
   * A function that generates a unique UUID to serve as the name for a
   * Markdown-it plugin.
   *
   * @returns {string} the UUID.
   */
  _generatePluginName () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}

const RichTextFormatter = new RichTextFormatterImpl();
export default RichTextFormatter;
