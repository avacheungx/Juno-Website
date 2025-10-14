function Projects() {
  const projects = [
    {
      title: "Bodega Cat Finder",
      description: "Full-stack geolocation-based web application for discovering cats in NYC bodegas with real-time mapping and user-generated content.",
      image: "🐱",
      technologies: ["React", "TypeScript", "Python Flask", "PostgreSQL", "Google Maps API"],
      highlights: [
        "Real-time geolocation with Google Maps integration",
        "User authentication and photo upload functionality",
        "RESTful API with advanced search/filtering",
        "Docker containerization with CI/CD pipeline"
      ],
      github: "https://github.com/avacheungx",
      demo: "#"
    },
    {
      title: "Resume Analyzer",
      description: "Microservices-based resume evaluation tool with ML-powered skills extraction and job recommendations.",
      image: "📄",
      technologies: ["FastAPI", "Flask", "MongoDB", "Docker", "ML Algorithms"],
      highlights: [
        "Led team of 4 engineers in Agile environment",
        "ML algorithms for skill extraction and job matching",
        "80%+ code coverage with automated CI/CD",
        "Reduced deployment time by 70%"
      ],
      github: "https://github.com/avacheungx",
      demo: "#"
    },
    {
      title: "NyanDash - Endless Runner Game",
      description: "Retro-style endless runner game featuring Nyan Cat with dynamic difficulty scaling and high score tracking.",
      image: "🎮",
      technologies: ["p5.js", "JavaScript", "HTML", "CSS"],
      highlights: [
        "Inspired by Chrome Dinosaur Game",
        "Dynamic difficulty scaling system",
        "LocalStorage high score persistence",
        "Single-button intuitive controls"
      ],
      github: "https://github.com/avacheungx",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-8xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg text-center font-medium hover:bg-gray-700 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

