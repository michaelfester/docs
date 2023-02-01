import * as React from "react";
import YoutubeVideoThumbnail, {
  youTubeThumbnailFromLink,
} from "./YoutubeVideoThumbnail";

export function Video({ src }) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <YoutubeVideoThumbnail
        youTubeLink={src}
        thumbnail={youTubeThumbnailFromLink(src)}
      />
    </div>
  );
}
