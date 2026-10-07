import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale, isSupportedLocale } from './locales';
import type { TranslationSchema } from './types';
import { enUS } from './translations/en-US';
import { hiIN } from './translations/hi-IN';
import { frFR } from './translations/fr-FR';
import { deDE } from './translations/de-DE';
import { esES } from './translations/es-ES';
import { jaJP } from './translations/ja-JP';
import { zhCN } from './translations/zh-CN';

const TRANSLATIONS: Record<Locale, TranslationSchema> = {
  'en-US': enUS,
  'hi-IN': hiIN,
  'fr-FR': frFR,
  'de-DE': deDE,
  'es-ES': esES,
  'ja-JP': jaJP,
  'zh-CN': zhCN,
};

/**
 * Retrieves the translation dictionary for a given locale.
 * Falls back to DEFAULT_LOCALE if locale is not supported.
 */
export function getTranslations(locale?: string): TranslationSchema {
  if (locale && isSupportedLocale(locale)) {
    return TRANSLATIONS[locale];
  }
  return TRANSLATIONS[DEFAULT_LOCALE];
}

/**
 * Extracts the base route without locale prefix, normalized with a trailing slash.
 * e.g. "/hi-IN/privacy" -> "/privacy/"
 * e.g. "/privacy/" -> "/privacy/"
 * e.g. "/hi-IN/" -> "/"
 * e.g. "/" -> "/"
 */
export function stripLocaleFromPath(pathname: string): string {
  const cleanPath = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const segments = cleanPath ? cleanPath.split('/') : [];

  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    segments.shift();
  }

  const remaining = segments.join('/');
  return remaining ? `/${remaining}/` : '/';
}

/**
 * Determines current locale from pathname or fallback.
 */
export function getLocaleFromPath(pathname: string): Locale {
  const cleanPath = pathname.replace(/^\/+/, '');
  const segments = cleanPath ? cleanPath.split('/') : [];
  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    return segments[0] as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Returns a localized URL for a target path and locale.
 * Consistently preserves trailing slashes to match Astro's directory output and sitemap URLs.
 * Default locale ('en-US') is NOT prefixed (e.g. "/" or "/privacy/").
 * Other locales are prefixed with /[locale]/ (e.g. "/hi-IN/" or "/hi-IN/privacy/").
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const basePath = stripLocaleFromPath(pathname);

  if (targetLocale === DEFAULT_LOCALE) {
    return basePath;
  }

  if (basePath === '/') {
    return `/${targetLocale}/`;
  }

  return `/${targetLocale}${basePath}`;
}

/**
 * Generates alternate language links for SEO meta tags and sitemap.
 * Every link matches the exact canonical directory URL with a trailing slash.
 */
export function getAlternateLinks(
  pathname: string,
  siteUrl = 'https://gamelette.com'
): Array<{ locale: Locale; href: string }> {
  const base = siteUrl.replace(/\/$/, '');
  return SUPPORTED_LOCALES.map((loc) => ({
    locale: loc,
    href: `${base}${getLocalizedPath(pathname, loc)}`,
  }));
}
