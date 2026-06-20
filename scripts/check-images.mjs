import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

const ext = ['webp', 'jpg', 'jpeg', 'png'];

function variants(base) {
  return ext.map((e) => `${base}.${e}`);
}

const slots = [
  { name: 'hero', paths: variants('images/hero') },
  { name: 'theaters/room', paths: variants('images/theaters/room') },
  { name: 'theaters/gaming', paths: variants('images/theaters/gaming') },
  { name: 'sports/cricket', paths: variants('images/sports/cricket') },
  { name: 'sports/pickleball', paths: variants('images/sports/pickleball') },
  { name: 'sports/volleyball', paths: variants('images/sports/volleyball') },
  { name: 'dining/garden', paths: variants('images/dining/garden') },
  { name: 'dining/food', paths: variants('images/dining/food') },
  { name: 'packages/celebration', paths: variants('images/packages/celebration') },
  { name: 'visit/exterior', paths: variants('images/visit/exterior') },
  ...['01', '02', '03', '04', '05', '06'].flatMap((n) => [
    { name: `instagram/${n}`, paths: variants(`images/instagram/${n}`) },
  ]),
];

let found = 0;
let missing = 0;

console.log('\nStudio Grill — image checklist\n');

for (const slot of slots) {
  const hit = slot.paths.find((p) => fs.existsSync(path.join(publicDir, p)));
  if (hit) {
    console.log(`  ✓ ${slot.name}  →  ${hit}`);
    found++;
  } else {
    console.log(`  ✗ ${slot.name}  (add under public/images/)`);
    missing++;
  }
}

console.log(`\n${found} on site, ${missing} not provided (skipped on pages)\n`);
console.log('Optional slots are omitted from the site when absent.\n');
