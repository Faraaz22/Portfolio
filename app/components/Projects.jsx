'use client'

import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'BlogCraft',
    desc: `This project is a full-stack blogging platform built with Next.js, TypeScript, and Tailwind CSS. It allows users to
 create, view, and manage blog posts with features like authentication, dynamic routing, and a modern, respon
sive UI. It leverages Ollama to create blog posts based on the provided inputs. The backend uses Prisma ORM
 for database operations, ensuring efficient data management and scalability. The codebase emphasizes mod
ular React components and clean architecture, making it ideal for collaborative development and rapid feature
 expansion.`,
    link: 'https://github.com/Faraaz22/BlogCraft--AI-assisted-blogging-platform',
  },
  {
    title: 'ProfilePop',
    desc: `Full-stack SaaS built with Next.js, Express, Prisma/MySQL, Kinde (Auth), and Stripe:Authenticated users paste
 or upload their resume text frontend styled with Tailwind and ShadCN.Resume is auto￿formatted by OpenAI
 LLM into polished HTML, stored via Prisma, and exposed via a public slug URL.Users and visitors can down
load resumes as PDFs directly from the browser.Users can optionally donate via Stripe integration, enabling
 seamless payment flow and contributions. Demonstrates end￿to￿end SaaS application design, authentica
tion, LLM powered content generation, file download, and payment system integration — ideal for showcasing
 full￿stack engineering proficiency.`,
    link: 'https://github.com/Faraaz22/ProfilePop--Instantly-turn-your-resume-into-a-public-link',
  },
  {
    title: 'Gen AI Document Assitant',
    desc: 'It takes PDF documents and process them such it can summarize the data. Create logical questions and answers. Has a Challenge Me mode where it can gice 3 questions and then asses the answers subjectively.',
    link: 'https://github.com/Faraaz22/GenAI-Document-Assistant',
  },
  
  {
    title: 'Campaign Manager Web App',
    desc: `Built a RESTful API using Node.js (Express) with MySQL for data storage and implemented JWT-based user
 authentication for secure access. The backend supported full CRUD operations on campaign data (name, date,
 impressions, clicks, conversions). Designed a lightweight React frontend to interact with the API, enabling users
 to log in, view, add, and filter campaign metrics. Emphasized clean, maintainable code and core functionality over
 complex UI or state management.`,
    link: 'h https://github.com/Faraaz22/Campaign-Manager',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <motion.h2
          className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-indigo-400 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="relative group rounded-xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden transition-all hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-md bg-gradient-to-br from-fuchsia-500/40 via-pink-500/30 to-indigo-500/40 z-0" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fuchsia-300 underline hover:text-fuchsia-200 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
