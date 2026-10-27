# Cyber Playground

This file is included at the start of every Agent prompt. The spec is @cyber_playground_roadmap.md. Skill text lives in `.agents/skills/`. The module bar for each experience lives in `.cursor/rules/` and is attached only when those files are in context.

## Before a new slice

1. Read the one section of @cyber_playground_roadmap.md for the module you are building.
2. Open the matching `SKILL.md` from the table below.
3. Name the check a running app can show, before any code: a route, an interaction, a canvas frame, or an audio graph. A typecheck is not the check.
4. Change that module only.

## Paths

Home is the lobby, `app/page.tsx`. The CV is `/cv` (`app/cv/`, `components/cv/`), linked from the shell, and it is not an experience card.

Each experience is `app/<slug>/` plus `components/<slug>/`. The slugs are the ones listed in @cyber_playground_roadmap.md. A new experience adds a roadmap section, those two folders, and a `.cursor/rules/<slug>.mdc` scoped to them. Experience folders do not import each other. `components/shared/` is the shell. Static files go in `public/assets/`. No audio files under `public/`.

## When to open a skill

| When the work is | Read |
| --- | --- |
| React or Next.js performance, fetching, bundles, canvas frame cost | `.agents/skills/vercel-react-best-practices/SKILL.md` |
| Splitting the lobby, `components/shared`, and a project folder | `.agents/skills/vercel-composition-patterns/SKILL.md` |
| A transition between the lobby and an experience | `.agents/skills/vercel-react-view-transitions/SKILL.md` |
| Proving an edit while `next dev` is running | `.agents/skills/next-dev-loop/SKILL.md` |
| The look of a new surface | `.agents/skills/frontend-design/SKILL.md` |
| Spacing, type, interaction, or accessibility | `.agents/skills/web-design-guidelines/SKILL.md` |
| Motion: trails, particles, screen shake, rain, steam | `.agents/skills/emil-design-eng/SKILL.md` |

## Constraints

- Next.js App Router, TypeScript, Tailwind CSS, and Lucide.
- The brief for `frontend-design` is this playground's dark glass and cyberpunk neon.
- Drawing is HTML canvas, SVG, or CSS 3D. Sound is the Web Audio API, inside client components.
- The deploy target is Vercel. Branches, the GitHub Actions check, and what counts as a merge follow `.cursor/rules/ci-cd.mdc`.

## Done

The slice is done when the running app shows the check from step 3 and the browser console is clean. Once `next dev` is up, follow `.agents/skills/next-dev-loop/SKILL.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
