'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { getTechLogo } from '@/components/TechLogos';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';

const categories: ProjectCategory[] = [
  'All',
  'Mobile',
  'Web & Backend',
  'AI & Computer Vision',
  'Infrastructure',
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4F4] border border-[#A4C3B2] text-[#3D5449] text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#6B9080]" />
            <span>Portofolio Karya</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#1C2B24] tracking-tight"
          >
            Proyek Nyata &amp; Rekayasa Terapan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#5E7A6D] max-w-2xl text-sm sm:text-base mt-3"
          >
            Pilihan proyek aplikasi web, mobile, dan sistem komputasi cerdas. Klik salah satu proyek untuk membaca ringkasan teknis dan studi kasus lengkap.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'text-[#F6FFF8]'
                    : 'text-[#3D5449] hover:text-[#1C2B24] bg-white border border-[#CCE3DE] hover:border-[#A4C3B2]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 bg-[#6B9080] rounded-xl -z-10 shadow-sm shadow-[#6B9080]/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Compact & Clean Projects Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-3xl bg-white border border-[#CCE3DE] hover:border-[#6B9080] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#6B9080]/10 hover:-translate-y-1"
              >
                {/* Project Image Preview with Category Badge */}
                <Link
                  href={`/projects/${project.id}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAF4F4] block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-[#CCE3DE] text-[11px] font-bold text-[#1C2B24] shadow-xs">
                      {project.category}
                    </span>
                    {project.period && (
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {project.period}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Card Content - Clean & uncluttered */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#1C2B24] group-hover:text-[#6B9080] transition-colors leading-snug mb-2">
                      <Link href={`/projects/${project.id}`}>
                        {project.title}
                      </Link>
                    </h3>

                    {/* Brief Summary (Line clamped so height is uniform) */}
                    <p className="text-[#5E7A6D] text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.summary || project.description}
                    </p>
                  </div>

                  <div>
                    {/* Compact Tech Stack Pills (Limit to top 3-4) */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#EAF4F4] mb-4">
                      {project.techStack.slice(0, 3).map((tech) => {
                        const logoNode = getTechLogo(tech, 'w-3.5 h-3.5 shrink-0');
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F6FFF8] border border-[#CCE3DE] text-[#1C2B24] text-[11px] font-semibold"
                          >
                            {logoNode}
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-bold text-[#5E7A6D] px-2 py-0.5 rounded-md bg-[#EAF4F4]">
                          +{project.techStack.length - 3} lainnya
                        </span>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-[#EAF4F4] hover:bg-[#6B9080] text-[#1C2B24] hover:text-[#F6FFF8] border border-[#CCE3DE] hover:border-[#6B9080] transition-all flex-1 justify-center shadow-2xs group/btn"
                      >
                        <span>Lihat Detail Proyek</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white hover:bg-[#EAF4F4] text-[#3D5449] hover:text-[#1C2B24] border border-[#CCE3DE] transition-colors shrink-0 shadow-2xs"
                          aria-label="Repositori GitHub"
                          title="Buka GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
