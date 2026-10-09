import bertDienerPhoto from '../assets/lawyers/Bert-Diener.webp';
import ChristinePhoto from '../assets/lawyers/Christine-Meredith.webp'
import CarlosPhoto from '../assets/lawyers/Carlos-Mejia.webp'
import ItaliaPhoto from '../assets/lawyers/Italia-Lima.webp'

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
    nombre: 'Christine Meredith Lester',
    cargo: 'Asociada senior · Abogado',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Especialista en derecho migratorio, fianzas y letigios ante corte.',
    credenciales: ['Abogado de la Escuela de Abogados de California'],
    foto: ChristinePhoto
  },
  {
    nombre: 'Carlos Alberto Mejia',
    cargo: 'Asociado senior · Abogado',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Especialista en derecho migratorio, fianzas y litigios ante corte, además de estar licenciado en California, Arizona y Texas.',
    credenciales: ['Graduado de la Escuela de Abogados de California.', 'Miembro de la Sociedad de Honor Nacional Golden Key'],
    foto: CarlosPhoto
  },
  {
    nombre: 'Italia M. Lima ',
    cargo: 'Asociada senior · Abogado',
    idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Especialista en derecho migratorio, fianzas y letigios ante corte.',
    credenciales: ['Graduada de la Escuela de Abogados de California'],
    foto: ItaliaPhoto
  },
];
