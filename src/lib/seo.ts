import { SITE, OFFICES } from '@data/site';
import type { Lang } from '@i18n/ui';

const SITE_URL = (import.meta.env.PUBLIC_SITE_URL ?? SITE.url).replace(/\/$/, '');

export interface SeoInput {
  title?: string;
  description?: string;
  lang: Lang;
  pathname: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  alternates: { hreflang: string; href: string }[];
  noindex: boolean;
}

const DEFAULTS = {
  en: {
    title: 'JBS Corp — The Tax Firm That Gets The Full Picture',
    description:
      'JBS delivers institutional-grade tax and accounting expertise to individuals, families, and growing businesses — with the personal attention your financial life deserves.',
  },
  es: {
    title: 'JBS Corp — La Firma de Impuestos Que Ve el Panorama Completo',
    description:
      'JBS ofrece experiencia tributaria y contable de nivel institucional a individuos, familias y empresas en crecimiento, con la atención personal que tu vida financiera merece.',
  },
} satisfies Record<Lang, { title: string; description: string }>;

function toCanonicalPath(pathname: string): string {
  if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

/** The locale-neutral (EN) path, used to build hreflang alternates. */
function basePath(pathname: string): string {
  const stripped = pathname.replace(/^\/es(\/|$)/, '/');
  return toCanonicalPath(stripped === '' ? '/' : stripped);
}

export function buildMeta(input: SeoInput): SeoMeta {
  const d = DEFAULTS[input.lang];
  const base = basePath(input.pathname);
  const enHref = SITE_URL + (base === '/' ? '' : base);
  const esHref = SITE_URL + '/es' + (base === '/' ? '' : base);

  return {
    title: input.title ? `${input.title} | ${SITE.name}` : d.title,
    description: input.description ?? d.description,
    canonical: SITE_URL + toCanonicalPath(input.pathname),
    ogImage: SITE_URL + (input.ogImage ?? '/og/default.png'),
    noindex: input.noindex ?? false,
    alternates: [
      { hreflang: 'en', href: enHref },
      { hreflang: 'es', href: esHref },
      { hreflang: 'x-default', href: enHref },
    ],
  };
}

/** Organization JSON-LD with both office locations. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: SITE.name,
    url: SITE_URL,
    email: SITE.email,
    areaServed: 'US',
    foundingDate: String(SITE.founded),
    location: OFFICES.map((o) => ({
      '@type': 'LocalBusiness',
      name: `${SITE.name} — ${o.city}`,
      telephone: o.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: o.street,
        addressLocality: o.city,
        addressRegion: 'MA',
        addressCountry: 'US',
      },
    })),
  };
}
