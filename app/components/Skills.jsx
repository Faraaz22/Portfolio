
'use client'

import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import {
  FaReact, FaPython, FaDatabase, FaNodeJs, FaCss3Alt,
  FaJava, FaJsSquare, FaCuttlefish,FaHtml5
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb,
  SiExpress, SiPrisma, SiFlask, SiFastapi,
  SiTensorflow, SiScikitlearn, SiKeras, SiCplusplus
} from 'react-icons/si'



const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
      { name: 'NextJS', icon: <SiNextdotjs className="text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'ExpressJS', icon: <SiExpress className="text-white" /> },
      { name: 'Flask', icon: <SiFlask className="text-white" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-300" /> },
      { name: 'REST APIs', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-indigo-400" /> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'C/C++', icon: <SiCplusplus className="text-blue-500" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    ],
  },
  {
    title: 'ML & Data Anlysis',
    items: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="text-yellow-400" /> },
      { name: 'Keras', icon: <SiKeras className="text-red-400" /> },
      { name: 'Pandas / NumPy', icon: <FaPython className="text-blue-300" /> }, // fallback
    ],
  },
]



export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <motion.h2
          className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-indigo-400 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skillset
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg group hover:scale-[1.02] transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
                          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-md bg-gradient-to-br from-fuchsia-500/40 via-pink-500/30 to-indigo-500/40 z-0" />
              <h3 className="text-xl font-bold text-fuchsia-300 mb-4">{cat.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((skill) => (
  <div
    key={skill.name}
    className="flex flex-col items-center gap-2 text-white"
  >
    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
      {skill.icon}
    </div>
    <span className="text-sm text-center">{skill.name}</span>
  </div>
))}

              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
