// One-off script: recolor logo.png (orange→ electric-blue/cyan palette)
// Usage: node scripts/recolor-logo.mjs
import sharp from '../node_modules/sharp/lib/index.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sharpLib = require('../node_modules/sharp');

const src = './public/logo.png';
const dst = './public/logo-recolored.png';

// Site palette
const BLUE = [59, 130, 246];   // #3B82F6
const CYAN = [34, 211, 238];   // #22D3EE

// Trim transparent edges first, then get raw RGBA pixels
const { data: raw, info } = await sharpLib(src)
  .trim()          // crop transparent border so the icon fills the canvas
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const channels = 4;
const out = Buffer.from(raw);

// Luminance range of the orange pixels (measured from analysis): ~0.50–0.72
// Normalise into [0,1] so we use the full blue→cyan spread
const LUM_MIN = 0.48;
const LUM_MAX = 0.75;

for (let i = 0; i < raw.length; i += channels) {
  const r = raw[i], g = raw[i + 1], b = raw[i + 2], a = raw[i + 3];
  if (a < 10) continue; // fully transparent — skip

  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;

  if (sat < 0.18) continue; // near-gray structural pixel — leave as-is

  // t=0 → BLUE (darker/richer areas), t=1 → CYAN (lighter/highlight areas)
  const t = Math.max(0, Math.min(1, (lum - LUM_MIN) / (LUM_MAX - LUM_MIN)));

  out[i]     = Math.round(BLUE[0] + (CYAN[0] - BLUE[0]) * t);
  out[i + 1] = Math.round(BLUE[1] + (CYAN[1] - BLUE[1]) * t);
  out[i + 2] = Math.round(BLUE[2] + (CYAN[2] - BLUE[2]) * t);
  // alpha is preserved exactly
}

await sharpLib(out, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(dst);

console.log(`✓ Saved ${width}×${height} recolored logo → ${dst}`);
