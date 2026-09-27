'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ExternalLink,
  Play,
  Code2,
  Palette,
  Film,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, FigmaIcon, YoutubeIcon, TiktokIcon } from '@/components/Icons';
import { getLocalizedProjects } from '@/data/localizedData';
import { getTechLogo } from '@/components/TechLogos';
import { useApp } from '@/context/AppContext';
import { Project } from '@/types';

type MainPillar = 'all' | 'coding' | 'desain' | 'video';

interface PillarConfig {
  id: MainPillar;
  label: string;
  count: number;
  icon: React.ReactNode;
  description: string;
}

function ProjectCard({ project, index, t }: { project: Project; index: number; t: ReturnType<typeof useApp>['t'] }) {
  return (
    <article className="card group flex flex-col overflow-hidden hover:border-[var(--accent)] transition-all">
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-[var(--bg)]" style={{ aspectRatio: '16/9' }}>
        <Link
          href={`/projects/${project.id}`}
          className="block relative w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority={index < 2}
          />
        </Link>

        {/* Category pill */}
        <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold uppercase tracking-wide bg-[var(--surface)]/95 text-[var(--fg-2)] px-2 py-0.5 rounded shadow-sm pointer-events-none z-10 border border-[var(--border)]">
          {project.category}
        </span>

        {/* Period */}
        {project.period && (
          <span className="absolute top-2.5 right-2.5 text-[10px] font-mono bg-black/75 text-white/95 px-2 py-0.5 rounded pointer-events-none z-10 shadow-sm">
            {project.period}
          </span>
        )}

        {/* TikTok Video CTA overlay badge */}
        {project.videoUrl && !project.youtubeId && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={t.projects.card.watchTiktok}
            className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white hover:bg-neutral-900 text-xs font-semibold shadow-lg z-20 transition-all hover:scale-105 border border-white/20 cursor-pointer"
          >
            <TiktokIcon className="w-3.5 h-3.5 text-white" />
            <span>{t.projects.card.watchTiktok}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        )}

        {/* YouTube Video play overlay badge */}
        {project.youtubeId && (
          <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/85 text-white text-[11px] font-semibold shadow-md pointer-events-none z-10">
            <Play className="w-3 h-3 fill-white ml-0.5 text-white" />
            <span>{t.projects.card.videoBadge}</span>
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-sm font-semibold text-[var(--fg)] leading-snug mb-1.5 group-hover:text-[var(--accent)] transition-colors">
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </h3>

        <p className="text-xs text-[var(--fg-3)] leading-relaxed line-clamp-2 mb-4 flex-1">
          {project.summary || project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 4).map((tech) => {
            const logo = getTechLogo(tech, 'w-3 h-3 shrink-0');
            return (
              <span key={tech} className="skill-pill">
                {logo}
                {tech}
              </span>
            );
          })}
          {project.techStack.length > 4 && (
            <span className="skill-pill text-[var(--fg-3)]">+{project.techStack.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 pt-3 border-t border-[var(--border)]">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 btn btn-ghost text-xs justify-center"
          >
            {t.projects.card.detail}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projects.card.openFigma}
              className="p-2 rounded-md text-[var(--fg-3)] hover:text-[#A259FF] hover:bg-[var(--surface)] transition-colors"
              title={t.projects.card.openFigma}
            >
              <FigmaIcon className="w-4 h-4" />
            </a>
          )}
          {project.youtubeId && (
            <a
              href={project.videoUrl || `https://youtu.be/${project.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projects.card.watchYoutube}
              className="p-2 rounded-md text-[var(--fg-3)] hover:text-[#FF0000] hover:bg-[var(--surface)] transition-colors"
              title={t.projects.card.watchYoutube}
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          )}
          {project.videoUrl && !project.youtubeId && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projects.card.watchTiktok}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black text-white hover:bg-neutral-800 text-[11px] font-semibold transition-all shadow-xs hover:scale-105 cursor-pointer"
              title={t.projects.card.watchTiktok}
            >
              <TiktokIcon className="w-3.5 h-3.5 text-white" />
              <span>{t.projects.card.watchTiktok}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projects.card.github}
              className="p-2 rounded-md text-[var(--fg-3)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
              title={t.projects.card.github}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && !project.figmaUrl && !project.videoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.projects.card.liveDemo}
              className="p-2 rounded-md text-[var(--fg-3)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
              title={t.projects.card.liveDemo}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const { t, locale } = useApp();
  const [activePillar, setActivePillar] = useState<MainPillar>('all');
  const [subCategory, setSubCategory] = useState<string>('all');

  const localizedProjects = getLocalizedProjects(locale);

  // Count items by main pillar
  const codingProjects = localizedProjects.filter((p) =>
    ['Mobile', 'Mobile & Web Admin', 'Web & Backend', 'AI & Computer Vision', 'Infrastructure'].includes(p.category)
  );
  const designProjects = localizedProjects.filter((p) => p.category === 'UI/UX & Desain');
  const videoProjects = localizedProjects.filter((p) => p.category === 'Video & Multimedia');

  const PILLARS: PillarConfig[] = [
    {
      id: 'all',
      label: t.projects.pillars.all.label,
      count: localizedProjects.length,
      icon: <Sparkles className="w-4 h-4" />,
      description: t.projects.pillars.all.desc,
    },
    {
      id: 'coding',
      label: t.projects.pillars.coding.label,
      count: codingProjects.length,
      icon: <Code2 className="w-4 h-4" />,
      description: t.projects.pillars.coding.desc,
    },
    {
      id: 'desain',
      label: t.projects.pillars.design.label,
      count: designProjects.length,
      icon: <Palette className="w-4 h-4" />,
      description: t.projects.pillars.design.desc,
    },
    {
      id: 'video',
      label: t.projects.pillars.video.label,
      count: videoProjects.length,
      icon: <Film className="w-4 h-4" />,
      description: t.projects.pillars.video.desc,
    },
  ];

  // Coding sub-categories
  const CODING_SUB_FILTERS = [
    { id: 'all', label: t.projects.subFilters.all },
    { id: 'Mobile', label: t.projects.subFilters.mobile },
    { id: 'Web & Backend', label: t.projects.subFilters.web },
    { id: 'AI & Computer Vision', label: t.projects.subFilters.ai },
    { id: 'Infrastructure', label: t.projects.subFilters.server },
  ];

  // Filter projects based on active pillar and sub-category
  const filteredProjects = localizedProjects.filter((p) => {
    if (activePillar === 'coding') {
      if (!['Mobile', 'Mobile & Web Admin', 'Web & Backend', 'AI & Computer Vision', 'Infrastructure'].includes(p.category)) {
        return false;
      }
      if (subCategory !== 'all') {
        if (subCategory === 'Mobile') {
          return p.category === 'Mobile' || p.category === 'Mobile & Web Admin';
        }
        if (subCategory === 'Web & Backend') {
          return p.category === 'Web & Backend' || p.category === 'Mobile & Web Admin';
        }
        if (subCategory === 'AI & Computer Vision') {
          return p.category === 'AI & Computer Vision' || p.techStack.includes('Google ML Kit') || p.techStack.includes('YOLOv8');
        }
        return p.category === subCategory;
      }
      return true;
    }
    if (activePillar === 'desain') {
      return p.category === 'UI/UX & Desain';
    }
    if (activePillar === 'video') {
      return p.category === 'Video & Multimedia';
    }
    return true;
  });

  const handlePillarChange = (pillar: MainPillar) => {
    setActivePillar(pillar);
    setSubCategory('all');
  };

  const activePillarConfig = PILLARS.find((p) => p.id === activePillar);

  return (
    <section id="projects" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="container-xl">

        {/* Section Header */}
        <div className="mb-8">
          <span className="label-tag">{t.projects.tag}</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <h2 className="section-heading">{t.projects.heading}</h2>
              <p className="text-sm text-[var(--fg-3)] mt-2 max-w-xl leading-relaxed">
                {activePillarConfig?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Primary Pillar Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-px mb-6 border-b border-[var(--border)]">
          {PILLARS.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => handlePillarChange(pillar.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[var(--fg)]' : 'text-[var(--fg-3)] hover:text-[var(--fg)]'
                }`}
              >
                <span className={isActive ? 'text-[var(--accent)]' : ''}>{pillar.icon}</span>
                <span>{pillar.label}</span>
                <span className={`text-[.625rem] font-mono px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-[var(--fg)] text-[var(--bg)]'
                    : 'bg-[var(--surface-2)] text-[var(--fg-4)] border border-[var(--border)]'
                }`}>
                  {pillar.count}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-[var(--accent)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Sub-filter for Coding */}
        {activePillar === 'coding' && (
          <div className="flex items-center gap-1.5 flex-wrap mb-8">
            <span className="text-xs font-medium text-[var(--fg-4)] mr-1">{t.projects.subFilters.filterTech}</span>
            {CODING_SUB_FILTERS.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSubCategory(sub.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  subCategory === sub.id
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                    : 'bg-transparent text-[var(--fg-3)] border-[var(--border)] hover:text-[var(--fg)] hover:border-[var(--border-2)]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} t={t} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 card">
            <p className="text-sm text-[var(--fg-3)]">{t.projects.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
}
