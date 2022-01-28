import { loadSmolFrontendServer } from "@smol-frontend/client";
import * as React from "react";

export let ExampleSmolFrontendServer: React.FC;

export const loadExampleSmolFrontendServer = async (): Promise<string> => {
  globalThis.React = React;

  const smolFrontendServerResponse = await loadSmolFrontendServer<React.FC>({
    name: "ExampleSmolFrontend",
    contractVersion: "1.0.0",
    smolApiEndpoint: "https://api-cloudflare.pages.dev/api",
  });

  ExampleSmolFrontendServer = smolFrontendServerResponse.smolFrontend;
  return smolFrontendServerResponse.smolFrontendScriptTagToAddToSsrResult;
};
