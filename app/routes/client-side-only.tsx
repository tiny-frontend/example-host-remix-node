import { loadTinyFrontendClient } from "@tiny-frontend/client";
import { useEffect, useState } from "react";
import * as React from "react";

import { ExampleTinyFrontend } from "~/exampleTinyFrontend/types";

export default function ClientSideOnly() {
  const [ExampleTinyFrontend, setExampleTinyFrontend] =
    useState<ExampleTinyFrontend>();

  const loadTinyFrontend = async () => {
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
    loadTinyFrontend();
  }, []);

  return (
    <div>
      <p>Below is a micro frontend loaded dynamically only on client side</p>
      {ExampleTinyFrontend ? (
        <ExampleTinyFrontend name="World" />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
