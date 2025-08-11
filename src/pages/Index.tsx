import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import HowItWorks from "@/sections/HowItWorks";
import Benefits from "@/sections/Benefits";
import SocialProof from "@/sections/SocialProof";
import RegionalFocus from "@/sections/RegionalFocus";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";
import ContactForm from "@/sections/ContactForm";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <SocialProof />
        <RegionalFocus />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
