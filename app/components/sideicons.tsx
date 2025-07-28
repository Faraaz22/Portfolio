'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import clsx from 'clsx'

export default function Sideicons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  const icons = [
    {
      href: 'https://mail.google.com/mail/?view=cm&to=faraazmahmood22@gmail.com',
      icon: <FaEnvelope size={20} />,
      color: 'text-red-600 hover:bg-red-100',
    },
    {
      href: 'https://github.com/Faraaz22/',
      icon: <FaGithub size={20} />,
      color: 'text-black hover:bg-gray-200',
    },
    {
      href: 'https://www.linkedin.com/in/faraaz-mahmood-b4ab12268/',
      icon: <FaLinkedin size={20} />,
      color: 'text-blue-700 hover:bg-blue-100',
    },
    {
      href: 'https://leetcode.com/u/Faraaz08/',
      icon: <SiLeetcode size={20} />,
      color: 'text-orange-500 hover:bg-orange-100',
    },
  ]

  return (
    <>
      {/* Desktop: right side floating */}
      <div
        className={clsx(
          'hidden md:flex fixed top-1/2 right-4 -translate-y-1/2 z-50 flex-col space-y-4 transition-opacity duration-700',
          mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        )}
      >
        {icons.map(({ href, icon, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'bg-white p-3 rounded-full shadow-lg transform transition duration-300 hover:scale-110',
              color
            )}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Mobile: bottom bar */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex space-x-6 bg-white/90 px-6 py-2 rounded-full shadow-md backdrop-blur-md">
        {icons.map(({ href, icon, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'p-2 rounded-full transition duration-200 hover:scale-110',
              color
            )}
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  )
}
