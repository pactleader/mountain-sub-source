import regionMap from "@/assets/region-mountain-west.png";

const states = ["Salt Lake County", "Utah County", "Davis County", "Weber County", "Cache Valley", "Summit County", "Wasatch County", "Washington County"];

const RegionalFocus = () => {
  return (
    <section id="region" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Serving Utah</h2>
          <p className="text-muted-foreground mb-6">
            We know Utah. Our subs live and work here. From Logan to St. George, we connect you with people who understand how to build in our state.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {states.map((s) => (
              <li key={s} className="bg-secondary text-secondary-foreground rounded px-3 py-2">{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={regionMap} alt="Map highlighting Utah service area" className="rounded-lg shadow" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default RegionalFocus;
