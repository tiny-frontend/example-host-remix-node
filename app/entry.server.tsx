import { renderToString } from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";

import { ensureExampleSmolFrontendLoaded } from "~/routes/exampleSmolFrontend";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  await ensureExampleSmolFrontendLoaded();

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
