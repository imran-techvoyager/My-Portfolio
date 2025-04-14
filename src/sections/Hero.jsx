import React from 'react'
import SpiderCanvas from '../components/SpiderCanvas'
import { Cake } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { SocialIcon } from 'react-social-icons'

const Hero = () => {
  return (
    <>
    <div id='home' className='relative min-h-screen w-full'>
       <SpiderCanvas />
       <div className="absolute bottom-8 left-38 w-full px-10 flex justify-between items-center max-w-screen-xl mx-auto" style={{fontFamily: "'Black Ops One', system-ui"}}>
  <div className="details flex flex-col justify-start gap-3 text-white">
    <h1 className='text-3xl font-extrabold'>Imran Ahmed</h1>
    <div>
       <h3 className='text-xl font-light'>Full stack developer & Open source Enthusiast</h3>
    </div>
    <div className='flex items-center gap-2'>
        <div><Cake size={20}/></div>
        <div><h3 className='text-xl font-light'>Born January 8, 2002</h3></div>
        <div className='flex items-center gap-2'>
        <div><MapPin size={20}/></div>
        <div><h3 className='text-xl font-light'>Hyderabad</h3></div>
        </div>
    </div>
    <div className="social-icons flex gap-5 mt-2">
        <div className="rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:shadow-[0_0_13px_rgba(255,255,255,0.8)] transition-all duration-300">
           <SocialIcon target="_blank" url="https://github.com/imran-techvoyager" />
        </div>
        <div className="rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:shadow-[0_0_13px_rgba(255,255,255,0.8)] transition-all duration-300">
           <SocialIcon target="_blank" url="https://x.com/imranahmedtech" />
        </div>
        <div className="rounded-full z-10 p-1 bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:shadow-[0_0_13px_rgba(255,255,255,0.8)] transition-all duration-300">
           <SocialIcon target="_blank" url="https://discord.com/channels/@me" />
        </div>
    </div>
  </div>
  <div className="buttons flex flex-col gap-13 mr-38" >
    <button className="text-md pt-5 px-10 py-4 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_28px_rgba(255,255,255,0.8)] transition-all duration-300">
      Resume
    </button>
    <button className="text-md pt-5 px-10 py-4 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:shadow-[0_0_28px_rgba(255,255,255,0.8)] transition-all duration-300">
      Hire Me
    </button>
  </div>
</div>
    </div>

    </>
  )
}

export default Hero