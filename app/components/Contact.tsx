'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    emailjs.sendForm(
      'service_syrg0q5',          
      'template_cojtvpg',          
      formRef.current!,
      '8N9PmXWaS9qz2P5Hl'          
    )
    .then(() => {
      alert('✅ Message sent successfully!')
      formRef.current?.reset()
    })
    .catch((error) => {
      console.error(' Email sending error:', error)
      alert('Failed to send message. Try again later.')
    })
    .finally(() => setSending(false))
  }

  return (
    <section id="contact" className="py-15 px-6 max-w-2xl mx-auto">
      <motion.h2
                className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-indigo-400 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Contact Me
              </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 space-y-6 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-white font-medium">Name</label>
          <Input name="name" id="name" required placeholder="Your name" className="bg-white/10 text-white placeholder:text-white/50" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-white font-medium">Email</label>
          <Input name="email" id="email" type="email" required placeholder="you@example.com" className="bg-white/10 text-white placeholder:text-white/50" />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-white font-medium">Message</label>
          <Textarea name="message" id="message" required placeholder="Your message..." rows={5} className="bg-white/10 text-white placeholder:text-white/50" />
        </div>

        <Button
          type="submit"
          variant="default"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white w-full"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.form>
    </section>
  )
}
