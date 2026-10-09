// Constructores JSON-LD (SEO + GEO: los LLMs también consumen estos datos).
import { SITE_URL, PHONE_HREF, OFFICES } from './site.ts';

export function attorneySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${SITE_URL}/#despacho`,
    name: 'Diener Law Abogados',
    url: SITE_URL,
    image: `${SITE_URL}/logo-white.webp`,
    logo: `${SITE_URL}/logo-white.webp`,
    telephone: PHONE_HREF.replace('tel:', ''),
    description:
      'Despacho de abogados de inmigración en Carolina del Norte, California, Arizona y Texas. Visas familiares, de trabajo y de estudiante, ciudadanía, green card y defensa de deportación. Se habla español.',
    areaServed: OFFICES.map((o) => ({ '@type': 'State', name: o.region })),
    address: OFFICES.map((o) => ({
      '@type': 'PostalAddress',
      addressLocality: o.locality,
      addressRegion: o.region,
      addressCountry: 'US',
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    knowsLanguage: ['es', 'en'],
  };
}

export function faqSchema(items: { pregunta: string; respuesta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function websiteSchema(lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'Diener Law Abogados',
    inLanguage: lang === 'es' ? 'es' : 'en',
  };
}
