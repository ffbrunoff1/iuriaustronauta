import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowDown, Sparkles, Moon, Telescope } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic pt-16 md:pt-20">
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Sparkles className="text-accent-500 h-6 w-6 animate-pulse" />
                <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
                  Explorador do Cosmos
                </span>
                <Sparkles className="text-accent-500 h-6 w-6 animate-pulse" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Descubra o
                <span className="block text-gradient mt-2">
                  Universo Infinito
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-secondary-300 max-w-2xl mx-auto lg:mx-0">
                Com mais de uma década de experiência em astronomia e telescópios, 
                guio você através das maravilhas do cosmos. Desde a observação da Lua 
                até galáxias distantes, transformo a curiosidade em conhecimento astronômico.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Telescope className="h-5 w-5" />
                  <span>Conhecer Melhor</span>
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('services')}
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Especialidades</span>
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-secondary-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-secondary-400">Observações Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-secondary-400">Telescópios Testados</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10 glass-effect rounded-3xl p-8 backdrop-blur-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Telescope className="h-24 w-24 text-primary-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Equipamentos Profissionais
                    </h3>
                    <p className="text-secondary-300 text-sm">
                      Telescópios de alta precisão para observação detalhada
                    </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="text-center p-4 bg-white/5 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Moon className="h-8 w-8 text-accent-500 mx-auto mb-2" />
                      <span className="text-white text-sm font-medium">Observação Lunar</span>
                    </motion.div>
                    
                    <motion.div
                      className="text-center p-4 bg-white/5 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                      <span className="text-white text-sm font-medium">Estrelas e Planetas</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 blur-xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-primary-400 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  )
}