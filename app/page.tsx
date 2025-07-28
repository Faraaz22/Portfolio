import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import  ScrollIcon  from './components/ScollIcon'
import Sideicons from './components/sideicons'

export default function Home() {
  return (
    <>
    <Sideicons/>
      <Navbar />
      <div className="relative min-h-screen w-full bg-slate-950 pt-24 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-animated-overlay blur-2xl opacity-40" />

        {/* Page Content */}
        <main className="relative z-10">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>

        <ScrollIcon />
      </div>
    </>
  )
}
