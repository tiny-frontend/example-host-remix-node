import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import { StyledAnchor } from "~/components/styled-anchor";

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
      <body className="p-4 pt-8 bg-dark text-white max-w-4xl m-auto">
        <main className="space-y-8 md:space-y-12">
          <h1 className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-x-4 md:space-y-0">
            <img src="/logo.png" alt="" width="44" />
            <span className="text-3xl md:text-5xl font-bold text-center">
              Example Remix tiny frontend host
            </span>
          </h1>
          <Outlet />
          <div className="text-gray-400 text-sm text-right">
            Curious how it all works 🐰 ?{" "}
            <StyledAnchor href="https://tiny-frontend.github.io/guide/about.html">
              Checkout the docs
            </StyledAnchor>{" "}
            📖 !
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
