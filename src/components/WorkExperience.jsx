function WorkExperience() {
  const experiences = [
    {
      title: "IT Classroom Support Lead (CETG PT Captain)",
      company: "NYU Stern School of Business",
      location: "New York, NY",
      period: "January 2024 - Present",
      description: "Leading technical support operations and managing classroom IT infrastructure.",
      responsibilities: [
        "Led troubleshooting and resolution of Tier 1 & Tier 2 technical incidents, reducing downtime by 20%",
        "Managed classroom IT systems, AV equipment, and network infrastructure to ensure uninterrupted operations",
        "Maintained IT asset inventory and enforced security and compliance protocols",
        "Documented processes and trained staff on software, AV systems, and workflow procedures"
      ],
      technologies: ["ServiceNow", "Genesys", "Network Troubleshooting", "Active Directory"]
    },
    {
      title: "IT Help Desk Analyst",
      company: "NYU Stern School of Business",
      location: "New York, NY",
      period: "August 2023 - Present",
      description: "Providing comprehensive technical support and system maintenance for faculty and students.",
      responsibilities: [
        "Handled incoming support requests via Genesys, ServiceLink, and ServiceNow, resolving hardware/software issues efficiently",
        "Analyzed recurring technical issues and recommended workflow improvements, streamlining support procedures",
        "Conducted regular system audits and performance checks to maintain classroom and office IT infrastructure",
        "Provided AV support and hardware repair services"
      ],
      technologies: ["ServiceNow", "Genesys", "ServiceLink", "AV Systems"]
    },
    {
      title: "Crew",
      company: "Vital Climbing Gyms",
      location: "New York, NY",
      period: "October 2024 - October 2025",
      description: "Provided front desk and technical support in a fast-paced climbing gym, managing member operations and troubleshooting the Mindbody POS system.",
      responsibilities: [
        "Handled incoming support requests via Genesys, ServiceLink, and ServiceNow, resolving hardware/software issues efficiently",
        "Analyzed recurring technical issues and recommended workflow improvements, streamlining support procedures",
        "Conducted regular system audits and performance checks to maintain classroom and office IT infrastructure",
        "Provided AV support and hardware repair services"
      ],
      technologies: ["Customer Service", "Technical Troubleshooting", "POS Systems (Mindbody)", "Data Entry" , "Operations Support"]
    },
    {
      title: "Climbing Assistant",
      company: "Movement Valhalla",
      location: "Valhalla, NY",
      period: "March 2022 - August 2022",
      description: "Delivered exceptional member support and instruction, managing digital systems, resolving account issues, and fostering a positive climbing community.",
      responsibilities: [
        "Delivered exceptional customer service by assisting members with check-ins, belay tests, and class registrations using RGP POS and scheduling systems.",
        "Troubleshot membership and payment issues while maintaining accurate digital records and supporting daily operations.",
        "Promoted memberships, programs, and retail products while maintaining facility cleanliness and a welcoming community environment.",
      ],
      technologies: ["Customer Service", "Retail", "Team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Work Experience
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          My professional journey in software development
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 border-4 border-black shadow-lg shadow-blue-500/50"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-black border border-blue-500/30 p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/10">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-xl text-blue-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                      <div className="inline-block bg-blue-500/10 border border-blue-500/30 px-3 py-1">
                        <span className="text-blue-400 font-medium text-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <svg
                              className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium"
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

