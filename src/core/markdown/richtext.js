import MarkdownIt from 'markdown-it/dist/markdown-it';
import underline from 'markdown-it-plugin-underline';
import { AnswersCoreError } from '../errors/errors';

function formatRichText (markdown) {
  if (typeof markdown !== 'string') {
    throw new AnswersCoreError(`Rich text "${markdown}" needs to be of type string. Currently is of type ${typeof markdown}`);
  }
  const md = MarkdownIt('commonmark');
  _registerExtensions(md);
  const html = md.render(markdown);
  return html;
}

function _registerExtensions (md) {
  md.use(underline);
}

export default formatRichText;
