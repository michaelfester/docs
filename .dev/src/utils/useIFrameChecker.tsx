import { useEffect, useState } from "react";

export default function useIFrameChecker() {
  const [inIFrame, setInIFrame] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location !== window.parent.location) {
        // The page is in an iframe
        setInIFrame(true);
      } else {
        // The page is not in an iframe
        setInIFrame(false);
      }
    }
  }, []);

  return inIFrame;
}
