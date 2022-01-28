import { renderToString } from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";

import { loadExampleSmolFrontendServer } from "~/exampleSmolFrontend/exampleSmolFrontend.server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const smolFrontendScriptTagToAddToSsrResult =
    await loadExampleSmolFrontendServer();

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(
    "<!DOCTYPE html>" +
      markup.replace(
        "__SMOL_FRONTEND_SSR__",
        smolFrontendScriptTagToAddToSsrResult
      ),
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
