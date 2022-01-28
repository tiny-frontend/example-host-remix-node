import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import { ensureExampleSmolFrontendLoadedClient } from "~/routes/exampleSmolFrontend.client";

ensureExampleSmolFrontendLoadedClient().then(() =>
  hydrate(<RemixBrowser />, document)
);
