import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Markdown from "react-markdown";

interface Props {
  question: string;
  answer: string;
}

export default function FAQ(props: Props) {
  const { question, answer } = props;

  return (
    <Disclosure as="div" key={question} className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <Markdown className="my-[-1.33em] text-base font-semibold leading-7">
                {question}
              </Markdown>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <Markdown className="text-base leading-7 text-gray-600 dark:text-gray-300">
              {answer}
            </Markdown>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
