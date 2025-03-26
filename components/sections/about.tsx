"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, GraduationCap, Palette, User } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-2 inline-block relative">
                About Me
                <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-primary"></span>
              </h2>
              <p className="text-lg mb-6 mt-6">
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                    <div className="relative border-l-2 border-primary/50 pl-6 pb-6">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                      <h3 className="font-bold text-lg mb-1">CUNY Queens College</h3>
                      <p className="text-muted-foreground mb-2">BA in Computer Science (2023-2027)</p>
                      <p className="mb-4">
                        Coursework includes Object-Oriented Programming in Java and C++, Algorithmic Problem Solving,
                        Data Structures, and Computer Architecture.
                      </p>
                    </div>

                    <div className="relative border-l-2 border-primary/50 pl-6">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                      <h3 className="font-bold text-lg mb-1">Relevant Coursework</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Object-Oriented Programming in Java</li>
                        <li>Object-Oriented Programming in C++</li>
                        <li>Intro to Algorithmic Problem Solving</li>
                        <li>Intro to Python</li>
                        <li>Discrete Mathematics</li>
                        <li>Computer Organization and Assembly Language</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold mb-4 text-lg">Programming Languages</h3>
                        <ul className="space-y-3">
                          <li className="text-base bg-primary/10 px-4 py-2 rounded-md hover:bg-primary/20 transition-colors cursor-default flex items-center gap-2">
                            <span className="text-primary font-medium">Python</span>
                          </li>
                          <li className="text-base bg-primary/10 px-4 py-2 rounded-md hover:bg-primary/20 transition-colors cursor-default flex items-center gap-2">
                            <span className="text-primary font-medium">Java</span>
                          </li>
                          <li className="text-base bg-primary/10 px-4 py-2 rounded-md hover:bg-primary/20 transition-colors cursor-default flex items-center gap-2">
                            <span className="text-primary font-medium">C++</span>
                          </li>
                          <li className="text-base bg-primary/10 px-4 py-2 rounded-md hover:bg-primary/20 transition-colors cursor-default flex items-center gap-2">
                            <span className="text-primary font-medium">JavaScript</span>
                          </li>
                          <li className="text-base bg-primary/10 px-4 py-2 rounded-md hover:bg-primary/20 transition-colors cursor-default flex items-center gap-2">
                            <span className="text-primary font-medium">HTML/CSS</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3">Tools & Software</h3>
                        <ul className="space-y-1 text-sm">
                          <li>IntelliJ, PyCharm, VS Code</li>
                          <li>Git & GitHub</li>
                          <li>Figma</li>
                          <li>Microsoft Office</li>
                          <li>Terminal</li>
                          <li>Eclipse</li>
                        </ul>

                        <h3 className="font-bold mt-4 mb-2">Languages</h3>
                        <ul className="space-y-1 text-sm">
                          <li>English (Fluent)</li>
                          <li>Bengali (Fluent)</li>
                          <li>Hindi/Urdu (Conversational)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interests">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold mb-3">Creative Interests</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Mixed Media Art</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Graphic Design</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Fashion Illustration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Video Editing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>UI/UX Design</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3">Technical Interests</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Web Development</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Mobile App Development</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>User Experience Design</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Artificial Intelligence</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Hackathons</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="personal">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">
                      When I'm not coding or creating, I enjoy participating in hackathons, exploring new design trends,
                      and mentoring others in technology. I'm passionate about making technology accessible and engaging
                      for everyone.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Hobbies</h4>
                        <ul className="text-sm space-y-1">
                          <li>Fashion Design</li>
                          <li>Digital Art</li>
                          <li>Thrifting</li>
                          <li>Baking</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Values</h4>
                        <ul className="text-sm space-y-1">
                          <li>Creativity</li>
                          <li>Continuous Learning</li>
                          <li>Collaboration</li>
                          <li>Accessibility</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

