import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Especialidades', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  const contact = [
    { icon: Mail, text: 'iuri@astronauta.com' },
    { icon: Phone, text: '+55 (11) 99999-9999' },
    { icon: MapPin, text: 'São Paulo, SP' }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700"></div>
      <div className="absolute inset-0 bg-stars opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              className="col-span-full lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Telescope className="h-10 w-10 text-primary-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Iuri Astronauta</h3>
                  <p className="text-secondary-400 text-sm">Especialista em Telescópios</p>
                </div>
              </motion.div>
              
              <p className="text-secondary-300 mb-6 leading-relaxed max-w-md">
                Há mais de uma década dedicado ao estudo e observação do cosmos, 
                transformando a paixão pela astronomia em conhecimento prático e acessível.
              </p>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  className="flex items-center space-x-2 text-accent-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="h-5 w-5" />
                  <span className="text-sm font-medium">Explorando o infinito</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Star className="h-5 w-5 text-accent-500 mr-2" />
                Navegação
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-2" />
                Contato
              </h4>
              <ul className="space-y-4">
                {contact.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3 text-secondary-300"
                      whileHover={{ x: 5 }}
                    >
                      <IconComponent className="h-4 w-4 text-accent-500 flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-secondary-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-secondary-400 text-sm">
                  © 2024 Iuri Astronauta. Todos os direitos reservados.
                </p>
                <p className="text-secondary-500 text-xs mt-1">
                  Criado com <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors duration-300 italic">Papum</a>
                </p>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
    </footer>
  )
}