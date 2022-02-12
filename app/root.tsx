import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import styles from "./styles/built/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "Example Remix tiny frontend host" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__TINY_FRONTEND_SSR__" : null}
      </head>
      <body className="bg-dark text-white max-w-4xl m-auto">
        <main className="p-4 space-y-4">
          <h1 className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-x-4 md:space-y-0">
            <img src="/logo.png" alt="" width="44" />
            <span className="text-2xl font-bold text-center">
              Example Remix tiny frontend host
            </span>
          </h1>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
