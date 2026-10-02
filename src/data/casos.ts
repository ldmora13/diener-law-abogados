export interface Caso {
  tipo: string;
  titulo: string;
  situacion: string;
  estrategia: string;
  resultado: string;
}

export const casos: Caso[] = [
  {
    tipo: 'Visa de estudiante',
    titulo: 'De visa de estudiante a residencia permanente',
    situacion: 'Estudiante F-1 con oferta de empleo al graduarse.',
    estrategia: 'Coordinamos OPT, patrocinio H-1B y posterior petición EB.',
    resultado: 'Residencia aprobada tras proceso por etapas.',
  },
  {
    tipo: 'Petición familiar',
    titulo: 'Reunificación de cónyuge e hijos',
    situacion: 'Residente con familia fuera del país.',
    estrategia: 'Peticiones I-130 simultáneas y seguimiento consular.',
    resultado: 'Visas de inmigrante emitidas y reencuentro familiar.',
  },
  {
    tipo: 'Naturalización',
    titulo: 'Ciudadanía tras residencia prolongada',
    situacion: 'Residente de largo plazo con dudas sobre elegibilidad.',
    estrategia: 'Revisión de historial, N-400 y preparación de entrevista.',
    resultado: 'Juramento de ciudadanía completado.',
  },
];

export interface Stat { valor: string; etiqueta: string; count?: number; prefix?: string; }

export const stats: Stat[] = [
  { valor: '+20', etiqueta: 'años de experiencia', count: 20, prefix: '+' },
  { valor: 'Miles', etiqueta: 'de familias acompañadas' },
  { valor: '4', etiqueta: 'estados: NC, CA, AZ y TX', count: 4, prefix: '' },
];
