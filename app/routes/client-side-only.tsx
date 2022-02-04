import { loadTinyFrontendClient } from "@tiny-frontend/client";
import { useEffect, useState } from "react";
import * as React from "react";

import { ExampleTinyFrontend } from "~/exampleTinyFrontend/types";

export default function ClientSideOnly() {
  const [ExampleTinyFrontend, setExampleTinyFrontend] =
    useState<ExampleTinyFrontend>();

  const loadMfe = async () => {
    const mfe = await loadTinyFrontendClient<React.FC>({
      name: "ExampleTinyFrontend",
      contractVersion: "1.0.0",
      tinyApiEndpoint:
        "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api",
      dependenciesMap: {
        react: React,
      },
    });

    setExampleTinyFrontend(() => mfe);
  };

  useEffect(() => {
    loadMfe();
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Example Remix tiny frontend host</h1>
      <p>Below is a micro frontend loaded dynamically on SSR and client side</p>
      {ExampleTinyFrontend ? (
        <ExampleTinyFrontend name="World" />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
