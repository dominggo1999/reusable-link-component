import * as React from "react";
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
} from "react-polymorphic-types";

export const HeadingDefaultElement = "h2";

// Component-specific props should be specified separately
export type HeadingOwnProps = {
  color?: string;
};

export type HeadingProps<
  T extends React.ElementType = typeof HeadingDefaultElement,
> = PolymorphicPropsWithRef<HeadingOwnProps, T>;

export const Heading: PolymorphicForwardRefExoticComponent<
  HeadingOwnProps,
  typeof HeadingDefaultElement
> = React.forwardRef(function Heading<
  T extends React.ElementType = typeof HeadingDefaultElement,
>(
  {
    as,
    color,
    style,
    ...restProps
  }: PolymorphicPropsWithoutRef<HeadingOwnProps, T>,
  ref: React.ForwardedRef<Element>,
) {
  const Element: React.ElementType = as || HeadingDefaultElement;
  return <Element ref={ref} style={{ color, ...style }} {...restProps} />;
});
