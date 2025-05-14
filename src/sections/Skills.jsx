import React from 'react'
import "react-social-icons/vimeo";

const Skills = () => {
  return (
       <div id='skills' className="main m-5 flex flex-wrap md:ml-[90px] p-4">
        <h3 className="font-bold font-blackops text-white mb-2 text-5xl hover:translate-x-4 transition-transform duration-300 ease-in-out w-full">
          My Tech Stack
        </h3>

        {/* Programming Languages */}
        <h4 className="w-full text-2xl font-blackops text-gray-300 mt-6 mb-4">Programming Languages</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            // { name: "C", icon: "c" },
            { name: "C++", icon: "cplusplus" },
            { name: "C", icon: "c" },
            { name: "Java", icon: "java" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Python", icon: "python" },
            // { name: "PHP", icon: "php" },
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Frameworks & Libraries */}
        <h4 className="w-full text-2xl font-blackops text-gray-300 mt-8 mb-4">Frameworks & Libraries</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "Bootstrap", icon: "bootstrap" },
            { name: "Tailwind", icon: "tailwindcss" },
            { name: "Materialui", icon: "materialui" },
            { name: "Redux", icon: "redux" },
            { name: "Numpy", icon: "numpy" },
            { name: "Pandas", icon: "pandas" },
            // { name: "Sass", icon: "sass" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Development Tools */}
        <h4 className="w-full text-2xl font-blackops text-gray-300 mt-8 mb-4">Development Tools</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            { name: "Postgresql", icon: "postgresql" },
            { name: "Figma", icon: "figma" },
            { name: "Git", icon: "git" },
            { name: "Docker", icon: "docker" },
            { name: "Anaconda", icon: "anaconda" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Platforms & Technologies */}
        <h4 className="w-full text-2xl font-blackops text-gray-300 mt-8 mb-4">Platforms & Technologies</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "Git Hub", icon: "github" },
            { name: "Postman", icon: "postman" },
            { name: "Vscode", icon: "vscode" },
            // { name: "Linux", icon: "linux" },
            // { name: "Android", icon: "android" },
            // { name: "Arduino", icon: "arduino" },
           
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Skills
