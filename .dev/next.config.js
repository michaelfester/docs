const withMarkdoc = require("@markdoc/next.js");
const { ls } = require("shelljs");
const yaml = require("js-yaml");
const { readFileSync } = require("fs");
const { join } = require("path");
const Markdoc = require("@markdoc/markdoc");

function getSlugRedirects() {
  const pages = Array.from(ls("../docs/**/*.md"));

  const frontmatters = pages.map(page => {
    const doc = readFileSync(page, { encoding: "utf-8" });
    const ast = Markdoc.parse(doc);
    const frontmatter = ast.attributes.frontmatter
      ? yaml.load(ast.attributes.frontmatter)
      : {};
    return { ...frontmatter, page };
  });

  // {
  //   basePath: false,
  //   source: '/usc',
  //   destination: '/docs/reference/basic-columns/user-specific-columns',
  //   permanent: true
  // }
  const redirects = frontmatters
    .filter(f => f.slug)
    .map(f => {
      const source = join("/docs", f.slug);
      return {
        basePath: false,
        source,
        destination: f.page
          .replace("../docs/", "/docs/")
          .replace("/index.md", "")
          .replace(".md", ""),
        permanent: false,
      };
    })
    .filter(r => r.source !== r.destination);

  return redirects;
}

module.exports = withMarkdoc(
  /* config: https://markdoc.io/docs/nextjs#options */
  { mode: "static" }
)({
  basePath: "/docs",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
  reactStrictMode: true,

  productionBrowserSourceMaps: true,

  webpack: config => {
    config.resolve.fallback = { fs: false, child_process: false };
    return config;
  },

  async redirects() {
    const redirectRootWhenNotInProduction =
      process.env.NODE_ENV !== ""
        ? [
            {
              basePath: false,
              source: "/",
              destination: "/docs",
              permanent: false,
            },
            {
              basePath: false,
              source: "/docs/introduction-to-apps",
              destination: "/docs/classic-apps",
              permanent: false,
            },
            {
              basePath: false,
              source: "/docs/guides/products/introduction-to-apps",
              destination: "/docs/guides/products/classic-apps",
              permanent: false,
            },
            {
              basePath: false,
              source: "/docs/introduction-to-pages",
              destination: "/docs/apps",
              permanent: false,
            },
            {
              basePath: false,
              source: "/docs/guides/products/introduction-to-pages",
              destination: "/docs/guides/products/apps",
              permanent: false,
            },
          ]
        : [];

    return [...redirectRootWhenNotInProduction, ...getSlugRedirects()];
  },

  images: {
    domains: ["img.youtube.com"],
  },
});
