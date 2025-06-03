"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, Globe, Layers } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8 mb-4 text-purple-500" />,
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 mb-4 text-cyan-500" />,
      items: ["Node.js", "Express", "Django", "Flask", "GraphQL"],
    },
    {
      category: "Base de données",
      icon: <Database className="w-8 h-8 mb-4 text-emerald-500" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      category: "Intelligence Artificielle",
      icon: <Cpu className="w-8 h-8 mb-4 text-pink-500" />,
      items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "LLMs"],
    },
    {
      category: "DevOps",
      icon: <Layers className="w-8 h-8 mb-4 text-amber-500" />,
      items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Vercel"],
    },
    {
      category: "Langages",
      icon: <Code className="w-8 h-8 mb-4 text-blue-500" />,
      items: ["JavaScript", "Python", "TypeScript", "Java", "C#"],
    },
  ]

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
    <section id="skills" className="py-20 relative">
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
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un ensemble de technologies et d'outils que j'utilise pour créer des applications web modernes et des
            solutions d'IA.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={item}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="text-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
