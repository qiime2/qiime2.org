import { u } from 'unist-builder';
import { createId, normalizeLabel, fileError } from 'myst-common';

function noBooleans(value) {
  return value === 'true' ? undefined : value;
}

const discourseDirective = {
  name: 'discourse',
  doc: 'An configurable site footer with a logo, tagline, and links.',
  arg: { type: String, required: true, doc: 'URL of the discourse forum' },
  options: {
    category: { type: String, doc: 'Name of the category to list topics from', required: true },
    mode: {
      type: String,
      doc: 'The type of widget to display (default: `server`), (values: `widget`, `server`, `client`)',
      default: 'server',
    },
    logo: { type: String, doc: 'The forum logo' },
    'logo-dark': { type: String, doc: 'Dark mode version of the forum logo' },
    'logo-title': { type: String, doc: 'Title of the logo, used as alt text' },
    limit: { type: Number, doc: 'The maximum number of topics to show' },
    pinned: { type: Boolean, doc: 'Whether to show pinned topics' },
  },
  body: {
    type: String,
    doc: 'The body of the footer should contain links in the form of a list with up to 2 nested lists',
  },
  run(data, vfile, ctx) {
    const url = data.arg;

    const modes = ['widget', 'server', 'client'];

    const json = {
      category: noBooleans(data.options.category),
      mode: modes.includes(data.options.mode) ? data.options.mode : 'server',
      limit: noBooleans(data.options.limit),
      pinned: data.options.pinned === 'true',
      logoTitle: noBooleans(data.options['logo-title']),
    };

    const ids = {
      logo: noBooleans(data.options.logo) ? createId() : undefined,
      logoDark: noBooleans(data.options['logo-dark']) ? createId() : undefined,
    };

    const children = [];

    if (data.options.logo) {
      children.push(
        u('image', {
          align: 'left',
          url: data.options.logo,
          identifier: ids.logo,
          alt: data.options.logoTitle,
        })
      );
    }

    if (data.options['logo-dark']) {
      children.push(
        u('image', {
          align: 'left',
          url: data.options['logo-dark'],
          identifier: ids.logoDark,
          alt: data.options.logoTitle,
        })
      );
    }

    return [
      u('discourse', { data: { ...data.node.data, identifiers: ids }, ...json, url }, children),
    ];
  },
};

const plugin = { name: 'Discourse by Curvenote', directives: [discourseDirective] };

export default plugin;
