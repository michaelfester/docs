#!/usr/bin/env npx tsx
import "dotenv/config";

import { buildTimeGenerateEnhancedNavigation } from "@/enhancement";
import { writeFileSync } from "fs";

async function main() {
  const nav = await buildTimeGenerateEnhancedNavigation();
  writeFileSync("navigation.json", JSON.stringify(nav, null, 2));
}

main();
