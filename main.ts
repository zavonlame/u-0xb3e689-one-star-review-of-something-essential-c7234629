// One-Star Review of Something Essential
// Writes a single-line, deadpan one-star review (<= 160 chars) to entry.txt.
// Self-contained copy program: Node 22 stdlib only, no network, no Chrome.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. Sleep takes eight hours of my day and returns me with a sore neck and the same problems. Would not recharge again.";

// The gate requires 1-160 UTF-8 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
