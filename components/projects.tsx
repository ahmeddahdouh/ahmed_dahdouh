"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Cpu, Globe, Smartphone } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous")

  const projects = [
    {
      title: "Application E-commerce",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Système de Recommandation IA",
      description: "Un système de recommandation basé sur l'IA pour suggérer des produits personnalisés.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      category: "IA",
      github: "#",
      demo: "#",
    },
    {
      title: "Application de Gestion de Projet",
      description: "Un outil de gestion de projet avec tableaux Kanban et suivi des tâches.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Chatbot IA",
      description: "Un chatbot intelligent utilisant le traitement du langage naturel pour répondre aux questions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "NLP", "FastAPI", "Vue.js"],
      category: "IA",
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Un tableau de bord d'analyse de données avec visualisations interactives.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["D3.js", "React", "Express", "MongoDB"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Système de Reconnaissance d'Images",
      description: "Un système de reconnaissance d'images pour identifier des objets dans des photos.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PyTorch", "OpenCV", "FastAPI", "React"],
      category: "IA",
      github: "#",
      demo: "#",
    },
  ]

  const filters = ["Tous", "Web", "IA", "Mobile"]

  const filteredProjects =
    activeFilter === "Tous" ? projects : projects.filter((project) => project.category === activeFilter)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Découvrez une sélection de mes projets récents en développement web et intelligence artificielle.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600"
                    : "border-gray-600 hover:border-purple-500"
                }
              >
                {filter === "Web" && <Globe className="mr-2 h-4 w-4" />}
                {filter === "IA" && <Cpu className="mr-2 h-4 w-4" />}
                {filter === "Mobile" && <Smartphone className="mr-2 h-4 w-4" />}
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.title} variants={item} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gray-800/70 border-gray-700 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-gray-600">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Démo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
