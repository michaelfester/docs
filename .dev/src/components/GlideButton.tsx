import classNames from "classnames";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  DOMAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

interface IBaseButtonProps {
  variant: keyof typeof classes.variant;
  size: keyof typeof classes.size;
  children: ReactNode;
}

const classes = {
  size: {
    md: "font-semibold text-md rounded-lg px-4 h-10",
    lg: "text-md lg:text-btn rounded-lg h-11 px-5 font-semibold",
    xl: "text-btn h-12 px-5 rounded-lg font-semibold",
    "2xl": "text-lg leading-none px-7 h-[60px] rounded-lg font-semibold",
  },
  variant: {
    primary:
      "bg-aqua hover:bg-aqua-low text-white shadow-button focus-visible:shadow-button-focus-aqua",
    secondary:
      "bg-aqua-pastel text-aqua-low shadow-button focus-visible:shadow-button-focus-aqua hover:bg-neutrals-light-2",
    "tertiary-line":
      "box-border border border-neutrals-light-4 bg-white hover:bg-neutrals-light-2 focus-visible:shadow-button-focus-gray",
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
  if (props.as === "a") {
    const { size, variant, children, className, as, href, ...rest } = props;

    if (href.startsWith("/")) {
      return (
        <Link href={href}>
          <a
            {...rest}
            className={classNames(
              className as string,
              classes.size[size],
              classes.variant[variant],
              "inline-flex items-center justify-center whitespace-nowrap transition"
            )}
          >
            {children}
          </a>
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
          classes.variant[variant],
          "inline-flex items-center justify-center whitespace-nowrap transition"
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
          classes.variant[variant],
          "inline-flex items-center justify-center whitespace-nowrap font-bold transition focus:outline-none"
        )}
      >
        {children}
      </button>
    );
  }
}
