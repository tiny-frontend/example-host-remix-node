import {
  ExampleTinyFrontendType,
  loadExampleTinyFrontendClient,
} from "@tiny-frontend/example-tiny-frontend-contract";
import { useEffect, useState } from "react";
import * as React from "react";

import { DescriptionBlock } from "~/components/description-block";
import { StyledLink } from "~/components/styled-link";

export default function ClientSideOnly() {
  const [ExampleTinyFrontend, setExampleTinyFrontend] =
    useState<ExampleTinyFrontendType>();

  const [counter, setCounter] = useState(0);

  const loadTinyFrontend = async () => {
    const ExampleTinyFrontend = await loadExampleTinyFrontendClient(
      "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api"
    );

    setExampleTinyFrontend(() => ExampleTinyFrontend);
  };

  useEffect(() => {
    loadTinyFrontend();
  }, []);

  return (
    <div className="space-y-4 md:space-y-6">
      <DescriptionBlock>
        <p>
          Below, inside the dashed box, is a tiny frontend loaded dynamically{" "}
          <strong className="text-primary-base">client side only</strong>.
        </p>
        <p>
          On page reload you might notice a quick flickering while the tiny
          frontend loads. If you disable JavaScript you&apos;ll only see a{" "}
          <strong>Loading...</strong> label.
        </p>
      </DescriptionBlock>
      {ExampleTinyFrontend ? (
        <ExampleTinyFrontend name="Remix" onCounterChange={setCounter} />
      ) : (
        <strong>Loading...</strong>
      )}
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
