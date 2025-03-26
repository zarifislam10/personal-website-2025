"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function CreativePortfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    {
      id: "design",
      label: "Graphic Design",
      items: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Design Project 1", title: "Brand Identity" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Design Project 2", title: "UI Concept" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Design Project 3", title: "App Design" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Design Project 4", title: "Poster Design" },
      ],
    },
    {
      id: "fashion",
      label: "Fashion",
      items: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Fashion Project 1", title: "Concept Sketch" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Fashion Project 2", title: "Pattern Design" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Fashion Project 3", title: "Textile Experiment" },
      ],
    },
    {
      id: "art",
      label: "Mixed Media",
      items: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Art Project 1", title: "Abstract Composition" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Art Project 2", title: "Digital Painting" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Art Project 3", title: "Mixed Media Piece" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Art Project 4", title: "Experimental Work" },
      ],
    },
  ]

  return (
    <section id="creative" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Creative Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Exploring the intersection of technology and creativity through design, fashion, and mixed media art.
          </p>

          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.items.map((item, index) => (
                        <Dialog key={index}>
                          <DialogTrigger asChild>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="relative group cursor-pointer overflow-hidden rounded-lg"
                            >
                              <div className="aspect-square relative">
                                <Image
                                  src={item.src || "/placeholder.svg"}
                                  alt={item.alt}
                                  fill
                                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <p className="text-white font-medium text-center p-2">{item.title}</p>
                                </div>
                              </div>
                            </motion.div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-0">
                            <DialogTitle className="sr-only">{item.title}</DialogTitle>
                            <div className="relative">
                              <Image
                                src={item.src || "/placeholder.svg"}
                                alt={item.alt}
                                width={800}
                                height={600}
                                className="rounded-lg object-contain max-h-[80vh]"
                              />
                              <button
                                onClick={() => document.body.click()}
                                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
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

