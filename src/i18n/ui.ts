export const defaultLang = 'en' as const;
export type Lang = 'en' | 'es';

export const ui = {
  en: {
    // Utility bar
    'utility.book': 'Book Appointment',
    'utility.pay': 'Make a Payment',
    'utility.portal': 'Client Portal',

    // Nav groups
    'nav.individual': 'Individual',
    'nav.business': 'Business',
    'nav.about': 'About JBS',
    'nav.bookCta': 'Book Appointment',

    // Nav items
    'nav.tax': 'Tax Services',
    'nav.bookkeeping': 'Bookkeeping',
    'nav.businessTax': 'Business Tax',
    'nav.articles': 'Articles',
    'nav.infoHub': 'Business Owner Hub',
    'nav.assessment': 'Financial Assessment',
    'nav.aboutUs': 'About Us',
    'nav.reviews': 'Reviews',
    'nav.careers': 'Careers',
    'nav.podcast': 'Podcast',
    'nav.events': 'Events',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Buttons / common
    'cta.book': 'Book Your Tax Appointment',
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
    'cta.readAll': 'Read All Reviews',
    'cta.exploreBusiness': 'Explore Business Services',
    'cta.contactUs': 'Contact Us',
    'cta.bookAppt': 'Book an Appointment',
    'common.langLabel': 'Language',
    'common.menu': 'Menu',
    'common.close': 'Close',
    'common.skip': 'Skip to content',

    // Footer
    'footer.aboutTitle': 'About Us',
    'footer.aboutBlurb':
      'JBS is a tax and accounting firm serving individuals, families, and businesses in English and Spanish — in all 50 states.',
    'footer.servicesTitle': 'Services',
    'footer.companyTitle': 'Company',
    'footer.contactTitle': 'Contact Us',
    'footer.contactBlurb': "We're always happy to help.",
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.bannerText':
      'Lose the hassle of taxes and accounting. Get in touch with our team today.',
  },
  es: {
    // Utility bar
    'utility.book': 'Reservar Cita',
    'utility.pay': 'Hacer un Pago',
    'utility.portal': 'Portal del Cliente',

    // Nav groups
    'nav.individual': 'Individual',
    'nav.business': 'Empresas',
    'nav.about': 'Sobre JBS',
    'nav.bookCta': 'Reservar Cita',

    // Nav items
    'nav.tax': 'Servicios de Impuestos',
    'nav.bookkeeping': 'Contabilidad',
    'nav.businessTax': 'Impuestos de Empresas',
    'nav.articles': 'Artículos',
    'nav.infoHub': 'Centro para Empresarios',
    'nav.assessment': 'Evaluación Financiera',
    'nav.aboutUs': 'Quiénes Somos',
    'nav.reviews': 'Reseñas',
    'nav.careers': 'Empleo',
    'nav.podcast': 'Podcast',
    'nav.events': 'Eventos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',

    // Buttons / common
    'cta.book': 'Reserva tu Cita de Impuestos',
    'cta.getStarted': 'Comenzar',
    'cta.learnMore': 'Saber Más',
    'cta.readAll': 'Ver Todas las Reseñas',
    'cta.exploreBusiness': 'Ver Servicios para Empresas',
    'cta.contactUs': 'Contáctanos',
    'cta.bookAppt': 'Reservar una Cita',
    'common.langLabel': 'Idioma',
    'common.menu': 'Menú',
    'common.close': 'Cerrar',
    'common.skip': 'Saltar al contenido',

    // Footer
    'footer.aboutTitle': 'Quiénes Somos',
    'footer.aboutBlurb':
      'JBS es una firma de impuestos y contabilidad que atiende a personas, familias y empresas en inglés y español — en los 50 estados.',
    'footer.servicesTitle': 'Servicios',
    'footer.companyTitle': 'Compañía',
    'footer.contactTitle': 'Contáctanos',
    'footer.contactBlurb': 'Siempre estamos felices de ayudar.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.bannerText':
      'Olvídate del estrés de los impuestos y la contabilidad. Contacta a nuestro equipo hoy.',
  },
} as const;
