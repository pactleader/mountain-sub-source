import blueprintImg from "@/assets/solution-blueprints.jpg";
import craftImg from "@/assets/solution-craft.jpg";
import mountainBuildImg from "@/assets/solution-mountain-construction.jpg";

const blocks = [
  {
    title: "We vet our subs",
    copy:
      "Everyone in our network gets checked we look at their past work. We talk to people about the work They work with before only the best ones are added to our network.",
    image: blueprintImg,
    alt: "Subcontractor reviewing blueprints on a job site",
  },
  {
    title: "That Old School Work Ethic",
    copy:
      "We all know those guys who have been around for a long time and simply know what they are doing. These guys don't overcharge and live by a code of trust and reliability. They just want to do good, honest work.",
    image: craftImg,
    alt: "Craftsperson focused on detailed work",
  },
  {
    title: "...experienced and local",
    copy:
      "The pros know how to build in Utah. They understand local rules, weather, and materials that work best. They have connections and teams that allow them to get the job done right and on time.",
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
