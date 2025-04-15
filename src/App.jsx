import React from 'react';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import About from './sections/About';
import Preloder from './components/Preloder';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000); // Adjust loading time as needed

      return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloder />
      ) : (
        <div className="relative z-10 overflow-x-hidden">
      <Sidebar />
      <Hero />
      <About />
      <Skills />

      {/* other sections */}
    </div>
      )
      }
    </>
  )
}

export default App
