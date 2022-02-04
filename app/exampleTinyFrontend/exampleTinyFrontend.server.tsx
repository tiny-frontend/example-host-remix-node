import { loadTinyFrontendServer } from "@tiny-frontend/client";
import * as React from "react";

import { ExampleTinyFrontend } from "~/exampleTinyFrontend/types";

export let ExampleTinyFrontendServer: ExampleTinyFrontend;

export const loadExampleTinyFrontendServer = async (): Promise<string> => {
  const tinyFrontendServerResponse = await loadTinyFrontendServer<React.FC>({
    name: "ExampleTinyFrontend",
    contractVersion: "1.0.0",
    tinyApiEndpoint:
      "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api",
    dependenciesMap: {
      react: React,
    },
  });

  ExampleTinyFrontendServer = tinyFrontendServerResponse.tinyFrontend;
  return tinyFrontendServerResponse.tinyFrontendStringToAddToSsrResult;
};
