import MarkdownIt from 'markdown-it/dist/markdown-it';
import yextUnderline from './yext_underline';

function formatRichText (markdown) {
  if (typeof markdown !== 'string') {
    console.warn(`Rich text "${markdown}" needs to be of type string. Currently is of type ${typeof markdown}`);
    return '';
  }
  const md = MarkdownIt('commonmark');
  _registerInlineRules(md);
  const html = md.render(markdown);
  return html;
}

function _registerInlineRules (md) {
  md.inline.ruler.push('yext_underline', yextUnderline);
}

export default formatRichText;
