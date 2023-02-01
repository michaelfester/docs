import classNames from "classnames";
import { FormEventHandler, useEffect, useState } from "react";
import GlideButton from "./GlideButton";

interface Props {
  pageTitle: string;
  pageSlug: string;
}

export default function FeedbackForm(props: Props) {
  const { pageSlug, pageTitle } = props;
  const [satisfied, setSatisfied] = useState<boolean>(null);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setSatisfied(null);
    setSubmitted(false);
    setBusy(false);
  }, [pageSlug]);

  const submitForm: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    setBusy(true);

    const target = event.target as typeof event.target & {
      content: { value: string };
    };

    try {
      await fetch("/docs/api/feedback", {
        method: "POST",
        body: JSON.stringify({
          pageSlug,
          pageTitle,
          satisfied,
          content: target.content.value,
        }),
      });

      setSubmitted(true);
      setBusy(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  if (satisfied === null) {
    return (
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <header className="dark:text-white">Was this helpful?</header>
        <div className="flex mt-4 space-x-2 sm:ml-5 sm:mt-0">
          <GlideButton
            variant="tertiary-line"
            size="lg"
            onClick={() => setSatisfied(true)}
          >
            Yes
          </GlideButton>
          <GlideButton
            variant="tertiary-line"
            size="lg"
            onClick={() => setSatisfied(false)}
          >
            No
          </GlideButton>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <header className="text-lg font-bold dark:text-white">
        Thanks for your feedback!
      </header>
    );
  }

  return (
    <form onSubmit={submitForm} id="feedback_form">
      <label htmlFor="content" className="text-lg font-bold dark:text-white">
        {satisfied ? "What was helpful?" : "What can we improve?"}
      </label>
      <p className="mt-2">
        {satisfied ? null : (
          <>
            If you have specific questions,{" "}
            <a
              href="https://community.glideapps.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-aqua"
            >
              ask the community!
            </a>
          </>
        )}
      </p>
      <textarea
        name="content"
        id="content"
        className="block w-full mt-6 h-36 rounded-xl border-neutrals-light-4 dark:bg-transparent dark:text-white"
        placeholder="Leave your feedback here"
      ></textarea>
      <GlideButton
        variant="primary"
        size="lg"
        className={classNames("mt-4 w-full sm:w-auto", {
          "flex cursor-not-allowed items-center bg-opacity-90": busy,
        })}
        as="button"
        disabled={busy}
      >
        {busy && (
          <svg
            className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {busy ? "Submitting" : "Submit Form"}
      </GlideButton>
    </form>
  );
}
