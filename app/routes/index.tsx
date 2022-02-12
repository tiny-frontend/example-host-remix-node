import { StyledAnchor } from "~/components/styled-anchor";
import { StyledLink } from "~/components/styled-link";

export default function Index() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p>
          This is an example{" "}
          <StyledAnchor
            href="https://remix.run"
            target="_blank"
            rel="noreferrer"
          >
            Remix
          </StyledAnchor>{" "}
          app that can load a{" "}
          <StyledAnchor
            href="https://github.com/tiny-frontend"
            target="_blank"
            rel="noreferrer"
          >
            tiny frontend
          </StyledAnchor>
          .
        </p>
        <p>
          That tiny frontend is <strong>deployed independently</strong> of this
          Remix app and it&apos;s latest deployed bundle is{" "}
          <strong>loaded at runtime</strong>.
        </p>
      </div>
      <p className="text-xl md:text-center">What do you want to see?</p>
      <ul className="flex flex-col gap-2 md:flex-row md:gap-6 justify-center">
        <li>
          <StyledLink to="/ssr" className="">
            See a tiny frontend loaded <strong>on SSR and client side</strong>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/client-side-only" className="border-b-2">
            See a tiny frontend loaded <strong>client side only</strong>
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
