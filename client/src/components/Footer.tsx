import { Cpu, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-1 bg-primary/50 blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-1 bg-secondary/50 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded border border-primary/30">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold font-['Orbitron'] tracking-wider">
                BARITO<span className="text-primary">.SOLUTION</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solusi IT terpercaya untuk kebutuhan hardware dan software Anda. Kami mengembalikan performa perangkat Anda seperti baru.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:shadow-[0_0_10px_rgba(100,255,218,0.3)]">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:shadow-[0_0_10px_rgba(100,255,218,0.3)]">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:shadow-[0_0_10px_rgba(100,255,218,0.3)]">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold font-['Orbitron'] mb-6 text-foreground border-l-2 border-primary pl-3">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Install Ulang Laptop/PC
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Install Aplikasi Office & Design
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Pembuatan Website
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Maintenance & Optimasi
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold font-['Orbitron'] mb-6 text-foreground border-l-2 border-primary pl-3">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Portofolio</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kontak</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold font-['Orbitron'] mb-6 text-foreground border-l-2 border-primary pl-3">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Jl. Barito No. 123, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@barito.solution</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Barito Solution. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
