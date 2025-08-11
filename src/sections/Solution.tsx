import blueprintImg from "@/assets/solution-blueprints.jpg";
import craftImg from "@/assets/solution-craft.jpg";
import mountainBuildImg from "@/assets/solution-mountain-construction.jpg";

const blocks = [
  {
    title: "We Check Everyone",
    copy:
      "Every person in our network gets checked. We look at their past work. We talk to people they worked with before. Only the best ones join our team.",
    image: blueprintImg,
    alt: "Subcontractor reviewing blueprints on a job site",
  },
  {
    title: "They Focus on Work, Not Marketing",
    copy:
      "Our subs spend time getting better at their job, not making ads. That means you get skilled workers who charge fair prices.",
    image: craftImg,
    alt: "Craftsperson focused on detailed work",
  },
  {
    title: "Utah Experts",
    copy:
      "These pros know how to build in Utah. They understand local rules, weather, and materials that work best here.",
    image: mountainBuildImg,
    alt: "Construction with mountain landscape in the background",
  },
];

const Solution = () => {
  return (
    <section id="solutions" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 text-center">
          We Only Work with Pros Who Put Work First
        </h2>
        <div className="flex flex-col gap-12">
          {blocks.map((b, i) => (
            <article
              key={b.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <img src={b.image} alt={b.alt} className="rounded-lg shadow" loading="lazy" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{b.title}</h3>
                <p className="text-muted-foreground">{b.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
