import { CalendarX2, BadgeDollarSign, Handshake } from "lucide-react";

const items = [
  {
    icon: CalendarX2,
    title: "Subcontractors Don't Show Up",
    copy:
      "You schedule a meeting. They don't come. Your project sits still while you search for someone new.",
  },
  {
    icon: BadgeDollarSign,
    title: "Quality Work Costs Too Much",
    copy:
      "Good subs charge high prices to pay for ads and salespeople. You pay extra for their marketing, not better work.",
  },
  {
    icon: Handshake,
    title: "Hard to Know Who to Trust",
    copy:
      "Online reviews can be fake. References might not be real. How do you know if they'll do good work?",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 text-center">
          Building Projects Shouldn't Be This Hard
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-lg border bg-card p-6 shadow-sm">
              <Icon className="text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
