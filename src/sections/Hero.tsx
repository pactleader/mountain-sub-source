import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <header className="mb-6">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Find Trusted Subcontractors Who Do Great Work
            </h1>
            <p className="text-lg text-muted-foreground">
              We connect you with skilled pros in the Mountain West who care more
              about quality than selling.
            </p>
          </header>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Vetted Network</Badge>
            <Badge variant="secondary">On-Time Delivery</Badge>
            <Badge variant="secondary">Mountain West Experts</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button size="lg" variant="hero">Find Your Next Subcontractor</Button>
            </a>
            <a href="#contact" className="inline-flex">
              <Button size="lg" variant="outline">Talk to Our Team</Button>
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={heroImage}
              alt="Construction crew collaborating on site with mountain backdrop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
