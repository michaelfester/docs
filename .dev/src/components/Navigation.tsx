import { EnhancedNavigation } from "@/types";
import classNames from "classnames";
import clsx from "clsx";
import { groupBy } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  navigation: EnhancedNavigation;
}

export function Navigation({ navigation, className }: Props) {
  let router = useRouter();
  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <ul className="space-y-10">
        {navigation.map(section => (
          <li key={section.title}>
            <header className="ml-2 text-lg font-bold leading-6 dark:text-white">
              {section.title}
            </header>

            <ul className="mt-2">
              {section.links.map(link => {
                const linkActive =
                  link.href === "/"
                    ? router.pathname === "/"
                    : router.pathname.startsWith(link.href);
                return (
                  <li key={link.href} className="relative">
                    <Link href={link.href}>
                      <a
                        className={clsx("block w-full rounded-lg p-2 text-md", {
                          "font-medium text-neutrals-light-15 dark:text-white":
                            router.pathname === link.href,
                          "text-neutrals-light-10 hover:bg-aqua-light dark:text-neutrals-light-4 dark:hover:bg-transparent":
                            router.pathname !== link.href,
                        })}
                      >
                        {link.title}
                      </a>
                    </Link>
                    {linkActive && link.links && link.links.length > 0 && (
                      <ul className="my-4 ml-[1.875rem]">
                        {Object.entries(groupBy(link.links, "section")).map(
                          ([subSection, subLinks]) => (
                            <div key={subSection}>
                              {subSection !== "undefined" ? (
                                <h3 className="uppercase dark:text-neutrals-light-8">
                                  {subSection}
                                </h3>
                              ) : null}

                              {subLinks.map(sublink => {
                                const sublinkActive =
                                  router.pathname === sublink.href;
                                return (
                                  <li className="relative" key={sublink.href}>
                                    <Link href={sublink.href}>
                                      <a
                                        className={classNames(
                                          "block w-full rounded-lg p-2 text-md text-neutrals-light-10 dark:text-neutrals-light-4 dark:hover:text-white",
                                          {
                                            "bg-aqua-light font-medium dark:bg-transparent":
                                              sublinkActive,
                                            "hover:bg-[#F8F8F8] dark:hover:bg-transparent":
                                              !sublinkActive,
                                          }
                                        )}
                                      >
                                        {sublink.title}
                                      </a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </div>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
