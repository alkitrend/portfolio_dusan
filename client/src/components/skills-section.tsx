interface SkillItemProps {
  name: string;
  rating: number;
}

function SkillItem({ name, rating }: SkillItemProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{name}</span>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`fas fa-star ${
              star <= rating ? "text-accent" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: string;
  iconColor: string;
  skills: { name: string; rating: number }[];
}

function SkillCategory({ title, icon, iconColor, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up">
      <div className="flex items-center mb-6">
        <div className={`${iconColor} p-3 rounded-lg mr-4`}>
          <i className={`${icon} text-xl`} />
        </div>
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} rating={skill.rating} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code text-primary",
      iconColor: "bg-blue-100",
      skills: [
        { name: "React.js", rating: 5 },
        { name: "Next.js", rating: 4 },
        { name: "JavaScript", rating: 5 },
        { name: "TypeScript", rating: 4 },
        { name: "Tailwind CSS", rating: 5 },
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server text-green-600",
      iconColor: "bg-green-100",
      skills: [
        { name: "Laravel", rating: 5 },
        { name: "PHP", rating: 5 },
        { name: "Node.js", rating: 4 },
        { name: "RESTful API", rating: 5 },
        { name: "MySQL", rating: 5 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools text-purple-600",
      iconColor: "bg-purple-100",
      skills: [
        { name: "Git", rating: 5 },
        { name: "API Integration", rating: 5 },
        { name: "HTML5/CSS3", rating: 5 },
        { name: "JWT Auth", rating: 5 },
        { name: "Full Stack Dev", rating: 5 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
