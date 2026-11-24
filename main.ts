// One Line, One Laugh: The Office Joke Open
// Entry: a single original one-line office joke, plain text.
// Joke (127 characters): "I asked HR for a mental health day and they
// approved it, but only if I spend it answering emails about
// mental health awareness."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I asked HR for a mental health day and they approved it, but only if I spend it answering emails about mental health awareness.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
