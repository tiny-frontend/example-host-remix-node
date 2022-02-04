import {
  ExampleTinyFrontendType,
  loadExampleTinyFrontendClient,
} from "@tiny-frontent/example-tiny-frontend-contract";
import { useEffect, useState } from "react";
import * as React from "react";

export default function ClientSideOnly() {
  const [ExampleTinyFrontend, setExampleTinyFrontend] =
    useState<ExampleTinyFrontendType>();

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
