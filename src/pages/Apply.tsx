import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface ApplyValues {
  name: string;
  years?: string;
  serviceAreas?: string;
  teamSize?: string;
  website?: string;
  reviews?: string;
}

const Apply = () => {
  const form = useForm<ApplyValues>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ApplyValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://pacificpact.com/buildmatchpro-mail/apply.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          years: data.years || '',
          serviceAreas: data.serviceAreas || '',
          teamSize: data.teamSize || '',
          website: data.website || '',
          reviews: data.reviews || ''
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({ 
          title: "Application sent successfully!", 
          description: "We'll review your info and follow up soon." 
        });
        form.reset();
      } else {
        toast({ 
          title: "Error sending application", 
          description: result.message || "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({ 
        title: "Network error", 
        description: "Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Apply to Be a Subcontractor in Utah | Build Match Pro" description="Join our vetted network of Utah subcontractors. Tell us about your business and where you work." />
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-display text-lg font-semibold">Build Match Pro</a>
          <a href="#apply" className="text-sm underline">Skip to form</a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">Apply to Be a Subcontractor in Utah</h1>
        <p className="text-muted-foreground mb-8">We prioritize reliability and craftsmanship. Share a few details and we’ll be in touch.</p>

        <Form {...form}>
          <form id="apply" onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="years"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years in Business</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 8" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Size</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5-10" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where do you service?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Counties/cities you cover (e.g., Salt Lake, Utah County, Summit)" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://" type="url" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reviews"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reviews</FormLabel>
                    <FormControl>
                      <Input placeholder="Links to reviews (optional)" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="submit" 
                size="lg" 
                variant="hero" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Application"}
              </Button>
              <a href="/" className="inline-flex items-center">Back to Home</a>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default Apply;
