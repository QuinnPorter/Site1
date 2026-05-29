import { ui, defaultLang, type Lang } from './ui';

export const locales: Lang[] = ['en', 'es'];

/** Extract the active language from a URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'es') return 'es';
  return defaultLang;
}

/** Returns a translate function bound to the given language, falling back to default. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Localize an internal path. EN is unprefixed; ES is prefixed with /es.
 * Pass a leading-slash path like "/tax-services".
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (lang === defaultLang) return clean === '/' ? '/' : clean.replace(/\/$/, '');
  return clean === '/' ? '/es' : `/es${clean}`.replace(/\/$/, '');
}

/** Given the current URL, return the equivalent path in the other language. */
export function alternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  if (current === target) return url.pathname;

  // strip a leading /es if present to get the canonical (EN) path
  let base = url.pathname;
  if (current === 'es') {
    base = base.replace(/^\/es(\/|$)/, '/');
  }
  return localizePath(base, target);
}

/** Strip the locale prefix to get a comparable path (used for nav active state). */
export function unlocalizePath(pathname: string): string {
  const stripped = pathname.replace(/^\/es(\/|$)/, '/');
  return stripped === '' ? '/' : stripped.replace(/\/$/, '') || '/';
}
