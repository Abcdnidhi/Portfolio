import { useEffect, useRef, useState } from "react";
import eyLogo from "./assets/ey-logo-black.webp";
import nidhiImage from "./assets/nidhi-img.jpeg";
import societeGeneraleLogo from "./assets/societe-generale.webp";
const vastVideo = "https://utfs.io/f/924xBEAVsWpcgLx4SbEZJSafbH0564rodkLxvFeAslwX3htU";
import ticTacToeVideo from "./assets/tic-tac-toe-rec.mp4";
import real3dVideo from "./assets/real3d-portfolio.mp4";

type Project = {
  title: string;
  period: string;
  summary: string;
  stack: string[];
  accentClass: string;
  videoSrc?: string;
  clipStart?: number;
  clipEnd?: number;
  sourceHref: string;
};

type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
};

const projects: Project[] = [
  {
    title: "AI Toolkit [VAST-AI]",
    period: "Jan 2024 - Feb 2024",
    summary:
      "A SaaS-style AI toolkit that brings multiple productivity-focused AI tools into one workspace and makes advanced workflows easier to use.",
    stack: ["Next.js", "TypeScript", "MySQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI"],
    accentClass: "preview-vast",
    videoSrc: vastVideo,
    sourceHref: "https://github.com/Abcdnidhi/SAAS-AI-CLOUD"
  },
  {
    title: "Realtime Multiplayer Tic-Tac-Toe",
    period: "Apr 2026",
    summary:
      "A server-authoritative multiplayer game with rooms, challenge workflows, leaderboard support, reconnect handling, and real-time synchronized gameplay.",
    stack: ["React", "TypeScript", "Nakama", "Docker", "PostgreSQL"],
    accentClass: "preview-tictactoe",
    videoSrc: ticTacToeVideo,
    clipStart: 1.2,
    clipEnd: 6.2,
    sourceHref: "https://github.com/Abcdnidhi/Backend-heavy-projects"
  },
  {
    title: "REAL 3D — Printing Platform",
    period: "2026",
    summary: "A 3D printing platform with STL uploads, printing cost estimates, a material storefront, and order management. Built with a MERN stack and an admin dashboard for inventory and operations.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Three.js", "JWT"],
    accentClass: "preview-real3d",
    videoSrc: real3dVideo,
    sourceHref: "https://github.com/Abcdnidhi/REAL-3D"
  }
];

const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "Python"]
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Realtime Systems"]
  },
  {
    label: "Data",
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TailwindCSS"]
  },
  {
    label: "Tooling",
    items: ["Docker", "Git"]
  }
];

const experience: Experience[] = [
  {
    role: "Full Stack Web Developer Intern",
    org: "Ernst & Young",
    period: "Dec 2023 - Jan 2024",
    description:
      "Developed frontend architecture and integrated API calls for an E-Commerce platform, allowing designers to create multiple design variations efficiently. Collaborated with cross-functional teams to deliver a polished, user-friendly website design. Implemented a sleek Next.js theme and landing page, improving UI and user retention. Optimized UI/UX for SEO and rendering speed, resulting in faster load times and a smoother user experience.",
    logoSrc: eyLogo,
    logoAlt: "Ernst and Young logo"
  },
  {
    role: "Systems Engineer",
    org: "Societe Generale, Bangalore",
    period: "July 2024 - Present",
    description:
      "Developed and maintained automation scripts for system health checks, reducing manual monitoring effort and improving system reliability and uptime. Designed automated email notification and alert mechanisms for critical system events, enabling proactive issue resolution and minimizing downtime. Analyzed system logs and performance metrics to identify bottlenecks, troubleshoot production issues, and optimize operational workflows.",
    logoSrc: societeGeneraleLogo,
    logoAlt: "Societe Generale logo"
  }
];

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

