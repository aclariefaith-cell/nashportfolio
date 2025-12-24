import { Users, Monitor, FolderOpen } from "lucide-react";

const skills = [
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative mindset with strong communication skills",
  },
  {
    icon: Monitor,
    title: "Basic Computer Literacy",
    description: "Proficient in essential software and digital tools",
  },
  {
    icon: FolderOpen,
    title: "Documentation & Organization",
    description: "Skilled in managing and organizing digital resources",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group glass rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-16 h-16 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
