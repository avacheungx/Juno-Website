function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 border border-blue-500/10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 border border-blue-500/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/5"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 border border-blue-500/20"></div>
          </div>
          <img 
            src="/images/profile/profile.jpg" 
            alt="Juno (Ava) Hope Cheung" 
            className="w-64 h-64 mx-auto object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/30 rounded-full relative z-10"
          />
        </div>

        {/* Name with Accent */}
        <div className="mb-6">
          <div className="inline-block border-l-4 border-blue-500 pl-6 text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Juno (Ava) Hope Cheung
            </h1>
          </div>
        </div>

        {/* Title/Tagline */}
        <p className="text-xl md:text-2xl text-blue-400 mb-4 font-semibold">
          CS @ NYU | IT Support Lead
        </p>

        {/* Short Bio */}
        <div className="bg-black/50 border border-blue-500/20 p-8 mb-12 max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed">
            Senior Computer Science student at NYU focused on bridging people and technology, using curiosity and analytics to make systems work better for everyone.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="px-10 py-4 bg-blue-500 text-black font-bold text-lg hover:bg-blue-400 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 border-2 border-blue-500"
          >
            View My Work
          </a>
          <a
            href="#personal"
            className="px-10 py-4 bg-transparent text-blue-400 border-2 border-blue-500 font-bold text-lg hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-200"
          >
            Get to Know Me
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-black border border-blue-500/30 p-4">
            <div className="text-3xl font-bold text-blue-400">3+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="bg-black border border-blue-500/30 p-4">
            <div className="text-3xl font-bold text-blue-400">5</div>
            <div className="text-sm text-gray-400">Clubs</div>
          </div>
          <div className="bg-black border border-blue-500/30 p-4">
            <div className="text-3xl font-bold text-blue-400">2</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
          <div className="bg-black border border-blue-500/30 p-4">
            <div className="text-3xl font-bold text-blue-400">NYU</div>
            <div className="text-sm text-gray-400">Class of '26</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;

