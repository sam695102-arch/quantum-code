import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 border-b border-card-border/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Grow Your Business with <span className="text-primary">Smart Digital Solutions</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We engineer high-performance web applications and digital marketing strategies designed to increase your revenue and brand authority.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-md font-bold transition-all hover:scale-105 flex items-center gap-2">
                Start Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-card hover:bg-card-border/50 text-white border border-card-border px-8 py-3.5 rounded-md font-bold transition-all flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-primary" /> Talk to Us
              </button>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:pl-8">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75"></div>
            <div className="relative drop-shadow-[0_0_35px_rgba(124,58,237,0.35)] z-10">
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="/images/floating-dashboard.png"
                  alt="Floating Digital Performance Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
