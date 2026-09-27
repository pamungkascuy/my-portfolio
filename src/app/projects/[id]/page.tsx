import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';
import ProjectDetailContent from '@/components/ProjectDetailContent';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return { title: 'Proyek Tidak Ditemukan | Arif Pamungkas' };
  return {
    title: `${project.title} | Arif Pamungkas`,
    description: project.summary || project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const projectExists = projectsData.some((p) => p.id === id);
  if (!projectExists) notFound();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <ProjectDetailContent projectId={id} />
      </main>
      <Footer />
    </div>
  );
}
