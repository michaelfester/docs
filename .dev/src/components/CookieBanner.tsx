import { useCallback, useEffect, useState } from "react";
import * as analytics from "../analytics";
import classNames from "classnames";
import Link from "next/link";

const CookieBanner = () => {
  const [choice, setChoice] = useState<"accept" | "reject" | undefined>(
    undefined
  );
  const [hasMadeTrackingDecision, setHasMadeTrackingDecision] = useState(false);

  const acceptCookies = useCallback(() => {
    setChoice("accept");
    analytics.setAllowTracking(true);
  }, []);

  const rejectCookies = useCallback(() => {
    setChoice("reject");
    analytics.setAllowTracking(false);
  }, []);

  useEffect(() => {
    if (analytics.hasMadeTrackingDecision()) setHasMadeTrackingDecision(true);
  }, []);

  if (choice !== undefined || hasMadeTrackingDecision) {
    // Returning null caused rendering issues
    return <></>;
  }

  return (
    <div
      className={classNames(
        "fixed inset-x-0 bottom-0 z-40 text-sm md:pb-4 md:text-md",
        {}
      )}
    >
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-full p-4 space-y-2 bg-cool-gray-700 bg-neutrals-light-13 shadow-strong md:inline-flex md:w-auto md:flex-row md:space-y-0 md:space-x-4 md:rounded-2xl md:p-2">
          <p className="flex-1 text-cool-gray-200 md:ml-2">
            <span className="text-neutrals-light-4">
              We use cookies to improve our service.{" "}
              <Link href="/legal/privacy">
                <a className="underline">Learn more.</a>
              </Link>
            </span>
          </p>

          <div className="flex space-x-2">
            <button
              type="button"
              onClick={acceptCookies}
              className="flex items-center justify-center rounded-lg bg-white px-6 py-1.5 text-md font-semibold text-neutrals-light-15 shadow-light focus:outline-none"
            >
              OK
            </button>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-neutrals-light-10 px-3 py-1.5 text-md font-semibold text-white focus:outline-none"
              onClick={rejectCookies}
            >
              Don&apos;t Track Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
