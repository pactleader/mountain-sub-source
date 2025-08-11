import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-semibold mb-3">Build Match Pro</h3>
          <p className="text-sm text-muted-foreground">Reliability and craftsmanship for Mountain West builders.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@buildmatchpro.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mountain West, USA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Service Areas</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {['Idaho','Montana','Wyoming','Utah','Colorado','Nevada','New Mexico'].map(s => (
              <li key={s} className="bg-secondary rounded px-2 py-1">{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#problem" className="hover:underline">Problems We Solve</a>
            <a href="#solutions" className="hover:underline">Our Approach</a>
            <a href="#process" className="hover:underline">How It Works</a>
            <a href="#benefits" className="hover:underline">Benefits</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#region" className="hover:underline">Region</a>
            <a href="#contact" className="hover:underline">Get Started</a>
          </nav>
          <div className="mt-4">
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 text-sm hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Build Match Pro. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
