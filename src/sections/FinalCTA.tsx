import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/final-cta.jpg";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <img src={ctaImage} alt="Successful construction project completion" className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/90 to-background/40" />
      </div>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3">Ready to Find Reliable Subcontractors?</h2>
        <p className="text-muted-foreground mb-6">Join hundreds of builders who never worry about finding good subs again.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="hero">Get Started Now</Button>
          <a href="#hero" className="inline-flex"><Button size="lg" variant="outline">Talk to Our Team</Button></a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>Free to get started</span>
          <span>•</span>
          <span>No long contracts</span>
          <span>•</span>
          <span>Mountain West experts</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
