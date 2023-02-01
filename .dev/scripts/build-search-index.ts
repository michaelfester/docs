#!/usr/bin/env npx tsx

import "dotenv/config";
import Markdoc from "@markdoc/markdoc";
import algoliasearch from "algoliasearch";
import type {
  EnhancedNavigation,
  EnhancedNavigationNode,
  IndexedDocument,
} from "@/types";
import { buildTimeGenerateEnhancedNavigation } from "@/enhancement";
import { readFileSync, writeFileSync } from "fs";

import { ExportToCsv } from "export-to-csv";
import { TemplateID, templateImageURLUnsigned } from "@/cover_images";

const { ALGOLIA_API_KEY, NEXT_PUBLIC_DOCSEARCH_APP_ID } = process.env;

const algolia = algoliasearch(NEXT_PUBLIC_DOCSEARCH_APP_ID, ALGOLIA_API_KEY);
const algoliaIndex = algolia.initIndex("docs");

type EvenMoreEnhancedNavigationNode = EnhancedNavigationNode & {
  bodyHTML: string;
  image: string;
};

function enhance(n: EnhancedNavigationNode): EvenMoreEnhancedNavigationNode {
  const doc = readFileSync(n.file.path, "utf-8");

  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast, {
    tags: {
      // Include Figure tag
      figure: {
        selfClosing: true,
        attributes: {
          src: { type: String },
          caption: { type: String, render: "alt" },
        },
        render: "img",
      },
    },
  });

  const image = templateImageURLUnsigned(TemplateID.DocsCover, {
    title: n.title,
  });

  const bodyHTML = Markdoc.renderers
    .html(content)
    .replace(/src="\//g, `src="https://www.glideapps.com/`)
    .replace(/href="\//g, `href="https://www.glideapps.com/`);

  return {
    ...n,
    bodyHTML,
    image,
  };
}

export async function indexNavigationNode({
  title,
  href: route,
  frontmatter,
  bodyHTML,
  image,
}: EvenMoreEnhancedNavigationNode) {
  const body = bodyHTML;

  const record: IndexedDocument = {
    objectID: route,
    title: frontmatter.title ?? title,
    description: frontmatter.description,
    route,
    body,
    image,
  };

  console.info("Indexing", route);

  try {
    await algoliaIndex.saveObject(record);
  } catch (error) {
    console.error(error);
  }
}

function writeDocsToCSVForHubspot(
  nav: EnhancedNavigation,
  nodes: EvenMoreEnhancedNavigationNode[]
) {
  const exporter = new ExportToCsv({
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const hubSpotKnowledgeBaseArticles = nodes.map(n => {
    const title = n.frontmatter.title ?? n.title;
    const description = n.frontmatter.description ?? "";
    const section = nav.find(section =>
      section.links.some(
        l => l.href === n.href || l.links?.some(l => l.href === n.href)
      )
    );
    const subsection = nav
      .flatMap(section => section.links)
      .find(
        link => link.href === n.href || link.links?.some(l => l.href === n.href)
      );

    return {
      URL: `https://www.glideapps.com/docs${n.href}`,
      Title: title,
      Subtitle: description,
      Category: section.title,
      Subcategory: subsection.title,
      Article_Body: n.bodyHTML,
    };
  });

  const csv = exporter.generateCsv(hubSpotKnowledgeBaseArticles, true);
  writeFileSync("glide-docs-hubspot-knowledge-base.csv", csv);
}

async function main() {
  console.time("Clearing index");
  await algoliaIndex.clearObjects();
  console.timeEnd("Clearing index");

  console.time("Building index");
  const nav = await buildTimeGenerateEnhancedNavigation();
  const nodes = nav
    .flatMap(sec => sec.links.flatMap(link => [link, ...(link.links ?? [])]))
    .map(enhance);
  await Promise.all(nodes.map(indexNavigationNode));
  console.timeEnd("Building index");

  writeDocsToCSVForHubspot(nav, nodes);
}

main();