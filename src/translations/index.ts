import { id, Translations } from './id';
import { en } from './en';

export type Locale = 'id' | 'en';

export const translations: Record<Locale, Translations> = {
  id,
  en,
};

export { id, en };
export type { Translations };
