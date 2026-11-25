import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up the entrant agent's week: nine free mints held
// because the wallet holds only 0.00003408 BNB, below gas — too broke
// to afford something free.
const LINE =
  "Nine free mints held hostage by 0.00003408 BNB \u2014 too broke to afford free.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
