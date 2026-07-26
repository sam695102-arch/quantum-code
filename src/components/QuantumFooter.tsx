import React from "react";
import Link from "next/link";

export default function QuantumFooter() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="copyright">© 2026 Quantum Code Studio</div>

        <div className="foot-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/quantum-code-privacy-policy.html">Privacy Policy</Link>
          <Link href="/quantum-code-terms-of-service.html">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
