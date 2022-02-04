import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Example Remix tiny frontend host</h1>
      <ul>
        <li>
          <Link to="/ssr">Page with MFE with SSR</Link>
        </li>
        <li>
          <Link to="/client-side-only">Page with MFE on client side only</Link>
        </li>
      </ul>
    </div>
  );
}
