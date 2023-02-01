import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function FullScreenImages() {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>(
      "img[data-full-screen='true']"
    );

    images.forEach(
      (img, index) =>
        (img.onclick = () => {
          setCurrentIndex(index);
          setIsOpen(true);
        })
    );

    setImageSrcs(Array.from(images).map(img => img.dataset.src));
  }, []);

  const prevImage = useCallback(() => {
    if (currentIndex === 0) {
      setCurrentIndex(imageSrcs.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex, imageSrcs.length]);

  const nextImage = useCallback(() => {
    if (currentIndex === imageSrcs.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, imageSrcs.length]);

  useEffect(() => {
    const keyDownHandler = e => {
      if (isOpen) {
        console.log(e.code);
        if (e.code === "ArrowLeft") prevImage();
        if (e.code === "ArrowRight") nextImage();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [isOpen, nextImage, prevImage]);

  if (imageSrcs.length === 0) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-neutrals-light-15/30"
        aria-hidden="true"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-3/4 rounded">
          {/* Navigation */}
          <div className="hidden lg:block">
            <div className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white">
              <button
                onClick={prevImage}
                className="text-xl p-4 focus:outline-none"
              >
                &larr;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white">
              <button
                onKeyDown={e => {
                  e.code;
                }}
                onClick={nextImage}
                className="text-xl p-4 focus:outline-none"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[3/2]">
            <Image
              layout="fill"
              src={imageSrcs[currentIndex]}
              className="object-contain"
              alt=""
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
