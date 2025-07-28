'use client'

import { useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Full stack Development',
    desc: 'Building full-stack apps with MongoDB, Express, React, and Node.js.',
  },
  {
    title: 'Machine Learning',
    desc: 'Solving real-world problems using Python, TensorFlow, and scikit-learn.',
  },
  {
    title: 'Data Analysis',
    desc: 'Analyzing and visualizing data using Pandas, NumPy, and Matplotlib.',
  },
  {
    title: 'UI/UX Enthusiast',
    desc: 'Designing intuitive interfaces with React and TailwindCSS.',
  },
]

export default function About() {
  const [text] = useTypewriter({
    words: ['Hello, my name is Faraaz Mahmood.'],
    loop: false,
    delaySpeed: 1000,
  })

  return (
    <section id="about" className="px-4 md:px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Typing and Intro */}
        <div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-fuchsia-400 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>{text}</span>
            <span className="text-fuchsia-500">|</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            I am a Computer Science student with a passion for building AI-powered applications and scalable backend systems. With experience in modern frameworks like{' '}
            <span className="text-fuchsia-400 font-semibold">Next.js</span> and{' '}
            <span className="text-fuchsia-400 font-semibold">Express.js</span>, and ML tools like{' '}
            <span className="text-fuchsia-400 font-semibold">TensorFlow</span>, I enjoy blending data intelligence with engineering best practices.
          </motion.p>
        </div>

        {/* Right: Role Timeline */}
        <div className="relative pl-4 sm:pl-5 border-l-2 border-fuchsia-500 space-y-8 sm:space-y-10">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[10px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 border-2 border-white shadow" />
              <h3 className="text-white font-bold text-base sm:text-lg">{role.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
