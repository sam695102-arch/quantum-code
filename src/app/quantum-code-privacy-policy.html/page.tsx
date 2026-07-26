import React from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "../quantum.css";

export default function PrivacyPolicyPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />
      
      <div className="wrap breadcrumb">
        <Link href="/">Home</Link><span>/</span>Privacy Policy
      </div>

      <section className="legal-hero">
        <div className="wrap-narrow">
          <div className="kicker">Legal</div>
          <h1>Privacy Policy</h1>
          <div className="updated">Last updated: July 11, 2026</div>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap-narrow">

          <div className="toc">
            <div className="label">On this page</div>
            <ol>
              <li><a href="#info-we-collect">Information we collect</a></li>
              <li><a href="#how-we-use">How we use it</a></li>
              <li><a href="#sharing">When we share information</a></li>
              <li><a href="#cookies">Cookies and analytics</a></li>
              <li><a href="#retention">Data retention</a></li>
              <li><a href="#rights">Your rights</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#changes">Changes to this policy</a></li>
              <li><a href="#contact-us">Contact us</a></li>
            </ol>
          </div>

          <h2 id="info-we-collect">1. Information we collect</h2>
          <p>Quantum Code (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects information you provide directly to us, such as when you fill out our contact form, request a consultation, or email us. This may include:</p>
          <ul>
            <li>Your name, email address, phone number, and company name</li>
            <li>Details about your project, budget, and service interest</li>
            <li>Any other information you choose to include in a message to us</li>
          </ul>
          <p>We also automatically collect limited technical information when you visit our site, such as your browser type, device type, and pages viewed, through standard analytics tools.</p>

          <h2 id="how-we-use">2. How we use it</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide the consultation or services you request</li>
            <li>Send you information about your project or engagement</li>
            <li>Improve our website and understand how visitors use it</li>
            <li>Meet legal and contractual obligations</li>
          </ul>
          <p>We do not sell your personal information, and we do not use it to send unsolicited marketing unrelated to a service you&apos;ve inquired about.</p>

          <h2 id="sharing">3. When we share information</h2>
          <p>We do not share your personal information with third parties except:</p>
          <ul>
            <li>With service providers who help us operate our business (e.g. email or hosting providers), under confidentiality obligations</li>
            <li>If required by law, regulation, or valid legal process</li>
            <li>With your consent, or as necessary to deliver a service you&apos;ve requested</li>
          </ul>

          <h2 id="cookies">4. Cookies and analytics</h2>
          <p>Our website may use cookies or similar technologies for basic analytics, to understand traffic and improve the site. You can disable cookies through your browser settings; doing so may affect some site functionality.</p>

          <h2 id="retention">5. Data retention</h2>
          <p>We retain personal information for as long as necessary to respond to your inquiry, fulfill a service engagement, or meet legal, accounting, or reporting requirements, after which it is deleted or anonymized.</p>

          <h2 id="rights">6. Your rights</h2>
          <p>Depending on your location, you may have the right to request access to, correction of, or deletion of your personal information, or to object to certain processing. To exercise any of these rights, contact us using the details below.</p>

          <h2 id="security">7. Security</h2>
          <p>We take reasonable technical and organizational measures to protect the information we hold, but no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

          <h2 id="changes">8. Changes to this policy</h2>
          <p>We may update this policy from time to time. Material changes will be reflected by an updated &quot;last updated&quot; date at the top of this page.</p>

          <h2 id="contact-us">9. Contact us</h2>
          <p>If you have questions about this policy or how we handle your information, reach out directly:</p>
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
