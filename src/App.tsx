import eyLogo from "./assets/ey-logo-black.webp";
import nidhiImage from "./assets/nidhi-img.jpeg";
import societeGeneraleLogo from "./assets/societe-generale.webp";
import ticTacToeVideo from "./assets/tic-tac-toe-rec.mp4";

type Project = {
  title: string;
  period: string;
  summary: string;
  stack: string[];
  accentClass: string;
  previewMode?: "video";
  videoSrc?: string;
  videoLabel?: string;
  clipStart?: number;
  clipEnd?: number;
  websiteHref: string;
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
    previewMode: "video",
    videoLabel: "Live landing page preview",
    websiteHref: "https://github.com/Abcdnidhi/SAAS-AI-CLOUD",
    sourceHref: "https://github.com/Abcdnidhi/SAAS-AI-CLOUD"
  },
  {
    title: "Realtime Multiplayer Tic-Tac-Toe",
    period: "Apr 2026",
    summary:
      "A server-authoritative multiplayer game with rooms, challenge workflows, leaderboard support, reconnect handling, and real-time synchronized gameplay.",
    stack: ["React", "TypeScript", "Nakama", "Docker", "PostgreSQL"],
    accentClass: "preview-tictactoe",
    previewMode: "video",
    videoSrc: ticTacToeVideo,
    videoLabel: "Live gameplay preview",
    clipStart: 1.2,
    clipEnd: 6.2,
    websiteHref: "https://github.com/Abcdnidhi/Backend-heavy-projects",
    sourceHref: "https://github.com/Abcdnidhi/Backend-heavy-projects"
  }
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "REST APIs",
  "Realtime Systems",
  "Authentication",
  "TailwindCSS",
  "Git"
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

export default function App() {
  const vastVideoSrc =
    "https://utfs.io/f/924xBEAVsWpcgLx4SbEZJSafbH0564rodkLxvFeAslwX3htU";
  const sectionLinks = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <main className="portfolio-page">
      <aside className="page-toc" aria-label="Section navigation">
        <p className="page-toc-title">Navigate</p>
        <nav className="page-toc-links">
          {sectionLinks.map((section) => (
            <a key={section.href} href={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">SN</span>
          <span className="brand-name">Srinidhi</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-block" id="top">
        <div className="hero-layout">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-name">Hi, I&apos;m Srinidhi</span>
              <span className="hero-wave" aria-hidden="true">
                👋
              </span>
            </h1>
            <p className="hero-subtitle">
              I am an Artificial Intelligence &amp; Machine Learning Engineering graduate and a Backend Web
              Developer specialized in Node.js, Express, and MongoDB. I have a strong passion for building
              user-centric products, with a focus on the Next.js framework.
            </p>
          </div>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={nidhiImage} alt="Portrait of Srinidhi" />
          </div>
        </div>
      </section>

      <section className="section-block" id="about">
        <div className="section-heading">
          <div>
            <h2>About</h2>
            <p>
              I am a backend-focused developer with hands-on experience in building scalable applications
              using Node.js, Express.js, and MongoDB. I have a strong foundation in Data Structures &
              Algorithms using Python, along with a solid understanding of Object-Oriented Programming
              principles. I enjoy solving complex problems and designing efficient, real-world systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" id="experience">
        <div className="section-heading">
          <div>
            <h2>Work Experience</h2>
          </div>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <details key={`${item.role}-${item.org}`} className="experience-card experience-dropdown">
              <summary className="experience-summary">
                <div className="experience-logo-wrap">
                  <img className="experience-logo" src={item.logoSrc} alt={item.logoAlt} />
                </div>
                <div className="experience-main">
                  <div className="experience-title-row">
                    <h3>{item.org}</h3>
                    <span className="experience-chevron" aria-hidden="true">
                      &gt;
                    </span>
                  </div>
                  <p className="experience-role">{item.role}</p>
                </div>
                <div className="experience-date">{item.period}</div>
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
          <div>
            <h2>Skills</h2>
            <p>Technologies and tools I use to design, build, debug, and ship applications.</p>
          </div>
        </div>

        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <div>
            <h2>Check out my latest projects</h2>
            <p>
              I&apos;ve worked on projects ranging from SaaS-style AI products to real-time multiplayer systems.
              These are two of the strongest examples of my current work.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className={`project-preview ${project.accentClass}`}>
                <div className="project-preview-screen">
                  {project.previewMode === "video" ? (
                    <video
                      className="project-preview-video"
                      src={project.videoSrc ?? vastVideoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedMetadata={(event) => {
                        if (project.clipStart !== undefined) {
                          event.currentTarget.currentTime = project.clipStart;
                        }
                      }}
                      onTimeUpdate={(event) => {
                        if (
                          project.clipStart !== undefined &&
                          project.clipEnd !== undefined &&
                          event.currentTarget.currentTime >= project.clipEnd
                        ) {
                          event.currentTarget.currentTime = project.clipStart;
                          void event.currentTarget.play();
                        }
                      }}
                    />
                  ) : null}
                </div>
                {project.videoLabel ? <span className="project-preview-label">{project.videoLabel}</span> : null}
              </div>
              <h3>{project.title}</h3>
              <p className="project-period">{project.period}</p>
              <p className="project-summary">{project.summary}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.websiteHref}>Website</a>
                <a href={project.sourceHref}>Source</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block contact-block" id="contact">
        <div className="section-heading">
          <div>
            <h2>Get in Touch</h2>
            <p>
              If you&apos;d like to discuss backend, full-stack, or product-focused roles, feel free to reach out.
            </p>
          </div>
        </div>

        <div className="contact-links">
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
        </div>
      </section>
    </main>
  );
}
