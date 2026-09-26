'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Beranda', href: '/#hero', id: 'hero' },
  { label: 'Tentang', href: '/#about', id: 'about' },
  { label: 'Keahlian', href: '/#skills', id: 'skills' },
  { label: 'Proyek', href: '/#projects', id: 'projects' },
  { label: 'Kontak', href: '/#contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-[#CCE3DE] shadow-lg shadow-[#6B9080]/5'
            : 'bg-[#F6FFF8]/80 backdrop-blur-md border border-[#CCE3DE]/60 shadow-sm'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/#hero"
          className="group flex items-center gap-3 font-semibold text-lg tracking-tight text-[#1C2B24] hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-xl bg-[#6B9080] flex items-center justify-center text-[#F6FFF8] font-bold text-sm shadow-sm group-hover:bg-[#567668] transition-colors">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#1C2B24] tracking-tight text-sm sm:text-base leading-tight">
              Arif Pamungkas
            </span>
            <span className="text-[10px] text-[#5E7A6D] font-mono tracking-wider">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#EAF4F4]/80 p-1.5 rounded-xl border border-[#CCE3DE]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                  isActive ? 'text-[#1C2B24]' : 'text-[#5E7A6D] hover:text-[#1C2B24]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white border border-[#A4C3B2]/80 rounded-lg shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white hover:bg-[#EAF4F4] text-[#1C2B24] border border-[#CCE3DE] transition-all hover:border-[#A4C3B2] shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5 text-[#6B9080]" />
            <span>Unduh CV</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-xl bg-[#6B9080] hover:bg-[#567668] text-[#F6FFF8] shadow-sm shadow-[#6B9080]/20 transition-all hover:scale-[1.02]"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-xl bg-white border border-[#CCE3DE] text-[#3D5449] hover:text-[#1C2B24] focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-6xl mx-auto bg-white/98 backdrop-blur-2xl border border-[#CCE3DE] rounded-2xl p-5 shadow-xl shadow-[#6B9080]/10 flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-[#3D5449] hover:text-[#1C2B24] hover:bg-[#EAF4F4] text-sm font-semibold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#CCE3DE] flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#EAF4F4] text-[#1C2B24] border border-[#CCE3DE] text-sm font-medium"
              >
                <FileDown className="w-4 h-4 text-[#6B9080]" />
                Unduh CV (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#6B9080] text-[#F6FFF8] text-sm font-semibold shadow-sm"
              >
                Hubungi Saya
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
