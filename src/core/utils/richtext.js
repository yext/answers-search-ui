import MarkdownIt from 'markdown-it/dist/markdown-it';
import underline from 'markdown-it-plugin-underline';
import { AnswersCoreError } from '../errors/errors';

class RichText {
  constructor () {
    if (!RichText.setInstance(this)) {
      return RichText.getInstance();
    }

    this._md = MarkdownIt('commonmark');
    this._md.use(underline);
    this.formatRichText = this.formatRichText.bind(this);
  }

  formatRichText (markdown) {
    if (typeof markdown !== 'string') {
      throw new AnswersCoreError(
        `Rich text "${markdown}" needs to be a string. Currently is a ${typeof markdown}`
      );
    }
    const html = this._md.render(markdown);
    return html;
  }

  static setInstance (instance) {
    if (!this._instance) {
      this._instance = instance;
      return true;
    }
    return false;
  }

  static getInstance () {
    return this._instance;
  }
}

const RichTextInstance = new RichText();
export default RichTextInstance;
