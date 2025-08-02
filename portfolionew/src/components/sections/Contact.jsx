import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import AnimatedSection  from "@/components/common/AnimatedSection";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic API Call
  };

  return (
    <AnimatedSection id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required />
          <Dialog>
            <DialogTrigger asChild>
              <Button type="submit">Send Message</Button>
            </DialogTrigger>
            <DialogContent className="bg-[var(--card-bg)] p-6 rounded-lg">
              <p>Thank you! I'll respond soon.</p>
            </DialogContent>
          </Dialog>
        </form>
      </div>
    </AnimatedSection>
  );
}