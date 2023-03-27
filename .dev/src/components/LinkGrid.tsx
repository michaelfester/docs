import NextLink from "next/link";

export function LinkGrid({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  );
}

interface Props {
  title: string;
  href: string;
  frontmatter: {
    leadBackgroundColor?: string;
    leadGraphic?: string;
    description?: string;
  };
}

LinkGrid.Link = function Link(props: Props) {
  const { title, href, frontmatter } = props;

  return (
    <NextLink href={href}>
      <a
        // style={{ background: frontmatter.leadBackgroundColor || "#374664" }}
        className="group relative aspect-[2/1] h-full w-full rounded-2xl border border-neutrals-light-4"
      >
        <div className="p-8">
          <div className="w-max rounded-full bg-aqua p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12L16.5303 12.5303C16.8232 12.2374 16.8232 11.7626 16.5303 11.4697L16 12ZM2.5 12.75H15.5V11.25H2.5V12.75ZM11.5303 17.5303L16.5303 12.5303L15.4697 11.4697L10.4697 16.4697L11.5303 17.5303ZM16.5303 11.4697L11.5303 6.46967L10.4697 7.53033L15.4697 12.5303L16.5303 11.4697Z"
                fill="white"
              />
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold dark:text-white">{title}</p>
            <p className="mt-2 text-neutrals-light-10 dark:text-neutrals-light-4">
              {frontmatter.description}
            </p>
          </div>
        </div>
      </a>
    </NextLink>
  );
};
