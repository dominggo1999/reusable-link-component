import React, { forwardRef } from "react";
import NextLink from "next/link";
import { UrlObject } from "url";

interface LinkProps {
  href: string | UrlObject;
  children: React.ReactNode;
  external?: boolean;
}

const Link: React.FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { href, children, external = false, ...otherProps } = props;
    if (typeof window !== "undefined" && window.__NEXT_DATA__ && !external) {
      return (
        <NextLink ref={ref} href={href} {...otherProps}>
          {children}
        </NextLink>
      );
    } else if (external) {
      return (
        <a
          href={typeof href === "string" ? href : "/"}
          {...otherProps}
          target="_blank"
          rel="noreferrer noopener"
          ref={ref}
        >
          {children}
        </a>
      );
    } else {
      return (
        <a
          href={typeof href === "string" ? href : "/"}
          {...otherProps}
          ref={ref}
        >
          {children}
        </a>
      );
    }
  },
);

export default Link;
