import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

type HeaderType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type VariantType = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
interface IHeaderProps {
  /* variant controls the size of the header */
  variant: VariantType;
  renderAs?: HeaderType;
  children: ReactNode;
}

type Variant = {
  renderAs: HeaderType;
  className: string;
};

const variants: Record<VariantType, Variant> = {
  "2xl": {
    renderAs: "h1",
    className: "font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
  },
  xl: {
    renderAs: "h2",
    className: "font-brand text-4xl sm:text-5xl lg:text-6xl",
  },
  lg: {
    renderAs: "h3",
    className: "font-brand text-3xl md:text-4xl lg:text-5xl",
  },
  md: { renderAs: "h4", className: "font-brand text-3xl lg:text-4xl" },
  sm: { renderAs: "h5", className: "font-brand text-2xl lg:text-3xl" },
  xs: { renderAs: "h6", className: "font-brand text-2xl" },
};

/**
 *
 * @param variant default render
 * 2xl -> h1;
 * xl -> h2;
 * lg -> h3;
 * md -> h4;
 * sm -> h5;
 * xs -> h6;
 * @param renderAs overwrites the defaults above
 * @returns HTML Header Element
 */
export function Header(
  props: IHeaderProps & HTMLAttributes<HTMLHeadingElement>
) {
  const { variant, renderAs, children, className, ...rest } = props;

  const renderProps = {
    elem: renderAs || variants[variant].renderAs,
  };

  const classes = classNames(
    className as string,
    variants[variant].className,
    "font-bold"
  );

  return (
    <renderProps.elem {...rest} className={classes}>
      {children}
    </renderProps.elem>
  );
}

// DEPRECATED
const oldVariants = {
  h1: "font-brand text-5xl sm:text-6xl lg:text-7xl xl:text-8xl",
  h2: "font-brand text-5xl sm:text-6xl lg:text-7xl",
  h3: "font-brand text-4xl md:text-5xl lg:text-6xl",
  h4: "font-brand text-4xl lg:text-5xl",
  h5: "font-brand text-3xl lg:text-4xl",
  h6: "font-brand text-3xl",
};
