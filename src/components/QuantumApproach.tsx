import React from "react";

export default function QuantumApproach() {
  return (
    <section className="approach" id="approach">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">How we work</div>
          <h2>Three habits we don't <em>compromise</em> on.</h2>
          <p>None of this is process for its own sake. Each habit exists because we've watched its absence cost a client months.</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card">
            <span className="mark">“</span>
            <h4>We write the design doc first</h4>
            <p>Before a line of code, we write down the architecture, the tradeoffs we considered, and the ones we rejected — so you're reviewing a decision, not a diff.</p>
          </div>
          <div className="approach-card">
            <span className="mark">“</span>
            <h4>Senior engineers only, start to finish</h4>
            <p>The person who scopes your project is the person who builds it. No handoff to a team you haven't met.</p>
          </div>
          <div className="approach-card">
            <span className="mark">“</span>
            <h4>We hand over systems you can leave</h4>
            <p>Documentation, runbooks, and a walkthrough with your own team — built so our involvement is optional, not load-bearing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
