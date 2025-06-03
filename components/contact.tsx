"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log(formData)
    alert("Message envoyé avec succès!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Contacter
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-purple-500 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="font-medium">contact@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Téléphone</p>
                    <p className="font-medium">+33 6 12 34 56 78</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Localisation</p>
                    <p className="font-medium">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Réseaux sociaux</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-purple-500/20 transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-cyan-500/20 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
