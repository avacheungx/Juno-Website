function Resume() {
  const resumePdfPath = "/images/Juno_Cheung_IT_Resume.pdf";

  return (
    <section id="resume" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Resume
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          View or download my full resume
        </p>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <a
            href={resumePdfPath}
            download="Juno_Cheung_IT_Resume.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-zinc-900 border border-blue-500/30 p-4 shadow-lg shadow-blue-500/10">
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src={resumePdfPath}
              className="w-full h-full border-0"
              title="Juno Cheung Resume"
            />
          </div>
        </div>

        {/* Fallback message for browsers that don't support iframe */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            If the resume doesn't display above, you can{' '}
            <a 
              href={resumePdfPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              open it in a new tab
            </a>
            {' '}or download it using the button above.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;

