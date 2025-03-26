"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      id: "programming",
      label: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "HTML/CSS",
      ],
    },
    {
      id: "tools",
      label: "Tools & Frameworks",
      skills: [
        "Git/GitHub",
        "VS Code",
        "IntelliJ",
        "PyCharm",
        "Figma",
      ],
    },
    {
      id: "creative",
      label: "Creative",
      skills: [
        "UI/UX Design",
        "Graphic Design",
        "Video Editing",
        "Illustration",
        "Procreate",
      ],
    },
    {
      id: "soft",
      label: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Public Speaking",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>

          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-none space-y-4">
                      {category.skills.map((skill, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="text-xl font-medium"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

