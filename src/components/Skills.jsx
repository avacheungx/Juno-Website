
function Skills() {
  const skillCategories = [
    {
      category: "IT Operations & Infrastructure",
      icon: "🖥️",
      description: "Endpoint support and workplace technology",
      skills: [
        "IT Asset Management",
        "Endpoint Support",
        "Device Imaging & Provisioning",
        "Hardware Diagnostics & Repair",
        "Apple GSX",
        "Windows",
        "macOS",
        "iOS & Android",
        "AV Systems",
        "Conference Room Technology"
      ]
    },
    {
      category: "Programming & Development",
      icon: "💻",
      description: "Computer science and software development",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "C",
        "Bash",
        "React.js",
        "Express.js",
        "Flask",
        "FastAPI",
        "HTML & CSS"
      ]
    },
    {
      category: "Developer Tools & Databases",
      icon: "⚙️",
      description: "Development environments and data management",
      skills: [
        "Git",
        "Docker",
        "GitHub Actions",
        "MongoDB",
        "PostgreSQL",
        "SQLite",
        "VS Code",
        "REST APIs"
      ]
    },
    {
      category: "Enterprise & Collaboration",
      icon: "🌐",
      description: "Workplace systems and team collaboration",
      skills: [
        "IT Service Management",
        "IT Asset Auditing",
        "Apple GSX",
        "Lark",
        "Zoom",
        "Jira",
        "Technical Documentation",
        "SOP Development"
      ]
    }
  ];

  const professionalSkills = [
    {
      title: "Team Leadership",
      description:
        "Training teammates, coordinating support workflows, and supporting day-to-day operations."
    },
    {
      title: "Project Coordination",
      description:
        "Organizing tasks, tracking operational issues, and coordinating resources to keep work moving."
    },
    {
      title: "Process Improvement",
      description:
        "Identifying recurring issues, analyzing trends, and improving workflows and documentation."
    },
    {
      title: "Cross-Functional Collaboration",
      description:
        "Working with employees and teams to coordinate support, equipment, and workplace technology."
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
            My Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A combination of technical knowledge, IT operations experience,
            and people-focused skills built through work and education.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group bg-zinc-950 border border-zinc-800 p-6
                hover:border-blue-500/60 transition-all duration-300
                hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl bg-blue-500/10 p-3">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1
                    group-hover:text-blue-400 transition-colors">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm text-gray-300
                      bg-zinc-900 border border-zinc-800
                      hover:bg-blue-500/10 hover:border-blue-500/40
                      hover:text-blue-300 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="mt-20">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
              Beyond The Technical
            </p>
            <h3 className="text-center md:text-4xl font-bold text-white mb-3">
              Leadership & Operations
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Focused on coordinating people, improving processes, and
              keeping teams and operations moving forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {professionalSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="flex gap-4 p-6 bg-zinc-950
                  border border-zinc-800
                  hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center justify-center
                  w-10 h-10 border border-blue-500/30
                  bg-blue-500/10 text-blue-400 font-bold">
                  0{index + 1}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;


