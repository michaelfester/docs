import { Fragment, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { useRouter } from "next/router";

import algoliasearch from "algoliasearch/lite";
import { IndexedDocument } from "@/types";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY
);

interface Props {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}

// algolia doesn't export its types
type Hits = Awaited<
  ReturnType<typeof client.search<IndexedDocument>>
>["results"][0]["hits"];
type Hit = Hits[0];

const SearchResult = ({ link }: { link: Hit }) => {
  const { _highlightResult: hl } = link;
  return (
    <Combobox.Option
      value={link}
      className={({ active }) =>
        classNames("cursor-default select-none truncate px-4 py-2", {
          "bg-sky-500 text-white": active,
        })
      }
    >
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center text-gray-500 bg-gray-100 rounded-lg">
          <DocumentTextIcon className="w-12 h-12 p-2" aria-hidden="true" />
        </div>
        <div className="mt-2">
          <div
            className="text-lg leading-none"
            dangerouslySetInnerHTML={{ __html: hl?.title?.value ?? link.title }}
          ></div>
          <div
            className="text-base opacity-80"
            dangerouslySetInnerHTML={{
              __html: hl?.description?.value ?? link.description ?? link.route,
            }}
          ></div>
        </div>
      </div>
    </Combobox.Option>
  );
};

export default function CommandPalette(props: Props) {
  const { isOpen, setIsOpen } = props;
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<Hits>([]);

  const router = useRouter();

  function openLink(link: IndexedDocument) {
    setIsOpen(false);

    router.push(link.route);
  }

  useEffect(() => {
    if (query === "") {
      return setResults([]);
    }

    client
      .search<IndexedDocument>([
        { indexName: "docs", query, params: { hitsPerPage: 10 } },
      ])
      .then(({ results: [results] }) => {
        setResults(results.hits);
      });
  }, [query]);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25 dark:bg-neutrals-light-15 dark:bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox value={undefined} onChange={openLink}>
                <div className="relative flex flex-col items-center">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3 left-3.5 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full pl-12 pr-4 text-xl text-gray-800 placeholder-gray-400 bg-transparent border-0 focus:ring-0"
                    placeholder="Search docs"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                  />
                </div>

                {results.length > 0 && (
                  <Combobox.Options
                    static
                    className="py-2 overflow-y-auto text-sm text-gray-800 max-h-80 scroll-py-2"
                  >
                    {results.map(link => (
                      <SearchResult key={link.route} link={link} />
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && results.length === 0 && (
                  <p className="p-4 text-sm text-gray-500">No docs found.</p>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
          <style jsx global>{`
            em {
              font-style: normal;
              font-weight: 500;
            }
          `}</style>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
