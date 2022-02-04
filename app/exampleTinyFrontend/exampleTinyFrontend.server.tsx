import {
  ExampleTinyFrontendType,
  loadExampleTinyFrontendServer,
} from "@tiny-frontent/example-tiny-frontend-contract";

export let ExampleTinyFrontendServer: ExampleTinyFrontendType;

export const ensureExampleTinyFrontendLoadedServer =
  async (): Promise<string> => {
    const tinyFrontendServerResponse = await loadExampleTinyFrontendServer(
      "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api"
    );

    ExampleTinyFrontendServer = tinyFrontendServerResponse.tinyFrontend;
    return tinyFrontendServerResponse.tinyFrontendStringToAddToSsrResult;
  };
