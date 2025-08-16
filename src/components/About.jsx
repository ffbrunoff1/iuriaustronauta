import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Telescope, Star, Compass, Target, Lightbulb } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "Certificação Astronômica",
      description: "Formação especializada em astronomia observacional e instrumentação"
    },
    {
      icon: BookOpen,
      title: "Conhecimento Técnico",
      description: "Especialista em óptica, mecânica e eletrônica de telescópios"
    }
  ]

  const skills = [
    { name: "Telescópios Refratores", level: 95 },
    { name: "Telescópios Refletores", level: 90 },
    { name: "Montagens Equatoriais", level: 88 },
    { name: "Astrofotografia", level: 85 },
    { name: "Observação Planetária", level: 92 },
    { name: "Observação Deep Sky", level: 87 }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50"></div>
      
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
            <Star className="text-accent-500 h-6 w-6" />
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            <Star className="text-accent-500 h-6 w-6" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Sua Jornada às
            <span className="text-gradient block mt-2">Estrelas Começa Aqui</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Há mais de uma década dedicado ao estudo e observação do cosmos, 
            transformo a paixão pela astronomia em conhecimento prático e acessível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg">
              <p className="text-secondary-700 leading-relaxed mb-6">
                Minha paixão pela astronomia começou na infância, observando a Lua através 
                de um pequeno telescópio. Desde então, essa curiosidade se transformou em 
                uma missão: tornar o universo mais acessível para todos os entusiastas.
              </p>
              
              <p className="text-secondary-700 leading-relaxed mb-6">
                Com formação em astronomia e anos de experiência prática, desenvolvi 
                expertise em diversos tipos de telescópios, desde modelos iniciantes até 
                equipamentos profissionais de observatório.
              </p>
              
              <p className="text-secondary-700 leading-relaxed">
                Acredito que cada pessoa pode descobrir as maravilhas do cosmos com o 
                equipamento adequado e a orientação correta. Minha missão é ser seu 
                guia nessa jornada astronômica.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl text-white">
                <Compass className="h-12 w-12 mx-auto mb-3" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-90">Anos Explorando</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl text-white">
                <Target className="h-12 w-12 mx-auto mb-3" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Observações</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Expertise & Conhecimento
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700 font-medium">{skill.name}</span>
                  <span className="text-primary-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
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
              <h3 className="text-xl font-bold mb-2">Missão Pessoal</h3>
              <p className="text-primary-100 max-w-md">
                "Tornar o universo acessível a todos, um telescópio por vez. 
                Cada observação é uma oportunidade de inspirar e educar."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}