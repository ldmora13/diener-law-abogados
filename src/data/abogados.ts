import bertDienerPhoto from '../assets/lawyers/Bert-Diener.webp';
import ElainePhoto from '../assets/lawyers/Elaine-Headshot.webp'
import RussellPhoto from '../assets/lawyers/RWJ-Photo.webp'

export interface Abogado {
  nombre: string;
  cargo: string;
  idiomas: string[];
  bio: string;
  credenciales: string[];
  foto?: typeof bertDienerPhoto;
  destacado?: boolean;
}

export const abogados: Abogado[] = [
  {
    nombre: 'Richard “Bert” Diener',
    cargo: 'Fundador · Abogado',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Más de 20 años acompañando a familias en peticiones familiares, naturalización y defensa.',
    credenciales: ['Abogado de la Universidad de Carolina del Norte en Chapel Hill', 'Miembro de la Selección Nacional de Primera UNC'],
    foto: bertDienerPhoto,
    destacado: true,
  },
  {
    nombre: 'Elaine Hartman',
    cargo: 'Asociada senior · Abogado',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Enfocada en visas de trabajo y ajuste de estatus. Explica cada formulario en lenguaje claro.',
    credenciales: ['Abogado de la Universidad de Carolina del Norte en Chapel Hill ', 'Editora en North Carolina Review'],
    foto: ElainePhoto
  },
  {
    nombre: 'Russell Johnson',
    cargo: 'Asociado senior · Abogado de Lesiones Personales',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Especialista Certificado por la Junta en Ley de Compensación Laboral en Carolina del Norte, además de estar licenciado en California, Arizona y Texas.',
    credenciales: ['Editor Ejecutivo de la Revista de Derecho de la Primera Enmienda', 'Miembro de la Sociedad de Honor Nacional Golden Key'],
    foto: RussellPhoto
  },
];
