import { Zap, Smartphone, Search, Lock, HeadphonesIcon, Briefcase } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "On-time project delivery without compromising quality.",
    icon: Zap,
  },
  {
    title: "Mobile Friendly",
    description: "Responsive design that looks perfect on all devices.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimized",
    description: "Rank higher on Google with built-in best practices.",
    icon: Search,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security & regular automated backups.",
    icon: Lock,
  },
  {
    title: "24/7 Support",
    description: "We are always here to help you resolve any issues.",
    icon: HeadphonesIcon,
  },
  {
    title: "Business Focused",
    description: "Solutions specifically designed to grow your business.",
    icon: Briefcase,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="text-foreground/70 text-lg">Partner with an agency that prioritizes your success and peace of mind.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-card bg-card/20 hover:bg-card/60 transition-colors flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
