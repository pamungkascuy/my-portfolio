'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { getLocalizedCertifications, getLocalizedExperience } from '@/data/localizedData';
import { useApp } from '@/context/AppContext';

type Tab = 'profil' | 'pengalaman' | 'sertifikasi';

export default function AboutSection() {
  const { t, locale } = useApp();
  const [tab, setTab] = useState<Tab>('profil');
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificationsData = getLocalizedCertifications(locale);
  const experienceData     = getLocalizedExperience(locale);

  const activeCert   = certificationsData.find((c) => c.id === selectedCert);
  const currentIndex = certificationsData.findIndex((c) => c.id === selectedCert);

  const handlePrevCert = () => {
    const idx = currentIndex > 0 ? currentIndex - 1 : certificationsData.length - 1;
    setSelectedCert(certificationsData[idx].id);
  };
  const handleNextCert = () => {
    const idx = currentIndex < certificationsData.length - 1 ? currentIndex + 1 : 0;
    setSelectedCert(certificationsData[idx].id);
  };

  const TABS: { id: Tab; label: string }[] = [
    { id: 'profil',      label: t.about.tabs.profile                              },
    { id: 'pengalaman',  label: t.about.tabs.experience                           },
    { id: 'sertifikasi', label: `${t.about.tabs.certs} (${certificationsData.length})` },
  ];

  return (
    <section id="about" className="py-24" style={{ background: 'var(--surface)' }}>
      <div className="container-xl">

        {/* Header */}
        <div className="mb-10">
          <span className="label-tag">{t.about.tag}</span>
          <h2 className="section-heading mt-2">{t.about.heading}</h2>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-6 border-b border-[var(--border)] mb-10">
          {TABS.map((tabItem) => (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={`tab-line ${tab === tabItem.id ? 'active' : ''}`}
            >
              {tabItem.label}
            </button>
          ))}
        </div>

        {/* ─── PROFIL TAB ─── */}
        {tab === 'profil' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left: Photo, Education & Status */}
            <div className="lg:col-span-4 space-y-4">
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] w-full aspect-[4/5] max-w-[320px] mx-auto lg:max-w-none shadow-[var(--shadow-md)]">
                <Image
                  src="/profile/profile.webp"
                  alt="Arif Pamungkas"
                  fill
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover object-top"
                />
              </div>

              {/* Education Card */}
              <div className="card p-4 !rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-lt)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[var(--fg)] leading-snug">
                      {t.about.profile.education.school}
                    </p>
                    <p className="text-xs text-[var(--fg-2)] mt-0.5">
                      {t.about.profile.education.degree}
                      <span className="text-[var(--accent)] font-semibold ml-1">
                        {t.about.profile.education.gpa}
                      </span>
                    </p>
                    <p className="text-[11px] text-[var(--fg-4)] mt-1 font-mono">
                      {t.about.profile.education.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location & Status Card */}
              <div className="card p-3.5 !rounded-xl flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[var(--fg-3)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {t.hero.location}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-[var(--accent)] bg-[var(--accent-lt)] px-2.5 py-1 rounded-full text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  {t.hero.openToWork}
                </span>
              </div>
            </div>

            {/* Right: Bio & Core Competencies */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--fg)] tracking-tight mb-1">
                  {t.about.profile.name}
                </h3>
                <p className="text-sm text-[var(--accent)] font-semibold mb-3">
                  {t.about.profile.role}
                </p>
                <p className="text-[.9375rem] text-[var(--fg-2)] leading-relaxed">
                  {t.about.profile.bioText}
                </p>
              </div>

              {/* Core competencies */}
              <div className="pt-2">
                <p className="text-xs font-bold text-[var(--fg-4)] uppercase tracking-wider mb-3">
                  {t.about.profile.competenciesTitle}
                </p>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {t.about.profile.competencies.map(({ label, value }) => (
                    <div key={label} className="card p-4 !rounded-xl">
                      <p className="text-[.6875rem] font-bold text-[var(--fg-4)] uppercase tracking-wider mb-1.5">
                        {label}
                      </p>
                      <p className="text-sm text-[var(--fg-2)] font-medium leading-snug">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── PENGALAMAN TAB ─── */}
        {tab === 'pengalaman' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl"
          >
            <div className="relative pl-8 space-y-8">
              {/* Vertical timeline line */}
              <div className="absolute left-3.5 top-2 bottom-2 w-px bg-[var(--border)]" />

              {experienceData.map((exp, i) => (
                <div key={exp.id} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-8 top-1 w-7 h-7 rounded-full border-2 border-[var(--border)] bg-[var(--surface)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  </div>

                  <div className={i < experienceData.length - 1 ? 'pb-2' : ''}>
                    <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                      <h4 className="text-base font-semibold text-[var(--fg)]">{exp.role}</h4>
                      <span className="text-xs font-mono text-[var(--fg-4)] bg-[var(--surface-2)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[var(--accent)] mb-3">
                      {exp.company}
                      {exp.location && (
                        <span className="text-[var(--fg-4)] font-normal ml-2 inline-flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3" />{exp.location}
                        </span>
                      )}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[var(--fg-2)] leading-relaxed">
                          <span className="text-[var(--accent)] mt-1 shrink-0">›</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ─── SERTIFIKASI TAB ─── */}
        {tab === 'sertifikasi' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {certificationsData.map((cert, i) => (
              <motion.button
                key={cert.id}
                onClick={() => setSelectedCert(cert.id)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="card text-left p-4 hover:border-[var(--accent)] cursor-pointer group flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-lt)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--fg)] leading-snug truncate group-hover:text-[var(--accent)] transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-xs text-[var(--fg-4)] mt-0.5">{cert.issuer} · {cert.year}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--fg-4)] group-hover:text-[var(--accent)] shrink-0 transition-colors" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,.7)', backdropFilter: 'blur(6px)' }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--surface)] rounded-[var(--radius-xl)] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="border-b border-[var(--border)] px-5 py-4 flex items-center justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[.625rem] font-mono text-[var(--accent)] bg-[var(--accent-lt)] px-2 py-0.5 rounded-full">
                      {currentIndex + 1} / {certificationsData.length}
                    </span>
                    <span className="text-xs text-[var(--fg-4)]">{activeCert.issuer} · {activeCert.year}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--fg)]">{activeCert.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--fg-3)] hover:text-[var(--fg)] hover:bg-[var(--surface-2)] transition-all cursor-pointer"
                  aria-label={t.about.modal.close}
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Cert tabs strip */}
              <div className="flex items-center gap-1 px-4 py-2 bg-[var(--bg)] border-b border-[var(--border)] overflow-x-auto shrink-0">
                {certificationsData.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCert(c.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all cursor-pointer ${
                      c.id === activeCert.id
                        ? 'bg-[var(--surface)] text-[var(--fg)] font-semibold border border-[var(--border)] shadow-sm'
                        : 'text-[var(--fg-4)] hover:text-[var(--fg)] hover:bg-[var(--surface)]/60'
                    }`}
                  >
                    <span className="text-[.625rem] font-mono text-[var(--accent)] mr-1">{idx + 1}.</span>
                    {c.badgeText}
                  </button>
                ))}
              </div>

              {/* Image */}
              <div className="p-5 overflow-y-auto">
                <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]">
                  <Image
                    src={activeCert.image}
                    alt={activeCert.title}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="w-full h-auto object-contain max-h-[52vh] block"
                  />
                  <button
                    onClick={handlePrevCert}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--surface)]/95 shadow-md border border-[var(--border)] flex items-center justify-center text-[var(--fg-2)] hover:bg-[var(--surface)] transition-all cursor-pointer"
                    aria-label={t.about.modal.prev}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextCert}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--surface)]/95 shadow-md border border-[var(--border)] flex items-center justify-center text-[var(--fg-2)] hover:bg-[var(--surface)] transition-all cursor-pointer"
                    aria-label={t.about.modal.next}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                {activeCert.description && (
                  <p className="text-sm text-[var(--fg-2)] leading-relaxed mt-4">{activeCert.description}</p>
                )}
              </div>

              {/* Footer nav */}
              <div className="bg-[var(--bg)] border-t border-[var(--border)] px-5 py-3 flex items-center justify-between shrink-0">
                <button onClick={handlePrevCert} className="btn btn-ghost text-xs">
                  <ChevronLeft className="w-4 h-4" /> {t.about.modal.prev}
                </button>
                <div className="flex gap-1.5">
                  {certificationsData.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCert(c.id)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        c.id === activeCert.id ? 'w-5 bg-[var(--accent)]' : 'w-1.5 bg-[var(--border-2)]'
                      }`}
                      aria-label={`${t.about.modal.certLabel} ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={handleNextCert} className="btn btn-ghost text-xs">
                  {t.about.modal.next} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
