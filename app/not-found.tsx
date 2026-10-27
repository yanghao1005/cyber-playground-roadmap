import Link from "next/link";
import { PageTransition } from "@/components/shared/page-transition";

export default function NotFound() {
  return (
    <PageTransition>
      <main className="cv-page">
        <h1 className="person-name">This room is not built yet.</h1>
        <p className="cv-empty">
          <Link href="/" transitionTypes={["nav-back"]}>
            Return to the lobby
          </Link>
        </p>
      </main>
    </PageTransition>
  );
}
