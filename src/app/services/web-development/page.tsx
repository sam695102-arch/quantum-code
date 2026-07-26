import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function WebDevelopmentPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/services">Services</Link><span>/</span>Web Development
      </div>

      <section className="service-hero">
        <div className="wrap">
          <div className="kicker">Service — 01</div>
          <h1>Websites built like <em>infrastructure</em>, not like a template.</h1>
          <p className="lead">Your website is the one property you fully control — not rented reach on someone else's platform. We build it to load fast, rank honestly, and hold up under real traffic, not just look right in the first demo.</p>
          <div className="service-hero-actions">
            <Link href="#cta" className="btn-primary">Start this project</Link>
            <Link href="#included" className="btn-ghost-dark">See what's included →</Link>
          </div>

          <div className="service-meta-strip">
            <div className="cell"><div className="label">Typical timeline</div><div className="val">6–10 weeks</div></div>
            <div className="cell"><div className="label">Engagement type</div><div className="val">Fixed scope</div></div>
            <div className="cell"><div className="label">Deliverable</div><div className="val">Production site + CMS</div></div>
            <div className="cell"><div className="label">Best fit for</div><div className="val">Growth-stage teams</div></div>
          </div>
        </div>
      </section>

      <section className="block included" id="included">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What's included</div>
            <h2>A site your team can <em>run</em>, not just launch.</h2>
            <p>Not a page builder export — a codebase your engineers can extend and your marketers can edit without filing a ticket.</p>
          </div>
          <div className="included-grid">
            <div className="included-card">
              <span className="idx">01 / ARCHITECTURE</span>
              <h4>Information architecture &amp; UX</h4>
              <p>Sitemap and page flows built around what your visitors actually came to do, tested before a single screen is designed.</p>
            </div>
            <div className="included-card">
              <span className="idx">02 / BUILD</span>
              <h4>Front-end &amp; back-end development</h4>
              <p>A responsive, accessible build on a modern framework, wired to a CMS your team can update without a developer.</p>
            </div>
            <div className="included-card">
              <span className="idx">03 / PERFORMANCE</span>
              <h4>Speed &amp; SEO foundations</h4>
              <p>Core Web Vitals, semantic markup, and clean metadata handled at build time — not bolted on after launch.</p>
            </div>
            <div className="included-card">
              <span className="idx">04 / HANDOVER</span>
              <h4>Documentation &amp; training</h4>
              <p>A recorded walkthrough and written guide so your team can publish, update, and troubleshoot without calling us first.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block stack">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What we build with</div>
            <h2>A stack chosen for <em>longevity</em>, not novelty.</h2>
            <p>We pick technology your future team can hire for — not whatever's trending this quarter.</p>
          </div>
          <div className="stack-row">
            <span className="stack-pill">Next.js</span>
            <span className="stack-pill">TypeScript</span>
            <span className="stack-pill">Tailwind CSS</span>
            <span className="stack-pill">Sanity / Contentful</span>
            <span className="stack-pill">PostgreSQL</span>
            <span className="stack-pill">Vercel / AWS</span>
            <span className="stack-pill">Cloudflare</span>
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">How it runs</div>
            <h2>Five stages, in this <em>order</em>, every time.</h2>
            <p>Each stage produces a decision the next stage depends on — nothing gets built twice.</p>
          </div>
          <div className="process-list">
            <div className="process-row">
              <div className="step-num">1</div>
              <h4>Discovery</h4>
              <p>We map your goals, your audience's real tasks, and the content you already have before we touch a wireframe.</p>
            </div>
            <div className="process-row">
              <div className="step-num">2</div>
              <h4>Architecture &amp; wireframes</h4>
              <p>Sitemap and low-fidelity page flows, reviewed for what a visitor needs to find in the first ten seconds.</p>
            </div>
            <div className="process-row">
              <div className="step-num">3</div>
              <h4>Design</h4>
              <p>High-fidelity screens for every template, in your brand system, approved page by page rather than all at once.</p>
            </div>
            <div className="process-row">
              <div className="step-num">4</div>
              <h4>Build &amp; QA</h4>
              <p>Development against the approved designs, with cross-browser and accessibility testing before anything ships.</p>
            </div>
            <div className="process-row">
              <div className="step-num">5</div>
              <h4>Launch &amp; handover</h4>
              <p>A staged go-live, performance check on real traffic, and a working session so your team owns the site from day one.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="block faq">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">Questions</div>
            <h2>Before you <em>reach out</em>.</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Do you work with our existing design, or design from scratch?<span className="plus">+</span></summary>
              <p>Either. If you have an approved design system, we build to it exactly. If not, design is part of the engagement.</p>
            </details>
            <details className="faq-item">
              <summary>Will our team be able to update content without you?<span className="plus">+</span></summary>
              <p>Yes — every build ships with a CMS and a walkthrough, specifically so routine edits never require a developer.</p>
            </details>
            <details className="faq-item">
              <summary>What happens after launch if something breaks?<span className="plus">+</span></summary>
              <p>We include a fixed post-launch support window in every engagement, and offer ongoing maintenance plans beyond that.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Tell us what the site needs to <em>do</em>. We'll tell you honestly what it'll take to build it right.</h2>
            <div className="cta-actions">
              <Link href="/contact" className="btn-champagne">Get free consultation</Link>
              <Link href="/portfolio" className="btn-ghost-light">View portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <QuantumFooter />
    </main>
  );
}
