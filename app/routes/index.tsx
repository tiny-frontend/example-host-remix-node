import { ExampleSmolFrontend } from "~/routes/exampleSmolFrontend";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Example Remix smol frontend host</h1>
      <p>Below is a micro frontend loaded dynamically on SSR and client side</p>
      <ExampleSmolFrontend />
    </div>
  );
}
