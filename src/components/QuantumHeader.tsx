"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function QuantumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setIsScrolled(false); // At top
      } else if (currentScrollY > lastScrollY) {
        setIsScrolled(true); // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="wrap nav">
        <div className="nav-left">
          <Link href="/" className="logo">
            <Image src="/assets/quantum-code-icon.png" alt="Quantum Code Logo" width={64} height={64} className="object-contain" />
          </Link>
        </div>
        <div className={`nav-center ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="navlinks">
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className={pathname?.startsWith("/services") ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="nav-cta mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>Get free consultation</Link>
          </nav>
        </div>
        <div className="nav-right">
          <Link href="/contact" className="nav-cta desktop-cta" onClick={() => setIsMobileMenuOpen(false)}>Get free consultation</Link>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
