function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto bg-zinc-800 border-2 border-blue-500 flex items-center justify-center shadow-2xl shadow-blue-500/20">
            <span className="text-blue-400 text-6xl font-bold">JHC</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Juno (Ava) Hope Cheung
        </h1>

        {/* Title/Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Full Stack Developer | CS @ NYU | IT Support Lead
        </p>

        {/* Short Bio */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Computer Science student at NYU building full-stack applications and leading technical support operations.
          Passionate about creating efficient solutions and helping teams succeed through technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-black font-semibold hover:bg-blue-400 transform hover:-translate-y-1 transition-all duration-200 border border-blue-500"
          >
            View My Work
          </a>
          <a
            href="#personal"
            className="px-8 py-3 bg-transparent text-blue-400 border-2 border-blue-500 font-semibold hover:bg-blue-500/10 transform hover:-translate-y-1 transition-all duration-200"
          >
            Get to Know Me
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
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

