import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Layanan", href: "/#services" },
    { name: "Tentang Kami", href: "/#about" },
    { name: "Laporan Kinerja", href: "/performance" },
    { name: "Kontak", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/30 group-hover:border-primary transition-colors">
              <Cpu className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <span className="text-xl font-bold font-['Orbitron'] tracking-wider text-foreground group-hover:text-primary transition-colors">
              BARITO<span className="text-primary">.SOLUTION</span>
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <Button className="cyber-button bg-primary text-primary-foreground hover:bg-primary/90">
            Konsultasi Gratis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-primary/20 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full cyber-button mt-2">
            Konsultasi Gratis
          </Button>
        </div>
      )}
    </nav>
  );
}
