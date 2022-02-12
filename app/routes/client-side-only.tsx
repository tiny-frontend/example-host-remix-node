import {
  ExampleTinyFrontendType,
  loadExampleTinyFrontendClient,
} from "@tiny-frontend/example-tiny-frontend-contract";
import { useEffect, useState } from "react";
import * as React from "react";

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
    <div>
      <p>
        Below, inside the dashed box, is a tiny frontend loaded dynamically{" "}
        <strong>only on client side</strong>.
      </p>
      {ExampleTinyFrontend ? (
        <ExampleTinyFrontend name="Remix" onCounterChange={setCounter} />
      ) : (
        "Loading..."
      )}
      <p>
        You have pressed the button inside the tiny frontend{" "}
        <strong>{counter} times</strong>.
      </p>
    </div>
  );
}
