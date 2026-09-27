'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { theme, toggleTheme, locale, setLocale, t, mounted } = useApp();

  const navItems = [
    { label: t.nav.projects, href: '/#projects', id: 'projects' },
    { label: t.nav.about,    href: '/#about',    id: 'about'    },
    { label: t.nav.skills,   href: '/#skills',   id: 'skills'   },
    { label: t.nav.contact,  href: '/#contact',  id: 'contact'  },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = ['hero', 'projects', 'about', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_1px_0_var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-xl flex items-center justify-between h-[3.75rem]">

        {/* Brand */}
        <a
          href="/#hero"
          className="font-bold text-[var(--fg)] tracking-tight text-sm hover:text-[var(--accent)] transition-colors shrink-0"
        >
          <span className="text-[var(--accent)]">A</span>rif<span className="text-[var(--fg-3)] font-normal mx-1">·</span>Pamungkas
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-[.8125rem] rounded-lg transition-all font-medium group ${
                  isActive
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--fg-3)] hover:text-[var(--fg)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-[var(--accent-lt)]"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right actions: Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Switcher */}
          <div
            className="flex items-center text-[.75rem] font-semibold rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-0.5 gap-0.5"
            role="group"
            aria-label={t.nav.switchLanguage}
          >
            {(['id', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                aria-label={lang === 'id' ? 'Bahasa Indonesia' : 'English'}
                aria-pressed={locale === lang}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  locale === lang
                    ? 'bg-[var(--accent)] text-white shadow-sm'
                    : 'text-[var(--fg-3)] hover:text-[var(--fg)]'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--fg-3)] hover:text-[var(--fg)] border border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--border-2)] transition-all cursor-pointer"
          >
            {mounted && theme === 'dark'
              ? <Sun  className="w-[1.05rem] h-[1.05rem] text-amber-400" />
              : <Moon className="w-[1.05rem] h-[1.05rem]" />
            }
          </button>

          <div className="w-px h-4 bg-[var(--border)] mx-0.5" />

          <a href="/resume.pdf" download className="btn btn-ghost text-[.75rem] h-8 py-0">
            <FileDown className="w-3.5 h-3.5" />
            {t.nav.resume}
          </a>
          <a href="/#contact" className="btn btn-primary text-[.75rem] h-8 py-0">
            {t.nav.hireMe}
          </a>
        </div>

        {/* Mobile: Language + Theme + Hamburger */}
        <div className="flex md:hidden items-center gap-1.5">
          <div
            className="flex items-center text-[.6875rem] font-semibold rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-0.5"
            role="group"
            aria-label={t.nav.switchLanguage}
          >
            {(['id', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                aria-pressed={locale === lang}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  locale === lang
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--fg-3)]'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--fg-3)] border border-[var(--border)] transition-all cursor-pointer"
          >
            {mounted && theme === 'dark'
              ? <Sun  className="w-3.5 h-3.5 text-amber-400" />
              : <Moon className="w-3.5 h-3.5" />
            }
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t.nav.toggleMenu}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--fg-3)] hover:text-[var(--fg)] transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[var(--surface)] border-b border-[var(--border)] px-4 py-4 flex flex-col gap-1 shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[var(--accent)] bg-[var(--accent-lt)]'
                    : 'text-[var(--fg-2)] hover:text-[var(--fg)] hover:bg-[var(--surface-2)]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[var(--border)] flex flex-col gap-2">
              <a href="/resume.pdf" download onClick={() => setIsOpen(false)} className="btn btn-ghost justify-center">
                <FileDown className="w-4 h-4" />
                {t.nav.downloadResume}
              </a>
              <a href="/#contact" onClick={() => setIsOpen(false)} className="btn btn-primary justify-center">
                {t.nav.hireMe}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
