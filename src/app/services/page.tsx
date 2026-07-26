import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function ServicesPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/">Home</Link><span>/</span>Services
      </div>

      <section className="services-hero">
        <div className="wrap">
          <div className="kicker">What we do</div>
          <h1>Five disciplines. One team, <em>accountable</em> for all of them.</h1>
          <p className="lead">Every service below is run by the same senior people who scope it — no handoff between the person who pitches the work and the person who builds it. Pick one, or let us tell you which combination your project actually needs.</p>
        </div>
      </section>

      <section className="services-list-section">
        <div className="wrap">

          <Link href="/services/web-development" className="service-row">
            <div className="idx">01</div>
            <div className="content">
              <h3>Web Development</h3>
              <p>Websites built like infrastructure, not a template — fast, accessible, and editable by your own team without calling us first.</p>
              <div className="tags"><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">CMS</span></div>
            </div>
            <div className="arrow">→</div>
          </Link>

          <Link href="/services/mobile-apps" className="service-row">
            <div className="idx">02</div>
            <div className="content">
              <h3>Mobile App Development</h3>
              <p>iOS and Android apps built to survive their first app-store review, with a backend that scales past launch day.</p>
              <div className="tags"><span className="tag">React Native</span><span className="tag">Swift</span><span className="tag">Kotlin</span></div>
            </div>
            <div className="arrow">→</div>
          </Link>

          <Link href="/services/graphic-design" className="service-row">
            <div className="idx">03</div>
            <div className="content">
              <h3>Graphic Design</h3>
              <p>Identity systems built to hold up at every size, on every surface — a working brand your team can apply, not just a logo file.</p>
              <div className="tags"><span className="tag">Brand systems</span><span className="tag">Guidelines</span></div>
            </div>
            <div className="arrow">→</div>
          </Link>

          <Link href="/services/digital-marketing" className="service-row">
            <div className="idx">04</div>
            <div className="content">
              <h3>Digital Marketing</h3>
              <p>Campaigns measured in pipeline and revenue, not impressions — with budget reallocated monthly based on what actually earns it.</p>
              <div className="tags"><span className="tag">Paid media</span><span className="tag">Attribution</span></div>
            </div>
            <div className="arrow">→</div>
          </Link>

          <Link href="/services/seo" className="service-row">
            <div className="idx">05</div>
            <div className="content">
              <h3>SEO</h3>
              <p>Technical fixes, content, and earned links run together — organic visibility built around the searches your actual buyers make.</p>
              <div className="tags"><span className="tag">Technical SEO</span><span className="tag">Content</span></div>
            </div>
            <div className="arrow">→</div>
          </Link>

        </div>
      </section>

      <section className="block why">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">Why one team for all of it</div>
            <h2>Most agencies split these five into five <em>handoffs</em>.</h2>
            <p>We keep them under one roof on purpose — a website that doesn't account for how it'll rank, or a brand that doesn't account for how it'll convert, is half a job.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="num">01</span>
              <h4>Nothing gets lost in translation</h4>
              <p>The engineer who builds your site talks directly to the strategist running your SEO — no brief passed through three account managers.</p>
            </div>
            <div className="why-card">
              <span className="num">02</span>
              <h4>Every discipline informs the others</h4>
              <p>Design decisions consider load time. Marketing decisions consider what the site can actually support. Nothing is built in isolation.</p>
            </div>
            <div className="why-card">
              <span className="num">03</span>
              <h4>One point of accountability</h4>
              <p>If something isn't working, there's no other agency to point to. We own the outcome across every discipline we're engaged for.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Not sure which service you need? Tell us the <em>goal</em> — we'll tell you the fit.</h2>
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
