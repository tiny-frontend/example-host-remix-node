import { loadSmolFrontendServer } from "@smol-frontend/client";
import * as React from "react";

export let ExampleSmolFrontendServer: React.FC;

export const loadExampleSmolFrontendServer = async (): Promise<string> => {
  const smolFrontendServerResponse = await loadSmolFrontendServer<React.FC>({
    name: "ExampleSmolFrontend",
    contractVersion: "1.0.0",
    smolApiEndpoint:
      "https://smol-frontent-api-cloudlare-example.gnomesgames.workers.dev/api",
    dependenciesMap: {
      react: React,
    },
  });

  ExampleSmolFrontendServer = smolFrontendServerResponse.smolFrontend;
  return smolFrontendServerResponse.smolFrontendStringToAddToSsrResult;
};
