function Personal() {
  const interests = [
    {
      title: "Rock Climbing",
      description: "Climber at gyms and outdoors, always tackling new routes and pushing my limits. Climbing teaches patience and creative problem-solving.",
      stats: "V4-5 Climber Status Achieved"
    },
    {
      title: "Hiking & Outdoors",
      description: "Exploring trails and discovering nature keeps me energized and inspired. Weekend hikes are my way to reset and recharge.",
      stats: "Weekend Trail Explorer"
    },
    {
      title: "Skateboarding",
      description: "Skater at heart, always hunting for new spots and challenges to push my skills. Always looking for skate friends in NYC to explore the city and learn new tricks together.",
      stats: "Always Rolling"
    },
    {
      title: "Traveling",
      description: "Love discovering new cities, cultures, and experiences—always planning the next adventure.",
      stats: "Globetrotter in Progress"
    },
    {
      title: "Music & EDM",
      description: "EDM fan and playlist curator—music fuels both focus and fun.",
      stats: "Current Vibes",
      link: {
        text: "Check out my Spotify",
        url: "https://open.spotify.com/user/avacheung8"
      }
    },
    {
      title: "Crocheting",
      description: "Avid crocheter who loves creating something from scratch. It’s my calm, creative outlet after busy days.",
      stats: "Handmade & Proud"
    }
  ];

  return (
    <section id="personal" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Life in Motion
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A glimpse into the hobbies and experiences that fuel my curiosity.
        </p>

        {/* Featured Story */}
        <div className="mb-12 bg-zinc-900 border border-blue-500/30 p-8 shadow-lg shadow-blue-500/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            Scaling Challenges, Finding Solutions
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
              {interest.link && (
                <a
                  href={interest.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  {interest.link.text}
                </a>
              )}
              <div className="pt-4 border-t border-blue-500/30">
                <span className="text-blue-400 font-semibold text-sm">
                  {interest.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personal;

