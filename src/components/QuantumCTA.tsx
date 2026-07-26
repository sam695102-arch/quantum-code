import React from "react";
import Link from "next/link";

export default function QuantumCTA() {
  return (
    <section className="cta" id="cta">
      <div className="wrap">
        <div className="cta-inner">
          <h2>Tell us the problem. We'll tell you <em>honestly</em> if we're the right fit.</h2>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">Start a project</Link>
            <Link href="/contact" className="btn-ghost">Book a call</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
