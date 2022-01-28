import { loadSmolFrontend } from "@smol-frontend/client";
import * as React from "react";

export let ExampleSmolFrontend: React.FC;

export const ensureExampleSmolFrontendLoaded = async () => {
  globalThis.React = React;

  ExampleSmolFrontend = await loadSmolFrontend<React.FC>({
    name: "ExampleSmolFrontend",
    contractVersion: "1.0.0",
    smolApiEndpoint: "https://api-cloudflare.pages.dev/api",
  });
};
