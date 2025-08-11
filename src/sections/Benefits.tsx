import { Clock, PiggyBank, Moon, MapPin, BadgeCheck, FileCheck2 } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save Time", copy: "No more calling dozens of contractors" },
  { icon: PiggyBank, title: "Save Money", copy: "Fair prices without marketing markups" },
  { icon: Moon, title: "Sleep Better", copy: "Know your subs will show up and do good work" },
  { icon: MapPin, title: "Local Knowledge", copy: "Pros who understand Mountain West building" },
  { icon: BadgeCheck, title: "Proven Track Record", copy: "Only subs with great past work" },
  { icon: FileCheck2, title: "No Surprises", copy: "Clear communication from start to finish" },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 text-center">Why Builders Choose Build Match Pro</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-lg border bg-card p-6 shadow-sm">
              <Icon className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
