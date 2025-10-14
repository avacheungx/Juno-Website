function WorkExperience() {
  const experiences = [
    {
      title: "IT Classroom Support Lead (CETG PT Captain)",
      company: "NYU Stern School of Business",
      location: "New York, NY",
      period: "2024 - Present",
      description: "Leading development of cloud-native applications and mentoring junior developers.",
      responsibilities: [
        "Architected and deployed microservices handling 1M+ daily active users",
        "Led team of 5 engineers in developing new product features",
        "Reduced application load time by 60% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 80%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "IT Help Desk Analyst",
      company: "NYU Stern School of Business",
      location: "New York, NY",
      period: "2023 - Present",
      description: "Developed full-stack web applications for enterprise clients.",
      responsibilities: [
        "Built responsive web applications using React and TypeScript",
        "Designed and implemented RESTful APIs serving 100K+ requests/day",
        "Collaborated with UX team to improve user engagement by 45%",
        "Mentored 3 interns and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"]
    },
    {
      title: "Crew",
      company: "Vital Climbing Gym",
      location: "New York, NY",
      period: "2024 - 2025",
      description: "Contributed to various web development projects in an agile environment.",
      responsibilities: [
        "Developed features for customer-facing web applications",
        "Fixed bugs and improved application performance",
        "Participated in daily standups and sprint planning",
        "Wrote unit tests achieving 85% code coverage"
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB"]
    },
    {
      title: "Medical Receptionist",
      company: "Ren Wellness",
      location: "New York, NY",
      period: "2023-2023",
      description: "Contributed to various web development projects in an agile environment.",
      responsibilities: [
        "Developed features for customer-facing web applications",
        "Fixed bugs and improved application performance",
        "Participated in daily standups and sprint planning",
        "Wrote unit tests achieving 85% code coverage"
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB"]
    },
    {
      title: "Climbing Assistant",
      company: "Movement Climbing Gym",
      location: "New York, NY",
      period: "2022-2022",
      description: "Contributed to various web development projects in an agile environment.",
      responsibilities: [
        "Developed features for customer-facing web applications",
        "Fixed bugs and improved application performance",
        "Participated in daily standups and sprint planning",
        "Wrote unit tests achieving 85% code coverage"
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          My professional journey in software development
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-xl text-blue-600 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">{exp.location}</p>
                      <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full">
                        <span className="text-gray-700 font-medium text-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <svg
                              className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;

