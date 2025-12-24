import { Target, Briefcase, Code } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Systems Design Mastery",
    description: "Improve my knowledge in systems design and development",
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Gain experience in real-world IT projects",
  },
  {
    icon: Code,
    title: "Technical Foundation",
    description: "Build a strong foundation in programming and data management",
  },
];

const Goals = () => {
  return (
    <section id="goals" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Goals</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="group glass rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-14 h-14 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <goal.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">{goal.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
              </div>

              <div className="ml-auto flex-shrink-0 text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
