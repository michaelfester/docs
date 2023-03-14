import { slugifyWithCounter } from "@sindresorhus/slugify";

import Layout from "@/components/Layout";

import "@/styles/tailwind.css";
import "focus-visible";

import { MarkdocNextJsPageProps } from "@markdoc/next.js";

import { findLinkForRoute } from "@/enhancement";

import NotFound from "@/components/404";
import { EnhancedNavigation } from "@/types";
import { useRouter } from "next/router";

const navigation: EnhancedNavigation = require("../navigation.json");

function getNodeText(node) {
  let text = "";
  for (let child of node.children ?? []) {
    if (typeof child === "string") {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = [];

  for (let node of nodes) {
    if (/^h[23]$/.test(node.name)) {
      let title = getNodeText(node);
      if (title) {
        let id = slugify(title);
        node.attributes.id = id;
        if (node.name === "h3") {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          });
        } else {
          sections.push({ ...node.attributes, title, children: [] });
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify));
  }

  return sections;
}

interface AppProps {
  Component: React.FC<MarkdocNextJsPageProps>;
  pageProps: MarkdocNextJsPageProps;
}

export default function App(props: AppProps) {
  const router = useRouter();

  const { Component, pageProps } = props;

  if (router.pathname === "/search") {
    return <Component />;
  }

  const { markdoc } = pageProps;

  let link = findLinkForRoute(navigation, router.pathname);

  if (link === undefined) {
    // We're rendering a page that's not in the navigation
    // Just as a hack, we will just reuse whatever is the first page
    link = navigation[0].links[0];
    console.error(
      `${router.pathname} is being rendered, but it's not in the navigation.`
    );
  }

  const tableOfContents = markdoc ? collectHeadings(markdoc.content) : [];

  if (pageProps?.markdoc === undefined) {
    // Horrible hack to work around weird loading bug we have with site clusters
    return (
      <Layout
        navigation={navigation}
        link={link}
        tableOfContents={tableOfContents}
      >
        <NotFound />
      </Layout>
    );
  }

  return (
    <>
      <Layout
        navigation={navigation}
        link={link}
        tableOfContents={tableOfContents}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
