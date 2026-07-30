const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = process.cwd();
const sources = [
  path.join(root, 'public', 'SIT-logo2.png'),
  path.join(root, 'public', 'sit.png'),
];

function isBackground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  if (max < 42) return true;
  if (r < 75 && g < 80 && b < 130 && max - min < 35) return true;
  if (r < 55 && g < 65 && b < 110) return true;

  return false;
}

async function processLogo(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8Array(data);

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (isBackground(r, g, b)) {
      pixels[i + 3] = 0;
      continue;
    }

    if (r < 120 && g > 95 && b > 130) {
      pixels[i] = 30;
      pixels[i + 1] = 58;
      pixels[i + 2] = 95;
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim({ threshold: 10 })
    .png()
    .toFile(outputPath);
}

async function main() {
  const input = sources.find((file) => fs.existsSync(file));
  if (!input) {
    throw new Error('No logo source file found.');
  }

  const output = path.join(root, 'public', 'sit.png');
  const outputTransparent = path.join(root, 'public', 'sit-transparent.png');

  await processLogo(input, outputTransparent);
  await processLogo(input, output);

  console.log(`Processed ${path.basename(input)} -> sit.png and sit-transparent.png`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
