import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const costRanges = ["< $10k", "$10k–$50k", "$50k–$250k", "$250k–$1M", "$1M–$5M", "$5M+"];
const services = [
  "engineering",
  "architect",
  "roofing",
  "concrete",
  "excavation",
  "framing",
  "plumbing",
  "hvac",
  "electrical",
  "landscaping",
  "other",
];

type ContactFormValues = {
  name: string;
  business?: string;
  estimatedCost?: string;
  projectType?: "commercial" | "residential";
  services: string[];
};

const ContactForm = () => {
  const form = useForm<ContactFormValues>({ defaultValues: { services: [] } });
  const { toast } = useToast();

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);
    toast({ title: "Thanks!", description: "We received your info and will reach out shortly." });
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">Tell us about your project and we’ll match the right Utah pros.</p>
        </header>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business</FormLabel>
                    <FormControl>
                      <Input placeholder="Business name (optional)" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="estimatedCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Project Cost</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {costRanges.map((r) => (
                          <SelectItem key={r} value={r}>{r}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="commercial" id="commercial" />
                          <label htmlFor="commercial">Commercial</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="residential" id="residential" />
                          <label htmlFor="residential">Residential</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <FormLabel>Select all that apply</FormLabel>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((s) => {
                      const selected = form.watch("services");
                      const checked = selected?.includes(s);
                      return (
                        <label key={s} className="flex items-center gap-2 rounded-md border p-2">
                          <Checkbox
                            checked={!!checked}
                            onCheckedChange={(v) => {
                              const curr = new Set(form.getValues("services") || []);
                              if (v) curr.add(s); else curr.delete(s);
                              form.setValue("services", Array.from(curr));
                            }}
                          />
                          <span className="capitalize">{s}</span>
                        </label>
                      );
                    })}
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button size="lg" type="submit" variant="hero">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
