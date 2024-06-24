import { LoremIpsum } from 'lorem-ipsum';
import { u } from 'unist-builder';

const loremIpsumDirective = {
  name: 'lorem-ipsum',
  doc: 'A directive that will generate paragraphs of lorem ipsum text.',
  alias: ['lorem', 'lipsum'],
  arg: { type: Number, doc: 'The number of paragraphs to generate.`' },
  options: {},
  run(data) {
    const lorem = new LoremIpsum();
    const text = lorem.generateParagraphs(Number(data.arg) || 1);
    const paragraphs = text.split('\n').map((p) => p.trim());
    return paragraphs.map((p) => u('paragraph', [{ type: 'text', value: p }]));
  },
};

const plugin = { name: 'Lorem Ipsum', directives: [loremIpsumDirective] };

export default plugin;
