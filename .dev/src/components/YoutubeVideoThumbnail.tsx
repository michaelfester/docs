import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

function youTubeVideoIDFromLink(link: string): string | undefined {
  const match = link.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/
  );
  return match?.[1];
}

export function youTubeThumbnailFromLink(link: string): string | undefined {
  const id = youTubeVideoIDFromLink(link);
  return id === undefined
    ? undefined
    : `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

const StopIcon = () => (
  <svg
    className="transform scale-50 md:scale-75 lg:scale-100"
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="35"
      cy="35"
      r="28"
      fill="black"
      fillOpacity="0.6"
      className="transition origin-center transform group-hover:scale-110"
    />
    <rect x="25" y="25" width="20" height="20" rx="2" fill="white" />
  </svg>
);

// elements allow circle to scale and remain in viewport, to replicate,
// draw a rect 1.25 times the icon on figma and center the icon over the rect
// group icon and rect, copy as svg
const PlayIcons = {
  sm: () => (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="transition origin-center transform group-hover:scale-110"
        cx="35"
        cy="35"
        r="28"
        fill="black"
        fillOpacity="0.6"
      />
      <path
        d="M46.7828 31.4015C49.4588 32.9393 49.4588 36.7999 46.7828 38.3377L32.0836 46.7848C29.4169 48.3172 26.0906 46.3923 26.0906 43.3166L26.0906 26.4225C26.0906 23.3469 29.4169 21.422 32.0836 22.9544L46.7828 31.4015Z"
        fill="white"
      />
    </svg>
  ),
  md: () => (
    <svg
      width="125"
      height="125"
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform scale-75 lg:scale-100"
    >
      <circle
        className="transition origin-center transform group-hover:scale-110"
        cx="62"
        cy="62"
        r="50"
        fill="black"
        fillOpacity="0.6"
      />
      <path
        d="M84.7657 56.5649C88.7797 58.8716 88.7797 64.6626 84.7657 66.9693L55.0806 84.0282C51.0806 86.3269 46.0911 83.4394 46.0911 78.826L46.0911 44.7082C46.0911 40.0948 51.0806 37.2074 55.0806 39.506L84.7657 56.5649Z"
        fill="white"
      />
    </svg>
  ),
  lg: () => (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform scale-50 md:scale-75 lg:scale-100"
    >
      <circle
        className="transition origin-center transform group-hover:scale-110"
        cx="99"
        cy="100"
        r="80"
        fill="black"
        fillOpacity="0.6"
      />
      <path
        d="M134.821 90.9571C141.511 94.8016 141.511 104.453 134.821 108.298L88.5275 134.901C81.8609 138.732 73.5451 133.919 73.5451 126.23L73.5451 73.0244C73.5451 65.3354 81.8609 60.523 88.5276 64.354L134.821 90.9571Z"
        fill="white"
      />
    </svg>
  ),
};

interface IYoutubeVideoThumbnailProps {
  className?: string;
  thumbnail?: string;
  iconSize?: "sm" | "md" | "lg";
  youTubeLink: string;
  videoLoopSrc?: string;
  videoLoopClassName?: string;
  title?: string;
  icon?: "play" | "stop";
  aspect?: string;
  pulseIcon?: boolean;
}

interface IVideoModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // video src to create embed link
  src: string;
  thumbnail: string;
  pulseIcon?: boolean;
}

export function YoutubeVideoThumbnailDisplayOnly(
  props: Omit<IYoutubeVideoThumbnailProps, "youTubeLink"> & {
    onClick?(): void;
  }
) {
  const {
    className = "",
    iconSize = "sm",
    thumbnail,
    videoLoopSrc,
    videoLoopClassName,
    onClick,
    icon = "play",
    aspect = "aspect-video",
    pulseIcon = false,
  } = props;
  const PlayIcon = icon === "play" ? PlayIcons[iconSize] : StopIcon;
  const IconPulse = () => (
    <div
      className="absolute top-0 transform scale-75 bg-opacity-50 rounded-full animate-ping bg-neutrals-light-15"
      style={{
        width: iconSize === "sm" ? 70 : iconSize === "md" ? 125 : 200,
        height: iconSize === "sm" ? 70 : iconSize === "md" ? 125 : 200,
      }}
    />
  );

  return (
    <div className={classNames(aspect, className)}>
      <button
        onClick={onClick}
        className="absolute inset-0 grid w-full group place-content-center"
      >
        <div className="absolute inset-0">
          {videoLoopSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={thumbnail}
              className={classNames(
                "h-full w-full object-cover",
                videoLoopClassName
              )}
            >
              <source src={videoLoopSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="relative w-full h-full bg-neutrals-light-2">
              <Image
                className="object-cover"
                src={thumbnail ?? ""}
                alt=""
                layout="fill"
              />
            </div>
          )}
        </div>
        <div className="relative">
          <div className="relative z-20">
            <PlayIcon />
          </div>
          {pulseIcon ? (
            <div className="z-10 group-hover:opacity-0">
              <IconPulse />
            </div>
          ) : null}
        </div>
      </button>
    </div>
  );
}

export default function YoutubeVideoThumbnail(
  props: IYoutubeVideoThumbnailProps
) {
  const {
    youTubeLink,
    thumbnail = youTubeThumbnailFromLink(youTubeLink),
    pulseIcon = false,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <YoutubeVideoThumbnailDisplayOnly
        {...props}
        thumbnail={thumbnail}
        onClick={() => setIsOpen(true)}
      />
      <VideoModal
        {...{
          isOpen,
          setIsOpen,
          src: youTubeVideoIDFromLink(youTubeLink),
          thumbnail: thumbnail ?? "/images/cover-logo.png",
        }}
      />
    </>
  );
}

function VideoModal({ isOpen, setIsOpen, src, thumbnail }: IVideoModalProps) {
  return (
    <Transition show={isOpen}>
      <Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 z-50">
        <Transition.Child
          // as={Fragment}
          enter=" transition ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 cursor-pointer bg-neutrals-light-15 opacity-90" />
        </Transition.Child>

        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
          className="h-screen"
        >
          <div className="absolute w-11/12 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-3/4">
            <div className="bg-white aspect-video">
              <Image
                className="object-cover"
                layout="fill"
                src={thumbnail}
                alt=""
              />
              <iframe
                // width="1280"
                // height="720"
                className="absolute w-full h-full"
                src={`https://www.youtube.com/embed/${src}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute p-4 transition bg-white rounded-full z-60 right-4 top-4 text-neutrals-light-15 hover:bg-neutrals-light-4 hover:shadow-strong lg:right-8 lg:top-8 lg:p-6"
          >
            <span className="sr-only">Close Youtube video</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.41406"
                y="4.14209"
                width="20"
                height="2"
                transform="rotate(45 5.41406 4.14209)"
                fill="currentColor"
              />
              <rect
                x="4"
                y="18.1421"
                width="20"
                height="2"
                transform="rotate(-45 4 18.1421)"
                fill="currentColor"
              />
            </svg>
          </button>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
