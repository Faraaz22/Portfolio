'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="mt-24 px-6 py-10 text-center text-gray-400 bg-white/5 backdrop-blur border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="mb-4">
        © {new Date().getFullYear()} Faraaz Mahmood. All rights reserved.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Button asChild variant="ghost" className="text-gray-300 hover:text-white">
          <a href="https://github.com/Faraaz22/" target="_blank" rel="noreferrer">GitHub</a>
        </Button>
        <Button asChild variant="ghost" className="text-gray-300 hover:text-white">
          <a href="https://www.linkedin.com/in/faraaz-mahmood-b4ab12268/" target="_blank" rel="noreferrer">LinkedIn</a>
        </Button>
        <Button asChild variant="ghost" className="text-gray-300 hover:text-white">
          <a href="mailto:faraazmahmood22@gmail.com">Email</a>
        </Button>
      </div>
    </motion.footer>
  )
}
