import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function GraphicDesignPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/services">Services</Link><span>/</span>Graphic Design
      </div>

      <section className="service-hero">
        <div className="wrap">
          <div className="kicker">Service — 03</div>
          <h1>Design that carries the <em>weight</em> of your brand, not just its logo.</h1>
          <p className="lead">Visual identity is the first argument you make for your business, before a single word is read. We build identity systems and visual assets precise enough to hold up at every size, on every surface, for years — not just the pitch deck.</p>
          <div className="service-hero-actions">
            <Link href="#cta" className="btn-primary">Start this project</Link>
            <Link href="#included" className="btn-ghost-dark">See what's included →</Link>
          </div>

          <div className="service-meta-strip">
            <div className="cell"><div className="label">Typical timeline</div><div className="val">4–6 weeks</div></div>
            <div className="cell"><div className="label">Engagement type</div><div className="val">Fixed scope</div></div>
            <div className="cell"><div className="label">Deliverable</div><div className="val">Full identity system</div></div>
            <div className="cell"><div className="label">Best fit for</div><div className="val">Series A–C teams</div></div>
          </div>
        </div>
      </section>

      <section className="block included" id="included">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What's included</div>
            <h2>Everything a brand needs to <em>show up</em> consistently.</h2>
            <p>Not a logo file and a color code — a working system your team can apply without calling us every time.</p>
          </div>
          <div className="included-grid">
            <div className="included-card">
              <span className="idx">01 / IDENTITY</span>
              <h4>Logo &amp; mark system</h4>
              <p>Primary mark, secondary lockups, and a monogram — each tested at favicon size and billboard size before it's approved.</p>
            </div>
            <div className="included-card">
              <span className="idx">02 / TYPE &amp; COLOR</span>
              <h4>Type scale and palette</h4>
              <p>A documented type system and color palette with accessible pairings, so contrast is never a debate downstream.</p>
            </div>
            <div className="included-card">
              <span className="idx">03 / APPLICATION</span>
              <h4>Applied templates</h4>
              <p>Business cards, deck cover, social templates, and email signature — the assets your team reaches for weekly.</p>
            </div>
            <div className="included-card">
              <span className="idx">04 / GUIDELINES</span>
              <h4>Brand guidelines document</h4>
              <p>A living reference covering usage, spacing, and the rules for extending the system to formats we didn't design.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">How it runs</div>
            <h2>Four stages, in this <em>order</em>, every time.</h2>
            <p>Each stage produces a decision the next stage depends on — so nothing gets designed twice.</p>
          </div>
          <div className="process-list">
            <div className="process-row">
              <div className="step-num">1</div>
              <h4>Discovery</h4>
              <p>We interview your team and your customers to find the one thing the brand has to communicate that competitors can't claim.</p>
            </div>
            <div className="process-row">
              <div className="step-num">2</div>
              <h4>Direction</h4>
              <p>Two distinct visual directions, presented with reasoning — not a mood board, a point of view you can react to.</p>
            </div>
            <div className="process-row">
              <div className="step-num">3</div>
              <h4>Build-out</h4>
              <p>The chosen direction becomes a full system: type, color, layout logic, and the core application templates.</p>
            </div>
            <div className="process-row">
              <div className="step-num">4</div>
              <h4>Handover</h4>
              <p>Guidelines, source files, and a working session with your team so the system survives without us in the room.</p>
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
              <summary>Do you design logos on their own, without the full system?<span className="plus">+</span></summary>
              <p>Rarely. A mark designed without its supporting system tends to break the first time it meets a new surface — we'll usually recommend the full package even at a smaller scope.</p>
            </details>
            <details className="faq-item">
              <summary>Can you work from an existing brand rather than starting fresh?<span className="plus">+</span></summary>
              <p>Yes. Most engagements are a refresh, not a rebuild — we audit what's working before changing anything.</p>
            </details>
            <details className="faq-item">
              <summary>What do you need from us to start?<span className="plus">+</span></summary>
              <p>Access to your team for two discovery interviews and any existing brand assets, even outdated ones — they tell us what to keep.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Tell us about your brand. We'll tell you honestly if a <em>refresh</em> or a <em>rebuild</em> is what it needs.</h2>
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
