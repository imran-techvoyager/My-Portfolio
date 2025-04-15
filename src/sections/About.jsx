import React from 'react'
import download from '../assets/download.gif'

const About = () => {
  return (
    <div id='about' className="main mx-4 my-10 text-white md:ml-[90px] m-5">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Left side content */}
      <div className="w-full md:w-3/5 pb-4 pl-4">
        <div className="font-bold font-blackops text-4xl">Hey there!</div>

        <span className="hover:cursor-custom font-bold my-1 font-blackops text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-700">
        I’m Imran Ahmed,
        </span>

        <div className="font-orbitron my-2 tracking-widest">
          Developer, Open Source Enthusiast
        </div>
        <div className="font-orbitron tracking-widest flex justify-start font-medium">
        <p>a passionate Full-Stack Web Developer who loves turning ideas into clean, scalable, and interactive web experiences.<br/><br/>

I specialize in building modern frontends using React.js and styling them with Tailwind CSS. I also explore the backend world with Node.js and Express, making sure everything works smoothly behind the scenes. Whether it's a portfolio site, a custom component, or a full-blown web app, I enjoy every bit of the creation process.<br/><br/>

I'm currently sharpening my skills through real-world projects, open-source contributions, and tech communities like 100xDevs and Dev Hub.<br/><br/>

When I’m not coding, you’ll probably find me exploring the latest tech trends, brainstorming startup ideas, or vibing with design inspirations.<br/><br/>

Let’s build something amazing together! 🚀</p>

        
        </div>

      </div>

      {/* Right side gif */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img 
          src={download} 
          alt="Coding Animation"
          className="w-full max-w-md rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
        />
      </div>
    </div>
  </div>
  )
}

export default About
