import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";

export default function AboutPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />
      
      <div className="wrap breadcrumb">
        <Link href="/">Home</Link><span>/</span>About Us
      </div>

      <section className="about-hero">
        <div className="wrap">
          <div className="kicker">About the studio</div>
          <h1>A small team that would rather say <em>no</em> than ship something we can&apos;t stand behind.</h1>
          <p className="lead">Quantum Code is an engineering and marketing studio built around one idea: work slow enough to be precise, and stay small enough that precision doesn&apos;t get lost in a handoff.</p>
        </div>
      </section>

      <section className="block story">
        <div className="wrap">
          <div className="story-grid">
            <div className="story-copy">
              <p>We started Quantum Code after years of watching good ideas get lost inside agencies too large to hold a single point of view — where the person who pitched the project was never the person who built it, and quality quietly became someone else&apos;s problem.</p>
              <p>So we built the opposite. <strong>A studio small enough that the same senior team scopes, builds, and stands behind every engagement</strong> — whether that&apos;s a transaction system that can&apos;t go down, a brand that has to hold up at scale, or a marketing engine that has to prove its own ROI.</p>
              <p>We turn down more work than we take. That&apos;s by design, not capacity — the studio only grows as fast as our standards let it.</p>
            </div>
            <figure className="story-quote">
              <span className="mark">“</span>
              <p>We&apos;d rather tell a client the honest timeline than the comfortable one.</p>
              <figcaption>— FOUNDING PRINCIPLE, QUANTUM CODE</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="block values">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker-block">What we hold to</div>
            <h2>Three things we won&apos;t <em>trade away</em> for speed.</h2>
            <p>These aren&apos;t values on a poster — they&apos;re the reasons we&apos;ve said no to work that would have paid well.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="idx">01</span>
              <h4>Ownership over handoff</h4>
              <p>The engineer who scopes your project builds it. No bench, no rotating juniors learning on your codebase.</p>
            </div>
            <div className="value-card">
              <span className="idx">02</span>
              <h4>Evidence over opinion</h4>
              <p>Every recommendation — architectural or marketing — is backed by a number we can point to, not a preference.</p>
            </div>
            <div className="value-card">
              <span className="idx">03</span>
              <h4>Independence over dependency</h4>
              <p>We hand over systems your team can run without us. Our goal is to make our own continued involvement optional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stats-cell"><div className="num">3</div><div className="desc">years in production systems</div></div>
            <div className="stats-cell"><div className="num">50+</div><div className="desc">systems shipped, still running</div></div>
            <div className="stats-cell"><div className="num">6</div><div className="desc">senior engineers, no bench</div></div>
            <div className="stats-cell"><div className="num">0</div><div className="desc">client codebases we left undocumented</div></div>
          </div>
        </div>
      </section>



      <section className="block contact" id="contact">
        <div className="wrap">
          <div className="contact-panel">
            <div className="contact-copy">
              <h2>Talk to us <em>directly</em> — not a form that goes into a queue.</h2>
              <p>Call, email, or send a note about the project. A senior person on the team responds, usually within a day.</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E4C896" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="label">Phone</div>
                  <a className="val" href="tel:9016701455">901 670 1455</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E4C896" strokeWidth="1.6"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                </div>
                <div>
                  <div className="label">Email</div>
                  <a className="val" href="mailto:quantumcodehq@gmail.com">quantumcodehq@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuantumFooter />
    </main>
  );
}
