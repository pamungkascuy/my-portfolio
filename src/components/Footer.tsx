'use client';

import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#CCE3DE] bg-[#F6FFF8] py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#CCE3DE]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#6B9080] flex items-center justify-center text-[#F6FFF8] font-bold text-xs">
                AP
              </div>
              <span className="font-bold text-[#1C2B24] text-base tracking-tight">
                Arif Pamungkas
              </span>
            </div>
            <p className="text-xs text-[#5E7A6D]">
              Fullstack Developer &amp; Mobile Engineer • Membangun solusi digital berstandar tinggi.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-[#5E7A6D]">
            <a href="/#hero" className="hover:text-[#1C2B24] transition-colors">
              Beranda
            </a>
            <a href="/#about" className="hover:text-[#1C2B24] transition-colors">
              Tentang
            </a>
            <a href="/#skills" className="hover:text-[#1C2B24] transition-colors">
              Keahlian
            </a>
            <a href="/#projects" className="hover:text-[#1C2B24] transition-colors">
              Proyek
            </a>
            <a href="/#contact" className="hover:text-[#1C2B24] transition-colors">
              Kontak
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#EAF4F4] text-[#1C2B24] text-xs font-semibold border border-[#CCE3DE] transition-all hover:border-[#A4C3B2] shadow-2xs"
            aria-label="Kembali ke atas"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#6B9080]" />
          </button>
        </div>

        {/* Copyright and signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E7A6D]">
          <p>© {new Date().getFullYear()} Arif Pamungkas. Hak Cipta Dilindungi.</p>

          <div className="flex items-center gap-1.5 font-medium text-[#3D5449]">
            <span>Next.js • Tailwind CSS • Framer Motion</span>
          </div>

          <div className="flex items-center gap-3 text-[#3D5449]">
            <a
              href="https://github.com/pamungkascuy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-[#CCE3DE] hover:border-[#A4C3B2] hover:text-[#1C2B24] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/arifpamungkas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white border border-[#CCE3DE] hover:border-[#A4C3B2] hover:text-[#6B9080] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@arifpamungkas.dev"
              className="p-2 rounded-lg bg-white border border-[#CCE3DE] hover:border-[#A4C3B2] hover:text-[#6B9080] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
