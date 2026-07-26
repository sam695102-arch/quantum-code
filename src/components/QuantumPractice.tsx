import React from "react";

export default function QuantumPractice() {
  return (
    <section className="practice" id="practice">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">What we take on</div>
          <h2>Three kinds of problems, <em>chosen deliberately</em>.</h2>
          <p>We don't run a menu of services. We take on the problems below because they're the ones where careful engineering compounds — and we say no to the rest.</p>
        </div>
        <div className="practice-list">
          <div className="practice-row">
            <div className="idx">01</div>
            <h3>Systems that can't go down</h3>
            <p>Payments, ledgers, infrastructure control planes — software where a bug isn't an inconvenience, it's an incident. We design for the failure mode first.</p>
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
  );
}
