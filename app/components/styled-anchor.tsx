import React from "react";

export const StyledAnchor: React.FC<JSX.IntrinsicElements["a"]> = ({
  children,
  ...props
}) => (
  <a
    {...props}
    className={`border-b-2 border-b-primary-base hover:border-b-primary-light transition-all ${
      props.className ?? ""
    }`}
  >
    {children}
  </a>
);
