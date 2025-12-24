import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-foreground">Email Me</h3>
          <p className="text-muted-foreground mb-6">I'll get back to you as soon as possible</p>
          
          <a href="mailto:nashhenleyv@gmail.com">
            <Button variant="hero" size="lg" className="gap-3">
              <Send className="w-5 h-5" />
              nashhenleyv@gmail.com
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
