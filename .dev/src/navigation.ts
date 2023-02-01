import type { Navigation, NavigationLinks, NavigationSection } from "@/types";
import { existsSync } from "fs";
import { glob } from "glob";
import { sortBy, uniq } from "lodash";

import { loadMarkdocPageProps } from "./enhancement";

function getContentDirectories(path: string): string[] {
  let manualOrdering = [];

  // First, we can look at 'sections' in front-matter:
  const sectionContentFile = contentFile(path);
  if (sectionContentFile !== undefined) {
    const props = loadMarkdocPageProps(sectionContentFile);
    const directories = props.markdoc?.frontmatter.sections;
    if (Array.isArray(directories) && typeof directories[0] === "string") {
      manualOrdering = directories.map(d => `${path}/${d}`);
    }
  }

  const contents = glob.sync(`${path}/**/*.md`);
  const dirs = contents
    .map(p => p.replace(path, "").split("/")[1])
    .map(p => `${path}/${p}`)
    .map(p => p.replace(/(index)?\.md$/, ""))
    .filter(p => ![path, `${path}/`, ""].includes(p));

  const unique = uniq(dirs);
  const ordered = sortBy(
    unique,
    d => (manualOrdering.includes(d) ? manualOrdering.indexOf(d) : Infinity),
    d => d
  );

  return ordered;
}

function contentFile(path: string): string | undefined {
  return [`${path}.md`, `${path}/index.md`].find(existsSync);
}

function readSection(root: string, path: string): NavigationSection {
  function readLinks(subpath: string): NavigationLinks {
    const sections = getContentDirectories(subpath);
    const links = sections.map(section => {
      let title = section;
      const sectionContentFile = contentFile(section);
      if (sectionContentFile !== undefined) {
        const props = loadMarkdocPageProps(sectionContentFile);
        title = props.markdoc?.frontmatter.title;
      } else {
        title = section.replace(path, "");
      }
      return {
        title,
        href: section.replace(root, ""),
        links: readLinks(section),
      };
    });
    return links;
  }

  let title = path.replace(root, "");
  const sectionContentFile = contentFile(path);
  if (sectionContentFile !== undefined) {
    const props = loadMarkdocPageProps(sectionContentFile);
    title = props.markdoc?.frontmatter.title;
  }
  return { title, links: readLinks(path) };
}

export function readNavigation(): Navigation {
  const sectionRoots = getContentDirectories("../docs");
  return sectionRoots.map(p => readSection("../docs", p));
}
