import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Profile Image */}
        <div className="animate-scale-in mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-40 scale-110" />
            <img
              src={profileImage}
              alt="Nash Henley"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-gradient">My Portfolio</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          BS Information Systems Student | Aspiring Systems Designer
        </p>
        
        <p className="animate-fade-up-delay-2 text-sm text-muted-foreground/70 mb-8">
          Laguna State Polytechnic University
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("about")}
          >
            View Portfolio
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
