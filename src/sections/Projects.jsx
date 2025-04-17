import React from 'react';
import brainwave from '../assets/brainwave.png';
import todo from '../assets/todo.png';

const Projects = () => {
  return (
    <div id='projects' className="main p-4 m-5 md:ml-[90px]">
    <h1 className="font-bold font-blackops text-white mb-6 text-5xl hover:translate-x-4 transition-transform duration-300 ease-in-out">
      Projects
    </h1>
    <div className="grid md:grid-cols-3 gap-8">
      {/* PawAlert Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={brainwave} alt="PawAlert" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold font-blackops tracking-wide text-white mb-2">Brainwave-Ui</h3>
          <p className="text-gray-400 font-orbitron tracking-widest mb-4">Brainwave is designed to showcase a futuristic UI, perfect for AI startups, SaaS platforms, or landing pages.</p>
          
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
            href="https://github.com/imran-techvoyager/brainwave-modern-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Time Capsule Project */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
        <img src={todo} alt="Time Capsule" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold font-blackops tracking-wide text-white mb-2">Todo-app</h3>
          <p className="text-gray-400 font-orbitron tracking-widest mb-4">A minimal and intuitive ToDo application built with React and Tailwind CSS</p>
          
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
            href="https://github.com/imran-techvoyager/TODO-App"
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
