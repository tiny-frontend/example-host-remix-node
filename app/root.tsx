import { Link } from "@remix-run/react";
import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

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
      <body style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Example Remix tiny frontend host</h1>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/ssr">Page with MFE with SSR</Link>
          </li>
          <li>
            <Link to="/client-side-only">
              Page with MFE on client side only
            </Link>
          </li>
        </ul>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
