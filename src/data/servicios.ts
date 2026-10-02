export interface Servicio {
  slug: string;
  titulo: string;
  icono: string;
  descripcion: string;
}

export const servicios: Servicio[] = [
  {
    slug: 'visas-familiares',
    titulo: 'Visas familiares',
    icono: 'users',
    descripcion: 'Peticiones I-130 para cónyuge, hijos y padres. Le explicamos el ajuste de estatus y los pasos ante USCIS.',
  },
  {
    slug: 'visas-trabajo',
    titulo: 'Visas de trabajo',
    icono: 'briefcase',
    descripcion: 'Opciones H-1B, L-1, O-1, TN y categorías EB con certificación PERM. Revisamos el patrocinio del empleador.',
  },
  {
    slug: 'ciudadania-green-card',
    titulo: 'Ciudadanía y Green Card',
    icono: 'id-card',
    descripcion: 'Naturalización N-400, renovación de residencia y remoción de condiciones. Preparamos su entrevista con calma.',
  },
  {
    slug: 'visas-estudiante',
    titulo: 'Visas de estudiante',
    icono: 'cap',
    descripcion: 'Visas F-1, M-1 y J-1, OPT/CPT y extensiones. Te ayudamos a mantener tu estatus mientras estudias.',
  },
  {
    slug: 'defensa-deportacion',
    titulo: 'Defensa de deportación',
    icono: 'scale',
    descripcion: 'Audiencias, fianzas y alivios como cancelación o asilo. Actuamos rápido para proteger sus plazos.',
  },
];
