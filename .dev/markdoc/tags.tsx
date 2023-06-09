import { Banner } from "@/components/Banner";
import { Callout } from "@/components/Callout";
import CTA from "@/components/CTA";
import HomeScreen from "@/components/HomeScreen";
import FAQ from "@/components/FAQ";
import { LinkGrid } from "@/components/LinkGrid";
import { Video } from "@/components/Video";
import Image from "next/image";

const tags = {
  banner: {
    selfClosing: true,
    attributes: {
      text: { type: String },
      accentColor: { type: String },
      backgroundColor: { type: String },
      illustration: { type: String },
    },
    render: Banner,
  },
  homescreen: {
    selfClosing: true,
    render: HomeScreen,
  },
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: "note",
        matches: ["note", "warning"],
        errorLevel: "critical",
      },
    },
    render: Callout,
  },
  cta: {
    attributes: {
      title: { type: String },
      description: { type: String },
      url: { type: String },
    },
    render: CTA,
  },
  faq: {
    selfClosing: true,
    attributes: {
      question: { type: String },
      answer: { type: String },
    },
    render: FAQ,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = "", caption }) => (
      <figure>
        <div className="relative aspect-[3/2]">
          <Image
            data-full-screen={true}
            data-src={src}
            src={src}
            alt={alt || caption || ""}
            layout="fill"
            className="object-contain hover:cursor-zoom-in"
          />
        </div>
        <figcaption className="text-center">{caption}</figcaption>
      </figure>
    ),
  },
  "link-grid": {
    render: LinkGrid,
  },
  "link-grid-link": {
    selfClosing: true,
    render: LinkGrid.Link,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  video: {
    render: Video,
    description: "Show a video",
    attributes: {
      src: {
        type: String,
        description: "Video URL",
      },
    },
  },
};

export default tags;
