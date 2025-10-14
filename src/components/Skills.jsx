function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "Python", level: 80 },
        { name: "Java", level: 80 },
        { name: "Bash", level: 75 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "⚙️",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Express.js", level: 80 },
        { name: "Vue.js", level: 80 },
        { name: "Flask", level: 85 },
        { name: "FastAPI", level: 85 },
        { name: "Django", level: 75 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Google Maps API", level: 80 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      category: "IT & Enterprise Tools",
      icon: "🔧",
      skills: [
        { name: "ServiceNow", level: 90 },
        { name: "Hardware Repair", level: 90 },
        { name: "AV Support", level: 90 },
        { name: "Network Troubleshooting", level: 85 },
        { name: "Jira", level: 85 },
        { name: "Technical Documentation", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Tech Stack & Skills
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-blue-500/30 p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/10"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2.5 overflow-hidden border border-blue-500/20">
                      <div
                        className="bg-blue-500 h-2.5 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 bg-black border-2 border-blue-500 p-8 shadow-lg shadow-blue-500/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Problem Solving",
              "Team Leadership",
              "Agile Development",
              "DevOps",
              "Technical Support",
              "System Administration",
              "Process Documentation",
              "Staff Training"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-blue-500/10 border border-blue-500/30 p-4 hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-200"
              >
                <p className="font-semibold text-gray-300">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

