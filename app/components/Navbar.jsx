'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const sections = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 100) {
          setActive(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/35 backdrop-blur-lg text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
      
        <Link href="/" className="flex items-center space-x-2 text-lg font-bold uppercase">
          <span>Faraaz Mahmood</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className={clsx(
                'transition-all hover:text-white/80 text-sm font-medium',
                active === id && 'text-fuchsia-400 font-semibold'
              )}
            >
              {id === 'contact' ? 'Contact Me' : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}

          <Button
            asChild
            variant="secondary"
            className="border-white border flex items-center gap-2 text-sm"
          >
            <a href="/Faraaz_Mahmood_Resume.pdf" download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4">
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'block text-white text-base transition-all hover:text-fuchsia-400',
                active === id && 'text-fuchsia-400 font-semibold'
              )}
            >
              {id === 'contact' ? 'Contact Me' : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}

          <Button
            asChild
            variant="secondary"
            className="w-full border-white border flex items-center justify-center gap-2"
          >
            <a href="/Faraaz_Mahmood_Resume.pdf" download>
              <Download className="w-4 h-4" />
                Download Resume
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
