import React from "react";
import NextLink from "next/link";
import { UrlObject } from "url";

interface LinkProps {
  href: string | UrlObject;
  children: React.ReactNode;
  external?: boolean;
  [key: string]: any;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  external = false,
  ...props
}) => {
  if (typeof window !== "undefined" && window.__NEXT_DATA__ && !external) {
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    );
  } else if (external) {
    return (
      <a
        href={typeof href === "string" ? href : "/"}
        {...props}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  } else {
    return (
      <a href={typeof href === "string" ? href : "/"} {...props}>
        {children}
      </a>
    );
  }
};

export default Link;