function ProjectPreview({ project }: { project: Project }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pause = () => { if (media.matches) video.current?.pause(); };
    media.addEventListener("change", pause);
    return () => media.removeEventListener("change", pause);
  }, []);
  return (
    <div className={`project-preview ${project.accentClass}`}>
      <div className="project-preview-screen">
        <video ref={video} className="project-preview-video" src={project.videoSrc}
          aria-label={`${project.title} preview`} muted loop playsInline preload="metadata"
          onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
          onLoadedMetadata={(event) => { event.currentTarget.currentTime = project.clipStart ?? 0.1; }}
          onTimeUpdate={(event) => {
            if (project.clipEnd !== undefined && event.currentTarget.currentTime >= project.clipEnd) {
              event.currentTarget.currentTime = project.clipStart ?? 0;
            }
          }} />
      </div>
      <button className="preview-toggle" type="button" aria-label={`${playing ? "Pause" : "Play"} ${project.title} preview`}
        onClick={() => {
          if (video.current?.paused) void video.current.play().catch(() => setPlaying(false));
          else video.current?.pause();
        }}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span> {playing ? "Pause preview" : "Play preview"}
      </button>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ids = ["top", "about", "experience", "skills", "projects", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let frame = 0;
    const update = () => {
      const current = [...elements].reverse().find((el) => el.getBoundingClientRect().top <= 160);
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      setActiveSection(atBottom ? "contact" : current?.id ?? "top");
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { close(); menuButton.current?.focus(); }
    };
    window.addEventListener("hashchange", close);
    if (menuOpen) window.addEventListener("keydown", escape);
    return () => { window.removeEventListener("hashchange", close); window.removeEventListener("keydown", escape); };
  }, [menuOpen]);

  return (
    <main className="portfolio-page">
      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">SN</span>
            <span className="brand-copy">
              <span className="brand-name">Srinidhi</span>
              <span className="brand-role">Software Engineer</span>
            </span>
          </a>

          <button
            ref={menuButton}
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span />
            <span />
          </button>

          <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className={activeSection === section.href.slice(1) ? "is-active" : undefined}
                aria-current={activeSection === section.href.slice(1) ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero-block" id="top" tabIndex={-1}>
        <div className="hero-layout">
          <div className="hero-content">
            <p className="eyebrow">AI &amp; ML graduate · Backend-focused engineer</p>
            <h1 className="hero-title">
              <span className="hero-name">Hi, I&apos;m Srinidhi</span>
              <span className="hero-wave" aria-hidden="true">
                👋
              </span>
            </h1>
            <p className="hero-subtitle">
              I build reliable backends and thoughtful web experiences. From Node.js APIs to realtime
              multiplayer systems, I turn complex problems into products that work.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore my work ↗
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <img className="hero-photo" src={nidhiImage} alt="Portrait of Srinidhi" width="280" height="280" loading="eager" />
            </div>
            <p className="hero-status">Societe Generale · Systems Engineer</p>
          </div>
        </div>
      </section>

      <section className="section-block" id="about">
        <div className="section-heading">
          <p className="section-kicker">01 — About</p>
          <h2>Building reliable systems with a product mindset.</h2>
          <p>
            I am a backend-focused developer with hands-on experience in building scalable applications using
            Node.js, Express.js, and MongoDB. I have a strong foundation in Data Structures &amp; Algorithms
            using Python, along with a solid understanding of Object-Oriented Programming principles. I enjoy
            solving complex problems and designing efficient, real-world systems.
          </p>
        </div>

        <ul className="about-grid">
          <li>
            <span>Focus</span>
            <strong>Backend, APIs, realtime systems</strong>
          </li>
          <li>
            <span>Currently</span>
            <strong>Systems Engineer, Societe Generale</strong>
          </li>
          <li>
            <span>Strengths</span>
            <strong>DSA, OOP, Node.js, Next.js</strong>
          </li>
        </ul>
      </section>

      <section className="section-block" id="experience">
        <div className="section-heading">
          <p className="section-kicker">02 — Experience</p>
          <h2>Work Experience</h2>
        </div>

        <div className="experience-list">
          {[...experience].reverse().map((item, index) => (
            <details key={`${item.role}-${item.org}`} className="experience-card experience-dropdown" open={index === 0}>
              <summary className="experience-summary">
                <div className="experience-logo-wrap">
                  <img className="experience-logo" src={item.logoSrc} alt={item.logoAlt} />
                </div>
                <div className="experience-main">
                  <div className="experience-title-row">
                    <h3>{item.org}</h3>
                    <span className="experience-chevron" aria-hidden="true" />
                  </div>
                  <p className="experience-role">{item.role}</p>
                </div>
                <p className="experience-date">{item.period}</p>
              </summary>
              <div className="experience-panel">
                <p className="experience-description">{item.description}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-block" id="skills">
        <div className="section-heading">
          <p className="section-kicker">03 — Skills</p>
          <h2>Skills</h2>
          <p>Technologies and tools I use to design, build, debug, and ship applications.</p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <div className="skills-cloud">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <p className="section-kicker">04 — Selected work</p>
          <h2>Check out my latest projects</h2>
          <p>
            I&apos;ve worked on projects ranging from SaaS-style AI products to real-time multiplayer systems.
            Explore a selection of the products and systems I have built.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <ProjectPreview project={project} />
              <div className="project-body">
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <p className="project-period">{project.period}</p>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
<a href={project.sourceHref} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}>
                    View source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block contact-block" id="contact">
        <div className="section-heading">
          <p className="section-kicker">05 — Contact</p>
          <h2>Get in Touch</h2>
          <p>
            If you&apos;d like to discuss backend, full-stack, or product-focused roles, feel free to reach
            out.
          </p>
        </div>

        <div className="contact-panel">
          <a className="btn btn-primary" href="mailto:srinidhi5162@gmail.com">
            srinidhi5162@gmail.com
          </a>
          <div className="contact-socials">
            <a href="https://github.com/Abcdnidhi" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/srinidhir123" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Srinidhi. Crafted with React &amp; TypeScript.</p>
        <a href="#top">Back to top</a>
      </footer>

      <nav className="contact-links" aria-label="Quick contacts">
        <a className="contact-icon-link" href="#top" aria-label="Back to top" title="Home">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4.5 10.5 12 4l7.5 6.5M7 9.5V20h10V9.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          className="contact-icon-link"
          href="mailto:srinidhi5162@gmail.com"
          aria-label="Email Srinidhi"
          title="srinidhi5162@gmail.com"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm0 1 8 5 8-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          className="contact-icon-link"
          href="https://github.com/Abcdnidhi"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.45v-1.58c-2.57.56-3.11-1.09-3.11-1.09-.42-1.06-1.02-1.34-1.02-1.34-.84-.58.06-.57.06-.57.92.07 1.41.95 1.41.95.83 1.4 2.17 1 2.7.77.08-.6.32-1 .58-1.24-2.05-.23-4.2-1.02-4.2-4.57 0-1.01.36-1.84.95-2.48-.1-.23-.41-1.17.09-2.43 0 0 .77-.25 2.53.95a8.6 8.6 0 0 1 4.6 0c1.75-1.2 2.52-.95 2.52-.95.5 1.26.19 2.2.1 2.43.6.64.95 1.47.95 2.48 0 3.56-2.15 4.33-4.21 4.56.33.28.63.84.63 1.69v2.51c0 .25.16.54.64.45A9.25 9.25 0 0 0 12 2.75Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          className="contact-icon-link"
          href="https://www.linkedin.com/in/srinidhir123"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6.4 8.35a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9ZM5.1 9.7h2.6v8.2H5.1Zm4.25 0h2.5v1.12h.03c.35-.66 1.2-1.36 2.48-1.36 2.65 0 3.14 1.74 3.14 4v4.44h-2.6v-3.94c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08v4.01h-2.6Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </nav>
    </main>
  );
}
