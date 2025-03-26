"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, School } from "lucide-react"

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Reach Into Cultural Heights, Inc.",
      period: "Feb. 2025 – Present",
      location: "Queens, NY",
      description: [
        "Developed and enhanced front-end features using HTML, CSS, and JavaScript in VS Code to improve user experience.",
        "Directed and embedded a Chairman intro video into a custom interactive section to enhance engagement.",
        "Audited and debugged site pages to resolve missing elements and design issues, ensuring a consistent, functional, and user-friendly experience.",
      ],
      icon: <Code className="h-5 w-5" />,
      tags: ["HTML", "CSS", "JavaScript", "VS Code"],
    },
    {
      title: "Coding Instructor",
      company: "Huan-Yu Education Center",
      period: "Sep. 2024 – Present",
      location: "Queens, NY",
      description: [
        "Designed and led weekly afterschool coding lessons for 2nd to 5th graders, introducing Python and Scratch to build foundational programming skills.",
        "Translated complex web concepts (HTML, HTTPS, WWW) into engaging lessons that helped students gain confidence in technology and understand how the internet works.",
        "Assessed students weekly through mini-quizzes and coding challenges, resulting in a 40% average improvement in understanding and performance over 6 weeks.",
      ],
      icon: <School className="h-5 w-5" />,
      tags: ["Python", "Scratch", "Teaching", "Curriculum Design"],
    },
    {
      title: "UX/UI and Usability Tester",
      company: "Ubiq",
      period: "Feb. 2025 – Present",
      location: "Remote",
      description: [
        "Conduct usability testing, identifying UI pain points, feature accessibility issues, and design flow improvements to enhance user experience.",
        "Provide structured feedback on navigation, responsiveness, and interaction design, contributing to product enhancements.",
        "Test and report bugs, performance issues, and UX inconsistencies, ensuring a smoother and more intuitive platform.",
        "Learned app building fundamentals and expanded knowledge in UX/UI design principles and practices.",
      ],
      icon: <Briefcase className="h-5 w-5" />,
      tags: ["UX/UI", "Usability Testing", "Product Development", "App Development"],
    },
    {
      title: "Information Technology Intern",
      company: "NYC DOE Family Welcome Center",
      period: "Jul. 2022 – Aug. 2022",
      location: "Queens, NY",
      description: [
        "Provided tech support and served as a digital liaison to resolve technical issues and improve communication using IT tools.",
        "Streamlined school enrollment by optimizing appointment scheduling and data storage in Excel.",
      ],
      icon: <Briefcase className="h-5 w-5" />,
      tags: ["IT Support", "Excel", "Technical Communication"],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Professional Experience
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-primary"></span>
          </h2>

          <div className="grid lg:grid-cols-[300px_1fr] gap-8">
            {/* Timeline navigation */}
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeExperience === index ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${activeExperience === index ? "bg-primary-foreground/20" : "bg-muted"}`}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{exp.title}</h3>
                        <p className="text-sm truncate">{exp.company}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Experience details */}
            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">{experiences[activeExperience].title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <p className="text-muted-foreground">{experiences[activeExperience].company}</p>
                      <span className="text-muted-foreground">•</span>
                      <p className="text-muted-foreground">{experiences[activeExperience].location}</p>
                    </div>
                    <p className="text-sm text-primary font-medium mt-1">{experiences[activeExperience].period}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Responsibilities & Achievements:</h4>
                    <ul className="space-y-3">
                      {experiences[activeExperience].description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {experiences[activeExperience].tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

