'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Locale, Translations } from '@/translations';

type Theme = 'light' | 'dark';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  mounted: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [locale, setLocaleState] = useState<Locale>('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Theme initialization
    try {
      const savedTheme = (localStorage.getItem('portfolio_theme') || localStorage.getItem('theme')) as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setThemeState(savedTheme);
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme: Theme = prefersDark ? 'dark' : 'light';
        setThemeState(initialTheme);
        if (prefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch {
      // Fallback in case of restricted access to localStorage
    }

    // 2. Language initialization
    try {
      const savedLang = (localStorage.getItem('portfolio_lang') || localStorage.getItem('lang')) as Locale | null;
      if (savedLang === 'id' || savedLang === 'en') {
        setLocaleState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {
      // Fallback
    }

    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('portfolio_theme', newTheme);
    } catch {}
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('portfolio_lang', newLocale);
    } catch {}
    document.documentElement.lang = newLocale;
  };

  const t = translations[locale] || translations.id;

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        locale,
        setLocale,
        t,
        mounted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export function useTheme() {
  const { theme, toggleTheme, setTheme, mounted } = useApp();
  return { theme, toggleTheme, setTheme, mounted, isDark: theme === 'dark' };
}

export function useLanguage() {
  const { locale, setLocale, t, mounted } = useApp();
  return { locale, setLocale, t, mounted };
}

export function useTranslation() {
  const { t, locale, setLocale } = useApp();
  return { t, locale, setLocale };
}
