import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useRef } from "react";
import * as analytics from "../analytics";

export interface MetadataProperties {
  title: string;
  description: string;
  noindex?: boolean;
  mixpanelPageViewProps?: Record<string, string>;
  image?: string;
  video?: string;
}

export default function Metadata(props: MetadataProperties) {
  const { noindex = false, mixpanelPageViewProps, description, video } = props;

  const analyticsHasFired = useRef(false);

  useEffect(() => {
    if (!analyticsHasFired.current) {
      analytics.initialize({
        entity: "documentation",
        ...mixpanelPageViewProps,
      });
      analyticsHasFired.current = true;
    }
  }, [mixpanelPageViewProps]);

  function makeCoverImageTwitterSafe(image: string): string {
    // Twitter and others need full URL to image
    if (image !== undefined && image.startsWith("/")) {
      // render different cover image links based on current vercel env
      switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
        case "production":
          return `https://glideapps.com/docs${image}`;
        case "preview":
          return `${process.env.NEXT_PUBLIC_VERCEL_URL}${image}`;
        case "development":
          return `${image}`;
        default:
          return `https://glideapps.com/docs${image}`;
      }
    }
    return image;
  }

  const coverImage = makeCoverImageTwitterSafe(
    props.image ?? "/cover-photo.png"
  );

  const title = `Glide • ${props.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />

        {description && (
          <>
            <meta property="og:description" content={description} />
            <meta name="description" content={description} />
          </>
        )}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/docs/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/docs/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/docs/favicon-16.png"
        />

        {noindex ? <meta name="robots" content="noindex" /> : null}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@glideapps" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />

        <link href={coverImage} rel="shortcut icon" type="image/x-icon" />
        <link href={coverImage} rel="apple-touch-icon" />
        <meta property="og:image" content={coverImage} />
        <meta name="twitter:image" content={coverImage} />
        {video && <meta property="og:video" content={video} />}
      </Head>

      <Script
        src="https://ai.glide.party/button-plugin.js"
        onReady={() => {
          const { glideHelpButton } = window as any;
          glideHelpButton?.init({ source: "docs" });
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TDP35C2');
          `,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TDP35C2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
}
