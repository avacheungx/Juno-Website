function Personal() {
  const interests = [
    {
      title: "Mountain Hiking",
      icon: "🏔️",
      description: "I love exploring mountain trails and challenging myself with long-distance hikes. My goal is to hike all the major peaks in the Pacific Northwest.",
      stats: "50+ trails completed"
    },
    {
      title: "Rock Climbing",
      icon: "🧗",
      description: "Indoor and outdoor climbing enthusiast. Currently working on improving my lead climbing skills and tackling more challenging routes.",
      stats: "V5 bouldering grade"
    },
    {
      title: "Photography",
      icon: "📸",
      description: "Capturing landscapes and nature during my outdoor adventures. I especially enjoy golden hour shots and long exposure photography.",
      stats: "1000+ photos taken"
    },
    {
      title: "Reading",
      icon: "📚",
      description: "Avid reader of science fiction, technical books, and philosophy. Always have a book in my backpack for those quiet moments in nature.",
      stats: "30+ books/year"
    },
    {
      title: "Cooking",
      icon: "👨‍🍳",
      description: "Love experimenting with international cuisines and healthy meal prep. Cooking is my creative outlet outside of coding.",
      stats: "Weekly meal prep"
    },
    {
      title: "Travel",
      icon: "✈️",
      description: "Passionate about exploring new cultures and countries. I try to combine work trips with adventure and local experiences.",
      stats: "15+ countries visited"
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
                Adventure Seeker at Heart
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My passion for the outdoors mirrors my approach to problem-solving in code.
                Whether I'm debugging a complex system or navigating a challenging trail,
                I embrace the journey, learn from setbacks, and celebrate the victories along the way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The patience and perseverance required for reaching a summit has taught me
                invaluable lessons about tackling ambitious projects and never giving up,
                no matter how steep the climb.
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
            "The mountains are calling and I must go... right after I finish this code review."
          </blockquote>
          <p className="text-gray-500 mt-4">- A Developer's Dilemma</p>
        </div>
      </div>
    </section>
  );
}

export default Personal;

