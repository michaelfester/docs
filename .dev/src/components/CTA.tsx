import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
}

const Wrapper: React.FC<{ url: string; children: ReactNode }> = ({
  url,
  children,
}) => {
  if (url.startsWith("/")) {
    return (
      <Link href={url.replace("/docs", "")}>
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default function CTA(props: Props) {
  const { title, description, url } = props;
  return (
    <div className="p-8 border rounded-2xl border-neutrals-light-4">
      <Wrapper url={url}>
        <div className="p-2 rounded-full w-max bg-aqua">
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
        <p className="my-0 mt-4 text-lg font-bold text-neutrals-light-15 dark:text-white">
          {title}
        </p>
        <p className="my-0 mt-2 font-normal text-md text-neutrals-light-10 dark:text-neutrals-light-4">
          {description}
        </p>
      </Wrapper>
    </div>
  );
}
