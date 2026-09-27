'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Cpu, Wrench, Palette, Film } from 'lucide-react';
import { getLocalizedSkillCategories } from '@/data/localizedData';
import { getTechLogo } from '@/components/TechLogos';
import { useApp } from '@/context/AppContext';

const ICON_MAP: Record<string, React.ReactNode> = {
  'mobile-frontend':    <Smartphone className="w-4 h-4" />,
  'backend-database':   <Server     className="w-4 h-4" />,
  'ai-computer-vision': <Cpu        className="w-4 h-4" />,
  'design-graphics':    <Palette    className="w-4 h-4" />,
  'video-editing':      <Film       className="w-4 h-4" />,
  'tools-networking':   <Wrench     className="w-4 h-4" />,
};

const ACCENT_MAP: Record<string, { bg: string; text: string }> = {
  'mobile-frontend':    { bg: 'bg-blue-500/10',    text: 'text-blue-500'   },
  'backend-database':   { bg: 'bg-violet-500/10',  text: 'text-violet-500' },
  'ai-computer-vision': { bg: 'bg-orange-500/10',  text: 'text-orange-500' },
  'design-graphics':    { bg: 'bg-pink-500/10',    text: 'text-pink-500'   },
  'video-editing':      { bg: 'bg-red-500/10',     text: 'text-red-500'    },
  'tools-networking':   { bg: 'bg-teal-500/10',    text: 'text-teal-500'   },
};

export default function SkillsSection() {
  const { t, locale } = useApp();
  const [selected, setSelected] = useState<string>('all');

  const skillCategoriesData = getLocalizedSkillCategories(locale);

  const visible = selected === 'all'
    ? skillCategoriesData
    : skillCategoriesData.filter((g) => g.id === selected);

  const filterLabel = (g: typeof skillCategoriesData[number]) => {
    if (g.id === 'design-graphics')    return t.skills.filterDesign;
    if (g.id === 'video-editing')      return t.skills.filterVideo;
    if (g.id === 'mobile-frontend')    return 'Frontend';
    if (g.id === 'backend-database')   return 'Backend';
    return g.title.split(' ')[0];
  };

  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="label-tag">{t.skills.tag}</span>
            <h2 className="section-heading mt-2">{t.skills.heading}</h2>
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelected('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                selected === 'all'
                  ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]'
                  : 'bg-transparent text-[var(--fg-3)] border-[var(--border)] hover:text-[var(--fg)] hover:border-[var(--border-2)]'
              }`}
            >
              {t.skills.filterAll}
            </button>
            {skillCategoriesData.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelected(g.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  selected === g.id
                    ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]'
                    : 'bg-transparent text-[var(--fg-3)] border-[var(--border)] hover:text-[var(--fg)] hover:border-[var(--border-2)]'
                }`}
              >
                {filterLabel(g)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {visible.map((group, i) => {
            const colors = ACCENT_MAP[group.id] ?? { bg: 'bg-[var(--accent-lt)]', text: 'text-[var(--accent)]' };
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="card p-6 hover:border-[var(--border-2)] group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${colors.bg} ${colors.text}`}>
                    {ICON_MAP[group.id] ?? <Wrench className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--fg)] leading-tight">{group.title}</h3>
                    <p className="text-[.6875rem] text-[var(--fg-4)] mt-0.5">{group.description}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--border)] mb-4" />

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => {
                    const logo = getTechLogo(skill.name, 'w-3.5 h-3.5 shrink-0');
                    return (
                      <div key={skill.name} className="skill-pill">
                        {logo ?? <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />}
                        <span>{skill.name}</span>
                        {skill.level === 'Expert' && (
                          <span className="text-[9px] font-mono text-[var(--accent)] leading-none">★</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
