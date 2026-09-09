"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import SelectedWork from "@/components/SelectedWork";
import "./quantum.css";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const hero = canvas.closest('.hero') as HTMLElement;
    if (!hero) return;

    let W: number, H: number, DPR: number;
    let particles: any[] = [];
    const CHAMPAGNE = [228, 200, 150];
    const COUNT = 60;
    let animationFrameId: number;

    function size() {
      const rect = hero.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width; 
      H = rect.height;
      
      if (canvas) {
        canvas.width = W * DPR; 
        canvas.height = H * DPR;
        canvas.style.width = W + 'px'; 
        canvas.style.height = H + 'px';
      }
      
      ctx?.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function makeParticles() {
      particles = [];
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    function step() {
      ctx?.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx; 
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < -20) p.x = W + 20; 
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; 
        if (p.y > H + 20) p.y = -20;
      }

      const maxDist = Math.min(180, W * 0.16);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let a = particles[i], b = particles[j];
          let dx = a.x - b.x, dy = a.y - b.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            let alpha = (1 - dist / maxDist) * 0.16;
            if (ctx) {
              ctx.strokeStyle = `rgba(${CHAMPAGNE[0]},${CHAMPAGNE[1]},${CHAMPAGNE[2]},${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        let glow = 0.5 + Math.sin(p.pulse) * 0.5;
        let alpha = 0.35 + glow * 0.4;
        if (ctx) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${CHAMPAGNE[0]},${CHAMPAGNE[1]},${CHAMPAGNE[2]},${alpha})`;
          ctx.arc(p.x, p.y, p.r + glow * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(step);
    }

    size();
    makeParticles();
    animationFrameId = requestAnimationFrame(step);

    let resizeTimer: any;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { size(); makeParticles(); }, 150);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="quantum-page">
      <QuantumHeader />

      <section className="hero">
        <canvas id="quantum-canvas" ref={canvasRef} aria-hidden="true"></canvas>
        <div className="orbit-field" aria-hidden="true">
          <svg viewBox="0 0 780 780">
            <ellipse className="orbit-ring ring1" cx="390" cy="390" rx="360" ry="200" />
            <ellipse className="orbit-ring ring2" cx="390" cy="390" rx="270" ry="270" />
            <ellipse className="orbit-ring ring3" cx="390" cy="390" rx="330" ry="140" />
            <circle className="qubit-node" cx="30" cy="390" r="5" />
            <circle className="qubit-node" cx="660" cy="390" r="4" />
            <circle className="qubit-node" cx="390" cy="120" r="3.5" />
          </svg>
        </div>
        <div className="wrap">
          <div className="eyebrow">Software engineering studio</div>
          <h1>Software built with the <em>precision</em> of a proof, not the speed of a sprint.</h1>
          <p className="lead">Quantum Code is a small studio of engineers who ship production systems for teams who&apos;d rather wait two weeks for the right architecture than launch tomorrow with the wrong one.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">Start a project</Link>
            <Link href="#work" className="btn-ghost">See how we work &rarr;</Link>
          </div>
          <div className="hero-meta">
            <div className="item"><div className="num">3</div><div className="label">years in production systems</div></div>
            <div className="item"><div className="num">50+</div><div className="label">systems shipped, still running</div></div>
            <div className="item"><div className="num">6</div><div className="label">engineers, no bench, no juniors on your code</div></div>
          </div>
        </div>
      </section>

      <section className="practice" id="practice">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">What we take on</div>
            <h2>Three kinds of problems, <em>chosen deliberately</em>.</h2>
            <p>We don&apos;t run a menu of services. We take on the problems below because they&apos;re the ones where careful engineering compounds — and we say no to the rest.</p>
          </div>
          <div className="practice-list">
            <div className="practice-row">
              <div className="idx">01</div>
              <h3>Systems that can&apos;t go down</h3>
              <p>Payments, ledgers, infrastructure control planes — software where a bug isn&apos;t an inconvenience, it&apos;s an incident. We design for the failure mode first.</p>
            </div>
            <div className="practice-row">
              <div className="idx">02</div>
              <h3>Products outgrowing their prototype</h3>
              <p>The version that got you to product-market fit is rarely the version that scales. We rebuild the load-bearing parts without stopping the business.</p>
            </div>
            <div className="practice-row">
              <div className="idx">03</div>
              <h3>Teams that need a second set of senior hands</h3>
              <p>Embedded engineering for stretches of 3–9 months, working inside your codebase and your standards, not around them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">How we work</div>
            <h2>Three habits we don&apos;t <em>compromise</em> on.</h2>
            <p>None of this is process for its own sake. Each habit exists because we&apos;ve watched its absence cost a client months.</p>
          </div>
          <div className="approach-grid">
            <div className="approach-card">
              <span className="mark">&ldquo;</span>
              <h3>We write the design doc first</h3>
              <p>Before a line of code, we write down the architecture, the tradeoffs we considered, and the ones we rejected — so you&apos;re reviewing a decision, not a diff.</p>
            </div>
            <div className="approach-card">
              <span className="mark">&ldquo;</span>
              <h3>Senior engineers only, start to finish</h3>
              <p>The person who scopes your project is the person who builds it. No handoff to a team you haven&apos;t met.</p>
            </div>
            <div className="approach-card">
              <span className="mark">&ldquo;</span>
              <h3>We hand over systems you can leave</h3>
              <p>Documentation, runbooks, and a walkthrough with your own team — built so our involvement is optional, not load-bearing.</p>
            </div>
          </div>
        </div>
      </section>

      <SelectedWork />

      <section className="work" id="work">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Recent work</div>
            <h2>A ledger system rebuilt <em>underneath</em> a live product.</h2>
            <p>An 8-month engagement replacing a fintech client&apos;s transaction core while it processed live volume, with zero downtime windows used.</p>
          </div>
          <div className="work-grid">
            <figure className="work-visual">
              <div className="tag">CASE — TRANSACTION CORE REBUILD</div>
              <blockquote>&quot;They rebuilt the engine while the plane stayed in the air. We never once had to explain a maintenance window to our customers.&quot;</blockquote>
              <figcaption>— VP Engineering, fintech client</figcaption>
            </figure>
            <div className="work-detail">
              <div className="work-stat">
                <div className="figure">0</div>
                <div className="desc">unplanned outages during the migration</div>
              </div>
              <div className="work-stat">
                <div className="figure">3.4x</div>
                <div className="desc">throughput headroom after the rebuild</div>
              </div>
              <div className="work-stat">
                <div className="figure">8 mo</div>
                <div className="desc">from design doc to full cutover</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Tell us the problem. We&apos;ll tell you <em>honestly</em> if we&apos;re the right fit.</h2>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary">Start a project</Link>
              <Link href="/contact" className="btn-ghost">Book a call</Link>
            </div>
          </div>
        </div>
      </section>

      <QuantumFooter />
    </main>
  );
}
