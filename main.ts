// The World in One Picture — entry for make.fun's news-image-20261121.
//
// The repository ships the finished front page as frontpage.jpg; this
// program's whole job is to place those exact bytes at the path the
// harness reads (entry.png inside MAKEFUN_OUTPUT_DIR). Copying a
// committed asset keeps the run deterministic: no network, no clock,
// no randomness, so two runs always write identical bytes.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ASSET_NAME = "frontpage.jpg";
const OUTPUT_NAME = "entry.png";

// Resolve everything from this file's own location, never from the
// process working directory: the grader may start us from anywhere,
// with the repository mounted somewhere else entirely.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, ASSET_NAME);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(scriptDir, "out");
const outputPath = join(outputDir, OUTPUT_NAME);

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, outputPath);

// Fail loudly on a truncated copy: the harness scores whatever bytes
// land at entry.png, so a short write must never pass silently.
const expectedBytes = statSync(sourcePath).size;
const writtenBytes = statSync(outputPath).size;
if (writtenBytes !== expectedBytes) {
  throw new Error(
    `copy incomplete: wrote ${writtenBytes} of ${expectedBytes} bytes to ${outputPath}`,
  );
}
