function Education() {
  const educationData = [
    {
      degree: "Bachelors of Arts in Computer Science",
      school: "New York University | Courant Institute of Mathematical Sciences",
      location: "New York, NY",
      period: "September 2022 - May 2026",
      description: "Minor in Web Programming and Application",
      achievements: [
        "Relevant Courses: Data Structures, Computer Systems Organizations, Basic Algorithms, Operating Systems, Software Engineering, Web Development, Applied Internet Technology,Agile Development and DevOps"
      ]
    },
  ];

  const clubs = [
    {
      name: "Society of Women Engineers",
      role: "Active Member",
      description: "Participating in professional development and networking events to support women in engineering and technology fields."
    },
    {
      name: "Tech at NYU",
      role: "Active Member",
      description: "Engaging with the tech community at NYU through workshops, hackathons, and tech talks."
    },
    {
      name: "GirlsWhoCode",
      role: "Active Member",
      description: "Supporting women in computing through mentorship and community building."
    },
    {
      name: "Hong Kong Student Association",
      role: "Active Member",
      description: "Connecting with fellow Hong Kong students and celebrating cultural heritage."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Education
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          My academic journey in technology and computer science
        </p>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-blue-500/30 p-8 hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-400 font-semibold">
                    {edu.school}
                  </p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 px-4 py-2">
                  <span className="text-blue-400 font-medium">{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{edu.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Involvement Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Campus Involvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-blue-500/30 p-6 hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/10"
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  {club.name}
                </h4>
                <p className="text-blue-400 font-semibold mb-3">
                  {club.role}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {club.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

