'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
} from 'lucide-react';
import { GithubIcon, FigmaIcon, YoutubeIcon, TiktokIcon } from '@/components/Icons';
import { getTechLogo } from '@/components/TechLogos';
import { getLocalizedProjects } from '@/data/localizedData';
import { useApp } from '@/context/AppContext';
import ProjectMediaSlider from '@/components/ProjectMediaSlider';

interface ProjectDetailContentProps {
  projectId: string;
}

export default function ProjectDetailContent({ projectId }: ProjectDetailContentProps) {
  const { t, locale } = useApp();
  const localizedProjects = getLocalizedProjects(locale);

  const idx = localizedProjects.findIndex((p) => p.id === projectId);
  const project = idx !== -1 ? localizedProjects[idx] : localizedProjects[0];
  const prev = idx > 0 ? localizedProjects[idx - 1] : null;
  const next = idx < localizedProjects.length - 1 ? localizedProjects[idx + 1] : null;

  return (
    <div className="container-lg">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--fg-3)] hover:text-[var(--fg)] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {t.projectDetail.backToAll}
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="label-tag">{project.category}</span>
          {project.period && (
            <span className="text-xs text-[var(--fg-3)] font-mono flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
          )}
          {project.role && (
            <span className="text-xs text-[var(--fg-3)]">· {project.role}</span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-base text-[var(--fg-2)] leading-relaxed max-w-2xl mb-6">
          {project.summary || project.description}
        </p>

        {/* Action links */}
        <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[var(--border)]">
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-[#000] text-white hover:bg-[#222]"
            >
              <FigmaIcon className="w-4 h-4" />
              {t.projectDetail.openFigma}
            </a>
          )}
          {project.youtubeId && (
            <a
              href={project.videoUrl || `https://youtu.be/${project.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-[#E62117] text-white hover:bg-[#cc1810]"
            >
              <YoutubeIcon className="w-4 h-4" />
              {t.projectDetail.watchYoutube}
            </a>
          )}
          {project.videoUrl && !project.youtubeId && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-black text-white hover:bg-neutral-800 border border-neutral-700 shadow-md px-5 py-2.5 rounded-xl font-bold text-sm inline-flex items-center gap-2.5 transition-all hover:scale-105 hover:border-white/50 cursor-pointer"
            >
              <TiktokIcon className="w-4.5 h-4.5 text-white" />
              <span>{t.projectDetail.watchTiktok}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <GithubIcon className="w-4 h-4" />
              {t.projectDetail.githubRepo}
            </a>
          )}
          {project.liveDemoUrl && !project.figmaUrl && !project.videoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              {t.projectDetail.liveDemo}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Media Presentation: YouTube Player, TikTok Showcase, Poster, or Multi-Slide Gallery */}
      <ProjectMediaSlider
        slides={
          project.gallery && project.gallery.length > 0
            ? project.gallery
            : [{ image: project.image, label: project.title }]
        }
        title={project.title}
        youtubeId={project.youtubeId}
        tiktokUrl={project.videoUrl && !project.youtubeId ? project.videoUrl : undefined}
        isPoster={project.id === 'poster-aura-fitness'}
      />

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Background */}
          {project.background && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-3)] mb-4">
                {t.projectDetail.backgroundTitle}
              </h2>
              <p className="text-base text-[var(--fg-2)] leading-relaxed">
                {project.background}
              </p>
            </div>
          )}

          {/* Solution */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-3)] mb-4">
              {t.projectDetail.solutionTitle}
            </h2>
            <p className="text-base text-[var(--fg-2)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-3)] mb-4">
                {t.projectDetail.highlightsTitle}
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--fg-2)] leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery Screenshots */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-6 border-t border-[var(--border)]">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-3)] mb-5">
                {t.projectDetail.galleryTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {project.gallery.map((item, galleryIdx) => (
                  <div
                    key={galleryIdx}
                    className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-sm hover:border-[var(--accent)] transition-all group"
                  >
                    <div className="relative overflow-hidden aspect-video bg-[var(--bg)]">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 border-t border-[var(--border)] bg-[var(--surface)]">
                      <p className="text-xs font-medium text-[var(--fg-2)]">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Tech stack */}
        <div className="space-y-6">
          <div className="card p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-3)] mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              {t.projectDetail.techStackTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => {
                const logo = getTechLogo(tech, 'w-4 h-4');
                return (
                  <div key={tech} className="skill-pill">
                    {logo || <Cpu className="w-3.5 h-3.5 text-[var(--fg-3)]" />}
                    <span className="text-[var(--fg)]">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="grid sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-[var(--border)]">
        {prev ? (
          <Link href={`/projects/${prev.id}`} className="card p-4 flex items-center gap-3 group hover:border-[var(--border-2)]">
            <ArrowLeft className="w-4 h-4 text-[var(--fg-3)] group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <div>
              <p className="text-[10px] text-[var(--fg-3)] uppercase tracking-wider mb-0.5">{t.projectDetail.prevProject}</p>
              <p className="text-sm font-medium text-[var(--fg)] truncate">{prev.title}</p>
            </div>
          </Link>
        ) : <div />}

        {next ? (
          <Link href={`/projects/${next.id}`} className="card p-4 flex items-center justify-between gap-3 group hover:border-[var(--border-2)]">
            <div className="text-right overflow-hidden">
              <p className="text-[10px] text-[var(--fg-3)] uppercase tracking-wider mb-0.5">{t.projectDetail.nextProject}</p>
              <p className="text-sm font-medium text-[var(--fg)] truncate">{next.title}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--fg-3)] group-hover:translate-x-0.5 transition-transform shrink-0" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
