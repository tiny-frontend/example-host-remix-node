import { renderToString } from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";

import { ensureExampleTinyFrontendLoadedServer } from "~/exampleTinyFrontend/exampleTinyFrontend.server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const tinyFrontendScriptTagToAddToSsrResult =
    await ensureExampleTinyFrontendLoadedServer();

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(
    "<!DOCTYPE html>" +
      markup.replace(
        "__TINY_FRONTEND_SSR__",
        tinyFrontendScriptTagToAddToSsrResult
      ),
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
