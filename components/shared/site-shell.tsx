"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const onLobby = pathname === "/";

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <header className="shell-bar" style={{ viewTransitionName: "site-header" }}>
        <nav className="shell-nav" aria-label="Site">
          <Link
            href="/"
            aria-current={onLobby ? "page" : undefined}
            transitionTypes={onLobby ? undefined : ["nav-back"]}
          >
            Lobby
          </Link>
          <Link
            href="/cv"
            aria-current={pathname === "/cv" ? "page" : undefined}
            transitionTypes={pathname === "/cv" ? undefined : ["nav-forward"]}
          >
            CV
          </Link>
        </nav>
      </header>
      <div id="content" className="shell-content">
        {children}
      </div>
      {onLobby ? null : (
        <Link href="/" className="back-lobby" transitionTypes={["nav-back"]}>
          <ArrowLeft aria-hidden="true" size={16} />
          Lobby
        </Link>
      )}
    </>
  );
}
