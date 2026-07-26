import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-card">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/quantum-code-icon.png" 
            alt="Quantum Code Logo" 
            width={64} 
            height={64} 
            className="h-16 w-auto object-contain" 
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
        </nav>

        <Link href="/contact" className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors">
          Get Free Consultation
        </Link>
      </div>
    </header>
  );
}
