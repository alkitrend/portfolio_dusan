import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Technology and coding background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting
              projects. Whether you need a full-stack solution or want to discuss a
              collaboration, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-blue-100">
                    Rudarsko Naselje 022, Lazarevac, Serbia
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-blue-100">dusan.radosavljevic@email.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <i className="fab fa-linkedin text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-blue-100">linkedin.com/in/dusan-radosavljevic</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  {...form.register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-300 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  {...form.register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-300 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  {...form.register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="Project discussion"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-300 text-sm mt-1">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  {...form.register("message")}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-300 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitContactMutation.isPending}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isSubmitted
                    ? "bg-green-600 hover:bg-green-600"
                    : "bg-accent hover:bg-amber-500"
                } text-white`}
              >
                {submitContactMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <i className="fas fa-check mr-2"></i>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
