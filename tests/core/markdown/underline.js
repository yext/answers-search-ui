import formatRichText from '../../../src/core/markdown/richtext';

describe('formatting markdown with underlines in it', () => {
  it('works for the trival case', () => {
    const richText = '++I should be underlined++';
    const html = formatRichText(richText);
    expect(html).toEqual('<p><u>I should be underlined</u></p>\n');
  });

  it('works when combined with italics', () => {
    const richText = '*++I should be underlined++*';
    const html = formatRichText(richText);
    expect(html).toEqual('<p><em><u>I should be underlined</u></em></p>\n');
  });

  it('works when combined with bold', () => {
    const richText = '**++I should be underlined++**';
    const html = formatRichText(richText);
    expect(html).toEqual('<p><strong><u>I should be underlined</u></strong></p>\n');
  });

  it('works when combined with bold AND italics', () => {
    const richText = '***++I should be underlined++***';
    const html = formatRichText(richText);
    expect(html).toEqual('<p><em><strong><u>I should be underlined</u></strong></em></p>\n');
  });

  it('works when combined with bold AND italics AND extra junk at the edges', () => {
    const richText = '**random stuff** __dont mind me__ ***++I should be \nunderlined++*** hope your tests pass! \n\n';
    const html = formatRichText(richText);
    expect(html).toEqual('<p><strong>random stuff</strong> <strong>dont mind me</strong> <em><strong><u>I should be\nunderlined</u></strong></em> hope your tests pass!</p>\n');
  });

  it('works when there are multiple underlines', () => {
    const richText = '**++i am underlined++ ++i am also++** ++same++';
    const html = formatRichText(richText);
    expect(html).toEqual('<p><strong><u>i am underlined</u> <u>i am also</u></strong> <u>same</u></p>\n');
  });

  it('works with code blocks', () => {
    const richText = '\tcode**code**++code++\n';
    const html = formatRichText(richText);
    expect(html).toEqual('<pre><code>code**code**++code++\n</code></pre>\n');
  });

  it('works with multiple lists and links', () => {
    const richText =
      '**I AM BOLD** now I am not *I AM ITALICS* now I am not ++BRASAAAAAP++\n\n' +
      '* ++I am underline list++\n\n' +
      '1. ++I am number list++\n' +
      '2. ++[I am link to site](http://olivershi.io)++\n\n' +
      '++[url link](http://google.com)++\n\n' +
      '++[phone link](tel:+17326183404)++\n\n' +
      '++[email link](mailto:oshi@yext.com)++\n';

    const html = formatRichText(richText);
    const expectedResult =
      '<p><strong>I AM BOLD</strong> now I am not <em>I AM ITALICS</em> now I am not <u>BRASAAAAAP</u></p>\n' +
      '<ul>\n' +
      '<li><u>I am underline list</u></li>\n' +
      '</ul>\n' +
      '<ol>\n' +
      '<li><u>I am number list</u></li>\n' +
      '<li><u><a href="http://olivershi.io">I am link to site</a></u></li>\n' +
      '</ol>\n' +
      '<p><u><a href="http://google.com">url link</a></u></p>\n' +
      '<p><u><a href="tel:+17326183404">phone link</a></u></p>\n' +
      '<p><u><a href="mailto:oshi@yext.com">email link</a></u></p>\n';
    expect(html).toEqual(expectedResult);
  });
});
