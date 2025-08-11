import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";

const testimonials = [
  { img: client1, name: "Sarah Thompson", company: "Peak Builders", text: "They found us reliable subs fast. Great workmanship and no drama." },
  { img: client2, name: "Marcus Lee", company: "Frontier Developments", text: "Quality work without the big-agency price. Delivered on time." },
  { img: client3, name: "Dana Ruiz", company: "High Plains Construction", text: "Finally, subs who show up. Communication was clear start to finish." },
];

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 text-center">Builders Trust Us to Find the Right People</h2>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <article className="h-full rounded-lg border bg-card p-6 shadow-sm flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={t.img} alt={`${t.name} headshot`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div>
                        <p className="font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">“{t.text}”</p>
                    <div className="mt-auto flex gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
