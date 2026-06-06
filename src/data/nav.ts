import { EXTERNAL } from './site';

export type NavLink = {
  /** i18n key for the label */
  key: string;
  /** internal path (leading slash) OR external URL */
  href: string;
  external?: boolean;
  desc?: string;
};

export type NavGroup = {
  key: string;
  /** group landing path (optional) */
  href?: string;
  children: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    key: 'nav.individual',
    children: [
      { key: 'nav.tax', href: '/tax-services' },
      { key: 'nav.assessment', href: '/financial-assessment' },
    ],
  },
  {
    key: 'nav.business',
    children: [
      { key: 'nav.bookkeeping', href: '/controller-services' },
      { key: 'nav.businessTax', href: '/business-tax-services' },
      { key: 'nav.infoHub', href: '/business-owner-info-hub' },
      { key: 'nav.articles', href: '/blog' },
    ],
  },
  {
    key: 'nav.about',
    children: [
      { key: 'nav.aboutUs', href: '/about' },
      { key: 'nav.reviews', href: '/testimonials' },
      { key: 'nav.careers', href: '/careers' },
      { key: 'nav.podcast', href: EXTERNAL.podcast, external: true },
      { key: 'nav.events', href: EXTERNAL.events, external: true },
    ],
  },
];

/** Primary CTA shown at the end of the nav — books an appointment (Calendly). */
export const navCta = { key: 'nav.bookCta', href: EXTERNAL.booking, external: true };
