"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import "@/app/quantum.css";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED', error);
          setStatus("error");
        }
      );
  };

  return (
    <main className="quantum-page">
      <QuantumHeader />
      
      <div className="wrap breadcrumb">
        <Link href="/">Home</Link><span>/</span>Contact
      </div>

      <section className="contact-hero">
        <div className="wrap">
          <div className="kicker">Get in touch</div>
          <h1>Tell us about the project. We&apos;ll tell you <em>honestly</em> if we&apos;re the right fit.</h1>
          <p className="lead">No sales queue, no auto-responder chain — a senior person reads every message and replies directly, usually within a day.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="wrap">
          <div className="contact-grid">

            <form ref={form} onSubmit={sendEmail}>
              <div className="field-row">
                <div>
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="field-row">
                <div>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 ..." required />
                </div>
              </div>
              <div className="field-row">
                <div>
                  <label htmlFor="service">What do you need?</label>
                  <select id="service" name="service" defaultValue="Not sure yet">
                    <option>Software engineering</option>
                    <option>Web development</option>
                    <option>Graphic design</option>
                    <option>Digital marketing</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget">Estimated budget</label>
                  <select id="budget" name="budget" defaultValue="Under ₹50,000">
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹1,50,000</option>
                    <option>₹1,50,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message">Project details</label>
                <textarea id="message" name="message" placeholder="What are you trying to build, and what's driving the timeline?" required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && <p style={{color: "var(--champagne)", marginTop: "12px", fontWeight: 500}}>Message sent successfully! We will be in touch.</p>}
              {status === "error" && <p style={{color: "red", marginTop: "12px", fontWeight: 500}}>Something went wrong. Please try emailing us directly.</p>}
              <p className="form-note">By submitting, you agree to be contacted about your project. We don&apos;t share your details with anyone.</p>
            </form>

            <aside className="side-panel">
              <h3>Reach us directly</h3>
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
              <div className="hours-row"><span className="day">Mon – Fri</span><span>10:00 – 19:00 IST</span></div>
              <div className="hours-row"><span className="day">Saturday</span><span>By appointment</span></div>
              <div className="hours-row"><span className="day">Sunday</span><span>Closed</span></div>
            </aside>

          </div>

          <div className="response-strip">
            <div className="response-cell"><div className="val">&lt; 24 hrs</div><div className="desc">typical first response time</div></div>
            <div className="response-cell"><div className="val">15 min</div><div className="desc">free initial consultation call</div></div>
            <div className="response-cell"><div className="val">Direct</div><div className="desc">to a senior engineer, not a sales rep</div></div>
          </div>
        </div>
      </section>

      <QuantumFooter />
    </main>
  );
}
