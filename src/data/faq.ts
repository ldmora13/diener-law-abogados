export interface Faq {
  tema: string;
  pregunta: string;
  respuesta: string;
}

export const faqs: Faq[] = [
  {
    tema: 'Elegibilidad',
    pregunta: '¿Soy elegible para una green card?',
    respuesta:
      'Depende de su situación: familia, empleo, asilo u otras categorías. En la consulta revisamos sus antecedentes y le explicamos las vías posibles y sus requisitos, sin prometer un resultado.',
  },
  {
    tema: 'Familia',
    pregunta: '¿Puedo inmigrar con mi familia a los Estados Unidos?',
    respuesta:
      'En muchos casos sí: cónyuges, hijos y padres de ciudadanos o residentes pueden calificar para peticiones familiares. Cada caso tiene tiempos y formularios distintos (por ejemplo, I-130).',
  },
  {
    tema: 'Deportación',
    pregunta: '¿Puedo detener una deportación?',
    respuesta:
      'Existen defensas como la cancelación de remoción, el asilo o el ajuste de estatus, según el caso. Los plazos son estrictos, por eso conviene buscar orientación legal cuanto antes.',
  },
  {
    tema: 'Costos',
    pregunta: '¿Cuánto cuesta un caso de inmigración?',
    respuesta:
      'Varía por tipo de caso y tarifas de USCIS. En la primera consulta le damos un estimado por escrito de honorarios y costos gubernamentales antes de iniciar.',
  },
  {
    tema: 'Plazos',
    pregunta: '¿Cuánto tarda un caso ante USCIS?',
    respuesta:
      'De meses a varios años según la categoría y la oficina que procesa. Le indicamos los tiempos orientativos actuales y cómo dar seguimiento a su caso.',
  },
];
