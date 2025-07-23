import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    const whatsappNumber = siteConfig.whatsappNumber;
    const WAMessage = `Hello, I'm interested in learning more about your dental services. \n\nName: ${name}\nMessage: ${message}\n\nPlease contact me to schedule an appointment or provide more information.`;
    const encodedMessage = encodeURIComponent(WAMessage);
    const redirectUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(redirectUrl, "_blank");
  };

  return (
    <div className="w-full">
      <div className="bg-primary-foreground/10 border-primary-foreground/20 rounded-xl border p-6 shadow-sm backdrop-blur-sm">
        <h2 className="text-primary-foreground mb-2 text-2xl font-bold">
          Get in Touch
        </h2>
        <p className="text-primary-foreground/70 mb-6">
          Have a question or want to schedule a consultation? Fill out the form
          below and we’ll get back to you via WhatsApp.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/50"
          />

          <Textarea
            id="message"
            name="message"
            placeholder="Tell us what you need help with"
            rows={4}
            required
            className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground/50 resize-none"
          />

          <Button
            type="submit"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full transition-colors"
          >
            Send Message on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
};
