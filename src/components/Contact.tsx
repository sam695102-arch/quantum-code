import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="text-foreground/70 text-lg">Have a project in mind? Let&apos;s talk about it.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 bg-card p-10 rounded-2xl border border-card shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">Your Name</label>
                <input type="text" className="w-full bg-background border border-card/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">Your Email</label>
                <input type="email" className="w-full bg-background border border-card/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">Phone Number</label>
                <input type="tel" className="w-full bg-background border border-card/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/70">Your Message</label>
                <textarea rows={4} className="w-full bg-background border border-card/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-medium py-4 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 space-y-8">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-foreground/70">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-foreground/70">info@quantumcode.in</p>
                  <p className="text-foreground/70">www.quantumcode.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-foreground/70">123, IT Park, New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-card rounded-2xl border border-card relative overflow-hidden flex items-center justify-center shadow-inner mt-8">
               <div className="absolute inset-0 bg-primary/5 dark:bg-card/30" />
               <div className="relative z-10 flex flex-col items-center text-foreground/50">
                 <MapPin className="w-8 h-8 mb-2" />
                 <span className="font-medium">Map Placeholder</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
