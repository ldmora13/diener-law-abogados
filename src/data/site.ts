// Datos globales del sitio para SEO/GEO.
// ponytail: dominio provisional — reemplazar SITE_URL por el dominio real al publicar.
export const SITE_URL = 'https://dienerlawabogados.com';
export const SITE_NAME = 'Diener Law Abogados';
export const PHONE_DISPLAY = '+1 (863) 227-1367';
export const PHONE_HREF = 'https://wa.me/18632271367';
export const WHATSAPP_MESSAGE = 'Hola, me gustaría agendar una consulta de inmigración con Diener Law.';
export const WHATSAPP_HREF = `${PHONE_HREF}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const OFFICES = [
  { locality: 'Charlotte', region: 'NC', label: 'Charlotte, NC' },
  { locality: 'Los Angeles', region: 'CA', label: 'Los Ángeles, CA' },
  { locality: 'Phoenix', region: 'AZ', label: 'Phoenix, AZ' },
  { locality: 'Dallas', region: 'TX', label: 'Dallas, TX' },
];
