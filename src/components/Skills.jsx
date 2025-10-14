function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/ES6+", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "PostgreSQL", level: 85 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      category: "Other Technologies",
      icon: "🚀",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 75 },
        { name: "WebSockets", level: 80 },
        { name: "Webpack", level: 75 },
        { name: "Jest/Testing", level: 85 },
        { name: "Agile/Scrum", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tech Stack & Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
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
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Problem Solving",
              "Team Leadership",
              "Communication",
              "Critical Thinking",
              "Project Management",
              "Mentoring",
              "Agile Methodologies",
              "Code Review"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-200"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

