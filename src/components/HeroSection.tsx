'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/Icons';
import { Mail } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 18 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  const { t } = useApp();

  const stats = [
    { value: '10+',  label: t.hero.stats.projects },
    { value: '5',    label: t.hero.stats.certs    },
    { value: '3.76', label: t.hero.stats.gpa      },
  ];

  const socials = [
    { href: 'https://github.com/pamungkascuy',                           label: 'GitHub',    icon: <GithubIcon   className="w-4.5 h-4.5" />, hoverClass: 'hover:text-[var(--fg)]'    },
    { href: 'https://www.linkedin.com/in/arif-pamungkas-2879a8367',      label: 'LinkedIn',  icon: <LinkedinIcon  className="w-4.5 h-4.5" />, hoverClass: 'hover:text-[#0A66C2]'    },
    { href: 'https://wa.me/6282223578516',                               label: 'WhatsApp',  icon: <WhatsappIcon  className="w-4.5 h-4.5" />, hoverClass: 'hover:text-[#25D366]'    },
    { href: 'mailto:arifpamungkas50@gmail.com',                          label: 'Email',     icon: <Mail          className="w-4.5 h-4.5" />, hoverClass: 'hover:text-[var(--fg)]'   },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-[3.75rem] overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle radial gradient background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 60% 40%, var(--accent-glow) 0%, transparent 70%)',
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100vh-3.75rem)] py-16 lg:py-0">

          {/* ── Left: Text ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Available badge */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-2 self-start mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-xs text-[var(--fg-3)] font-medium tracking-wide">{t.hero.badge}</span>
            </motion.div>

            {/* Name heading */}
            <motion.h1
              {...fadeUp(0.07)}
              className="font-bold tracking-tight leading-[1.04] text-[var(--fg)] mb-4"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 4.5rem)' }}
            >
              Arif<br />
              <span className="gradient-text">Pamungkas</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              {...fadeUp(0.14)}
              className="text-base sm:text-lg font-medium text-[var(--fg-2)] mb-5 tracking-wide"
            >
              {t.hero.role}
            </motion.p>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-[.9375rem] text-[var(--fg-3)] leading-relaxed mb-10 max-w-md"
            >
              {t.hero.bioBeforeHighlight1}
              <strong className="text-[var(--fg-2)] font-semibold">{t.hero.bioHighlight1}</strong>
              {t.hero.bioMiddle}
              <strong className="text-[var(--fg-2)] font-semibold">{t.hero.bioHighlight2}</strong>
              {t.hero.bioAfter}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3 mb-12">
              <a href="/#projects" className="btn btn-primary">
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" download className="btn btn-ghost">
                <FileDown className="w-4 h-4" />
                {t.hero.downloadCv}
              </a>
            </motion.div>

            {/* Stats + Socials row */}
            <motion.div
              {...fadeUp(0.33)}
              className="flex items-center gap-8 pt-7 border-t border-[var(--border)]"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-bold text-[var(--fg)] leading-none tracking-tight">{value}</p>
                  <p className="text-[.6875rem] text-[var(--fg-4)] mt-1 uppercase tracking-wider">{label}</p>
                </div>
              ))}

              {/* Divider */}
              <div className="w-px h-8 bg-[var(--border)] mx-1" />

              {/* Socials */}
              <div className="flex items-center gap-3.5 ml-auto">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`text-[var(--fg-4)] ${s.hoverClass} transition-all hover:-translate-y-0.5`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-5 items-center justify-end"
          >
            <div className="relative group" style={{ width: '330px' }}>

              {/* Glow ring behind photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)' }}
              />

              {/* Offset shadow card */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[var(--accent-lt)] -z-10 transition-transform duration-400 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
              />

              {/* Photo card */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-lg)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/profile/profile.webp"
                    alt="Arif Pamungkas"
                    fill
                    sizes="330px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                </div>

                {/* Floating info card */}
                <div className="absolute bottom-3 left-3 right-3 z-20">
                  <div className="bg-[var(--surface)]/90 backdrop-blur-md rounded-xl px-4 py-2.5 border border-[var(--border)]/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[.8125rem] font-semibold text-[var(--fg)]">Arif Pamungkas</p>
                        <p className="text-[.6875rem] text-[var(--fg-3)] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-2.5 h-2.5 text-[var(--accent)]" />
                          {t.hero.location}
                        </p>
                      </div>
                      <span className="text-[.625rem] font-semibold text-[var(--accent)] bg-[var(--accent-lt)] px-2 py-1 rounded-lg leading-tight">
                        {t.hero.openToWork}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
