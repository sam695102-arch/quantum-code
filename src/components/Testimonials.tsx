import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rohan Mehta",
      role: "Business Owner",
      text: "Quantum Code created our website in just 5 days. Amazing work and great support!",
      avatar: "RM",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Head",
      text: "Their digital marketing strategy increased our leads by 200% in just 2 months.",
      avatar: "PS",
    },
    {
      name: "Amit Verma",
      role: "Founder",
      text: "Very professional team. They manage our website perfectly.",
      avatar: "AV",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Client Testimonials</h2>
          <p className="text-foreground/70 text-lg">Don&apos;t just take our word for it. Here is what our clients have to say.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 rounded-2xl border border-card bg-card/10 hover:bg-card/30 transition-colors flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground/80 leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-card">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-foreground/50">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
