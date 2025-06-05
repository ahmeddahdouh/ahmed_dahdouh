"use client"

import {useEffect, useState} from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Cpu, Globe, Smartphone } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous")

  const projects = [
    {
      title: "Détection de couleur de peau par IA",
      description: "Classification des pixels d’une image selon s’ils représentent une couleur de peau, via différents modèles de machine learning.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "OpenCV", "Scikit-learn", "IA"],
      category: "IA",
      github: "#",
      demo: "#",
    },
    {
      title: "Automatisation du recrutement chez Mobilis",
      description: "Application web pour automatiser le recrutement des stagiaires chez Mobilis Algérie, avec gestion des candidatures et des entretiens.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "MySQL", "Bootstrap", "MVC"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Profil d'intérêt utilisateur à partir des tweets",
      description: "Analyse des tweets et tags sur Twitter/Stack Overflow pour générer automatiquement un profil d’intérêts par utilisateur.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "NLP", "Scikit-learn", "FastAPI"],
      category: "IA",
      github: "#",
      demo: "#",
    },
    {
      title: "Intégration d’Odoo chez DISTA Algérie",
      description: "Déploiement du progiciel Odoo pour gérer les ventes, achats, livraisons et facturation dans une entreprise de distribution.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Odoo", "Python", "PostgreSQL"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Billetterie en ligne – Algérie Ferries",
      description: "Développement d’une plateforme de réservation de traversées maritimes avec gestion des enregistrements et des paiements.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Angular", "laravel", "MySQL"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Gestion d’événements sportifs géolocalisés",
      description: "Application permettant aux sportifs de proposer ou rejoindre des événements selon leur position géographique avec Google Maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Flask", "Google Maps API", "PostgreSQL"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Site e-commerce monoproduit",
      description: "Développement d’un micro-site e-commerce pour vendre un produit unique, avec panier, formulaire de commande et gestion API.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FastAPI", "JavaScript", "HTML/CSS"],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Flappy Bird en JavaScript",
      description: "Réalisation d’un mini-jeu Flappy Bird avec gestion des scores via une API backend FastAPI.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "Canvas", "FastAPI"],
      category: "Jeu",
      github: "#",
      demo: "#",
    },
  ];


  const filters = ["Tous", "Web", "IA", "Mobile"]
  const [filteredProjects,setFilredProjects]  =useState([...projects])
  useEffect(() => {
    setFilredProjects([...projects])
  }, [activeFilter]);

  useEffect(() => {
    setFilredProjects(activeFilter === "Tous" ? [...projects] : [...projects].filter((project) => project.category === activeFilter))
  }, [activeFilter]);

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
                onClick={()=>{setActiveFilter(filter)}}
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
