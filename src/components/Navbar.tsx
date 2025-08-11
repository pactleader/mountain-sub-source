const Navbar = () => {
  const items = [
    { href: "#problem", label: "Problems" },
    { href: "#solutions", label: "Solutions" },
    { href: "#process", label: "How It Works" },
    { href: "#benefits", label: "Benefits" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#region", label: "Region" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-semibold">Build Match Pro</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors">Get Started</a>
        </nav>
        <nav className="md:hidden">
          <a href="#contact" className="inline-flex rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
