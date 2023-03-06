import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  DOMAttributes,
  HTMLAttributes,
  ReactNode,
  useCallback,
} from "react";

interface IBaseButtonProps {
  variant: keyof typeof classes.variant;
  size: keyof typeof classes.size;
  children: ReactNode;
  darkMode?: boolean;
}

const classes = {
  size: {
    md: "font-semibold text-sm px-4 h-10",
    lg: "text-md lg:text-btn h-11 px-5 font-semibold",
    xl: "text-btn h-12 px-5 font-semibold",
    "2xl": "text-lg leading-none px-7 h-[60px] font-semibold",
  },
  variant: {
    primary:
      "bg-teal-8 hover:bg-teal-9 text-white focus-visible:shadow-button-focus-aqua",
    secondary:
      "bg-alpha-light-2 hover:bg-alpha-light-3 text-neutrals-opaque-13 focus-visible:shadow-button-focus-gray",
    "tertiary-line":
      "box-border border border-alpha-light-2 text-neutrals-opaque-13 bg-white hover:bg-alpha-light-2 hover:border-alpha-light-3 focus-visible:shadow-button-focus-gray",
    "tertiary-empty":
      "bg-white hover:bg-neutrals-opaque-2 text-neutrals-opaque-13",
  },
  darkMode: {
    primary:
      "bg-teal-8 hover:bg-teal-9 text-white focus-visible:shadow-button-focus-aqua",
    secondary:
      "text-white bg-alpha-dark-3 hover:bg-alpha-dark-4  focus-visible:shadow-button-focus-gray",
    "tertiary-line":
      "text-white border border-alpha-dark-5 hover:border-neutrals-opaque-3 focus-visible:shadow-button-focus-gray",
    "tertiary-empty": "",
  },
  UGvariant: {
    primary:
      "bg-[#0A4C55] hover:bg-[#073940] text-white focus-visible:shadow-button-focus-aqua",
    secondary:
      "bg-neutrals-light-3 text-neutrals-light-15 focus-visible:shadow-button-focus-gray hover:bg-neutrals-light-4 focus:bg-neutrals-light-3",
    "tertiary-line":
      "box-border border bg-white hover:bg-[#F4F4F4] border-[#F4F4F4] focus-visible:shadow-button-focus-gray",
    "tertiary-empty": "bg-white",
  },
};

type ButtonProps = IBaseButtonProps & {
  as?: "button";
} & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

type ButtonLinkProps = IBaseButtonProps & {
  as: "a";
  href: string;
} & DOMAttributes<HTMLAnchorElement> &
  HTMLAttributes<HTMLAnchorElement>;

export default function GlideButton(props: ButtonProps | ButtonLinkProps) {
  const { pathname } = useRouter();
  const getButtonClasses = useCallback(() => {
    const UG_Routes = [
      "/customers",
      "/customers/[path]",
      "/customers/[path]/preview",
    ];
    if (UG_Routes.includes(pathname)) return classes.UGvariant[props.variant];
    return props.darkMode
      ? classes.darkMode[props.variant]
      : classes.variant[props.variant];
  }, [pathname, props.darkMode, props.variant]);

  const buttonClasses = getButtonClasses();

  if (props.as === "a") {
    const { size, variant, children, className, as, href, ...rest } = props;

    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          {...rest}
          className={classNames(
            className as string,
            classes.size[size],
            buttonClasses,
            "inline-flex items-center justify-center whitespace-nowrap rounded-full transition"
          )}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(
          className as string,
          classes.size[size],
          buttonClasses,
          "inline-flex items-center justify-center whitespace-nowrap rounded-full transition"
        )}
      >
        {children}
      </a>
    );
  } else {
    const { size, variant, children, className, ...rest } = props;

    return (
      <button
        {...rest}
        className={classNames(
          className as string,
          classes.size[size],
          buttonClasses,
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition focus:outline-none"
        )}
      >
        {children}
      </button>
    );
  }
}
