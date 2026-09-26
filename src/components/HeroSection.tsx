'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Mail,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import {
  FlutterLogo,
  DartLogo,
  LaravelLogo,
  PythonLogo,
  TypeScriptLogo,
  ReactLogo,
  MySQLLogo,
  SupabaseLogo,
  GoogleMLKitLogo,
  DockerLogo,
} from '@/components/TechLogos';

export default function HeroSection() {
  const primaryTech = [
    { name: 'Flutter', logo: <FlutterLogo className="w-5 h-5" />, role: 'Cross-platform Mobile' },
    { name: 'Dart', logo: <DartLogo className="w-5 h-5" />, role: 'Language & Async' },
    { name: 'Laravel', logo: <LaravelLogo className="w-5 h-5" />, role: 'Enterprise Backend' },
    { name: 'Python', logo: <PythonLogo className="w-5 h-5" />, role: 'Computer Vision & AI' },
    { name: 'TypeScript', logo: <TypeScriptLogo className="w-5 h-5" />, role: 'Type-safe Web' },
    { name: 'React / Next', logo: <ReactLogo className="w-5 h-5" />, role: 'Dynamic Frontend' },
    { name: 'MySQL', logo: <MySQLLogo className="w-5 h-5" />, role: 'Relational Database' },
    { name: 'Supabase', logo: <SupabaseLogo className="w-5 h-5" />, role: 'BaaS & Realtime' },
    { name: 'Google ML Kit', logo: <GoogleMLKitLogo className="w-5 h-5" />, role: 'Pose Estimation & ML' },
    { name: 'Docker', logo: <DockerLogo className="w-5 h-5" />, role: 'Containerization' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#F6FFF8]"
    >
      {/* Subtle organic background warmth */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EAF4F4] blur-[120px] rounded-full pointer-events-none -z-10 opacity-70" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#CCE3DE] blur-[140px] rounded-full pointer-events-none -z-10 opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4F4] border border-[#A4C3B2] text-[#3D5449] text-xs font-semibold mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#6B9080]" />
              <span>Tersedia untuk Rekrutmen &amp; Proyek Freelance</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C2B24] tracking-tight leading-[1.15] mb-4">
              Arif Pamungkas
            </h1>

            {/* Role Title */}
            <div className="text-xl sm:text-2xl font-bold text-[#6B9080] mb-5 flex items-center gap-2.5">
              <span className="w-8 h-[3px] bg-[#6B9080] rounded-full" />
              <span>Fullstack Developer &amp; Mobile Engineer</span>
            </div>

            {/* Description */}
            <p className="text-[#3D5449] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Membangun aplikasi mobile berstandar tinggi dengan <strong className="text-[#1C2B24]">Flutter &amp; Dart</strong>, arsitektur RESTful API yang tangguh dengan <strong className="text-[#1C2B24]">Laravel</strong>, serta integrasi <strong className="text-[#1C2B24]">Computer Vision (Google ML Kit &amp; Python)</strong> untuk menghadirkan solusi komputasi cerdas dan teruji di lapangan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#6B9080] hover:bg-[#567668] text-[#F6FFF8] font-semibold shadow-md shadow-[#6B9080]/20 transition-all hover:scale-[1.02]"
              >
                <span>Lihat Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#EAF4F4] text-[#1C2B24] font-semibold border border-[#CCE3DE] hover:border-[#A4C3B2] transition-all shadow-xs"
              >
                <FileDown className="w-4 h-4 text-[#6B9080]" />
                <span>Unduh CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-[#3D5449] hover:text-[#1C2B24] hover:bg-[#EAF4F4]/80 text-sm font-semibold transition-colors"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-[#5E7A6D]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5E7A6D]">
                Tautan:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/pamungkascuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#CCE3DE] text-[#3D5449] hover:text-[#1C2B24] hover:border-[#A4C3B2] transition-colors shadow-xs"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/arifpamungkas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#CCE3DE] text-[#3D5449] hover:text-[#6B9080] hover:border-[#A4C3B2] transition-colors shadow-xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@arifpamungkas.dev"
                  className="p-2.5 rounded-xl bg-white border border-[#CCE3DE] text-[#3D5449] hover:text-[#6B9080] hover:border-[#A4C3B2] transition-colors shadow-xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Tech Stack & Verified Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-white border border-[#CCE3DE] p-6 sm:p-7 shadow-xl shadow-[#6B9080]/8 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EAF4F4] mb-5">
                <div>
                  <h3 className="font-bold text-[#1C2B24] text-base">
                    Tech Stack &amp; Tools Utama
                  </h3>
                  <p className="text-xs text-[#5E7A6D]">
                    Alat dan teknologi yang dipakai dalam proyek produksi
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-[#EAF4F4] text-[#6B9080]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Grid of Real Brand Logos */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {primaryTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-2.5 rounded-xl bg-[#F6FFF8] border border-[#CCE3DE]/70 hover:border-[#A4C3B2] hover:bg-white transition-all flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#CCE3DE] flex items-center justify-center shrink-0 shadow-xs">
                      {tech.logo}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-[#1C2B24] truncate">
                        {tech.name}
                      </div>
                      <div className="text-[10px] text-[#5E7A6D] truncate">
                        {tech.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Credential Footnote */}
              <div className="p-3.5 rounded-2xl bg-[#EAF4F4] border border-[#CCE3DE] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#A4C3B2] flex items-center justify-center text-[#6B9080] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C2B24]">
                    D3 Teknik Informatika
                  </div>
                  <div className="text-[11px] text-[#5E7A6D]">
                    Sertifikasi Resmi Big Data, MikroTik MTCNA, &amp; Oracle SQL
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
