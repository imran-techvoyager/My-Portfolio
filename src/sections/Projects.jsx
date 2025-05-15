import brainwave from '../assets/brainwave.png';
import todo from '../assets/todo.png';
import jobcast from '../assets/jobcast.png';
import fileforge from '../assets/fileforge.png';
import blobspace from '../assets/blobspace.png';

const Projects = () => {
  return (
    <div id='projects' className="main p-4 m-5 md:ml-[90px]">
    <h1 className="font-bold font-blackops text-white mb-6 text-5xl hover:translate-x-4 transition-transform duration-300 ease-in-out">
      Projects
    </h1>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Job-Cast Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={jobcast} alt="Job-Cast" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium font-blackops tracking-wide text-white mb-2">Job-Cast</h3>
          <p className="text-gray-400 font-poppins tracking-wide mb-4">Job-Cast is a WhatsApp bot that delivers curated job alerts straight to your phone, powered by Node.js, cron scheduling, and Twilio.</p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "Nextjs", icon: "nextjs" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "Nodejs", icon: "nodejs" }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                title={tech.name}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <a
            href="https://jobcast.imran-tech.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>
      {/* FileForge Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={fileforge} alt="FileForge" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium font-blackops tracking-wide text-white mb-2">FileForge</h3>
          <p className="text-gray-400 font-poppins tracking-wide mb-4">FileForge is a powerful file management system that allows you to organize, share, and collaborate on files seamlessly.</p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "Nextjs", icon: "nextjs" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "Nodejs", icon: "nodejs" }
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                title={tech.name}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <a
            href="https://fileforge.imran-tech.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>
      {/* brainwave Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={brainwave} alt="Brainwave" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium font-blackops tracking-wide text-white mb-2">Brainwave-Ui</h3>
          <p className="text-gray-400 font-poppins tracking-wide mb-4">Brainwave is designed to showcase a futuristic UI, perfect for AI startups, SaaS platforms, or landing pages.</p>
          
          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "React", icon: "react" },
              { name: "Tailwind", icon: "tailwindcss" }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                title={tech.name}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <a
            href="https://brainwave.imran-tech.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>
      {/* BlogSpace Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={blobspace} alt="BlogSpace" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium font-blackops tracking-wide text-white mb-2">BlogSpace</h3>
          <p className="text-gray-400 font-poppins tracking-wide mb-4">BlogSpace is a platform for creating and sharing blogs, with a focus on simplicity and ease of use.</p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "React", icon: "react" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "Nodejs", icon: "nodejs" },
              { name: "Express", icon: "express" }
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                title={tech.name}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <a
            href="https://blogspace.imran-tech.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Todo Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={todo} alt="Todo" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium font-blackops tracking-wide text-white mb-2">Todo-app</h3>
          <p className="text-gray-400 font-poppins tracking-wide mb-4">A minimal and intuitive ToDo application built with React and Tailwind CSS</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { name: "React", icon: "react" },
              // { name: "Node.js", icon: "nodejs" },
              { name: "Tailwind", icon: "tailwindcss" }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                title={tech.name}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <a
            href="https://todo.imran-tech.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Projects
