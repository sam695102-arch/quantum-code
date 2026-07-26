import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function DigitalMarketingPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/services">Services</Link><span>/</span>Digital Marketing
      </div>

      <section className="service-hero">
        <div className="wrap">
          <div className="kicker">Service — 04</div>
          <h1>Marketing measured in <em>revenue</em>, not impressions.</h1>
          <p className="lead">We run campaigns the way we write software — with a hypothesis, an instrument, and a number we're accountable to. If a channel doesn't move pipeline, we say so and reallocate the budget, in writing, every month.</p>
          <div className="service-hero-actions">
            <Link href="#cta" className="btn-primary">Start this project</Link>
            <Link href="#included" className="btn-ghost-dark">See what's included →</Link>
          </div>

          <div className="service-meta-strip">
            <div className="cell"><div className="label">Typical timeline</div><div className="val">Ongoing, 6 mo min.</div></div>
            <div className="cell"><div className="label">Engagement type</div><div className="val">Monthly retainer</div></div>
            <div className="cell"><div className="label">Deliverable</div><div className="val">Campaigns + live reporting</div></div>
            <div className="cell"><div className="label">Best fit for</div><div className="val">Teams with a sales funnel</div></div>
          </div>
        </div>
      </section>

      <section className="block included" id="included">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What's included</div>
            <h2>Everything between the <em>ad</em> and the <em>close</em>.</h2>
            <p>Not a media-buying service — a function that owns the number your sales team actually cares about.</p>
          </div>
          <div className="included-grid">
            <div className="included-card">
              <span className="idx">01 / STRATEGY</span>
              <h4>Channel &amp; budget strategy</h4>
              <p>A media plan built from your actual sales cycle and margins, not a generic split across every available channel.</p>
            </div>
            <div className="included-card">
              <span className="idx">02 / CAMPAIGNS</span>
              <h4>Paid &amp; organic execution</h4>
              <p>Search, paid social, and content built and shipped weekly, with creative refreshed before it fatigues.</p>
            </div>
            <div className="included-card">
              <span className="idx">03 / MEASUREMENT</span>
              <h4>Attribution &amp; tracking setup</h4>
              <p>Server-side tracking and a shared dashboard, so every dollar spent is traceable to a lead, not just a click.</p>
            </div>
            <div className="included-card">
              <span className="idx">04 / REPORTING</span>
              <h4>Monthly performance review</h4>
              <p>A working session covering what worked, what didn't, and where budget moves next — no vanity-metric decks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block stack">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">Channels we run</div>
            <h2>Chosen by <em>fit</em>, not by habit.</h2>
            <p>We don't run every channel for every client — only the ones your audience actually spends time in.</p>
          </div>
          <div className="stack-row">
            <span className="stack-pill">Google Search &amp; PMax</span>
            <span className="stack-pill">LinkedIn Ads</span>
            <span className="stack-pill">Meta Ads</span>
            <span className="stack-pill">SEO &amp; content</span>
            <span className="stack-pill">Email &amp; lifecycle</span>
            <span className="stack-pill">GA4 &amp; GTM</span>
            <span className="stack-pill">HubSpot / Salesforce</span>
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
            <div className="kpi-cell"><div className="num">CAC</div><div className="desc">cost to acquire a customer, by channel</div></div>
            <div className="kpi-cell"><div className="num">CPL</div><div className="desc">cost per qualified lead, weekly trend</div></div>
            <div className="kpi-cell"><div className="num">ROAS</div><div className="desc">return on ad spend, by campaign</div></div>
            <div className="kpi-cell"><div className="num">Pipeline</div><div className="desc">marketing-sourced revenue in the funnel</div></div>
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">How it runs</div>
            <h2>A monthly cadence, held to <em>on purpose</em>.</h2>
            <p>The same rhythm every month, so performance is compared against last month, not against a shifting process.</p>
          </div>
          <div className="process-list">
            <div className="process-row">
              <div className="step-num">1</div>
              <h4>Audit &amp; baseline</h4>
              <p>We measure what's already running before changing anything, so month-one gains are real, not measurement artifacts.</p>
            </div>
            <div className="process-row">
              <div className="step-num">2</div>
              <h4>Plan</h4>
              <p>A written media plan with the budget split, the hypothesis behind each channel, and the target CAC.</p>
            </div>
            <div className="process-row">
              <div className="step-num">3</div>
              <h4>Launch &amp; iterate</h4>
              <p>Campaigns go live within two weeks and are reviewed weekly against target, not left to run untouched for a month.</p>
            </div>
            <div className="process-row">
              <div className="step-num">4</div>
              <h4>Report &amp; reallocate</h4>
              <p>A monthly review of what earned its budget and what didn't, with spend moved accordingly — in writing, not just discussed.</p>
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
              <summary>What's the minimum ad spend you'll work with?<span className="plus">+</span></summary>
              <p>We generally take on engagements with at least $8k/month in media spend, excluding our retainer — below that, channel testing isn't statistically meaningful.</p>
            </details>
            <details className="faq-item">
              <summary>Do you require a long-term contract?<span className="plus">+</span></summary>
              <p>We ask for a 6-month minimum, since most channels need 2–3 months of data before a fair verdict on performance is possible.</p>
            </details>
            <details className="faq-item">
              <summary>Will we own the ad accounts and data?<span className="plus">+</span></summary>
              <p>Yes — every account, pixel, and dataset is created under your ownership from day one, so nothing is stranded if the engagement ends.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Tell us your funnel. We'll tell you honestly which <em>channels</em> are worth the spend.</h2>
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
