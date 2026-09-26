'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Smartphone,
  Server,
  Cpu,
  Network,
  Sparkles,
  Layers,
} from 'lucide-react';
import { skillCategoriesData } from '@/data/skills';
import { getTechLogo } from '@/components/TechLogos';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'mobile-frontend':
        return <Smartphone className="w-5 h-5 text-[#6B9080]" />;
      case 'backend-database':
        return <Server className="w-5 h-5 text-[#6B9080]" />;
      case 'ai-computer-vision':
        return <Cpu className="w-5 h-5 text-[#6B9080]" />;
      case 'tools-networking':
        return <Network className="w-5 h-5 text-[#6B9080]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#6B9080]" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategoriesData
      : skillCategoriesData.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#F6FFF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4F4] border border-[#A4C3B2] text-[#3D5449] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6B9080]" />
            <span>Keahlian Teknis</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1C2B24] tracking-tight"
          >
            Ekosistem Teknologi &amp; Penguasaan Alat
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#5E7A6D] max-w-2xl text-sm sm:text-base mt-3"
          >
            Teknologi resmi dan bahasa pemrograman yang saya gunakan secara aktif untuk merancang, membangun, dan memelihara aplikasi berkinerja tinggi.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-[#6B9080] text-[#F6FFF8] shadow-sm shadow-[#6B9080]/25 scale-105'
                : 'bg-white text-[#3D5449] hover:text-[#1C2B24] border border-[#CCE3DE] hover:border-[#A4C3B2]'
            }`}
          >
            Semua Bidang
          </button>
          {skillCategoriesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[#6B9080] text-[#F6FFF8] shadow-sm shadow-[#6B9080]/25 scale-105'
                  : 'bg-white text-[#3D5449] hover:text-[#1C2B24] border border-[#CCE3DE] hover:border-[#A4C3B2]'
              }`}
            >
              {category.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filteredCategories.map((group) => (
              <motion.div
                key={group.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-7 hover:border-[#A4C3B2] transition-all shadow-sm group relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-2xl bg-[#EAF4F4] border border-[#CCE3DE]">
                    {getCategoryIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1C2B24] group-hover:text-[#6B9080] transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-xs text-[#5E7A6D]">{group.description}</p>
                  </div>
                </div>

                {/* Skills Badges with Authentic Logos */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#EAF4F4] mt-4">
                  {group.skills.map((skill) => {
                    const logoNode = getTechLogo(skill.name, 'w-4 h-4 shrink-0');
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#F6FFF8] border border-[#CCE3DE] text-[#1C2B24] hover:bg-white hover:border-[#A4C3B2] transition-all text-xs font-semibold shadow-2xs"
                      >
                        {logoNode ? (
                          <span className="flex items-center justify-center">
                            {logoNode}
                          </span>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-[#6B9080]" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level === 'Expert' && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-[#EAF4F4] text-[#3D5449] font-mono border border-[#CCE3DE]">
                            Expert
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#CCE3DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1C2B24]">
                Arsitektur Modern &amp; Pengalaman Produksi Nyata
              </h4>
              <p className="text-xs sm:text-sm text-[#5E7A6D] mt-0.5">
                Mengutamakan stabilitas kode, skalabilitas endpoint backend, dan responsivitas antarmuka mobile.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#6B9080] hover:bg-[#567668] text-[#F6FFF8] font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            Lihat Implementasi Proyek
          </a>
        </div>
      </div>
    </section>
  );
}
