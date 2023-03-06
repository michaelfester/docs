import { Combobox } from "@headlessui/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

import { IndexedDocument } from "@/types";
import algoliasearch from "algoliasearch/lite";
import { Header } from "./Typography";

interface Props {}

export function Search() {
  let [isOpen, setIsOpen] = useState(false);
  let [modifierKey, setModifierKey] = useState("");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>();

  const [results, setResults] = useState<Hits>([]);

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q as string);
      inputRef.current.value = router.query.q as string;
      inputRef.current.focus();
    }

    inputRef.current.onblur = e => {
      // this event listener stopped search results from routing to their respective urls
      // so any time the related target is a combobox.option we escape it
      if ((e.relatedTarget as Element)?.getAttribute("role") === "option") {
        return;
      }

      setQuery("");
      inputRef.current.value = "";
    };
  }, [router.query.q]);

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

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl "
    );
  }, []);

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);

        inputRef.current.focus();
      }
    }

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen]);

  return (
    <Combobox
      value={undefined}
      onChange={link => {
        router.push(link.route);
        setIsOpen(false);
        setQuery("");
      }}
    >
      <div className="group relative lg:w-96 xl:w-[544px]">
        <svg
          aria-hidden="true"
          className="absolute left-2 top-1/2 h-5 w-5 flex-none -translate-y-1/2 transform fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
        >
          <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
        </svg>
        <Combobox.Input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          ref={inputRef}
          className="w-full rounded-lg border-none bg-neutrals-opaque-2 pl-8 pr-12 ring-1 ring-neutrals-opaque-3 focus:outline-none dark:bg-alpha-dark-3 dark:text-white"
          placeholder="Search docs"
          autoComplete="off"
        />
        {modifierKey && query === "" ? (
          <kbd className="absolute right-2 top-1/2 ml-auto hidden -translate-y-1/2 transform font-medium text-slate-400 dark:text-slate-500 md:block">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        ) : null}

        {query !== "" ? (
          <Combobox.Options
            static
            className="absolute top-12 max-h-80 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
          >
            <div className="bg-white shadow-lg dark:bg-neutrals-light-15/95">
              <div className="w-96 xl:w-[544px]">
                {results.length > 0 && (
                  <>
                    {results.map(link => (
                      <SearchResult key={link.route} link={link} />
                    ))}
                  </>
                )}

                {query !== "" && results.length === 0 && (
                  <p className="p-4 text-sm text-gray-500">No docs found.</p>
                )}
              </div>
            </div>
          </Combobox.Options>
        ) : null}
      </div>
    </Combobox>
  );
}

const client = algoliasearch(
  process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY
);

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
        classNames("cursor-pointer select-none truncate px-4 py-2", {
          "bg-aqua text-white": active,
        })
      }
    >
      <div className="flex items-center space-x-3 truncate">
        <div className="flex items-center justify-center rounded-lg bg-gray-100 text-gray-500">
          <DocumentTextIcon className="h-12 w-12 p-2" aria-hidden="true" />
        </div>
        <div className="mt-2">
          <header className="text-lg font-semibold dark:text-white">
            {link.title}
          </header>
          <p className="dark:text-white/90">{link.description}</p>
        </div>
      </div>
    </Combobox.Option>
  );
};
