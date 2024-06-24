import { u } from 'unist-builder';
import { createId, normalizeLabel, fileError } from 'myst-common';
import { selectAll } from 'unist-util-select';

const footerDirective = {
  name: 'footer',
  doc: 'An configurable site footer with a logo, tagline, and links.',
  options: {
    logo: { type: String, doc: 'URL of the logo' },
    'logo-dark': { type: String, doc: 'URL of the logo' },
    tagline: { type: String, doc: 'A tagline to display under the logo' },
    website: { type: String, doc: 'URL of the website' },
    padding: {
      type: String,
      doc: 'Padding around the hero unit using a css padding string like `1rem` or `1rem 2rem`',
    },
    'background-color': { type: String, doc: 'Background color of the hero unit' },
  },
  body: {
    type: String,
    doc: 'The body of the footer should contain links in the form of a list with up to 2 nested lists',
  },
  validate(data, vfile) {
    // return { ...data, options: {} };
    return data;
  },
  run(data, vfile, ctx) {
    function parseInlineMyst(myst) {
      // aims to parge myst text and return the children or the implicit paragraph
      return myst ? ctx.parseMyst(myst)?.children[0].children : undefined;
    }

    const json = {
      backgroundColor: data.options['background-color'],
      padding: data.options.padding,
    };

    const id = {
      footer: createId(),
      logo: data.options.logo ? createId() : undefined,
      logoDark: data.options['logo-dark'] ? createId() : undefined,
      tagline: data.options.tagline ? createId() : undefined,
      website: data.options.website ? createId() : undefined,
      linkList1: createId(),
      linkList2: createId(),
    };

    const parsed = {
      tagline: parseInlineMyst(data.options.tagline),
      body: ctx.parseMyst(data.body),
    };

    const lhs = [];

    if (data.options.logo)
      lhs.push(u('image', { align: 'left', url: data.options.logo, identifier: id.logo }));
    if (data.options['logo-dark'])
      lhs.push(
        u('image', { align: 'left', url: data.options['logo-dark'], identifier: id.logoDark })
      );
    if (data.options.tagline) lhs.push(u('paragraph', { identifier: id.tagline }, parsed.tagline));

    const lists = selectAll('list list', parsed.body);
    const rhs = [];

    if (lists[0]?.children) rhs.push(u('list', { identifier: id.linkList1 }, lists[0].children));
    if (lists[1]?.children) rhs.push(u('list', { identifier: id.linkList2 }, lists[1].children));

    const block = u(
      'block',
      { kind: 'footer', data: { ...data.node.data, ...json, identifiers: id } },
      [
        u('div', { class: 'flex justify-between py-2 items-center' }, [
          u('div', { class: 'space-y-1 flex-grow flex flex-col items-start footer__lhs' }, lhs),
          u(
            'div',
            { class: 'space-y-1 flex-grow flex items-top gap-2 justify-center footer__rhs' },
            rhs
          ),
        ]),
      ]
    );

    return [block];
  },
};

const plugin = { name: 'Footer', directives: [footerDirective] };

export default plugin;
