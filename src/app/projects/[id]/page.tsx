import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Bookmark,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GithubIcon } from '@/components/Icons';
import { getTechLogo } from '@/components/TechLogos';
import { projectsData } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan | Arif Pamungkas',
    };
  }

  return {
    title: `${project.title} | Arif Pamungkas`,
    description: project.summary || project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-[#F6FFF8] text-[#1C2B24] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Navigation & Breadcrumb */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5E7A6D] hover:text-[#1C2B24] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#6B9080]" />
              <span>Kembali ke Semua Proyek</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-[#5E7A6D]">
              <span className="hidden sm:inline">Proyek {projectIndex + 1} dari {projectsData.length}</span>
            </div>
          </div>

          {/* Project Title Header */}
          <div className="mb-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#EAF4F4] border border-[#A4C3B2] text-[#3D5449] text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              {project.period && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CCE3DE] text-[#5E7A6D] text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#6B9080]" />
                  <span>{project.period}</span>
                </span>
              )}
              {project.role && (
                <span className="px-3 py-1 rounded-full bg-white border border-[#CCE3DE] text-[#1C2B24] text-xs font-semibold">
                  Peran: {project.role}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C2B24] tracking-tight leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#3D5449] leading-relaxed">
              {project.summary || project.description}
            </p>

            {/* Quick Actions (GitHub & Live Demo) */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-[#CCE3DE]">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6B9080] hover:bg-[#567668] text-[#F6FFF8] text-xs sm:text-sm font-semibold shadow-sm shadow-[#6B9080]/20 transition-all hover:scale-[1.02]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Buka Repositori GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#EAF4F4] text-[#1C2B24] text-xs sm:text-sm font-semibold border border-[#CCE3DE] hover:border-[#A4C3B2] shadow-2xs transition-all"
                >
                  <span>Kunjungi Demo Langsung</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B9080]" />
                </a>
              )}
            </div>
          </div>

          {/* Project Featured Image */}
          <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-[#EAF4F4] border border-[#CCE3DE] shadow-xl shadow-[#6B9080]/8 mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Detailed Content Grid */}
          <div className="space-y-12">
            {/* Latar Belakang Masalah (Problem Statement) */}
            {project.background && (
              <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE]">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1C2B24]">
                    Latar Belakang &amp; Tantangan
                  </h2>
                </div>
                <p className="text-[#3D5449] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {project.background}
                </p>
              </div>
            )}

            {/* Rekayasa Solusi & Deskripsi Sistem */}
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE]">
                  <Terminal className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-[#1C2B24]">
                  Solusi &amp; Implementasi Teknis
                </h2>
              </div>
              <p className="text-[#3D5449] text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Fitur Utama & Keunggulan Sistem */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1C2B24]">
                    Fitur Utama &amp; Kapabilitas
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] flex items-start gap-3"
                    >
                      <div className="p-1 rounded-full bg-[#EAF4F4] text-[#6B9080] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#3D5449] font-medium leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Teknologi & Tooling */}
            <div className="bg-white border border-[#CCE3DE] rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-xl bg-[#EAF4F4] text-[#6B9080] border border-[#CCE3DE]">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-[#1C2B24]">
                  Teknologi &amp; Alat yang Digunakan
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.techStack.map((tech) => {
                  const logoNode = getTechLogo(tech, 'w-5 h-5 shrink-0');
                  return (
                    <div
                      key={tech}
                      className="p-3 rounded-2xl bg-[#F6FFF8] border border-[#CCE3DE] flex items-center gap-3 hover:border-[#A4C3B2] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#CCE3DE] flex items-center justify-center shrink-0 shadow-2xs">
                        {logoNode || <Cpu className="w-4 h-4 text-[#6B9080]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#1C2B24]">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Project Switcher (Prev / Next Project) */}
            <div className="pt-8 border-t border-[#CCE3DE] grid sm:grid-cols-2 gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="p-4 rounded-2xl bg-white hover:bg-[#EAF4F4] border border-[#CCE3DE] hover:border-[#A4C3B2] transition-all flex items-center gap-3 group text-left shadow-2xs"
                >
                  <ArrowLeft className="w-4 h-4 text-[#6B9080] group-hover:-translate-x-1 transition-transform shrink-0" />
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-[#5E7A6D] uppercase tracking-wider font-semibold block">
                      Proyek Sebelumnya
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1C2B24] truncate block">
                      {prevProject.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="p-4 rounded-2xl bg-white hover:bg-[#EAF4F4] border border-[#CCE3DE] hover:border-[#A4C3B2] transition-all flex items-center justify-between gap-3 group text-right shadow-2xs ml-auto w-full"
                >
                  <div className="overflow-hidden w-full text-right">
                    <span className="text-[10px] text-[#5E7A6D] uppercase tracking-wider font-semibold block">
                      Proyek Selanjutnya
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1C2B24] truncate block">
                      {nextProject.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6B9080] group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
