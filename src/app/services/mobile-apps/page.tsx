import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function MobileAppsPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/services">Services</Link><span>/</span>Mobile App Development
      </div>

      <section className="service-hero">
        <div className="wrap">
          <div className="kicker">Service — 02</div>
          <h1>Apps built to survive their <em>first app-store review</em>.</h1>
          <p className="lead">Most mobile projects fail at the handoff between design and engineering, or at the App Store review most teams treat as an afterthought. We build native-quality apps and own that process end to end, so launch day isn't a surprise.</p>
          <div className="service-hero-actions">
            <Link href="#cta" className="btn-primary">Start this project</Link>
            <Link href="#included" className="btn-ghost-dark">See what's included →</Link>
          </div>

          <div className="service-meta-strip">
            <div className="cell"><div className="label">Typical timeline</div><div className="val">10–16 weeks</div></div>
            <div className="cell"><div className="label">Engagement type</div><div className="val">Fixed scope</div></div>
            <div className="cell"><div className="label">Deliverable</div><div className="val">iOS + Android app</div></div>
            <div className="cell"><div className="label">Best fit for</div><div className="val">Product-led teams</div></div>
          </div>
        </div>
      </section>

      <section className="block included" id="included">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What's included</div>
            <h2>Everything from <em>first screen</em> to <em>store approval</em>.</h2>
            <p>Not a wrapped web view — a real mobile app your team can maintain, backed by an API your product can grow into.</p>
          </div>
          <div className="included-grid">
            <div className="included-card">
              <span className="idx">01 / PRODUCT</span>
              <h4>Product scoping &amp; UX</h4>
              <p>User flows and wireframes built around the core jobs your app has to do well, not every feature that seems possible.</p>
            </div>
            <div className="included-card">
              <span className="idx">02 / BUILD</span>
              <h4>Cross-platform development</h4>
              <p>A single codebase targeting iOS and Android, with native modules where performance genuinely requires them.</p>
            </div>
            <div className="included-card">
              <span className="idx">03 / BACKEND</span>
              <h4>API &amp; backend integration</h4>
              <p>A backend built to support real usage at scale, whether that's a new API or integration with your existing systems.</p>
            </div>
            <div className="included-card">
              <span className="idx">04 / LAUNCH</span>
              <h4>Store submission &amp; support</h4>
              <p>We handle App Store and Play Store submission, common rejection reasons fixed pre-emptively, plus a post-launch support window.</p>
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
            <span className="stack-pill">React Native</span>
            <span className="stack-pill">Swift</span>
            <span className="stack-pill">Kotlin</span>
            <span className="stack-pill">Node.js</span>
            <span className="stack-pill">PostgreSQL</span>
            <span className="stack-pill">Firebase</span>
            <span className="stack-pill">AWS</span>
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
              <h4>Discovery &amp; scoping</h4>
              <p>We define the core user flows and technical constraints before a screen is designed, so scope doesn't creep mid-build.</p>
            </div>
            <div className="process-row">
              <div className="step-num">2</div>
              <h4>UX &amp; UI design</h4>
              <p>Wireframes and high-fidelity screens for every core flow, tested against real usage patterns, not just aesthetics.</p>
            </div>
            <div className="process-row">
              <div className="step-num">3</div>
              <h4>Build</h4>
              <p>Development in two-week sprints with a demo at the end of each, so you see working software early and often.</p>
            </div>
            <div className="process-row">
              <div className="step-num">4</div>
              <h4>QA &amp; device testing</h4>
              <p>Testing across real devices and OS versions, not just simulators — where most mobile bugs actually hide.</p>
            </div>
            <div className="process-row">
              <div className="step-num">5</div>
              <h4>Launch &amp; handover</h4>
              <p>Store submission, a monitored launch window, and a walkthrough so your team can ship updates without us.</p>
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
              <summary>Do you build native apps, or cross-platform?<span className="plus">+</span></summary>
              <p>Cross-platform by default, which covers the large majority of apps well and halves the engineering cost. We recommend fully native only when a feature genuinely requires it — camera-heavy or AR-heavy apps, for instance.</p>
            </details>
            <details className="faq-item">
              <summary>Who handles app store approval issues?<span className="plus">+</span></summary>
              <p>We do. Store rejections are usually predictable — we build against known guidelines from day one and handle any resubmission at no extra cost within the engagement.</p>
            </details>
            <details className="faq-item">
              <summary>Can our team maintain the app after launch?<span className="plus">+</span></summary>
              <p>Yes — every build ships with documentation and a handover session, specifically so your team isn't dependent on us for routine updates.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Tell us what the app needs to <em>do</em>. We'll tell you honestly what it'll take to build it right.</h2>
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
