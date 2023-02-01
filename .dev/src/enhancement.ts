import { readNavigation } from "@/navigation";
import type {
  EnhancedNavigation,
  EnhancedNavigationNode,
  Navigation,
  NavigationLinks,
  NavigationNode,
} from "@/types";
import { MarkdocNextJsPageProps } from "@markdoc/next.js";
import { existsSync, readFileSync } from "fs";

import Markdoc from "@markdoc/markdoc";

import { execSync } from "child_process";
import yaml from "js-yaml";

export function getAllLinks(navigation: EnhancedNavigation) {
  const allLinks = navigation.flatMap(section =>
    section.links.flatMap(l => [l, ...(l.links ?? [])])
  );
  return allLinks;
}

export function findLinkForRoute(
  navigation: EnhancedNavigation,
  path: string
): EnhancedNavigationNode | undefined {
  return getAllLinks(navigation).find(link => link.href === path);
}

export function loadMarkdocPageProps(path: string): MarkdocNextJsPageProps {
  const doc = readFileSync(path, { encoding: "utf-8" });
  const ast = Markdoc.parse(doc);
  const content = Markdoc.transform(ast);

  const frontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

  return {
    markdoc: {
      content,
      frontmatter,
      file: { path },
    },
  };
}

function transformNavigation<T, U>(
  rootNav: Navigation<T>,
  mapNode: (n: NavigationNode<T>) => U
): Navigation<U> {
  function transformLinks<T, U>(links: NavigationLinks<T>): NavigationLinks<U> {
    return links.map(node => {
      const { title, href, section } = node;
      return {
        title,
        href,
        section,
        links:
          node.links === undefined ? undefined : transformLinks(node.links),
        ...mapNode(node as any),
      } as any;
    });
  }

  return rootNav.map(section => ({
    ...section,
    links: transformLinks(section.links),
  }));
}

function markdownFileForPath(path: string): string | undefined {
  if (existsSync(`../docs${path}.md`)) {
    return `../docs${path}.md`;
  } else if (existsSync(`../docs${path}/index.md`)) {
    return `../docs${path}/index.md`;
  } else {
    return undefined;
  }
}

function getLastModified(path: string): string {
  const lastCommitDate = execSync(`git log -1 --pretty="format:%cs" ${path}`, {
    encoding: "utf8",
  });
  return lastCommitDate;
}

function getLastModifiedByPath() {
  const dates: Record<string, string> = {};
  transformNavigation(readNavigation(), node => {
    const doc = markdownFileForPath(node.href);
    dates[doc] = getLastModified(doc);
  });
  return dates;
}

export async function buildTimeGenerateEnhancedNavigation(): Promise<EnhancedNavigation> {
  const modifiedDate = getLastModifiedByPath();
  const navigation = transformNavigation(readNavigation(), node => {
    const doc = markdownFileForPath(node.href);
    if (doc === undefined) {
      throw new Error(
        `Navigation link has no corresponding file: ${node.href}`
      );
    }
    const {
      markdoc: { file, frontmatter },
    } = loadMarkdocPageProps(doc);

    const modified = modifiedDate[doc] ?? new Date().toDateString();

    return { file, frontmatter, modified };
  });

  return navigation;
}
