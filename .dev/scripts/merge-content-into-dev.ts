#!/usr/bin/env npx tsx

// 1. Merge changed markdown files from ../docs into pages
// 2. Merge changed media files from ../docs into public
// 3. Generate .gitignore file to ignore all content files under dev

import { existsSync, lstatSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";
import { cp, find, mkdir } from "shelljs";

function gitignore(source: string, target: string, pattern: RegExp) {
  const content = find(source)
    .map(f => join(target, f.replace(source, "").trim()))
    .filter(p => existsSync(p) && lstatSync(p).isFile())
    .map(f => join(".", f.replace(target, "")))
    .filter(p => p.match(pattern) !== null);

  const file = join(target, ".gitignore");
  writeFileSync(file, content.join("\n"), "utf-8");
}

function rsync(sourceDir: string, targetDir: string, pattern: RegExp) {
  gitignore(sourceDir, targetDir, pattern);

  for (const source of find(sourceDir)) {
    const target = join(targetDir, source.replace(sourceDir, "").trim());
    if (lstatSync(source).isDirectory()) {
      mkdir("-p", target);
      continue;
    }

    if ([".gitignore"].includes(basename(source))) continue;
    if (!source.match(pattern)) continue;

    const nothingToDo =
      existsSync(target) &&
      lstatSync(source).mtimeMs <= lstatSync(target).mtimeMs;

    if (nothingToDo) continue;

    cp(source, target);
    if (process.env.CI === undefined) {
      console.error("cp", source, target);
    }
  }
}

rsync("../docs", "pages", /\.md$/);
rsync("../docs", "public", /^((?!\.md$).)*$/);
