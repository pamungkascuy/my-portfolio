'use client';

import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/Icons';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { t } = useApp();

  const navLinks = [
    { label: t.nav.about,    href: '/#about'    },
    { label: t.nav.projects, href: '/#projects' },
    { label: t.nav.skills,   href: '/#skills'   },
    { label: t.nav.contact,  href: '/#contact'  },
  ];

  const socials = [
    { href: 'https://github.com/pamungkascuy',                      label: 'GitHub',   icon: <GithubIcon   className="w-4 h-4" />, hover: 'hover:text-[var(--fg)]'   },
    { href: 'https://www.linkedin.com/in/arif-pamungkas-2879a8367', label: 'LinkedIn', icon: <LinkedinIcon  className="w-4 h-4" />, hover: 'hover:text-[#0A66C2]'    },
    { href: 'https://wa.me/6282223578516',                          label: 'WhatsApp', icon: <WhatsappIcon  className="w-4 h-4" />, hover: 'hover:text-[#25D366]'    },
    { href: 'mailto:arifpamungkas50@gmail.com',                     label: 'Email',    icon: <Mail          className="w-4 h-4" />, hover: 'hover:text-[var(--fg)]'   },
  ];

  return (
    <footer
      className="border-t"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="container-xl py-10 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Brand */}
        <div>
          <p className="text-sm font-bold text-[var(--fg)] tracking-tight">
            <span className="text-[var(--accent)]">A</span>rif Pamungkas
          </p>
          <p className="text-xs text-[var(--fg-4)] mt-0.5">{t.footer.role}</p>
        </div>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-5 text-xs text-[var(--fg-4)]">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--fg)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Socials + Back to top */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`text-[var(--fg-4)] ${s.hover} transition-all hover:-translate-y-0.5`}
            >
              {s.icon}
            </a>
          ))}

          <div className="w-px h-4 bg-[var(--border)] mx-1" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-7 h-7 flex items-center justify-center rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-[var(--fg-3)] hover:text-[var(--fg)] hover:border-[var(--border-2)] transition-all cursor-pointer hover:-translate-y-0.5"
            aria-label={t.footer.backToTop}
            title={t.footer.backToTop}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="container-xl pb-6">
        <div className="border-t border-[var(--border)] pt-4 text-[.6875rem] text-[var(--fg-4)]">
          {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
        </div>
      </div>
    </footer>
  );
}
