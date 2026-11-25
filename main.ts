// Make the AI Judge Laugh
// A single-line joke about office life: the green "online" dot claims
// you're working, while you spend twenty minutes agonising over whether
// "sounds good" needs an exclamation mark.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE_LINE =
  "The green dot says I'm online, but I've spent twenty minutes deciding whether 'sounds good' needs an exclamation mark.";

const OUTPUT_PATH = "/output/entry.txt";

function checkJoke(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Joke must not be empty or whitespace only.");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${text.length}.`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Joke must be a single line with no newline.");
  }
}

function publishJoke(): void {
  checkJoke(JOKE_LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE_LINE, { encoding: "utf8" });
}

publishJoke();
