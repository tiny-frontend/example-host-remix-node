import { Link } from "@remix-run/react";
import { RemixLinkProps } from "@remix-run/react/components";
import React from "react";

export const StyledLink: React.FC<RemixLinkProps> = (props) => (
  <Link
    {...props}
    className={`border-b-2 border-b-primary-base hover:border-b-primary-light transition-all ${
      props.className ?? ""
    }`}
  />
);
