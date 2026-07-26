import React from "react";
import Link from "next/link";

export default function QuantumHero() {
  return (
    <section className="hero">
      <div className="orbit-field" aria-hidden="true">
        <svg viewBox="0 0 780 780">
          <ellipse className="orbit-ring ring1" cx="390" cy="390" rx="360" ry="200"/>
          <ellipse className="orbit-ring ring2" cx="390" cy="390" rx="270" ry="270"/>
          <ellipse className="orbit-ring ring3" cx="390" cy="390" rx="330" ry="140"/>
          <circle className="qubit-node" cx="30" cy="390" r="5"/>
          <circle className="qubit-node" cx="660" cy="390" r="4"/>
          <circle className="qubit-node" cx="390" cy="120" r="3.5"/>
        </svg>
      </div>
      <div className="wrap">
        <div className="eyebrow">Software engineering studio</div>
        <h1>Software built with the <em>precision</em> of a proof, not the speed of a sprint.</h1>
        <p className="lead">Quantum Code is a small studio of engineers who ship production systems for teams who'd rather wait two weeks for the right architecture than launch tomorrow with the wrong one.</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn-primary">Start a project</Link>
          <Link href="/services" className="btn-ghost">See how we work →</Link>
        </div>
        <div className="hero-meta">
          <div className="item"><div className="num">3</div><div className="label">years in production systems</div></div>
          <div className="item"><div className="num">50+</div><div className="label">systems shipped, still running</div></div>
          <div className="item"><div className="num">6</div><div className="label">engineers, no bench, no juniors on your code</div></div>
        </div>
      </div>
    </section>
  );
}
