import { ExampleTinyFrontendClient } from "~/exampleTinyFrontend/exampleTinyFrontend.client";
import { ExampleTinyFrontendServer } from "~/exampleTinyFrontend/exampleTinyFrontend.server";

export default function Ssr() {
  const ExampleTinyFrontend =
    ExampleTinyFrontendClient || ExampleTinyFrontendServer;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Example Remix tiny frontend host</h1>
      <p>Below is a micro frontend loaded dynamically on SSR and client side</p>
      <ExampleTinyFrontend name={"world"} />
    </div>
  );
}
