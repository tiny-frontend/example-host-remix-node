import { useState } from "react";
import * as React from "react";

import { StyledLink } from "~/components/styled-link";
import { ExampleTinyFrontendClient } from "~/exampleTinyFrontend/exampleTinyFrontend.client";
import { ExampleTinyFrontendServer } from "~/exampleTinyFrontend/exampleTinyFrontend.server";

export default function Ssr() {
  const ExampleTinyFrontend =
    ExampleTinyFrontendClient || ExampleTinyFrontendServer;

  const [counter, setCounter] = useState(0);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p>
          Below, inside the dashed box, is a tiny frontend loaded dynamically{" "}
          <strong>on SSR and client side</strong>.
        </p>
        <p>
          Try disabling JavaScript, and marvel as the tiny frontend still
          displays on page load ✨!
        </p>
      </div>
      <ExampleTinyFrontend name={"Remix"} onCounterChange={setCounter} />
      <p>
        You have pressed the button inside the tiny frontend{" "}
        <strong>{counter} times</strong>.
      </p>
      <StyledLink to={"/"} className="inline-block">
        ← Back to index
      </StyledLink>
    </div>
  );
}
