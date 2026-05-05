import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import portfolioData from "./data/portfolio.json";
import GALLERY from "./data/gallery";

/* ----------------------------------------------------------
   All resume content lives in src/data/portfolio.json.
   Edit that file to update education, experiences, projects,
   certifications, awards, links, or the intro copy.

   Gallery photos live in src/data/gallery.js (kept separate
   so image require() calls work).

   Only structural things — section nav order, section
   headlines/subtitles — stay in this file.
---------------------------------------------------------- */
const {
  intro: INTRO,
  links: LINKS,
  education: EDUCATION,
  experiences: EXPERIENCES,
  projects: PROJECTS,
  certifications: CERTIFICATIONS,
  awards: AWARDS,
} = portfolioData;

const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "gallery", label: "Gallery" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "connect", label: "Connect" },
];

/* ---------- Components ---------- */

function SideNav({ active, onClick }) {
  return (
    <nav className="side-nav" aria-label="Section navigation">
      <div className="side-nav-inner">
        <div className="side-nav-brand">NN</div>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`side-nav-link ${active === item.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClick(item.id);
                }}
              >
                <span className="dot" />
                <span className="label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Intro() {
  const initials = INTRO.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <section id="intro" className="section section-intro">
      <div className="intro-grid">
        <div className="intro-photo-wrap">
          <div className="intro-photo">
            {/* Drop your photo at client/src/assets/profile.jpg and replace this block with <img/> */}
            <span className="intro-photo-initials">{initials}</span>
          </div>
          <div className="intro-photo-glow" aria-hidden="true" />
        </div>
        <div className="intro-copy">
          <p className="intro-eyebrow">{INTRO.eyebrow}</p>
          <h1 className="intro-name">{INTRO.name}</h1>
          <p className="intro-tagline">{INTRO.tagline}</p>
          <div className="intro-edu">
            {EDUCATION.map((e, i) => (
              <div className="intro-edu-row" key={i}>
                <div className="intro-edu-degree">{e.degree}</div>
                <div className="intro-edu-school">{e.school}</div>
                <div className="intro-edu-detail">{e.detail}</div>
                <div className="intro-edu-period">{e.period}</div>
              </div>
            ))}
          </div>
          <div className="intro-cta">
            <a className="btn btn-primary" href="#experience">
              See my work
            </a>
            <a
              className="btn btn-ghost"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="section-head">
        <p className="section-eyebrow">Gallery</p>
        <h2 className="section-title">Moments along the way.</h2>
        <p className="section-sub">
          A scrollable feed of life outside the codebase &mdash; competitions,
          campus, travel, and the people who make it fun.
        </p>
      </div>
      <div className="gallery-window">
        <div className="gallery-masonry">
          {GALLERY.map((item, i) => (
            <figure
              key={i}
              className={`gallery-item hue-${item.hue || 1}`}
              style={{ "--aspect": item.aspect || 1 }}
            >
              {item.src ? (
                <img src={item.src} alt={item.caption || ""} loading="lazy" />
              ) : (
                <div className="gallery-placeholder" aria-hidden="true">
                  <span className="gallery-placeholder-mark">+</span>
                </div>
              )}
              {item.caption && (
                <figcaption className="gallery-caption">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div className="flip-card" tabIndex={0}>
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front">
          <div className="exp-period">{exp.period}</div>
          <h3 className="exp-role">{exp.role}</h3>
          <div className="exp-company">{exp.company}</div>
          <div className="exp-location">{exp.location}</div>
          <div className="tag-row">
            {exp.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="flip-hint">Hover to expand →</div>
        </div>
        <div className="flip-card-face flip-card-back">
          <div className="exp-back-header">
            <h3 className="exp-role">{exp.role}</h3>
            <div className="exp-company-line">
              {exp.company} · {exp.period}
            </div>
          </div>
          <ul className="exp-bullets">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Where I've shipped.</h2>
        <p className="section-sub">
          Hover any card to flip it open and read the details.
        </p>
      </div>
      <div className="card-grid">
        {EXPERIENCES.map((e, i) => (
          <ExperienceCard exp={e} key={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card" tabIndex={0}>
      <div className="project-card-content">
        <h3 className="project-name">{project.name}</h3>
        <div className="project-subtitle">{project.subtitle}</div>
        <p className="project-blurb">{project.blurb}</p>
        <div className="tag-row">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="project-overlay">
        <div className="project-overlay-buttons">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              GitHub
            </a>
          )}
          {project.devpost && (
            <a
              href={project.devpost}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Devpost
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I've built.</h2>
        <p className="section-sub">Hover a card to surface the links.</p>
      </div>
      <div className="card-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard project={p} key={i} />
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-head">
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-title">Always sharpening.</h2>
        <p className="section-sub">
          A scrollable view of recent certificates and courses.
        </p>
      </div>
      <div className="cert-window">
        <div className="cert-window-bar">
          <span className="cert-dot red" />
          <span className="cert-dot yellow" />
          <span className="cert-dot green" />
          <div className="cert-window-title">credentials.app</div>
        </div>
        <div className="cert-scroll">
          {CERTIFICATIONS.map((c, i) => (
            <div className="cert-row" key={i}>
              <div className="cert-row-left">
                <div className="cert-row-issuer">{c.issuer}</div>
                <div className="cert-row-title">{c.title}</div>
                <div className="cert-row-detail">{c.detail}</div>
              </div>
              <div className="cert-row-right">
                <span className="cert-badge">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cert-cta">
        <a
          className="btn btn-primary"
          href={LINKS.credly}
          target="_blank"
          rel="noreferrer"
        >
          See full Credly →
        </a>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="section">
      <div className="section-head">
        <p className="section-eyebrow">Awards & Achievements</p>
        <h2 className="section-title">A few proud moments.</h2>
      </div>
      <div className="awards-timeline">
        {AWARDS.map((a, i) => (
          <div className="award-item" key={i}>
            <div className="award-year">{a.year}</div>
            <div className="award-line" />
            <div className="award-body">
              <div className="award-place">{a.place}</div>
              <div className="award-title">{a.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="section section-connect">
      <div className="connect-card">
        <p className="section-eyebrow light">Connect</p>
        <h2 className="connect-title">Let's build something.</h2>
        <p className="connect-sub">
          I'm open to summer/fall 2026 internships and meaningful
          collaborations. The best place to reach me is LinkedIn.
        </p>
        <div className="connect-buttons">
          <a
            className="btn btn-primary btn-lg"
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn →
          </a>
          <a
            className="btn btn-ghost btn-lg"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Natasha Naorem</span>
        <span>·</span>
        <span>Built with React</span>
      </footer>
    </section>
  );
}

/* ---------- App shell ---------- */

function App() {
  const [active, setActive] = useState("intro");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      Boolean
    );
    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the section closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="page">
      <div className="page-bg" aria-hidden="true" />
      <SideNav active={active} onClick={handleNavClick} />
      <main className="page-main">
        <Intro />
        <Gallery />
        <Experience />
        <Projects />
        <Certifications />
        <Awards />
        <Connect />
      </main>
    </div>
  );
}

export default App;
