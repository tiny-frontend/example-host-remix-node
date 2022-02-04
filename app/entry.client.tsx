import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import { ensureExampleTinyFrontendLoadedClient } from "~/exampleTinyFrontend/exampleTinyFrontend.client";

ensureExampleTinyFrontendLoadedClient().then(() =>
  hydrate(<RemixBrowser />, document)
);
