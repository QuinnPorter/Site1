import type { Lang } from '@i18n/ui';

type Meta = { title: string; description: string };

/**
 * Per-page SEO meta (single-sourced, bilingual). Route wrappers select by lang
 * and pass to BaseLayout, which appends "| JBS Corp" to the title.
 */
export const pageMeta: Record<string, Record<Lang, Meta>> = {
  about: {
    en: {
      title: 'About Us',
      description:
        'Twenty years of bilingual tax and accounting expertise, serving individuals and businesses in all 50 states from our Methuen and Lawrence offices.',
    },
    es: {
      title: 'Quiénes Somos',
      description:
        'Veinte años de experiencia bilingüe en impuestos y contabilidad, al servicio de personas y empresas en los 50 estados desde nuestras oficinas de Methuen y Lawrence.',
    },
  },
  taxServices: {
    en: {
      title: 'Tax Services',
      description:
        'Personal tax preparation for W-2 employees, freelancers, real estate investors, and families — accurate filings and every legitimate deduction, in English and Spanish.',
    },
    es: {
      title: 'Servicios de Impuestos',
      description:
        'Preparación de impuestos personales para empleados W-2, freelancers, inversionistas de bienes raíces y familias — declaraciones precisas y cada deducción legítima, en inglés y español.',
    },
  },
  businessTax: {
    en: {
      title: 'Business Tax Services',
      description:
        'S-corp, partnership, and corporate tax filing with proactive, year-round planning to lower your bill and keep your business compliant.',
    },
    es: {
      title: 'Impuestos de Empresas',
      description:
        'Declaraciones de S-corp, sociedades y corporaciones con planificación proactiva durante todo el año para reducir tu factura y mantener tu empresa en cumplimiento.',
    },
  },
  controller: {
    en: {
      title: 'Bookkeeping & Controller Services',
      description:
        'Clean monthly books, reconciliations, and reporting — plus fractional controller support tiered to the complexity of your business, not its size.',
    },
    es: {
      title: 'Contabilidad y Control Financiero',
      description:
        'Libros mensuales impecables, conciliaciones e informes — más apoyo de controller fraccional adaptado a la complejidad de tu empresa, no a su tamaño.',
    },
  },
  financialAssessment: {
    en: {
      title: 'Financial Assessment',
      description:
        'A free, no-pressure review of where you stand and what to tackle next — book a conversation with a bilingual advisor who treats your finances like they matter.',
    },
    es: {
      title: 'Evaluación Financiera',
      description:
        'Una revisión gratuita y sin presión de dónde estás y qué abordar a continuación — agenda una conversación con un asesor bilingüe que trata tus finanzas como lo que son: importantes.',
    },
  },
  infoHub: {
    en: {
      title: 'Business Owner Hub',
      description:
        'Plain-English guidance for business owners — entity setup, bookkeeping basics, payroll, and tax planning, from a team that has done it thousands of times.',
    },
    es: {
      title: 'Centro para Empresarios',
      description:
        'Orientación clara para dueños de negocios — estructura de la empresa, fundamentos de contabilidad, nómina y planificación fiscal, de un equipo que lo ha hecho miles de veces.',
    },
  },
  services: {
    en: {
      title: 'Our Services',
      description:
        'Tax, bookkeeping, and business advisory for individuals, families, and growing companies — in all 50 states, fully bilingual.',
    },
    es: {
      title: 'Nuestros Servicios',
      description:
        'Impuestos, contabilidad y asesoría empresarial para personas, familias y empresas en crecimiento — en los 50 estados, totalmente bilingüe.',
    },
  },
  testimonials: {
    en: {
      title: 'Reviews',
      description:
        'What clients say about working with JBS Corp — trusted by thousands of individuals and businesses across all 50 states.',
    },
    es: {
      title: 'Reseñas',
      description:
        'Lo que dicen los clientes sobre trabajar con JBS Corp — con la confianza de miles de personas y empresas en los 50 estados.',
    },
  },
  careers: {
    en: {
      title: 'Careers',
      description:
        'Grow your career at a bilingual, award-winning accounting firm. See open roles and what it is like to work at JBS Corp.',
    },
    es: {
      title: 'Empleo',
      description:
        'Desarrolla tu carrera en una firma contable bilingüe y premiada. Conoce las vacantes y cómo es trabajar en JBS Corp.',
    },
  },
  contact: {
    en: {
      title: 'Contact Us',
      description:
        'Reach the JBS Corp team in Methuen and Lawrence, MA. Call, email, or send a message — we are always happy to help, in English and Spanish.',
    },
    es: {
      title: 'Contáctanos',
      description:
        'Comunícate con el equipo de JBS Corp en Methuen y Lawrence, MA. Llama, escribe o envía un mensaje — siempre estamos felices de ayudar, en inglés y español.',
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy',
      description: 'How JBS Corp collects, uses, and protects your personal information.',
    },
    es: {
      title: 'Política de Privacidad',
      description: 'Cómo JBS Corp recopila, usa y protege tu información personal.',
    },
  },
  blog: {
    en: {
      title: 'Articles',
      description:
        'Practical tax and accounting articles for individuals and business owners — deadlines, deductions, and planning, in plain English.',
    },
    es: {
      title: 'Artículos',
      description:
        'Artículos prácticos de impuestos y contabilidad para personas y dueños de negocios — fechas límite, deducciones y planificación, en lenguaje claro.',
    },
  },
};
