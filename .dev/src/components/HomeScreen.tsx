import { Header } from "./Typography";
import Icon, { iconMap } from "../lib/icons/stroke";
import Link from "next/link";
import { ReactNode } from "react";
import classNames from "classnames";
import Image from "next/image";

export default function HomeScreen() {
  return (
    <div>
      <div>
        <Header variant="xl" className="my-0">
          Welcome
        </Header>
        <p className="my-0 mt-5 text-lg text-neutrals-opaque-10">
          Welcome to Glide Docs, a steadily growing collection of articles and
          videos on how to use Glide. We can’t wait to see what you build!
        </p>
      </div>

      <section className="mt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {largeCards.map(c => (
            <CardLink href={c.href} key={c.header}>
              <div
                className={classNames(
                  "group relative flex aspect-[2/1] w-full flex-col justify-between rounded-md border border-transparent px-8 pt-8 pb-6 transition",
                  c.borderColor,
                  c.bgColor
                )}
              >
                <div
                  className={classNames(
                    "grid h-12 w-12 place-content-center rounded-md text-white",
                    c.iconBgColor
                  )}
                >
                  <Icon name={c.icon} />
                </div>
                <div>
                  <Header variant="sm" className="mb-0 text-black">
                    {c.header}
                  </Header>
                  <p className="my-0 mt-2 text-sm font-normal text-neutrals-opaque-9">
                    {c.body}
                  </p>
                </div>
                {c.background ? (
                  <Image
                    src={c.background}
                    alt=""
                    layout="fill"
                    className="transition duration-500 group-hover:scale-[1.025]"
                  />
                ) : null}
              </div>
            </CardLink>
          ))}
        </div>
      </section>

      <section>
        <Header variant="lg" className="text-center">
          Get Building
        </Header>
        <div>
          <div className="grid gap-6 lg:grid-cols-2">
            {smallCards.map(c => (
              <CardLink href={c.href} key={c.header}>
                <div className="flex h-full items-center rounded-xl border border-neutrals-opaque-3 px-6 py-8 transition hover:bg-neutrals-opaque-2 dark:border-alpha-dark-3 dark:hover:border-neutrals-opaque-6 dark:hover:bg-transparent">
                  <div
                    className={classNames(
                      "grid h-12 w-12 flex-shrink-0 place-content-center rounded-md",
                      c.iconColor,
                      c.iconBgColor
                    )}
                  >
                    <Icon name={c.icon} />
                  </div>
                  <div className="ml-4">
                    <p className="my-0 font-semibold text-black dark:text-white">
                      {c.header}
                    </p>
                    <p className="my-0 text-sm font-normal text-neutrals-opaque-9">
                      {c.body}
                    </p>
                  </div>
                </div>
              </CardLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface Card {
  icon: keyof typeof iconMap;
  header: string;
  body: string;
  href: string;
  borderColor?: string;
  iconBgColor?: string;
  bgColor?: string;
  iconColor?: string;
  background?: string;
}

const largeCards: Card[] = [
  {
    icon: "st-action-bolt",
    header: "Quick Start Guide",
    body: "Jump right in and get started",
    href: "/quick-start",
    borderColor: "hover:border-teal-5",
    bgColor: "bg-teal-2",
    iconBgColor: "bg-teal-7",
    background: "/docs/home/card-backgrounds/quick-start.svg",
  },
  {
    icon: "st-copy",
    header: "Templates",
    body: "Grab a template and customize",
    href: "https://www.glideapps.com/templates",
    borderColor: "hover:border-orange-5",
    bgColor: "bg-orange-2",
    iconBgColor: "bg-orange-7",
    background: "/docs/home/card-backgrounds/templates.svg",
  },
  {
    icon: "st-check-task",
    header: "Courses",
    body: "Take a deep dive into Glide",
    href: "https://learn.glideapps.com",
    borderColor: "hover:border-purple-6",
    bgColor: "bg-purple-2",
    iconBgColor: "bg-purple-7",
    background: "/docs/home/card-backgrounds/courses.svg",
  },
  {
    icon: "st-users",
    header: "Community",
    body: "Ask a question",
    href: "https://community.glideapps.com/",
    borderColor: "hover:border-pink-5",
    bgColor: "bg-pink-2",
    iconBgColor: "bg-pink-7",
    background: "/docs/home/card-backgrounds/community.svg",
  },
];

const smallCards: Card[] = [
  {
    icon: "st-data",
    header: "Add your data",
    body: "Sync from Airtable, Sheets, Excel, or use our editor",
    href: "/reference/data-sources",
    iconColor: "text-teal-9",
    iconBgColor: "bg-teal-2",
  },
  {
    icon: "st-components",
    header: "Choose components",
    body: "Transform your data into the app you need",
    href: "/components",
    iconColor: "text-orange-9",
    iconBgColor: "bg-orange-2",
  },
  {
    icon: "st-action-bolt",
    header: "Create actions",
    body: "Make your data come to life and work for you",
    href: "/actions",
    iconColor: "text-lime-9",
    iconBgColor: "bg-lime-2",
  },
  {
    icon: "st-users",
    header: "Invite users",
    body: "Add your team, set permissions, and invite users",
    href: "/users",
    iconColor: "text-pink-9",
    iconBgColor: "bg-pink-2",
  },
  {
    icon: "st-share-1",
    header: "Publish your app",
    body: "Go live and put your app to work",
    href: "/share",
    iconColor: "text-purple-9",
    iconBgColor: "bg-purple-2",
  },
  {
    icon: "st-rocket",
    header: "Upgrade",
    body: "Add more power to Glide",
    href: "https://go.glideapps.com/buy/pro",
    iconColor: "text-beige-9",
    iconBgColor: "bg-beige-2",
  },
];

const CardLink = (props: { href: string; children: ReactNode }) => {
  const { href, children } = props;

  if (href.startsWith("https")) {
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>;
  }

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
