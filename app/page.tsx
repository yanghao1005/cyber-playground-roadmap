import Link from "next/link";
import { ViewTransition } from "react";
import { PageTransition } from "@/components/shared/page-transition";

const experiences = [
  {
    href: "/generative-art",
    title: "Generative art",
    detail: "A full-screen drawing that changes every time the page loads.",
  },
  {
    href: "/cyberpunk-terminal",
    title: "Terminal",
    detail: "A map, a rain of glyphs, and a shell that only pretends to run.",
  },
  {
    href: "/particle-snake",
    title: "Particle snake",
    detail: "The arcade snake, with a trail, a burst, and a shake.",
  },
  {
    href: "/cyber-shelter",
    title: "Shelter",
    detail: "Rain on the glass, a lamp, and sound made in the browser.",
  },
] as const;

export default function LobbyPage() {
  return (
    <PageTransition>
      <main className="lobby">
        <ViewTransition name="person-name" share="text-morph" default="none">
          <Link href="/cv" className="person-name" transitionTypes={["nav-forward"]}>
            Hao Yang
          </Link>
        </ViewTransition>
        <p className="lobby-lead">Four experiments, from this desk.</p>
        <ul className="experience-index">
          {experiences.map((experience) => (
            <li key={experience.href}>
              <Link href={experience.href} transitionTypes={["nav-forward"]}>
                <span className="experience-title">{experience.title}</span>
                <span className="experience-detail">{experience.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </PageTransition>
  );
}
