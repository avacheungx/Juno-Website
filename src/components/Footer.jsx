function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/avacheungx", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/avacheung", icon: "linkedin" },
    { name: "Email", url: "mailto:avacheung17@gmail.com", icon: "email" }
  ];

  return (
    <footer className="bg-black border-t border-blue-500/30 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Juno Hope Cheung
            </h3>
            <p className="text-gray-300 leading-relaxed">
            Senior at NYU passionate about technology, problem-solving, and creating smooth experiences for users and systems alike.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Education', 'Experience', 'Skills', 'Projects','Resume', 'Personal'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="px-4 py-2 bg-zinc-900 border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500 hover:text-black hover:border-blue-500 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-sm">
                avacheung17@gmail.com
              </p>
              <p className="text-gray-300 text-sm mt-1">
                ahc9434@nyu.edu
              </p> 
              <p className="text-gray-300 text-sm mt-1">
                New York, NY
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Juno Hope Cheung. All rights reserved.
          </p>
          <p className="text-blue-400 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

