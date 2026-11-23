import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line: string = "My phone battery and my motivation both hit 1% in the same meeting.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
