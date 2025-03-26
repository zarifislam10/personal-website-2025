"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, Linkedin, Mail, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "creative", label: "Creative" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((section) => section.element)

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const sidebarContent = (
    <>
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/images/profile1.png" alt="Zarif Islam" fill className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold">Zarif Islam</h1>
          <p className="text-sm text-muted-foreground">Computer Science Student</p>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/zarifislam10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/zarifislam/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted p-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:zarifshahriar10@gmail.com"
            className="bg-muted p-2 rounded-full hover:bg-primary/20 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <ModeToggle />
        </div>

        <Button className="w-full" asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
      </div>
    </>
  )

  // Mobile menu button
  const mobileMenuButton = (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50 lg:hidden"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      <span className="sr-only">Toggle menu</span>
    </Button>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-72 xl:w-80 h-screen sticky top-0 flex-col justify-between p-6 border-r">
        {sidebarContent}
      </aside>

      {/* Mobile menu button */}
      {mobileMenuButton}

      {/* Mobile sidebar */}
      <motion.div
        className="lg:hidden fixed inset-0 z-40 bg-background"
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="flex flex-col justify-between h-full p-6 pt-16">{sidebarContent}</div>
      </motion.div>
    </>
  )
}

