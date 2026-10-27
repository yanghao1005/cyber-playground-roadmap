"use client";

import { useState } from "react";

const contact = [
  { label: "Esplugues de Llobregat, Catalunya" },
  { label: "yanghao1005@gmail.com", href: "mailto:yanghao1005@gmail.com" },
  {
    label: "linkedin.com/in/haoyang-5009b52ba",
    href: "https://www.linkedin.com/in/haoyang-5009b52ba",
  },
] as const;

const threads = [
  { id: "laravel", label: "Laravel", projects: ["documents", "meetings", "workshop", "campaigns"] },
  { id: "filament", label: "Filament", projects: ["documents", "meetings", "campaigns"] },
  { id: "livewire", label: "Livewire", projects: ["documents"] },
  { id: "wordpress", label: "WordPress", projects: ["workshop"] },
  { id: "react", label: "React", projects: ["studyraft"] },
  { id: "python", label: "Python", projects: ["studyraft"] },
  { id: "stripe", label: "Stripe", projects: ["meetings"] },
] as const;

type ThreadId = (typeof threads)[number]["id"];

const duties = [
  {
    text: "Developed 10+ applications and plugins with Laravel 12–13 and WordPress, using PHP 8.2+, Filament and Livewire.",
    threads: ["laravel", "wordpress", "filament", "livewire"],
  },
  {
    text: "Architected admin panels, permissions, dashboards and dynamic forms.",
    threads: [],
  },
  {
    text: "Integrated Redsys, Stripe, WooCommerce, SMS and email APIs, and WebSockets.",
    threads: ["stripe"],
  },
  {
    text: "Optimized databases, multi-tenant systems, queues and data exports.",
    threads: [],
  },
] as const;

const projects = [
  {
    id: "studyraft",
    title: "Studyraft (TFM)",
    stack: "Python, FastAPI, Next.js, React",
    detail:
      "Master's thesis: a RAG study assistant that ingests private PDFs, retrieves passages with citations, and builds flashcards with spaced review.",
  },
  {
    id: "documents",
    title: "Document management and construction projects",
    stack: "Laravel, Filament, Livewire",
    detail:
      "Construction-project tools with advanced roles, QR validation, dashboards and archive recovery.",
  },
  {
    id: "meetings",
    title: "Multi-tenant SaaS for shareholder meetings",
    stack: "Laravel, Filament, Spatie",
    detail:
      "A portal with subdomains, meeting notices, documents, two-factor authentication and Stripe Cashier billing.",
  },
  {
    id: "workshop",
    title: "Workshop operations and booking",
    stack: "WordPress, Laravel, Tailwind, Reverb",
    detail:
      "Booking, a Kanban board, a calendar, assignments and real-time notifications on WordPress.",
  },
  {
    id: "campaigns",
    title: "Internal campaigns and newsletters",
    stack: "Laravel, Filament, queue workers",
    detail: "List management, custom SMTP delivery and sending analytics.",
  },
] as const;

const skills = [
  {
    label: "Backend",
    value: "Laravel 12–13, PHP 8.2+, Eloquent, REST, jobs, WebSockets",
    threads: ["laravel"],
  },
  {
    label: "Frontend",
    value: "Blade, Livewire 3–4, Alpine.js, Tailwind, Vite, React",
    threads: ["livewire", "react"],
  },
  {
    label: "Admin",
    value: "Filament 4–5, Spatie Permission, Media Library",
    threads: ["filament"],
  },
  {
    label: "Databases",
    value: "MySQL, SQLite, migrations, SQL optimization",
    threads: [],
  },
  {
    label: "Integrations",
    value: "Redsys, Stripe, WooCommerce, SMS and email APIs",
    threads: ["stripe"],
  },
  {
    label: "DevOps",
    value: "Docker, Git, staging and production, cache, environments",
    threads: [],
  },
  {
    label: "TFM and AI",
    value: "RAG, Python, FastAPI, Next.js, React",
    threads: ["python", "react"],
  },
] as const;

type Selection =
  | { kind: "thread"; id: ThreadId }
  | { kind: "project"; id: (typeof projects)[number]["id"] }
  | null;

function threadsFor(projectId: string) {
  return threads.filter((thread) =>
    (thread.projects as readonly string[]).includes(projectId),
  );
}

function toneFor(
  itemThreads: readonly string[],
  active: ReadonlySet<string> | null,
) {
  if (!active || itemThreads.length === 0) return undefined;
  return itemThreads.some((id) => active.has(id)) ? "lit" : "dim";
}

