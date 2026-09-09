import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import QuantumHeader from "@/components/QuantumHeader";
import QuantumFooter from "@/components/QuantumFooter";
import SelectedWork from "@/components/SelectedWork";
import "@/app/quantum.css";

export const metadata: Metadata = {
  title: "Selected Work — Quantum Code",
  description:
    "Explore websites built to make businesses look better, work smarter, and grow. Real client projects across fashion, luxury, e-commerce, and renewable energy.",
};

export default function PortfolioPage() {
  return (
    <main className="quantum-page">
      <QuantumHeader />

      <div className="wrap breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>Portfolio
      </div>

      <SelectedWork />

      <QuantumFooter />
    </main>
  );
}
