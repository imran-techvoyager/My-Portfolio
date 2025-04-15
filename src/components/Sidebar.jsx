import React, { useState } from 'react';
import {
  HomeIcon,
  UserIcon,
  WrenchIcon,
  FolderIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

const navLinks = [
  { id: 'home', icon: <HomeIcon size={24} />, label: 'Home' },
  { id: 'about', icon: <UserIcon size={24} />, label: 'About' },
  { id: 'skills', icon: <WrenchIcon size={24} />, label: 'Skills' },
  { id: 'projects', icon: <FolderIcon size={24} />, label: 'Projects' },
  { id: 'connect', icon: <MailIcon size={24} />, label: 'Connect' },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* 📱 Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 flex justify-between items-center px-4 py-3">
        <span className="text-white font-bold text-lg">Imran.dev</span>
        <button onClick={toggleMobileMenu} className="text-white">
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[56px] left-0 w-full min-h-screen flex flex-col justify-evenly bg-black/90 z-40 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="flex items-center justify-center text-white hover:text-gray-300 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-6 h-6 mr-2">{link.icon}</div>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* 💻 Desktop Sidebar */}
      <div
        className={`hidden lg:block fixed top-0 left-0 h-screen z-50 backdrop-blur-md transition-all duration-300 ${
          expanded ? 'w-48' : 'w-16'
        } bg-black/80`}
      >
        {/* Toggle Button */}
        <div className="flex justify-end p-3">
          <button onClick={toggleSidebar} className="text-white">
            {expanded ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-evenly h-[85%] mt-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="flex items-center px-4 py-2 text-white hover:bg-white/10 transition group"
            >
              <div className="w-6 h-6">{link.icon}</div>
              {expanded && (
                <span className="ml-4 group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;