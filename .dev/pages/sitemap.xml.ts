import { readNavigation } from "@/navigation";
import { GetServerSideProps } from "next";

interface Page {
  location: string;
}

interface Data {
  pages: Page[];
}

const generateSitemap = (
  data: string[],
  origin: string = "https://www.glideapps.com/"
) => {
  const urls = data.map(page => {
    const url = new URL(origin);
    url.pathname = `/docs${page}`;
    let fullUrl = url.toString();
    if (!fullUrl.endsWith("/")) {
      fullUrl += "/";
    }
    return `<url>
      <loc>${fullUrl}</loc>
    </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("\n")}
    </urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const flattenedNav = readNavigation().flatMap(n => n.links);
  const slugs: string[] = flattenedNav.flatMap(t => {
    const topLevelNav = t.href;
    let bottomLevelNavItems = [];
    if (t.links) {
      bottomLevelNavItems = t.links.map(n => n.href);
    }

    return [topLevelNav, ...bottomLevelNavItems];
  });

  const data = {
    pages: slugs,
  };

  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap(data.pages));
  res.end();

  return {
    props: {},
  };
};

const SitemapIndex = () => null;
export default SitemapIndex;
