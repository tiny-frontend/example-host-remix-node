import { ExampleTinyFrontendClient } from "~/exampleTinyFrontend/exampleTinyFrontend.client";
import { ExampleTinyFrontendServer } from "~/exampleTinyFrontend/exampleTinyFrontend.server";

export default function Ssr() {
  const ExampleTinyFrontend =
    ExampleTinyFrontendClient || ExampleTinyFrontendServer;

  return (
    <div>
      <p>Below is a micro frontend loaded dynamically on SSR and client side</p>
      <ExampleTinyFrontend name={"World"} />
    </div>
  );
}
