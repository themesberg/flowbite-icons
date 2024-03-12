import fs from "node:fs/promises";
import path from "path";

async function readFiles(
  directoryPath: string,
  onReadFile: (filePath: string) => Promise<void>,
) {
  const files = await fs.readdir(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await readFiles(filePath, onReadFile);
    } else {
      await onReadFile(filePath);
    }
  }
}

const SVGS_PATH = "src";
const MANIFEST_PATH = "manifest.json";

const manifest: {
  name: string;
  style: string;
  category: string;
  svg: string;
}[] = [];

await readFiles(SVGS_PATH, async (filePath) => {
  if (!filePath.endsWith(".svg")) return;

  const relativePath = filePath.replace(`${SVGS_PATH}/`, "");

  let [style, category, name] = relativePath.split("/");
  name = name.split(".")[0];

  const svg = await Bun.file(filePath).text();

  manifest.push({ name, style, category, svg });
});

manifest.sort((a, b) => {
  const x = a.name.toLowerCase();
  const y = b.name.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
});

await Bun.write(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
