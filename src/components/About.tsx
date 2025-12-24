import lspuLogo from "@/assets/lspu-logo.png";
import { MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* School Logo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                <img 
                  src={lspuLogo} 
                  alt="LSPU Logo" 
                  className="relative w-28 h-28 md:w-36 md:h-36 object-contain"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                I'm currently a <span className="text-primary font-semibold">BS Information Systems</span> student at{" "}
                <span className="text-primary font-semibold">Laguna State Polytechnic University (LSPU)</span>. 
                I'm passionate about technology and continuous learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>M. Pandeno, Siniloan, Laguna</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>BSIS Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
