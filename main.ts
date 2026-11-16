import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Contract: copy the repository's LAUNCH.json to the output directory.
// MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR override the defaults (repo root / /output).
const botDir = process.env.MAKEFUN_BOT_DIR || ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(botDir, "LAUNCH.json");

if (!existsSync(source)) {
  throw new Error("LAUNCH.json not found in " + botDir);
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "LAUNCH.json"));
console.log("copied LAUNCH.json to " + outputDir);
