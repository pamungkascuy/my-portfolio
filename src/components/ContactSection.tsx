'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle,
  Copy,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailAddress = 'arifpamungkas.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#F6FFF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4F4] border border-[#A4C3B2] text-[#3D5449] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#6B9080]" />
            <span>Kontak &amp; Diskusi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1C2B24] tracking-tight"
          >
            Mari Mulai Kerja Sama atau Terhubung
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#5E7A6D] max-w-2xl text-sm sm:text-base mt-3"
          >
            Terbuka untuk peluang rekrutmen kerja full-time, posisi mobile / backend engineer, serta konsultasi proyek.
          </motion.p>
        </div>

        {/* Contact Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-[#1C2B24] mb-2">Informasi Kontak</h3>
              <p className="text-[#5E7A6D] text-xs sm:text-sm leading-relaxed mb-6">
                Silakan hubungi saya melalui jalur resmi di bawah ini. Saya akan merespons dalam waktu 1x24 jam.
              </p>

              {/* Direct email card with copy button */}
              <div className="p-4 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#5E7A6D] font-medium">Alamat Email</div>
                    <div className="text-xs sm:text-sm font-bold text-[#1C2B24] truncate">
                      {emailAddress}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#EAF4F4] text-[#3D5449] hover:text-[#1C2B24] border border-[#CCE3DE] transition-colors shrink-0 shadow-2xs"
                  title="Salin Email"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-[#6B9080]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#5E7A6D] font-medium">Domisili</div>
                  <div className="text-xs sm:text-sm font-bold text-[#1C2B24]">
                    Indonesia (WIB / GMT+7) — Tersedia Remote
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-5 border-t border-[#EAF4F4]">
                <div className="text-xs font-bold text-[#5E7A6D] mb-3 uppercase tracking-wider">
                  Jejaring Profesional
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com/in/arifpamungkas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] text-[#1C2B24] hover:bg-white hover:border-[#A4C3B2] transition-colors text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/pamungkascuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] text-[#1C2B24] hover:bg-white hover:border-[#A4C3B2] transition-colors text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4 text-[#24292F]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1C2B24] mb-1.5">Kirim Pesan Langsung</h3>
              <p className="text-[#5E7A6D] text-xs sm:text-sm mb-6">
                Tuliskan tawaran kerja, lingkup proyek, atau pertanyaan teknis melalui form di bawah ini.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#EAF4F4] border border-[#A4C3B2] text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white text-[#6B9080] border border-[#CCE3DE] flex items-center justify-center shadow-xs">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1C2B24]">Pesan Siap Terkirim</h4>
                  <p className="text-xs sm:text-sm text-[#3D5449] max-w-md">
                    Terima kasih telah menghubungi saya! Anda juga dapat langsung mengirimkan surat elektronik ke <strong className="text-[#6B9080]">{emailAddress}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs text-[#6B9080] hover:underline font-bold"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1C2B24] mb-1.5">
                        Nama Lengkap <span className="text-[#6B9080]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F6FFF8] border border-[#CCE3DE] text-sm text-[#1C2B24] placeholder-[#5E7A6D]/60 focus:outline-none focus:border-[#6B9080] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1C2B24] mb-1.5">
                        Alamat Email <span className="text-[#6B9080]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="budi@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F6FFF8] border border-[#CCE3DE] text-sm text-[#1C2B24] placeholder-[#5E7A6D]/60 focus:outline-none focus:border-[#6B9080] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C2B24] mb-1.5">
                      Subjek Proyek / Diskusi <span className="text-[#6B9080]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Contoh: Diskusi Aplikasi Mobile Flutter / Tawaran Posisi"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6FFF8] border border-[#CCE3DE] text-sm text-[#1C2B24] placeholder-[#5E7A6D]/60 focus:outline-none focus:border-[#6B9080] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C2B24] mb-1.5">
                      Pesan Detail <span className="text-[#6B9080]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan, ruang lingkup teknologi, atau pertanyaan Anda..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F6FFF8] border border-[#CCE3DE] text-sm text-[#1C2B24] placeholder-[#5E7A6D]/60 focus:outline-none focus:border-[#6B9080] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#6B9080] hover:bg-[#567668] text-[#F6FFF8] font-semibold text-sm shadow-md shadow-[#6B9080]/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
