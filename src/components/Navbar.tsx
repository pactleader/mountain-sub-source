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

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    // Find the specific contact form container div
    const contactFormContainer = document.querySelector('#contact .mx-auto.max-w-3xl.px-4');
    if (contactFormContainer) {
      const offset = -300; // Increased offset to ensure form fields are visible
      const elementPosition = contactFormContainer.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      // Add extra padding to ensure all form fields are visible
      const finalPosition = offsetPosition - 50;
      
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback to the contact section if the specific container isn't found
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offset = 120;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

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
          <button 
            onClick={scrollToContact}
            className="ml-2 inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </button>
        </nav>
        <nav className="md:hidden">
          <button 
            onClick={scrollToContact}
            className="inline-flex rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
