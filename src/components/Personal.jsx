function Personal() {
  const interests = [
    {
      title: "Rock Climbing",
      description: "Passionate climber working at climbing gyms and spending free time on the wall. Climbing teaches me problem-solving and perseverance.",
      stats: "Competitive Climbing @ NYU"
    },
    {
      title: "Hiking & Outdoors",
      description: "Love exploring trails and challenging myself with outdoor adventures. Nature provides the best debugging environment!",
      stats: "Weekend trail explorer"
    },
    {
      title: "Campus Involvement",
      description: "Active member of Society of Women Engineers, Tech at NYU, GirlsWhoCode, and Hong Kong Student Association.",
      stats: "5 active organizations"
    },
    {
      title: "Certifications",
      description: "Currently pursuing Google IT Support Professional Certificate and CompTIA A+ Certification to expand my technical expertise.",
      stats: "In Progress - Expected Nov 2025"
    },
    {
      title: "Tech Projects",
      description: "Always building something new - from web apps to games. Love experimenting with new frameworks and technologies.",
      stats: "Multiple projects deployed"
    },
    {
      title: "Problem Solving",
      description: "Whether it's debugging code or troubleshooting IT systems, I love tackling complex challenges and finding elegant solutions.",
      stats: "Daily puzzles solved"
    }
  ];

  return (
    <section id="personal" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Beyond the Code
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          When I'm not building software, here's what keeps me inspired and energized
        </p>

        {/* Featured Story */}
        <div className="mb-12 bg-zinc-900 border border-blue-500/30 p-8 shadow-lg shadow-blue-500/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            Climber, Coder, Problem Solver
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            My passion for rock climbing mirrors my approach to technical challenges.
            Whether I'm debugging a complex system, troubleshooting IT infrastructure, or finding the right hold on a climbing route,
            I embrace the journey, learn from setbacks, and celebrate the victories along the way.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The patience and problem-solving skills required in climbing have taught me
            invaluable lessons about tackling ambitious projects and never giving up,
            no matter how difficult the challenge.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-black border border-blue-500/30 p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {interest.description}
              </p>
              <div className="pt-4 border-t border-blue-500/30">
                <span className="text-blue-400 font-semibold text-sm">
                  {interest.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center border-l-4 border-blue-500 pl-8">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-300 max-w-3xl mx-auto">
            "The wall is calling and I must climb... right after I deploy this fix."
          </blockquote>
          <p className="text-blue-400 mt-4">- A Developer-Climber's Dilemma</p>
        </div>
      </div>
    </section>
  );
}

export default Personal;