export function CvDocument() {
  const [selection, setSelection] = useState<Selection>(null);

  const active = new Set<string>(
    selection?.kind === "thread"
      ? [selection.id]
      : selection?.kind === "project"
        ? threadsFor(selection.id).map((thread) => thread.id)
        : [],
  );
  const activeThreads = selection ? active : null;

  const selectedThread =
    selection?.kind === "thread"
      ? threads.find((thread) => thread.id === selection.id)
      : undefined;
  const selectedProject =
    selection?.kind === "project"
      ? projects.find((project) => project.id === selection.id)
      : undefined;

  const status = selectedThread
    ? `${selectedThread.label} shows up in ${selectedThread.projects.length === 1 ? "one project" : `${selectedThread.projects.length} projects`}.`
    : selectedProject
      ? `${selectedProject.title}. ${selectedProject.stack}.`
      : "Choose a stack, or open a project. The lines that name it stay lit.";

  function chooseThread(id: ThreadId) {
    setSelection((current) =>
      current?.kind === "thread" && current.id === id ? null : { kind: "thread", id },
    );
  }

  function chooseProject(id: (typeof projects)[number]["id"]) {
    setSelection((current) =>
      current?.kind === "project" && current.id === id
        ? null
        : { kind: "project", id },
    );
  }

  return (
    <article className="cv-document">
      <p className="cv-role">Web developer. Full stack. Laravel and PHP 8.2+.</p>
      <ul className="cv-contact">
        {contact.map((item) => (
          <li key={item.label}>
            {"href" in item && item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>

      <div className="cv-trace-block">
        <div className="cv-trace" role="group" aria-label="Stacks">
          {threads.map((thread) => (
            <button
              key={thread.id}
              type="button"
              aria-pressed={active.has(thread.id)}
              onClick={() => chooseThread(thread.id)}
            >
              {thread.label}
            </button>
          ))}
        </div>
        <p className="cv-trace-note" aria-live="polite">
          {status}
          {selection ? (
            <>
              {" "}
              <button type="button" onClick={() => setSelection(null)}>
                Show all
              </button>
            </>
          ) : null}
        </p>
      </div>

      <section>
        <h2>Summary</h2>
        <p>
          Full-stack web developer with experience in Laravel, Filament and
          WordPress. Specialized in multi-tenant platforms, internal
          administration and payment and API integrations. Quick to adapt to
          new stacks and domains. Master&apos;s thesis on a RAG study assistant.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <article>
          <header className="cv-role-line">
            <h3>Full-stack web developer</h3>
            <p>July 2024 – July 2026</p>
          </header>
          <p className="cv-where">CompsaOnline, Lleida</p>
          <ul className="cv-duties">
            {duties.map((duty) => (
              <li key={duty.text} data-tone={toneFor(duty.threads, activeThreads)}>
                {duty.text}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section>
        <h2>Projects</h2>
        <ul className="cv-projects">
          {projects.map((project) => {
            const projectThreads = threadsFor(project.id).map((thread) => thread.id);
            return (
              <li key={project.id} data-tone={toneFor(projectThreads, activeThreads)}>
                <button
                  type="button"
                  aria-pressed={
                    selection?.kind === "project" && selection.id === project.id
                  }
                  onClick={() => chooseProject(project.id)}
                >
                  <h3>{project.title}</h3>
                  <p className="cv-stack">{project.stack}</p>
                  <p>{project.detail}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2>Technical skills</h2>
        <dl className="cv-skills">
          {skills.map((skill) => (
            <div key={skill.label} data-tone={toneFor(skill.threads, activeThreads)}>
              <dt>{skill.label}</dt>
              <dd>{skill.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Education</h2>
        <ul className="cv-education">
          <li>
            <h3>Master&apos;s degree in computer engineering</h3>
            <p>University of Lleida, 2024–2026</p>
          </li>
          <li>
            <h3>Bachelor&apos;s degree in computer engineering</h3>
            <p>University of Lleida, 2020–2024</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Practice</h2>
        <ul>
          <li>Agile, Scrum, CI/CD and Git.</li>
          <li>Requirements gathering, troubleshooting and technical documentation.</li>
          <li>Fast to pick up new tools, stacks and domains.</li>
        </ul>
        <p>Catalan, Spanish, Chinese, and English at a professional level.</p>
      </section>
    </article>
  );
}
