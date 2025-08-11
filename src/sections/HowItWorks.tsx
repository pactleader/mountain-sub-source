import { FileText, Search, Handshake, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: FileText, title: "Tell Us What You Need", copy: "Share your project details and timeline" },
  { icon: Search, title: "We Find the Right Match", copy: "We pick subs who are perfect for your job" },
  { icon: Handshake, title: "Meet and Decide", copy: "Talk with them and see if they're a good fit" },
  { icon: CheckCircle2, title: "Get Your Project Done", copy: "Watch your project finish on time and on budget" },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 text-center">Getting Great Subs is Easy</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, copy }, idx) => (
            <div key={title} className="relative bg-card border rounded-lg p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Icon className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{idx + 1}. {title}</h3>
              <p className="text-muted-foreground text-sm">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
