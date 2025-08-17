import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { MailApi, ContactFormData, validateContactForm } from "@/lib/mailApi";

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
  email: string;
  message: string;
  phone?: string;
  business?: string;
  estimatedCost?: string;
  projectType?: "commercial" | "residential";
  services: string[];
};

const ContactForm = () => {
  const form = useForm<ContactFormValues>({ 
    defaultValues: { 
      services: [],
      name: '',
      email: '',
      message: '',
      phone: '',
      business: '',
      estimatedCost: '',
      projectType: undefined
    } 
  });
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Validate form data
      const validation = validateContactForm(data);
      if (!validation.isValid) {
        toast({ 
          title: "Validation Error", 
          description: validation.errors.join(', '),
          variant: "destructive"
        });
        return;
      }

      // Show loading state
      toast({ 
        title: "Sending...", 
        description: "Please wait while we send your message." 
      });

      // Send email via API
      const response = await MailApi.sendContactForm(data);
      
      if (response.success) {
        toast({ 
          title: "Success!", 
          description: "Your message has been sent successfully. We'll get back to you soon!" 
        });
        form.reset();
      } else {
        throw new Error(response.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
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
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone number (optional)" {...field} />
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

            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project and what you're looking for..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
