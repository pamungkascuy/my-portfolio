'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2,
  Sparkles,
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  X,
  Download,
  ChevronRight,
} from 'lucide-react';
import { certificationsData, experienceData } from '@/data/skills';

export default function AboutSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const activeCert = certificationsData.find((c) => c.id === selectedCert);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4F4] border border-[#A4C3B2] text-[#3D5449] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6B9080]" />
            <span>Tentang Saya</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1C2B24] tracking-tight"
          >
            Profil, Pengalaman &amp; Kredensial
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#5E7A6D] max-w-2xl text-sm sm:text-base mt-3"
          >
            Full-Stack Developer berpengalaman dalam pengembangan aplikasi web dan mobile menggunakan Flutter, Laravel, dan PHP.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Professional Profile */}
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C2B24] mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-[#6B9080]" />
                <span>Profil Profesional</span>
              </h3>

              <p className="text-[#3D5449] text-sm sm:text-base leading-relaxed mb-5">
                Full-Stack Developer dengan pengalaman mengembangkan aplikasi web dan mobile menggunakan <strong className="text-[#1C2B24]">Flutter, Laravel, dan PHP</strong>. Berpengalaman dalam membangun antarmuka web responsif, aplikasi mobile, RESTful API, serta pengelolaan database. Memahami proses pengembangan perangkat lunak mulai dari perancangan, implementasi, integrasi frontend dan backend, hingga pengujian aplikasi.
              </p>

              {/* Core Strengths */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6B9080] mt-1 shrink-0" />
                  <span className="text-xs text-[#3D5449]">
                    <strong className="text-[#1C2B24]">Frontend & Mobile:</strong> Flutter, React.js, Next.js, Tailwind CSS
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6B9080] mt-1 shrink-0" />
                  <span className="text-xs text-[#3D5449]">
                    <strong className="text-[#1C2B24]">Backend & DB:</strong> Laravel, PHP, MySQL, PostgreSQL, RESTful API
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6B9080] mt-1 shrink-0" />
                  <span className="text-xs text-[#3D5449]">
                    <strong className="text-[#1C2B24]">AI & Vision:</strong> Python, YOLOv8, OpenCV, Google ML Kit
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6B9080] mt-1 shrink-0" />
                  <span className="text-xs text-[#3D5449]">
                    <strong className="text-[#1C2B24]">Tools:</strong> Git/GitLab, Figma, Cursor, Claude Code
                  </span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1C2B24] mb-5 flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#6B9080]" />
                <span>Pengalaman Kerja</span>
              </h3>

              {experienceData.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[15px] top-10 bottom-0 w-[2px] bg-[#CCE3DE] rounded-full" />

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#6B9080] text-[#F6FFF8] flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>

                    <div className="flex-1 pb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-sm font-bold text-[#1C2B24]">{exp.role}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#EAF4F4] text-[#3D5449] border border-[#CCE3DE]">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#5E7A6D] mb-3">
                        <span className="font-semibold text-[#6B9080]">{exp.company}</span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {exp.responsibilities.map((r, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#3D5449] leading-relaxed">
                            <ChevronRight className="w-3 h-3 text-[#A4C3B2] mt-0.5 shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="p-3.5 rounded-2xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE] shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#6B9080] uppercase tracking-wider mb-1">
                  Pendidikan
                </div>
                <h4 className="text-base font-bold text-[#1C2B24]">
                  Politeknik Negeri Semarang
                </h4>
                <p className="text-xs sm:text-sm text-[#3D5449] mt-0.5">
                  Diploma (D3) Teknik Informatika — <strong className="text-[#1C2B24]">IPK 3.76 / 4.00</strong>
                </p>
                <p className="text-[11px] text-[#5E7A6D] mt-1 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  Sep 2023 – Sep 2026
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-[#EAF4F4] text-[#3D5449] text-xs font-bold border border-[#A4C3B2]">
                3.76 / 4.00
              </div>
            </div>
          </motion.div>

          {/* Right Column: Certifications with Preview Images */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold text-[#1C2B24] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#6B9080]" />
                  <span>Sertifikasi Profesional</span>
                </h3>
                <span className="text-[11px] font-bold text-[#6B9080] bg-[#EAF4F4] px-2 py-0.5 rounded-lg border border-[#A4C3B2]">
                  {certificationsData.length} Sertifikat
                </span>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCert(cert.id)}
                    className="w-full text-left p-4 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] hover:border-[#A4C3B2] transition-all group cursor-pointer"
                  >
                    {/* Certificate Thumbnail */}
                    <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden mb-3 bg-[#EAF4F4] border border-[#CCE3DE]">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                        <span className="text-white text-[11px] font-semibold bg-[#6B9080]/90 px-3 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1.5">
                          <ExternalLink className="w-3 h-3" />
                          Lihat Detail
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#1C2B24] leading-snug block">
                          {cert.title}
                        </span>
                        <span className="text-[11px] text-[#6B9080] font-semibold">
                          {cert.issuer} • {cert.year}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#EAF4F4] text-[#3D5449] border border-[#CCE3DE] shrink-0 mt-0.5">
                        {cert.badgeText}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl border border-[#CCE3DE] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-[#EAF4F4] px-6 py-4 rounded-t-3xl flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1C2B24]">{activeCert.title}</h3>
                  <p className="text-xs text-[#6B9080] font-semibold">
                    {activeCert.issuer} • {activeCert.year}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeCert.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#6B9080] hover:bg-[#567668] text-[#F6FFF8] text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh PDF</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-[#EAF4F4] text-[#3D5449] hover:bg-[#CCE3DE] border border-[#CCE3DE] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="rounded-2xl overflow-hidden border border-[#CCE3DE] shadow-inner bg-[#F6FFF8]">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-[#3D5449] mt-4 leading-relaxed">
                  {activeCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
