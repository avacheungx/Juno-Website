import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Personal from './components/Personal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
        <Personal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
