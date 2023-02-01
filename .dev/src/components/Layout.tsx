import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Navigation } from "@/components/Navigation";
import { Prose } from "@/components/Prose";
import { Search } from "@/components/Search";
import type { EnhancedNavigation, EnhancedNavigationNode } from "@/types";
import { LinkGrid } from "./LinkGrid";

interface HeaderProps {
  navigation: EnhancedNavigation;
}

import { getAllLinks } from "@/enhancement";
import classNames from "classnames";
import FeedbackForm from "./FeedbackForm";
import FullScreenImages from "./FullScreenImages";
import GlideButton from "./GlideButton";
import Metadata from "./Metadata";
import { Video } from "./Video";
import CookieBanner from "./CookieBanner";
import { TemplateID, templateImageURLUnsigned } from "@/cover_images";
import { track } from "@/analytics";
import { LinkIcon } from "@heroicons/react/24/outline";
import useIFrameChecker from "@/utils/useIFrameChecker";
import { timeAgo } from "@/timeAgo";

const OpenGlideButton = () => (
  <GlideButton
    variant="primary"
    size="md"
    as="a"
    onClick={() => track("navigation", "open glide")}
    href="https://go.glideapps.com"
  >
    <svg
      className="mr-2"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8.8L8.8 0V4.32C8.8 6.79424 6.79424 8.8 4.32 8.8H0Z"
        fill="white"
      />
      <path
        d="M7.2 11.68C7.2 9.20576 9.20576 7.2 11.68 7.2H16L7.2 16V11.68Z"
        fill="white"
      />
    </svg>
    Open Glide
  </GlideButton>
);

function Header({ navigation }: HeaderProps) {
  let [isScrolled, setIsScrolled] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "sticky top-0 z-50 h-[84px]  border-b border-neutrals-light-4 bg-white px-4 py-5 transition duration-500 sm:px-6 lg:px-8",
        {
          "bg-opacity-75 backdrop-blur dark:bg-neutrals-light-15/95 dark:[@supports(backdrop-filter:blur(0))]:bg-neutrals-light-15/75":
            isScrolled,
          "dark:bg-transparent": !isScrolled,
        }
      )}
    >
      <header className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-7">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative hidden mr-6 md:block lg:hidden"
        >
          <span className="sr-only">Open navigation</span>
          <svg
            aria-hidden="true"
            className="w-6 h-6 stroke-slate-500"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <div className="relative flex items-center flex-grow basis-0">
          <Link href="/">
            <a className="block w-auto">
              <span className="sr-only">Home page</span>
              <Logo />
            </a>
          </Link>
        </div>

        <div className="mr-6 lg:hidden">
          <MobileNavigation
            navigation={navigation}
            {...{ isOpen, setIsOpen }}
          />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative md:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6 stroke-slate-500"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        {/* TODO: add search icon on mobile and include search experience */}
        <div className="hidden mr-6 -my-5 sm:mr-8 md:mr-0 md:block">
          <Search />
        </div>

        <div className="relative justify-end hidden space-x-6 basis-0 sm:space-x-8 md:flex md:flex-grow">
          <OpenGlideButton />
        </div>
      </header>
    </div>
  );
}

interface Props {
  children: any;
  navigation: EnhancedNavigation;
  link: EnhancedNavigationNode;
  tableOfContents: any;
}

