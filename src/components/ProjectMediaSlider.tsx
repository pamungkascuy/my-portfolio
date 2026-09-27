'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { TiktokIcon } from '@/components/Icons';
import { useApp } from '@/context/AppContext';

interface ProjectMediaSliderProps {
  slides: { image: string; label?: string }[];
  title: string;
  youtubeId?: string;
  tiktokUrl?: string;
  isPoster?: boolean;
}

export default function ProjectMediaSlider({
  slides,
  title,
  youtubeId,
  tiktokUrl,
  isPoster = false,
}: ProjectMediaSliderProps) {
  const [current, setCurrent] = useState(0);
  const { t } = useApp();

  if (youtubeId) {
    return (
      <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] mb-12 aspect-[16/9] bg-black shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (tiktokUrl) {
    return (
      <div className="mb-12">
        <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] aspect-[16/9] bg-neutral-950 shadow-xl group">
          <Image
            src={slides[0]?.image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover opacity-75 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500"
            priority
          />
          {/* Dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />

          {/* Center Interactive Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl bg-black text-white hover:bg-neutral-900 border-2 border-white/90 shadow-[0_4px_25px_rgba(0,0,0,0.6)] flex items-center gap-3.5 transition-all transform hover:scale-105 hover:border-white cursor-pointer group/btn"
            >
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </span>
              <div className="text-left">
                <span className="block text-[11px] uppercase tracking-wider text-white/70 font-mono leading-none mb-1">
                  {t.projectDetail.tiktok.openApp}
                </span>
                <span className="block text-base sm:text-lg font-bold text-white leading-none">
                  {t.projectDetail.tiktok.watchNow}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
            </a>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/90 font-medium bg-black/70 px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
              <TiktokIcon className="w-3.5 h-3.5 text-white" />
              <span>{t.projectDetail.tiktok.badge}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isPoster) {
    return (
      <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] mb-12 p-6 sm:p-10 bg-[var(--surface)] flex justify-center items-center">
        <div className="relative max-w-xl w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--border)]">
          <Image
            src={slides[0]?.image}
            alt={title}
            width={600}
            height={850}
            sizes="(max-width: 640px) 100vw, 600px"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  if (!slides || slides.length === 0) {
    return null;
  }

  if (slides.length === 1) {
    return (
      <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] mb-12 aspect-[16/9] bg-[var(--surface)] shadow-md">
        <Image
          src={slides[0].image}
          alt={slides[0].label || title}
          fill
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="mb-12">
      {/* Main Slide Frame */}
      <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] aspect-[16/9] bg-[var(--surface)] shadow-md group">
        <Image
          src={slides[current].image}
          alt={slides[current].label || `${title} - slide ${current + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover transition-opacity duration-200"
          priority
        />

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={t.projectDetail.prevProject}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center opacity-90 transition-all cursor-pointer z-10 shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label={t.projectDetail.nextProject}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center opacity-90 transition-all cursor-pointer z-10 shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide indicator & label badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          {slides[current].label ? (
            <span className="text-xs font-medium bg-black/75 text-white px-3 py-1.5 rounded-lg shadow-sm">
              {slides[current].label}
            </span>
          ) : <span />}

          <span className="text-xs font-mono bg-black/75 text-white/95 px-2.5 py-1 rounded-md shadow-sm">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slide Thumbnail Strip */}
      <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1">
        {slides.map((slide, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`relative rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer h-16 aspect-video ${
              current === idx
                ? 'border-[var(--accent)] ring-2 ring-[var(--accent-lt)]'
                : 'border-[var(--border)] opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.label || `Thumbnail ${idx + 1}`}
              fill
              sizes="120px"
              className="object-cover"
            />
            {slide.label && (
              <span className="absolute inset-x-0 bottom-0 text-[9px] truncate bg-black/80 text-white px-1 py-0.5 text-center z-10">
                {slide.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
