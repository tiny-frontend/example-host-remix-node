import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import { ensureExampleSmolFrontendLoaded } from "~/routes/exampleSmolFrontend";

ensureExampleSmolFrontendLoaded().then(() =>
  hydrate(<RemixBrowser />, document)
);
