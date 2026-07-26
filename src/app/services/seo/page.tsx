import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function SeoPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/services">Services</Link><span>/</span>SEO
      </div>

      <section className="service-hero">
        <div className="wrap">
          <div className="kicker">Service — 05</div>
          <h1>Rankings are the <em>side effect</em>. Qualified traffic is the point.</h1>
          <p className="lead">We don't chase vanity keywords. We build organic visibility around the searches your actual buyers make, and we measure success in qualified leads and revenue — not just position #1.</p>
          <div className="service-hero-actions">
            <Link href="#cta" className="btn-primary">Start this project</Link>
            <Link href="#included" className="btn-ghost-dark">See what's included →</Link>
          </div>

          <div className="service-meta-strip">
            <div className="cell"><div className="label">Typical timeline</div><div className="val">Ongoing, 6 mo min.</div></div>
            <div className="cell"><div className="label">Engagement type</div><div className="val">Monthly retainer</div></div>
            <div className="cell"><div className="label">Deliverable</div><div className="val">Rankings + traffic reports</div></div>
            <div className="cell"><div className="label">Best fit for</div><div className="val">Content-driven businesses</div></div>
          </div>
        </div>
      </section>

      <section className="block included" id="included">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What's included</div>
            <h2>Everything between a <em>search</em> and a <em>customer</em>.</h2>
            <p>Technical fixes, content, and links — the three levers that actually move rankings, run together instead of separately.</p>
          </div>
          <div className="included-grid">
            <div className="included-card">
              <span className="idx">01 / TECHNICAL</span>
              <h4>Technical SEO audit &amp; fixes</h4>
              <p>Site speed, crawlability, structured data, and indexing issues resolved before content work begins — most gains are lost here first.</p>
            </div>
            <div className="included-card">
              <span className="idx">02 / KEYWORD STRATEGY</span>
              <h4>Search intent mapping</h4>
              <p>Keyword research built around what your buyers actually type at each stage, not just search volume.</p>
            </div>
            <div className="included-card">
              <span className="idx">03 / CONTENT</span>
              <h4>Content production</h4>
              <p>Pages and articles written to rank and convert, briefed against real competitor gaps rather than generic templates.</p>
            </div>
            <div className="included-card">
              <span className="idx">04 / AUTHORITY</span>
              <h4>Link building &amp; digital PR</h4>
              <p>Earned links from relevant, credible sources — no link farms or tactics that risk a future penalty.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block kpi">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What we report on</div>
            <h2>Four numbers, <em>every month</em>, no exceptions.</h2>
          </div>
          <div className="kpi-grid">
            <div className="kpi-cell"><div className="num">Organic traffic</div><div className="desc">sessions from search, by landing page</div></div>
            <div className="kpi-cell"><div className="num">Rankings</div><div className="desc">position tracking on priority keywords</div></div>
            <div className="kpi-cell"><div className="num">Qualified leads</div><div className="desc">organic-sourced leads that meet ICP</div></div>
            <div className="kpi-cell"><div className="num">Domain authority</div><div className="desc">trend in referring domain quality</div></div>
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">How it runs</div>
            <h2>Four stages, in this <em>order</em>, every time.</h2>
            <p>Technical foundations come before content, and content before link building — reversing the order wastes budget.</p>
          </div>
          <div className="process-list">
            <div className="process-row">
              <div className="step-num">1</div>
              <h4>Audit</h4>
              <p>A full technical and content audit against your top competitors, identifying what's blocking rankings today.</p>
            </div>
            <div className="process-row">
              <div className="step-num">2</div>
              <h4>Foundation</h4>
              <p>Technical fixes and on-page optimization across priority pages, so new content isn't built on a broken base.</p>
            </div>
            <div className="process-row">
              <div className="step-num">3</div>
              <h4>Content &amp; authority</h4>
              <p>A monthly content calendar paired with outreach for earned links, targeting the keyword gaps identified in the audit.</p>
            </div>
            <div className="process-row">
              <div className="step-num">4</div>
              <h4>Measure &amp; refine</h4>
              <p>Monthly reporting against traffic and lead targets, with the plan adjusted based on what's actually moving the needle.</p>
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
              <summary>How long until we see results?<span className="plus">+</span></summary>
              <p>Technical fixes can show impact within weeks. Meaningful ranking and traffic movement from content and links typically takes 3–6 months — anyone promising faster is usually cutting corners that risk a penalty later.</p>
            </details>
            <details className="faq-item">
              <summary>Do you guarantee rankings?<span className="plus">+</span></summary>
              <p>No one honestly can — search algorithms aren't something any agency controls. We commit to the work and the reporting, and we've consistently moved the metrics that matter for past clients.</p>
            </details>
            <details className="faq-item">
              <summary>Do you write the content, or do we?<span className="plus">+</span></summary>
              <p>We write it, briefed by our strategist and reviewed by your team before it publishes — you always have final sign-off.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Tell us your market. We'll tell you honestly what it takes to <em>rank</em> in it.</h2>
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
