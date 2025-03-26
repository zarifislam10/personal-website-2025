"use client"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

export default function Creative() {
  const artworks = [
    {
      src: "/images/artwork1.png",
      alt: "Colorful portrait with gold accents",
      title: "Mixed Media Portrait",
    },
    {
      src: "/images/artwork2.png",
      alt: "Pencil sketch portrait",
      title: "Character Study",
    },
    {
      src: "/images/artwork3.png",
      alt: "SoleMate logo design",
      title: "Logo Design",
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
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            Creative Portfolio
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-primary"></span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A selection of my artwork showcasing my creative side beyond coding.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-square relative bg-muted/20 flex items-center justify-center p-4">
                      <Image
                        src={artwork.src || "/placeholder.svg"}
                        alt={artwork.alt}
                        width={300}
                        height={300}
                        className="object-contain max-h-full max-w-full transition-transform group-hover:scale-105 duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-medium">{artwork.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-0">
                  <div className="relative">
                    <Image
                      src={artwork.src || "/placeholder.svg"}
                      alt={artwork.alt}
                      width={800}
                      height={800}
                      className="rounded-lg object-contain max-h-[80vh] max-w-full"
                      style={{ background: "rgba(0,0,0,0.1)" }}
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
        </motion.div>
      </div>
    </section>
  )
}

