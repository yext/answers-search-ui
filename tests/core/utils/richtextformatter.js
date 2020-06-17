import RichTextFormatter from '../../../src/core/utils/richtextformatter';

describe('adds cta-type data attribute to links', () => {
  it('adds attribute correctly', () => {
    const richText =
        '**I AM BOLD** now I am not *I AM ITALICS* now I am not ++BRASAAAAAP++\n\n' +
        '* ++I am underline list++\n\n' +
        '1. ++I am number list++\n' +
        '2. ++[I am link to site](http://olivershi.io)++\n\n' +
        '++[url link](http://google.com)++\n\n' +
        '++[phone link](tel:+17326183404)++\n\n' +
        '++[email link](mailto:oshi@yext.com)++\n';
    const expectedHTML =
        '<div class="js-yxt-rtfValue" data-field-name="someField">\n' +
        '<p><strong>I AM BOLD</strong> now I am not <em>I AM ITALICS</em> now I am not <u>BRASAAAAAP</u></p>\n' +
        '<ul>\n' +
        '<li><u>I am underline list</u></li>\n' +
        '</ul>\n' +
        '<ol>\n' +
        '<li><u>I am number list</u></li>\n' +
        '<li><u><a href="http://olivershi.io" data-cta-type="VIEW_WEBSITE">I am link to site</a></u></li>\n' +
        '</ol>\n' +
        '<p><u><a href="http://google.com" data-cta-type="VIEW_WEBSITE">url link</a></u></p>\n' +
        '<p><u><a href="tel:+17326183404" data-cta-type="TAP_TO_CALL">phone link</a></u></p>\n' +
        '<p><u><a href="mailto:oshi@yext.com" data-cta-type="EMAIL">email link</a></u></p>\n' +
        '</div>';
    expect(RichTextFormatter.format(richText, 'someField')).toEqual(expectedHTML);
  });
});

describe('adds target attribute to links', () => {
  it('adds attributes correctly when targetConfig is a string', () => {
    const richText =
      '++[url link](http://google.com)++\n\n' +
      '++[phone link](tel:+17326183404)++\n\n' +
      '++[email link](mailto:oshi@yext.com)++\n';
    const expectedHTML =
      '<div class="js-yxt-rtfValue" data-field-name="someField">\n' +
      '<p><u><a href="http://google.com" data-cta-type="VIEW_WEBSITE" target="_blank">url link</a></u></p>\n' +
      '<p><u><a href="tel:+17326183404" data-cta-type="TAP_TO_CALL" target="_blank">phone link</a></u></p>\n' +
      '<p><u><a href="mailto:oshi@yext.com" data-cta-type="EMAIL" target="_blank">email link</a></u></p>\n' +
      '</div>';
    expect(RichTextFormatter.format(richText, 'someField', '_blank')).toEqual(expectedHTML);
  });

  it('adds attributes correctly when targetConfig is an object', () => {
    const richText =
      '++[url link](http://google.com)++\n\n' +
      '++[phone link](tel:+17326183404)++\n\n' +
      '++[email link](mailto:oshi@yext.com)++\n';
    const expectedHTML =
      '<div class="js-yxt-rtfValue" data-field-name="someField">\n' +
      '<p><u><a href="http://google.com" data-cta-type="VIEW_WEBSITE" target="_self">url link</a></u></p>\n' +
      '<p><u><a href="tel:+17326183404" data-cta-type="TAP_TO_CALL" target="_blank">phone link</a></u></p>\n' +
      '<p><u><a href="mailto:oshi@yext.com" data-cta-type="EMAIL">email link</a></u></p>\n' +
      '</div>';
    const targetConfig = { phone: '_blank', url: '_self' };
    expect(RichTextFormatter.format(richText, 'someField', targetConfig)).toEqual(expectedHTML);
  });
});
