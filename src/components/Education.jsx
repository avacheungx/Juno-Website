function Education() {
  const educationData = [
    {
      degree: "B.A. in Computer Science",
      school: "New York University | Courant Institute of Mathematical Sciences",
      location: "New York, NY",
      period: "September 2022 - May 2026",
      description: "Minor in Web Programming and Application",
      achievements: [
        "Relevant Courses: Data Structures, Computer Systems Organizations, Basic Algorithms, Operating Systems",
        "Software Engineering, Web Development, Applied Internet Technology",
        "Agile Development and DevOps"
      ]
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          My academic journey in technology and computer science
        </p>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">
                    {edu.school}
                  </p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-gray-700 font-medium">{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{edu.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

