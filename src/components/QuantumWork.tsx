import React from "react";

export default function QuantumWork() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Recent work</div>
          <h2>A ledger system rebuilt <em>underneath</em> a live product.</h2>
          <p>An 8-month engagement replacing a fintech client's transaction core while it processed live volume, with zero downtime windows used.</p>
        </div>
        <div className="work-grid">
          <figure className="work-visual">
            <div className="tag">CASE — TRANSACTION CORE REBUILD</div>
            <blockquote>"They rebuilt the engine while the plane stayed in the air. We never once had to explain a maintenance window to our customers."</blockquote>
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
  );
}
