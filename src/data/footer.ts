export type FooterLink = { key: string; href: string; external?: boolean };
export type FooterColumn = { titleKey: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    titleKey: 'footer.servicesTitle',
    links: [
      { key: 'nav.tax', href: '/tax-services' },
      { key: 'nav.businessTax', href: '/business-tax-services' },
      { key: 'nav.bookkeeping', href: '/controller-services' },
      { key: 'nav.services', href: '/services' },
    ],
  },
  {
    titleKey: 'footer.companyTitle',
    links: [
      { key: 'nav.aboutUs', href: '/about' },
      { key: 'nav.articles', href: '/blog' },
      { key: 'nav.careers', href: '/careers' },
      { key: 'footer.privacy', href: '/privacy-policy' },
    ],
  },
];
