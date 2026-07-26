import { Code2, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites, landing pages, and eCommerce solutions.",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    description: "SEO, Google Ads, Social Media Marketing, Lead Generation.",
    icon: TrendingUp,
  },
  {
    title: "Website Management",
    description: "Website updates, backups, security, and performance optimization.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="text-foreground/70 text-lg">Comprehensive digital solutions to help your business grow online.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-10 rounded-2xl border border-card/50 hover:scale-[1.02] transition-transform duration-300 flex flex-col items-start gap-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed flex-1">{service.description}</p>
              <a href="#" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2 mt-4">
                Learn More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
