"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "LeetCode AI Problem Summarizer",
      description:
        "A Chrome Extension that processes complex algorithmic problems using OpenAI's GPT API, demonstrating strong API integration and async programming skills.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "Chrome Extensions API", "OpenAI API", "HTML/CSS"],
      date: "Mar. 2025",
      github: "#",
      demo: "#",
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
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js 13+", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
      date: "Mar. 2025",
      github: "#",
      demo: "#",
      features: [
        "Developed a responsive web app in under 48 hours to help users discover medical-condition-friendly footwear",
        "Built the full frontend with Next.js and Tailwind CSS, ensuring smooth animations and seamless usability",
        "Designed and digitized the brand logo and implemented consistent visual identity across the UI",
        "Researched medical footwear categories and structured product data to enable filtering by foot conditions",
        "Collaborated in a 4-person team to deliver an accessible and interactive user experience under tight deadlines",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-[300px] md:h-auto overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="flex flex-col p-6">
                      <CardHeader className="p-0 pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                          <Badge variant="outline">{project.date}</Badge>
                        </div>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 py-4 flex-grow">
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="space-y-1 text-sm">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 pt-4 flex gap-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.github}>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={project.demo}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/zarifislam">
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

