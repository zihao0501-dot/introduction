import { copyFile, cp, mkdir, rm, stat } from 'node:fs/promises';

const root = new URL('./', import.meta.url);
const output = new URL('./dist/', root);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'app.js', 'content.js', 'interactions.js', 'styles.css', 'refinements.css']) {
  await copyFile(new URL(file, root), new URL(file, output));
}
const assets = new URL('./assets/', root);
try {
  if ((await stat(assets)).isDirectory()) await cp(assets, new URL('./assets/', output), { recursive: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
console.log('Static website ready in dist/');
