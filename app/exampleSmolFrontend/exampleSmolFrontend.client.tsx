import { loadSmolFrontendClient } from "@smol-frontend/client";
import * as React from "react";

export let ExampleSmolFrontendClient: React.FC;

export const ensureExampleSmolFrontendLoadedClient = async () => {
  ExampleSmolFrontendClient = await loadSmolFrontendClient<React.FC>({
    name: "ExampleSmolFrontend",
    contractVersion: "1.0.0",
    smolApiEndpoint:
      "https://smol-frontent-api-cloudlare-example.gnomesgames.workers.dev/api",
    dependenciesMap: {
      react: React,
    },
  });
};
