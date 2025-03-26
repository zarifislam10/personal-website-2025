"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "LeetCode AI Problem Summarizer",
      description:
        "A Chrome Extension that processes complex algorithmic problems using OpenAI's GPT API, demonstrating strong API integration and async programming skills.",
      image: "/images/leetcode-summarizer.png",
      tags: ["JavaScript", "Chrome Extensions API", "OpenAI API", "HTML/CSS"],
      date: "Mar. 2025",
      github: "https://github.com/zarifislam10/leetcode-ai-summarizer",
      demo: "https://github.com/zarifislam10/leetcode-ai-summarizer/blob/main/Demo.gif",
      features: [
        "Engineered a Chrome Extension that processes complex algorithmic problems using OpenAI's GPT API",
        "Implemented robust error handling and secure API key management following security best practices",
        "Designed an intuitive UI with real-time feedback, achieving seamless user experience through CSS animations and DOM manipulation",
        "Built with scalability in mind using modular JavaScript, following Chrome Extension Manifest V3 guidelines",
      ],
    },
    {
      title: "SoleMate – HackKnight 2025",
      description:
        "A responsive web app developed in under 48 hours to help users discover medical-condition-friendly footwear using a swipe-based interface.",
      image: "/images/artwork3.png",
      tags: ["Next.js 13+", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
      date: "Mar. 2025",
      github: "https://github.com/nhoque101/Hackathon-App",
      demo: "https://www.youtube.com/watch?v=A3WPKHqvGws",
      features: [
        "Developed a responsive web app in under 48 hours to help users discover medical-condition-friendly footwear",
        "Built the full frontend with Next.js and Tailwind CSS, ensuring smooth animations and seamless usability",
        "Designed and digitized the brand logo and implemented consistent visual identity across the UI",
        "Researched medical footwear categories and structured product data to enable filtering by foot conditions",
        "Collaborated in a 4-person team to deliver an accessible and interactive user experience under tight deadlines",
      ],
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 min-h-screen flex items-center bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Featured Projects
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-primary"></span>
          </h2>

          <div className="relative">
            {/* Project navigation */}
            <div className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-10">
              <Button variant="outline" size="icon" className="rounded-full" onClick={prevProject}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-10">
              <Button variant="outline" size="icon" className="rounded-full" onClick={nextProject}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Project carousel */}
            <div className="overflow-hidden">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-card to-card/80">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center p-4 bg-muted/20">
                        <Image
                          src={projects[activeProject].image || "/placeholder.svg"}
                          alt={projects[activeProject].title}
                          width={600}
                          height={400}
                          className="object-contain max-h-full max-w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                          <div>
                            <h3 className="text-xl font-bold text-white">{projects[activeProject].title}</h3>
                            <p className="text-white/80 text-sm">{projects[activeProject].date}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 md:p-8 flex flex-col">
                        <div className="hidden md:block mb-4">
                          <Badge variant="outline" className="mb-2">
                            {projects[activeProject].date}
                          </Badge>
                          <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                        </div>

                        <p className="text-muted-foreground mb-6">{projects[activeProject].description}</p>

                        <div className="mb-6 flex-grow">
                          <h4 className="font-medium mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {projects[activeProject].features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {projects[activeProject].tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={projects[activeProject].github} target="_blank">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={projects[activeProject].demo} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeProject === index ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/zarifislam10" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                See More on GitHub
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

