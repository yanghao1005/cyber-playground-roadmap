const contact = [
  { label: "Esplugues de Llobregat, Catalunya" },
  { label: "yanghao1005@gmail.com", href: "mailto:yanghao1005@gmail.com" },
  {
    label: "linkedin.com/in/haoyang-5009b52ba",
    href: "https://www.linkedin.com/in/haoyang-5009b52ba",
  },
] as const;

const experience = [
  "Developed 10+ applications and plugins with Laravel 12–13 and WordPress, using PHP 8.2+, Filament and Livewire.",
  "Architected admin panels, permissions, dashboards and dynamic forms.",
  "Integrated Redsys, Stripe, WooCommerce, SMS and email APIs, and WebSockets.",
  "Optimized databases, multi-tenant systems, queues and data exports.",
] as const;

const projects = [
  {
    title: "Studyraft (TFM)",
    stack: "Python, FastAPI, Next.js, React",
    detail:
      "Master's thesis: a RAG study assistant that ingests private PDFs, retrieves passages with citations, and builds flashcards with spaced review.",
  },
  {
    title: "Document management and construction projects",
    stack: "Laravel, Filament, Livewire",
    detail:
      "Construction-project tools with advanced roles, QR validation, dashboards and archive recovery.",
  },
  {
    title: "Multi-tenant SaaS for shareholder meetings",
    stack: "Laravel, Filament, Spatie",
    detail:
      "A portal with subdomains, meeting notices, documents, two-factor authentication and Stripe Cashier billing.",
  },
  {
    title: "Workshop operations and booking",
    stack: "WordPress, Laravel, Tailwind, Reverb",
    detail:
      "Booking, a Kanban board, a calendar, assignments and real-time notifications on WordPress.",
  },
  {
    title: "Internal campaigns and newsletters",
    stack: "Laravel, Filament, queue workers",
    detail: "List management, custom SMTP delivery and sending analytics.",
  },
] as const;

const skills = [
  {
    label: "Backend",
    value: "Laravel 12–13, PHP 8.2+, Eloquent, REST, jobs, WebSockets",
  },
  {
    label: "Frontend",
    value: "Blade, Livewire 3–4, Alpine.js, Tailwind, Vite, React",
  },
  {
    label: "Admin",
    value: "Filament 4–5, Spatie Permission, Media Library",
  },
  {
    label: "Databases",
    value: "MySQL, SQLite, migrations, SQL optimization",
  },
  {
    label: "Integrations",
    value: "Redsys, Stripe, WooCommerce, SMS and email APIs",
  },
  {
    label: "DevOps",
    value: "Docker, Git, staging and production, cache, environments",
  },
  {
    label: "TFM and AI",
    value: "RAG, Python, FastAPI, Next.js, React",
  },
] as const;

export function CvDocument() {
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
          <ul>
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section>
        <h2>Projects</h2>
        <ul className="cv-projects">
          {projects.map((project) => (
            <li key={project.title}>
              <h3>{project.title}</h3>
              <p className="cv-stack">{project.stack}</p>
              <p>{project.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Technical skills</h2>
        <dl className="cv-skills">
          {skills.map((skill) => (
            <div key={skill.label}>
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
