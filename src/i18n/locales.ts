export const SUPPORTED_LOCALES = [
  'en-US',
  'hi-IN',
  'fr-FR',
  'de-DE',
  'es-ES',
  'ja-JP',
  'zh-CN',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en-US';

export const OTHER_LOCALES = SUPPORTED_LOCALES.filter(
  (locale): locale is Exclude<Locale, typeof DEFAULT_LOCALE> => locale !== DEFAULT_LOCALE
);

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeName: string;
  englishName: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
}

export const LOCALES_INFO: Record<Locale, LocaleInfo> = {
  'en-US': {
    code: 'en-US',
    label: 'English',
    nativeName: 'English (US)',
    englishName: 'English (US)',
    dir: 'ltr',
    ogLocale: 'en_US',
  },
  'hi-IN': {
    code: 'hi-IN',
    label: 'हिन्दी',
    nativeName: 'हिन्दी',
    englishName: 'Hindi (India)',
    dir: 'ltr',
    ogLocale: 'hi_IN',
  },
  'fr-FR': {
    code: 'fr-FR',
    label: 'Français',
    nativeName: 'Français',
    englishName: 'French (France)',
    dir: 'ltr',
    ogLocale: 'fr_FR',
  },
  'de-DE': {
    code: 'de-DE',
    label: 'Deutsch',
    nativeName: 'Deutsch',
    englishName: 'German (Germany)',
    dir: 'ltr',
    ogLocale: 'de_DE',
  },
  'es-ES': {
    code: 'es-ES',
    label: 'Español',
    nativeName: 'Español',
    englishName: 'Spanish (Spain)',
    dir: 'ltr',
    ogLocale: 'es_ES',
  },
  'ja-JP': {
    code: 'ja-JP',
    label: '日本語',
    nativeName: '日本語',
    englishName: 'Japanese (Japan)',
    dir: 'ltr',
    ogLocale: 'ja_JP',
  },
  'zh-CN': {
    code: 'zh-CN',
    label: '简体中文',
    nativeName: '简体中文',
    englishName: 'Simplified Chinese (China)',
    dir: 'ltr',
    ogLocale: 'zh_CN',
  },
};

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

