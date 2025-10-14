function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Email", url: "mailto:juno@example.com", icon: "email" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Juno Hope Cheung
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating elegant solutions
              and exploring the great outdoors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Education', 'Experience', 'Skills', 'Projects', 'Personal'].map((item) => (
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
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <span className="text-xl">
                    {link.icon === 'github' && '⚡'}
                    {link.icon === 'linkedin' && '💼'}
                    {link.icon === 'twitter' && '🐦'}
                    {link.icon === 'email' && '✉️'}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-300 text-sm">
                📧 juno@example.com
              </p>
              <p className="text-gray-300 text-sm mt-1">
                📍 San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Juno Hope Cheung. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

