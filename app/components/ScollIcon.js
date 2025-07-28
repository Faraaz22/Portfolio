'use client'
import { useEffect, useState } from 'react'

export default function ScrollIcon() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
      setHide(bottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
        hide ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <svg
        className="w-8 h-8 text-fuchsia-400 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}
