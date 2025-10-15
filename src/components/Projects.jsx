function Projects() {
  const projects = [
    {
      title: "Bodega Cat Finder",
      description: "Full-stack geolocation-based web application for discovering cats in NYC bodegas with real-time mapping and user-generated content.",
      technologies: ["React", "TypeScript", "Python Flask", "PostgreSQL", "Google Maps API"],
      highlights: [
        "Real-time geolocation with Google Maps integration",
        "User authentication and photo upload functionality",
        "RESTful API with advanced search/filtering",
        "Docker containerization with CI/CD pipeline"
      ],
      github: "https://github.com/avacheungx/bodega-cat-finder",
      demo: "https://avacheungx.github.io/Bodega-Cat-FInder/"
    },
    {
      title: "Resume Analyzer",
      description: "Microservices-based resume evaluation tool with ML-powered skills extraction and job recommendations.",
      technologies: ["FastAPI", "Flask", "MongoDB", "Docker", "ML Algorithms"],
      highlights: [
        "Led team of 4 engineers in Agile environment",
        "ML algorithms for skill extraction and job matching",
        "80%+ code coverage with automated CI/CD",
        "Reduced deployment time by 70%"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "NyanDash - Endless Runner Game",
      description: "Retro-style endless runner game featuring Nyan Cat with dynamic difficulty scaling and high score tracking.",
      technologies: ["p5.js", "JavaScript", "HTML", "CSS"],
      highlights: [
        "Inspired by Chrome Dinosaur Game",
        "Dynamic difficulty scaling system",
        "LocalStorage high score persistence",
        "Single-button intuitive controls"
      ],
      github: "https://github.com/avacheungx/nyandash",
      demo: "https://avacheungx.github.io/NyanDash/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black border border-blue-500/30 overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg shadow-blue-500/10"
            >
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium"
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
                          className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-zinc-900 border border-blue-500/30 text-blue-400 text-center font-medium hover:bg-blue-500/10 hover:border-blue-500 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-blue-500 text-black text-center font-medium hover:bg-blue-400 transition-all duration-200"
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

