import { loadTinyFrontendClient } from "@tiny-frontend/client";
import * as React from "react";

export let ExampleTinyFrontendClient: React.FC;

export const ensureExampleTinyFrontendLoadedClient = async () => {
  ExampleTinyFrontendClient = await loadTinyFrontendClient<React.FC>({
    name: "ExampleTinyFrontend",
    contractVersion: "1.0.0",
    tinyApiEndpoint:
      "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api",
    dependenciesMap: {
      react: React,
    },
  });
};
