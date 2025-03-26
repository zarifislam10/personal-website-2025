"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, School } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Reach Into Cultural Heights, Inc. (RICH)",
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
      period: "2024 – Present",
      location: "Remote",
      description: [
        "Conduct usability testing, identifying UI pain points, feature accessibility issues, and design flow improvements to enhance user experience.",
        "Provide structured feedback on navigation, responsiveness, and interaction design, contributing to product enhancements.",
        "Test and report bugs, performance issues, and UX inconsistencies, ensuring a smoother and more intuitive platform.",
      ],
      icon: <Briefcase className="h-5 w-5" />,
      tags: ["UX/UI", "Usability Testing", "Product Development"],
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
    <section id="experience" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">{exp.icon}</div>
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.location}
                      </CardDescription>
                      <CardDescription>{exp.period}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

