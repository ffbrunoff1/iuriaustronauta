import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Eye, Camera, BookOpen, Users, Settings, Star, Zap, Award, Target, Lightbulb, Compass } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Telescope,
      title: "Consultoria em Telescópios",
      description: "Orientação personalizada para escolher o telescópio ideal baseado no seu orçamento, objetivos astronômicos e nível de experiência.",
      features: ["Análise de necessidades", "Comparação de modelos", "Recomendações personalizadas", "Suporte pós-compra"],
      gradient: "from-primary-500 to-accent-500"
    },
    {
      icon: Eye,
      title: "Técnicas de Observação",
      description: "Aprenda as melhores práticas para observação astronômica, desde objetos do sistema solar até galáxias distantes.",
      features: ["Observação planetária", "Deep sky objects", "Técnicas de localização", "Planejamento de sessões"],
      gradient: "from-accent-500 to-primary-600"
    },
    {
      icon: Camera,
      title: "Astrofotografia",
      description: "Domine a arte de fotografar o cosmos, desde primeiras imagens da Lua até astrofotografia de longa exposição.",
      features: ["Setup de equipamentos", "Técnicas de captura", "Processamento de imagens", "Astrofotografia planetária"],
      gradient: "from-primary-600 to-accent-600"
    },
    {
      icon: Settings,
      title: "Manutenção e Ajustes",
      description: "Mantenha seu telescópio em perfeitas condições com técnicas de limpeza, alinhamento e calibração adequadas.",
      features: ["Limpeza de ópticas", "Colimação", "Alinhamento polar", "Manutenção preventiva"],
      gradient: "from-accent-600 to-primary-500"
    },
    {
      icon: BookOpen,
      title: "Educação Astronômica",
      description: "Conhecimento fundamental sobre astronomia, mecânica celeste e história da exploração espacial.",
      features: ["Conceitos básicos", "História da astronomia", "Mecânica celeste", "Exploração espacial"],
      gradient: "from-primary-500 to-accent-500"
    },
    {
      icon: Users,
      title: "Sessões em Grupo",
      description: "Experiências coletivas de observação astronômica, ideais para famílias, escolas e grupos de entusiastas.",
      features: ["Eventos familiares", "Palestras educativas", "Observação coletiva", "Networking astronômico"],
      gradient: "from-accent-500 to-primary-600"
    }
  ]

  const expertise = [
    {
      icon: Star,
      title: "Telescópios Refratores",
      description: "Especialização em telescópios acromáticos e apocromáticos para observação planetária de alta qualidade.",
      percentage: 95
    },
    {
      icon: Zap,
      title: "Telescópios Refletores",
      description: "Expertise em Newtonianos, Dobsonianos e sistemas Cassegrain para observação de objetos difusos.",
      percentage: 90
    },
    {
      icon: Award,
      title: "Montagens Equatoriais",
      description: "Conhecimento avançado em montagens alemãs, fork e altazimutais computadorizadas.",
      percentage: 88
    },
    {
      icon: Target,
      title: "Óptica Avançada",
      description: "Compreensão profunda de aberrações ópticas, tratamentos e qualidade de superfície.",
      percentage: 92
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Telescope className="text-accent-500 h-6 w-6" />
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
              Especialidades
            </span>
            <Telescope className="text-accent-500 h-6 w-6" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Serviços 
            <span className="text-gradient block mt-2">Especializados</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Oferecendo orientação completa para sua jornada astronômica, desde a escolha 
            do primeiro telescópio até técnicas avançadas de observação e astrofotografia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary-100 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-secondary-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-4 w-4 text-accent-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar Orientação
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="flex items-center justify-center space-x-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Compass className="text-accent-500 h-6 w-6" />
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
                Áreas de Expertise
              </span>
              <Compass className="text-accent-500 h-6 w-6" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Conhecimento
              <span className="text-gradient"> Especializado</span>
            </h3>
            
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Anos de experiência prática com diferentes tipos de equipamentos 
              astronômicos e técnicas de observação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="space-y-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-secondary-600 text-sm mb-4">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-secondary-700">
                            Nível de Expertise
                          </span>
                          <span className="text-sm font-bold text-primary-600">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl text-white">
            <Lightbulb className="h-12 w-12 mr-6" />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Orientação Personalizada</h3>
              <p className="text-primary-100 max-w-md">
                Cada astrônomo é único. Por isso, adapto minha orientação às suas 
                necessidades específicas, orçamento e objetivos astronômicos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}