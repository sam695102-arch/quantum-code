import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, ProjectItem } from "@/data/projects";

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article
      className={`project-card layout-${project.layoutVariant}`}
      data-project={project.id}
    >
      <div className="project-visual-wrapper">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-browser-frame"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="browser-chrome">
            <div className="browser-dots">
              <span className="dot dot-close" />
              <span className="dot dot-min" />
              <span className="dot dot-max" />
            </div>
            <div className="browser-address">
              <svg
                className="lock-icon"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{project.displayUrl}</span>
            </div>
            <div className="browser-placeholder" />
          </div>
          <div className="browser-viewport">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1400}
              height={780}
              className="project-img"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 820px"
              priority={project.number === "01"}
            />
            <div className="browser-overlay" />
          </div>
        </a>
      </div>

      <div className="project-info-wrapper">
        <div className="project-meta-header">
          <span className="project-idx">{project.number}</span>
          <span className="project-divider" aria-hidden="true">—</span>
          <span className="project-cat">{project.category}</span>
        </div>

        <h3 className="project-title">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link"
          >
            {project.title}
          </a>
        </h3>

        <p className="project-desc">{project.description}</p>

        <div className="project-services">
          <div className="services-label">Services</div>
          <ul className="services-tags" aria-label="Services provided">
            {project.services.map((service, idx) => (
              <li key={idx} className="service-tag">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-action">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-live-btn"
            aria-label={`View live website for ${project.title} (opens in new tab)`}
          >
            <span>VIEW LIVE WEBSITE</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section className="selected-work" id="selected-work" aria-labelledby="selected-work-heading">
      <div className="wrap">
        {/* Section Intro */}
        <div className="section-head selected-work-head">
          <div className="kicker">SELECTED WORK · 01 — 04</div>
          <h2 id="selected-work-heading">
            Websites built to make businesses look better, <em>work smarter</em>, and grow.
          </h2>
          <p>
            A collection of websites designed and developed across fashion, luxury, e-commerce,
            sustainability, and renewable energy.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="project-showcase-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Trust Statement & Bottom CTA */}
        <div className="trust-banner">
          <div className="trust-copy">
            <p className="trust-statement">
              Different industries.
              <br />
              Different challenges.
              <br />
              <span className="trust-highlight">One focus — building digital experiences that work.</span>
            </p>
          </div>
          <div className="trust-action">
            <Link href="/contact" className="btn-primary trust-cta-btn">
              LET&apos;S BUILD YOUR WEBSITE <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
