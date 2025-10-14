function Personal() {
  const interests = [
    {
      title: "Rock Climbing",
      icon: "🧗",
      description: "Passionate climber working at climbing gyms and spending free time on the wall. Climbing teaches me problem-solving and perseverance.",
      stats: "Active climbing crew member"
    },
    {
      title: "Hiking & Outdoors",
      icon: "🏔️",
      description: "Love exploring trails and challenging myself with outdoor adventures. Nature provides the best debugging environment!",
      stats: "Weekend trail explorer"
    },
    {
      title: "Certifications",
      icon: "📚",
      description: "Currently pursuing Google IT Support Professional Certificate and CompTIA A+ Certification to expand my technical expertise.",
      stats: "Expected November 2025"
    },
    {
      title: "Tech Projects",
      icon: "💻",
      description: "Always building something new - from web apps to games. Love experimenting with new frameworks and technologies.",
      stats: "Multiple projects deployed"
    },
    {
      title: "Teaching & Mentoring",
      icon: "🎓",
      description: "Enjoy helping others learn technology through training staff and documenting processes at work.",
      stats: "Training & documentation"
    },
    {
      title: "Problem Solving",
      icon: "🎯",
      description: "Whether it's debugging code or troubleshooting IT systems, I love tackling complex challenges and finding elegant solutions.",
      stats: "Daily puzzles solved"
    }
  ];

  return (
    <section id="personal" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Beyond the Code
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          When I'm not building software, here's what keeps me inspired and energized
        </p>

        {/* Featured Story */}
        <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-7xl">🌄</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Climber, Coder, Problem Solver
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My passion for rock climbing mirrors my approach to technical challenges.
                Whether I'm debugging a complex system, troubleshooting IT infrastructure, or finding the right hold on a climbing route,
                I embrace the journey, learn from setbacks, and celebrate the victories along the way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The patience and problem-solving skills required in climbing have taught me
                invaluable lessons about tackling ambitious projects and never giving up,
                no matter how difficult the challenge.
              </p>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{interest.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {interest.description}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-blue-600 font-semibold text-sm">
                  {interest.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 max-w-3xl mx-auto">
            "The wall is calling and I must climb... right after I deploy this fix."
          </blockquote>
          <p className="text-gray-500 mt-4">- A Developer-Climber's Dilemma</p>
        </div>
      </div>
    </section>
  );
}

export default Personal;

