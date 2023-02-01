import { Fence } from "@/components/Fence";
import Image, { ImageProps } from "next/image";

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    attributes: {
      scope: {
        type: String,
        default: "col",
      },
    },
    render: props => <th {...props} />,
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
  image: {
    attributes: {
      src: { type: String },
    },
    render: (props: ImageProps) => (
      <div className="relative aspect-[3/2]">
        <Image
          {...props}
          data-full-screen={true}
          data-src={props.src}
          alt={props.alt || ""}
          layout="fill"
          className="object-contain hover:cursor-zoom-in"
        />
      </div>
    ),
  },
};

export default nodes;
