export interface Abogado {
  nombre: string;
  cargo: string;
  idiomas: string[];
  bio: string;
  credenciales: string[];
  destacado?: boolean;
}

export const abogados: Abogado[] = [
  {
    nombre: 'James Diener',
    cargo: 'Socio fundador · Licenciado en NC y CA',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Más de 20 años acompañando a familias en peticiones familiares, naturalización y defensa en corte.',
    credenciales: ['Admisión al colegio de abogados de NC', 'Miembro de AILA'],
    destacado: true,
  },
  {
    nombre: 'María Fernández',
    cargo: 'Asociada senior · Licenciada en TX',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Enfocada en visas de trabajo y ajuste de estatus. Explica cada formulario en lenguaje claro.',
    credenciales: ['Admisión al colegio de abogados de TX', 'Miembro de AILA'],
  },
  {
    nombre: 'Carlos Ramírez',
    cargo: 'Asociado · Licenciado en AZ y CA',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Acompaña casos de asilo y defensa de deportación, con atención a plazos y fianzas.',
    credenciales: ['Admisión al colegio de abogados de AZ'],
  },
];