function Layout({ children, navigation, tableOfContents }: Props) {
  const router = useRouter();
  const isInIFrame = useIFrameChecker();

  const allLinks = getAllLinks(navigation);
  const link =
    allLinks.find(link => link.href === router.pathname) ?? allLinks[0];

  if (link === undefined) {
    throw new Error(`${router.pathname} must be added to navigation`);
  }

  const linkIndex = allLinks.findIndex(l => l.href === link.href);
  const previousPage = allLinks[linkIndex - 1];
  const nextPage = allLinks[linkIndex + 1];

  const title = link.frontmatter?.title ?? link.title;
  const description: string | undefined = link.frontmatter?.description;
  const video: string | undefined = link.frontmatter?.video;
  const coverImage = templateImageURLUnsigned(TemplateID.DocsCover, { title });

  function copyPermalink() {
    let permalink = `${location.protocol}//${location.host}/docs`;
    const { slug } = link.frontmatter ?? {};
    if (slug !== undefined) {
      permalink += `/${slug}`;
    } else {
      permalink += link.href;
    }
    navigator.clipboard.writeText(permalink);
  }

  const section = navigation.find(section =>
    section.links.find(
      l => l.href === link.href || l.links?.some(sl => sl.href === link.href)
    )
  );

  const hasBanner = section.title === "Start Here";

  const mainSectionLink = section.links.find(l =>
    l.links?.some(sl => sl.href === link.href)
  );

  // const isTopLevelLink = section.links.some((l) => l.href === router.pathname);
  // const siblings = isTopLevelLink
  //   ? section.links
  //   : section.links.find((l) =>
  //       l.links?.find((sublink) => sublink.href === router.pathname)
  //     )?.links

  let currentTOCSection = useTableOfContents(tableOfContents);

  function isActive(section) {
    if (section.id === currentTOCSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }

  return (
    <div className="bg-white dark:bg-neutrals-light-15">
      <Metadata {...{ title, description, image: coverImage, video }} />
      {isInIFrame ? null : <Header navigation={navigation} />}
      <CookieBanner />

      <div
        className={classNames(
          "relative mx-auto flex justify-center px-4 sm:px-7",
          {
            "max-w-screen-xl": !isInIFrame,
          }
        )}
      >
        <div className="hidden -ml-1 lg:relative lg:block lg:flex-none">
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-10 pl-0.5">
            <div className="absolute bottom-0 right-0 hidden w-px h-12 top-16 bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 hidden w-px top-28 bg-slate-800 dark:block" />
            <Navigation
              navigation={navigation}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>

        <div
          className={classNames(
            "min-w-0 flex-auto px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16",
            {
              "max-w-2xl": !isInIFrame,
            }
          )}
        >
          <div
            className={classNames({
              hidden: hasBanner,
            })}
          >
            {(title || section) && (
              <header
                className={classNames("mb-9 space-y-1", {
                  hidden: isInIFrame,
                })}
              >
                {section && (
                  <div className="flex items-center">
                    <p className="text-base font-medium font-display text-sky-500">
                      {section.title}
                      {mainSectionLink && <> / {mainSectionLink.title}</>}
                    </p>
                    <button
                      className="p-2 focus-visible:outline-none"
                      onClick={copyPermalink}
                    >
                      <LinkIcon className="w-4 h-4 dark:text-white" />
                    </button>
                  </div>
                )}
                {title && (
                  <h1 className="text-4xl tracking-tight font-display text-slate-900 dark:text-white">
                    {title}
                  </h1>
                )}
                {description && (
                  <h2 className="font-sans text-2xl text-slate-500 dark:text-gray-100">
                    {description}
                  </h2>
                )}
              </header>
            )}
          </div>

          {link.frontmatter.video ? (
            <div className="mb-8">
              <Video src={link.frontmatter.video} />
            </div>
          ) : null}

          <article>
            <Prose className="">{children}</Prose>

            {/* Here we can put sublinks if we have them */}
            {link.links && (
              <LinkGrid>
                {link.links.map(l => (
                  <LinkGrid.Link
                    key={l.href}
                    href={l.href}
                    title={l.title}
                    frontmatter={l.frontmatter}
                  />
                ))}
              </LinkGrid>
            )}

            {link.modified !== "" && (
              <div className="mt-6 text-sm font-medium text-slate-500 dark:text-gray-100">
                Updated {timeAgo.format(new Date(link.modified))}
              </div>
            )}
          </article>
          <dl className="flex pt-6 mt-12 border-t border-slate-200 dark:border-slate-800">
            {previousPage && (
              <div>
                <dt className="text-sm font-medium font-display text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link href={previousPage.href}>
                    <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      &larr; {previousPage.title}
                    </a>
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="text-sm font-medium font-display text-slate-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link href={nextPage.href}>
                    <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      {nextPage.title} &rarr;
                    </a>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
          <div className="py-8">
            <FeedbackForm pageTitle={title} pageSlug={link.href} />
          </div>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="text-sm font-medium font-display text-slate-900 dark:text-white"
                >
                  On this page
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map(section => (
                    <li key={section.id}>
                      <h3>
                        <Link href={`#${section.id}`}>
                          <a
                            className={clsx(
                              isActive(section)
                                ? "text-aqua"
                                : "text-neutrals-light-10 transition hover:text-neutrals-light-15"
                            )}
                          >
                            {section.title}
                          </a>
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ul className="pl-5 mt-2 space-y-1 text-slate-500 dark:text-slate-400">
                          {section.children.map(subSection => (
                            <li
                              key={subSection.id}
                              className={classNames(
                                "rounded-lg px-2.5 py-2",
                                isActive(subSection)
                                  ? "text-aqua"
                                  : "text-neutrals-light-10 transition hover:bg-[#F8F8F8]"
                              )}
                            >
                              <Link href={`#${subSection.id}`}>
                                <a className="block">{subSection.title}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </nav>
        </div>
      </div>

      <FullScreenImages />
    </div>
  );
}

export default Layout;

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);

  let getHeadings = useCallback(() => {
    function* traverse(node) {
      if (Array.isArray(node)) {
        for (let child of node) {
          yield* traverse(child);
        }
      } else {
        let el = document.getElementById(node.id);
        if (!el) return;

        let style = window.getComputedStyle(el);
        let scrollMt = parseFloat(style.scrollMarginTop);

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        yield { id: node.id, top };

        for (let child of node.children ?? []) {
          yield* traverse(child);
        }
      }
    }

    return Array.from(traverse(tableOfContents));
  }, [tableOfContents]);

  useEffect(() => {
    let headings = getHeadings() as { id: any; top: number }[];
    if (tableOfContents.length === 0 || headings.length === 0) return;
    function onScroll() {
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top);

      let top = window.pageYOffset;
      let current = sortedHeadings[0].id;
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll, {
        capture: true,
        passive: true,
      } as any);
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
}
