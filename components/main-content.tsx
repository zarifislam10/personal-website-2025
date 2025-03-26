import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Creative from "@/components/sections/creative"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function MainContent() {
  return (
    <main className="flex-1 overflow-hidden">
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <div id="home" className="snap-start h-screen">
          <Hero />
        </div>
        <div id="about" className="snap-start min-h-screen">
          <About />
        </div>
        <div id="experience" className="snap-start min-h-screen">
          <Experience />
        </div>
        <div id="projects" className="snap-start min-h-screen">
          <Projects />
        </div>
        <div id="creative" className="snap-start min-h-screen">
          <Creative />
        </div>
        <div id="contact" className="snap-start min-h-screen">
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  )
}

