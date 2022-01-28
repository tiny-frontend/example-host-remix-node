import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import { ensureExampleSmolFrontendLoadedClient } from "~/exampleSmolFrontend/exampleSmolFrontend.client";

ensureExampleSmolFrontendLoadedClient().then(() =>
  hydrate(<RemixBrowser />, document)
);
