'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/Icons';
import { useApp } from '@/context/AppContext';

export default function ContactSection() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);

  const emailAddress = 'arifpamungkas50@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="container-xl">

        {/* Header */}
        <div className="mb-10">
          <span className="label-tag">{t.contact.tag}</span>
          <h2 className="section-heading mt-2 mb-3">
            {t.contact.heading}
          </h2>
          <p className="text-[var(--fg-3)] text-sm max-w-lg leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {/* Email */}
          <div className="card p-4 flex items-center gap-3 group hover:border-[var(--accent)] transition-all">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-lt)] text-[var(--accent)] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[var(--fg-3)] uppercase tracking-widest font-semibold mb-0.5">Email</p>
              <a
                href={`mailto:${emailAddress}`}
                className="text-xs font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors truncate block"
                title={emailAddress}
              >
                {emailAddress}
              </a>
            </div>
            <button
              onClick={handleCopy}
              className="shrink-0 p-1.5 rounded-md text-[var(--fg-3)] hover:text-[var(--accent)] hover:bg-[var(--bg)] transition-colors cursor-pointer"
              aria-label={copied ? t.contact.cards.email.copied : t.contact.cards.email.copy}
            >
              {copied
                ? <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                : <Copy className="w-3.5 h-3.5" />
              }
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6282223578516"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex items-center gap-3 group hover:border-[#25D366] transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-[#25D366] flex items-center justify-center shrink-0">
              <WhatsappIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[var(--fg-3)] uppercase tracking-widest font-semibold mb-0.5">WhatsApp</p>
              <p className="text-xs font-semibold text-[var(--fg)] group-hover:text-[#25D366] transition-colors">
                +62 822-2357-8516
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--fg-3)] group-hover:text-[#25D366] shrink-0 transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arif-pamungkas-2879a8367"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex items-center gap-3 group hover:border-[#0A66C2] transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-[#0A66C2] flex items-center justify-center shrink-0">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[var(--fg-3)] uppercase tracking-widest font-semibold mb-0.5">LinkedIn</p>
              <p className="text-xs font-semibold text-[var(--fg)] group-hover:text-[#0A66C2] transition-colors">
                Arif Pamungkas
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--fg-3)] group-hover:text-[#0A66C2] shrink-0 transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pamungkascuy"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex items-center gap-3 group hover:border-[var(--fg-2)] transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)] flex items-center justify-center shrink-0">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[var(--fg-3)] uppercase tracking-widest font-semibold mb-0.5">GitHub</p>
              <p className="text-xs font-semibold text-[var(--fg)] group-hover:text-[var(--fg-2)] transition-colors">
                pamungkascuy
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--fg-3)] shrink-0 transition-colors" />
          </a>
        </motion.div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-5 card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
            </span>
            <p className="text-sm font-medium text-[var(--fg)]">
              {t.contact.availability}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[var(--fg-3)] pl-5 sm:pl-0">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            {t.contact.location}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
