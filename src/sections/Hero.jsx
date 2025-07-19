import React from 'react'
import SpiderCanvas from '../components/SpiderCanvas'
import { Cake } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { SocialIcon } from 'react-social-icons'
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <>
    <div id='home' className='relative min-h-screen w-full'>
      <div className='hidden lg:block'>
       <SpiderCanvas />
      </div>
      <div className='flex items-center justify-center mt-20 mb-5 lg:hidden'>
        <div className='rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_25px_rgba(255,255,255,0.6)]'>
             <img
              src={profile}
              alt="profile picture"
              className="w-[210px] h-[210px] rounded-full object-cover border-[3px] border-[#0d1117]"
             />
        </div>
      </div>
       <div className="lg:absolute lg:bottom-7 lg:left-[68px] w-full px-10 flex lg:flex-row flex-col lg:justify-between justify-center items-center max-w-screen-xl mx-auto">
  <div className="details flex flex-col justify-center items-center lg:justify-start gap-8 lg:gap-3 text-white">
    <h1 className='text-3xl font-extrabold font-blackops'>Imran Ahmed</h1>
    <div>
       <h3 className='text-xl font-extrabold font-orbitron tracking-widest'>Full stack developer & Open source Enthusiast</h3>
    </div>
    <div className="flex flex-wrap items-center gap-3 text-xl md:text-xl">
            <div className="flex items-center gap-2">
              <Cake size={20} />
              <span className='font-orbitron'>Born January 8, 2002</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className='font-blackops'>India</span>
            </div>
          </div>
    <div className="social-icons flex gap-5 m-5 lg:mt-2">
        <div className="rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:shadow-[0_0_13px_rgba(255,255,255,0.8)] transition-all duration-300">
           <SocialIcon target="_blank" url="https://github.com/imran-techvoyager" />
        </div>
        <div className="rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:shadow-[0_0_13px_rgba(255,255,255,0.8)] transition-all duration-300">
           <SocialIcon target="_blank" url="https://x.com/imranahmedtech" />
        </div>
        <div className="rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:shadow-[0_0_13px_rgba(255,255,255,0.8)] transition-all duration-300">
           <SocialIcon target="_blank" url="https://linkedin.com/in/imran-ahmed-b76a47326" />
        </div>
    </div>
  </div>
  <div className="buttons flex flex-col lg:flex-row gap-8 lg:gap-5 w-full lg:w-auto lg:mr-3 font-blackops" >
    <a
      target="/"
      href="https://drive.google.com/file/d/18CgrIQxrB_N7g9xadYyFDqw4-zRLzITM/view?usp=sharing"
    >
       <button className="text-[20px] w-full md:px-10 py-4 md:py-2 rounded-full bg-gradient-to-r from-purple-500 via-purple-700 to-indigo-700  font-semibold shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300">
         <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
           Resume
         </span>
      </button>
   </a>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=imran.techvoyager@gmail.com&su=Freelance%20Opportunity&body=Hi%20Imran%2C%20I%20would%20like%20to%20hire%20you%20for..."
  target="_blank"
  rel="noopener noreferrer"
>
    <button className="text-[20px] w-full md:px-20 py-4 md:py-2 rounded-full bg-gradient-to-r from-purple-500 via-purple-700 to-indigo-700  font-semibold shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300">
  <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
    Hire me
  </span>
</button>
</a>

  </div>
</div>
    </div>

    </>
  )
}

export default Hero