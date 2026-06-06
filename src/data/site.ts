export const SITE = {
  name: 'JBS Corp',
  legalName: 'JBS Corp',
  tagline: 'The Tax Firm That Gets The Full Picture',
  domain: 'jbscorp.net',
  url: 'https://jbscorp.net',
  email: 'info@jbscorp.net',
  founded: 2005,
} as const;

export const EXTERNAL = {
  booking: 'https://calendly.com/d/3vk-shd-hgj',
  payment: 'https://jbscorp.cardpointe.com',
  portal: 'https://jbscorp.taxdome.com',
  podcast: 'https://onestepbeyondfailure.com',
  events: 'https://www.eventbrite.com/o/jbs-corp-95734310803',
  careersIndeed: 'https://www.indeed.com/cmp/Jbs-Corp',
} as const;

export const SOCIALS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/jbscorp', icon: 'linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/jbscorp', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/jbscorp', icon: 'instagram' },
] as const;

export const OFFICES = [
  {
    city: 'Methuen',
    street: '201 Broadway',
    region: 'Methuen, MA 01844',
    phone: '(508) 906-6874',
    phoneHref: 'tel:+15089066874',
  },
  {
    city: 'Lawrence',
    street: '100 S Broadway',
    region: 'Lawrence, MA 01843',
    phone: '(978) 689-8690',
    phoneHref: 'tel:+19786898690',
  },
] as const;
