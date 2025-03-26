"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, GraduationCap, User } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg mb-6">
                I'm a Computer Science student at Queens College with a passion for creating technology that's both
                functional and beautiful. As an upper sophomore, I'm constantly seeking opportunities to grow my skills
                and make meaningful contributions.
              </p>
              <p className="text-lg mb-6">
                Beyond coding, I have a deep appreciation for art and fashion, which influences my approach to design
                and problem-solving. This unique blend of technical knowledge and creative thinking allows me to bring
                fresh perspectives to my work.
              </p>
              <p className="text-lg">
                Whether I'm teaching coding to elementary school students, developing websites, or testing user
                experiences, I'm committed to creating technology that's accessible, intuitive, and impactful.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="education" className="flex flex-col items-center gap-2 py-4">
                    <GraduationCap className="h-5 w-5" />
                    <span className="hidden sm:inline">Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="flex flex-col items-center gap-2 py-4">
                    <Code className="h-5 w-5" />
                    <span className="hidden sm:inline">Skills</span>
                  </TabsTrigger>
                  <TabsTrigger value="interests" className="flex flex-col items-center gap-2 py-4">
                    <Palette className="h-5 w-5" />
                    <span className="hidden sm:inline">Interests</span>
                  </TabsTrigger>
                  <TabsTrigger value="personal" className="flex flex-col items-center gap-2 py-4">
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline">Personal</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="education">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">CUNY Queens College</h3>
                      <p className="text-muted-foreground mb-2">BA in Computer Science (2023-2027)</p>
                      <p>
                        Coursework includes Object-Oriented Programming in Java and C++, Algorithmic Problem Solving,
                        Data Structures, and Computer Architecture.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills">
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        <li>
                          <span className="font-medium">Languages:</span> Python, C++, Java, HTML, CSS, JavaScript
                        </li>
                        <li>
                          <span className="font-medium">Tools:</span> IntelliJ, GitHub, Visual Studio, Eclipse, PyCharm,
                          Terminal, Figma
                        </li>
                        <li>
                          <span className="font-medium">Spoken Languages:</span> English (Fluent), Bengali (Fluent),
                          Hindi/Urdu (Conversational)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="interests">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-4">My creative interests include:</p>
                      <ul className="space-y-2">
                        <li>Mixed Media Art</li>
                        <li>Graphic Design (Procreate, Figma)</li>
                        <li>Fashion Illustration</li>
                        <li>Video Editing</li>
                        <li>UI/UX Design</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="personal">
                  <Card>
                    <CardContent className="pt-6">
                      <p>
                        When I'm not coding or creating, I enjoy participating in hackathons, exploring new design
                        trends, and mentoring others in technology. I'm passionate about making technology accessible
                        and engaging for everyone.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

