import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer id='connect' className="relative mt-20 overflow-hidden">
    {/* Wave SVG Background */}
    <div className="absolute w-full bottom-0 left-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative block w-full h-full">
        <path fill="#1f2937" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    {/* Footer Content */}
    <div className="relative bg-gray-800 pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-center">
          {/* Left Side - Logo & Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent md:ml-[150px] mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-400 mb-4 max-w-sm mx-auto md:ml-[150px] md:mx-0">
              Have a project in mind? Want to collaborate? Feel free to reach out!
            </p>
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=imran.techvoyager@gmail.com&su=Let's%20Connect!&body=Hey%20Imran%2C%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20for%20a%20potential%20collaboration%20or%20just%20to%20network.%0ALooking%20forward%20to%20hearing%20from%20you!"
              target="_blank"
              rel="noopener noreferrer"
            >
               <button className="text-[20px] md:ml-[150px] px-6 py-3 font-orbitron font-extrabold rounded-full bg-gradient-to-r from-purple-700 via-purple-700 to-indigo-700 shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300">
                 <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                   get in touch
                 </span>
              </button>
            </a>
          </div>

          {/* Right Side - Social Links */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialIcon target="_blank" url="https://github.com/imran-techvoyager" bgColor="#374151" fgColor="white" />
              <SocialIcon target="_blank" url="https://x.com/imranahmedtech" bgColor="#374151" fgColor="white" />
              <SocialIcon target="_blank" url="https://discord.com/channels/@me" bgColor="#374151" fgColor="white" />
            
            </div>
            <div className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤</span> by Imran Ahmed
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ImranAhmed. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
