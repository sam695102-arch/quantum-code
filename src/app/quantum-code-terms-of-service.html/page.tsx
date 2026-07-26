import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "../quantum.css";

export default function TermsOfServicePage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />
      
      <div className="wrap breadcrumb">
        <Link href="/">Home</Link><span>/</span>Terms of Service
      </div>

      <section className="legal-hero">
        <div className="wrap-narrow">
          <div className="kicker">Legal</div>
          <h1>Terms of Service</h1>
          <div className="updated">Last updated: July 11, 2026</div>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap-narrow">

          <div className="toc">
            <div className="label">On this page</div>
            <ol>
              <li><a href="#acceptance">Acceptance of terms</a></li>
              <li><a href="#services">Our services</a></li>
              <li><a href="#engagements">Engagements and payment</a></li>
              <li><a href="#ip">Intellectual property</a></li>
              <li><a href="#confidentiality">Confidentiality</a></li>
              <li><a href="#warranties">Warranties and liability</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#site-use">Website use</a></li>
              <li><a href="#governing-law">Governing law</a></li>
              <li><a href="#changes">Changes to these terms</a></li>
              <li><a href="#contact-us">Contact us</a></li>
            </ol>
          </div>

          <h2 id="acceptance">1. Acceptance of terms</h2>
          <p>By accessing this website or engaging Quantum Code (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>

          <h2 id="services">2. Our services</h2>
          <p>We provide software engineering, web development, graphic design, and digital marketing services as described on our website and in individual client proposals or statements of work. Specific deliverables, timelines, and pricing for any engagement are governed by the signed proposal or contract for that engagement, which takes precedence over these general terms.</p>

          <h2 id="engagements">3. Engagements and payment</h2>
          <p>Each client engagement is governed by its own written agreement covering scope, timeline, deliverables, and price. Unless otherwise agreed in writing:</p>
          <ul>
            <li>Fixed-scope projects are billed according to the milestone schedule in the proposal</li>
            <li>Embedded team and retainer engagements are billed monthly, in advance</li>
            <li>Late payments may result in a pause of work until the account is brought current</li>
            <li>Quoted prices are valid for 30 days unless stated otherwise</li>
          </ul>

          <h2 id="ip">4. Intellectual property</h2>
          <p>Upon full payment for a completed engagement, ownership of the final agreed deliverables (code, designs, and documentation created specifically for the client) transfers to the client, except for any pre-existing tools, frameworks, or components we license rather than build from scratch, which remain our property or that of their respective owners. We retain the right to showcase completed work in our portfolio unless a client agreement specifies otherwise.</p>

          <h2 id="confidentiality">5. Confidentiality</h2>
          <p>We treat client information, business plans, and technical details shared with us as confidential, and do not disclose them to third parties except as required to deliver the engagement or as required by law.</p>

          <h2 id="warranties">6. Warranties and liability</h2>
          <p>We perform our services with professional skill and care, but we do not guarantee specific business outcomes (such as a particular revenue increase, ranking, or conversion rate) unless explicitly stated in a signed proposal. To the maximum extent permitted by law, our liability for any claim arising from our services is limited to the fees paid for the specific engagement giving rise to the claim.</p>

          <h2 id="termination">7. Termination</h2>
          <p>Either party may terminate an ongoing engagement according to the notice period specified in that engagement's agreement. Fees for work completed up to the termination date remain payable.</p>

          <h2 id="site-use">8. Website use</h2>
          <p>You agree not to misuse this website, including attempting unauthorized access to our systems, scraping content for redistribution, or using the site in any way that could damage or impair it.</p>

          <h2 id="governing-law">9. Governing law</h2>
          <p>These terms are governed by the laws of India, without regard to conflict of law principles, unless a specific client agreement states otherwise.</p>

          <h2 id="changes">10. Changes to these terms</h2>
          <p>We may update these terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.</p>

          <h2 id="contact-us">11. Contact us</h2>
          <p>Questions about these terms can be sent to:</p>
          <div className="contact-box">
            <p><strong style={{color: 'var(--ivory)'}}>Quantum Code</strong></p>
            <p>Email: <a href="mailto:quantumcodehq@gmail.com">quantumcodehq@gmail.com</a></p>
            <p>Phone: <a href="tel:9016701455">901 670 1455</a></p>
          </div>

        </div>
      </section>

      <QuantumFooter />
    </main>
  );
}
