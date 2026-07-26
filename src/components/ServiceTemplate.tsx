import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
}

export default function ServiceTemplate({ title, description, features }: ServiceTemplateProps) {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <article className="flex-1">
        {/* Service Hero */}
        <section className="py-24 bg-card/30 border-b border-card">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">{title}</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Breakdown */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-card/50 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-lg text-foreground/80 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strong CTA */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-6 max-w-3xl space-y-8">
            <h2 className="text-4xl font-bold">Ready to Elevate Your {title}?</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Partner with our expert team to build digital solutions that generate real business results. Let&apos;s discuss your project today.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
