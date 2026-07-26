export default function AboutUs() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        
        {/* 4-column Stats Row */}
        <div className="bg-card p-12 rounded-3xl border border-card/50 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
              <span className="text-4xl font-bold text-primary mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-foreground/70">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
