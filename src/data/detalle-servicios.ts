export interface DetalleServicio {
  slug: string;
  titulo: string;
  icono: string;
  resumen: string;
  paraQuien: string[];
  requisitos: string[];
  proceso: { titulo: string; desc: string }[];
  plazos: string;
  costos: string;
  faqs: { pregunta: string; respuesta: string }[];
}

export const detalleServicios: DetalleServicio[] = [
  {
    slug: 'visas-trabajo',
    titulo: 'Visas de trabajo',
    icono: 'briefcase',
    resumen: 'Opciones H-1B, L-1, O-1, TN y categorías EB con certificación PERM. Revisamos si tu empleo y tu perfil encajan y qué puede patrocinar tu empleador.',
    paraQuien: ['Profesionales con oferta de empleo en EE. UU.', 'Traslados dentro de la misma empresa (L-1)', 'Personas con logros destacados (O-1)', 'Ciudadanos de México y Canadá bajo tratado (TN)'],
    requisitos: ['Oferta o patrocinio de un empleador estadounidense', 'Título, experiencia o logros según la categoría', 'Certificación laboral PERM en categorías EB donde aplique', 'Pasaporte vigente y antecedentes revisados'],
    proceso: [
      { titulo: 'Evaluación de categoría', desc: 'Comparamos H-1B, L-1, O-1, TN y EB según tu perfil.' },
      { titulo: 'Estrategia con el empleador', desc: 'Definimos quién presenta qué y en qué orden.' },
      { titulo: 'Expediente y formularios', desc: 'Preparamos I-129 o I-140 con evidencia de apoyo.' },
      { titulo: 'Presentación y seguimiento', desc: 'Enviamos ante USCIS y respondemos avisos.' },
    ],
    plazos: 'De meses a más de un año según categoría y carga de USCIS. Las loterías H-1B tienen fechas fijas anuales.',
    costos: 'Tarifas de USCIS más honorarios según complejidad. Te damos estimado por escrito antes de iniciar.',
    faqs: [
      { pregunta: '¿Necesito siempre un patrocinador?', respuesta: 'En la mayoría de categorías de trabajo sí. Algunas EB permiten auto-petición según tus logros; lo revisamos en tu caso.' },
      { pregunta: '¿Qué es la certificación PERM?', respuesta: 'Es el paso del Departamento de Trabajo donde el empleador demuestra que no hay trabajador estadounidense disponible para el puesto. Aplica a varias categorías EB.' },
    ],
  },
  {
    slug: 'visas-familiares',
    titulo: 'Visas familiares',
    icono: 'users',
    resumen: 'Peticiones I-130 para cónyuge, hijos y padres de ciudadanos o residentes, además de visa K-1 para prometido(a). Te guiamos en el ajuste de estatus o el proceso consular.',
    paraQuien: ['Cónyuges e hijos de ciudadanos o residentes', 'Padres de ciudadanos estadounidenses', 'Prometidos(as) de ciudadanos (K-1)', 'Familiares ajustando estatus dentro del país'],
    requisitos: ['Parentesco calificante y prueba de la relación', 'Petición I-130 o I-129F según el caso', 'Examen médico y entrevista consular o con USCIS', 'Documentos civiles vigentes y traducidos'],
    proceso: [
      { titulo: 'Confirmamos el vínculo', desc: 'Revisamos actas, pruebas de relación y elegibilidad.' },
      { titulo: 'Petición I-130 o K-1', desc: 'Presentamos la petición del familiar que califica.' },
      { titulo: 'Ajuste o vía consular', desc: 'Seguimos tu ruta dentro o fuera del país.' },
      { titulo: 'Entrevista y decisión', desc: 'Te preparamos para responder con tranquilidad.' },
    ],
    plazos: 'Meses a varios años según el vínculo y el país. Los cónyuges de ciudadanos suelen avanzar más rápido.',
    costos: 'Tarifas por formulario (I-130, ajuste o visa) más honorarios. Estimado por escrito desde la primera consulta.',
    faqs: [
      { pregunta: '¿Puedo pedir a mi prometido(a)?', respuesta: 'Los ciudadanos pueden pedir visa K-1 para su prometido(a), con la condición de casarse en 90 días tras la entrada. Te explicamos la evidencia que pide USCIS.' },
      { pregunta: '¿Qué es el ajuste de estatus?', respuesta: 'Es pedir la green card sin salir del país, cuando calificas. No todos califican; revisamos tu entrada y tu historial.' },
    ],
  },
  {
    slug: 'visas-estudiante',
    titulo: 'Visas de estudiante',
    icono: 'cap',
    resumen: 'Visas F-1, M-1 y J-1, además de OPT/CPT, cambios de estatus y extensiones. Te ayudamos a mantener tu estatus mientras estudias.',
    paraQuien: ['Admitidos en escuelas, institutos o universidades', 'Programas vocacionales (M-1) o de intercambio (J-1)', 'Estudiantes que buscan OPT o CPT', 'Quienes necesitan extender su estadía o cambiar de estatus'],
    requisitos: ['Carta de aceptación y formulario I-20 o DS-2019', 'Prueba de fondos para colegiatura y manutención', 'Vínculos con tu país y plan de estudios claro', 'Estatus migratorio vigente si cambias dentro del país'],
    proceso: [
      { titulo: 'Revisión de admisión', desc: 'Verificamos tu I-20 o DS-2019 y tus fondos.' },
      { titulo: 'Solicitud de visa o cambio', desc: 'Preparamos DS-160 o I-539 según tu caso.' },
      { titulo: 'Entrevista o espera', desc: 'Te preparamos para la entrevista consular.' },
      { titulo: 'Mantén tu estatus', desc: 'Te explicamos OPT, CPT y extensiones a tiempo.' },
    ],
    plazos: 'Semanas a meses. Las citas consulares varían por país y temporada.',
    costos: 'Tarifa SEVIS y de visa más honorarios si llevamos tu cambio o extensión. Estimado previo por escrito.',
    faqs: [
      { pregunta: '¿Puedo trabajar con visa F-1?', respuesta: 'Con límites: CPT durante estudios u OPT al terminar, con autorización. Trabajar fuera de esas vías puede afectar tu estatus.' },
      { pregunta: '¿Qué es OPT?', respuesta: 'Es la práctica opcional tras tus estudios, de hasta 12 meses (más extensión en ciencias e ingeniería). La pedimos antes de que venza tu ventana.' },
    ],
  },
  {
    slug: 'ciudadania-green-card',
    titulo: 'Ciudadanía y Green Card',
    icono: 'id-card',
    resumen: 'Naturalización N-400, renovación y reemplazo de residencia y remoción de condiciones. Preparamos tu entrevista para que llegues con confianza.',
    paraQuien: ['Residentes que cumplen tiempo y presencia para naturalizarse', 'Quienes renuevan o reemplazan su green card', 'Condicionales que deben remover condiciones (I-751)', 'Personas con dudas por viajes largos o antecedentes'],
    requisitos: ['Tiempo como residente y presencia física requerida', 'Buen carácter moral y conocimiento de inglés y civismo', 'Formulario N-400 o I-90/I-751 según el trámite', 'Historial de viajes y taxes en orden'],
    proceso: [
      { titulo: 'Chequeo de elegibilidad', desc: 'Revisamos tiempo, viajes y antecedentes.' },
      { titulo: 'Solicitud N-400 u otra', desc: 'Presentamos tu formulario con evidencia.' },
      { titulo: 'Biometría y estudio', desc: 'Te damos material de civismo en español e inglés.' },
      { titulo: 'Entrevista y juramento', desc: 'Simulamos tu entrevista antes del día real.' },
    ],
    plazos: 'La naturalización suele tomar de 8 a 18 meses según la oficina. Renovaciones varían.',
    costos: 'Tarifas USCIS por formulario más honorarios fijos. Siempre por escrito y sin sorpresas.',
    faqs: [
      { pregunta: '¿Debo hablar inglés perfecto?', respuesta: 'No. Se pide inglés básico de lectura, escritura y conversación, con excepciones por edad y tiempo como residente. Te evaluamos antes de presentar.' },
      { pregunta: '¿Viajar afecta mi caso?', respuesta: 'Los viajes largos pueden interrumpir la continuidad de residencia. Revisamos tus salidas antes de presentar la N-400.' },
    ],
  },
  {
    slug: 'defensa-deportacion',
    titulo: 'Defensa de deportación',
    icono: 'scale',
    resumen: 'Audiencias en corte, fianzas y alivios como cancelación de remoción o asilo. Actuamos rápido porque cada plazo cuenta.',
    paraQuien: ['Personas con audiencia en corte de inmigración', 'Detenidos que buscan fianza', 'Quienes temen persecución en su país (asilo)', 'Casos con orden de deportación que buscan reabrir'],
    requisitos: ['Aviso de audiencia (NTA) y calendario de corte', 'Pruebas de arraigo, familia y buen carácter', 'Declaraciones y evidencia de país en casos de asilo', 'Atención inmediata a cada fecha límite'],
    proceso: [
      { titulo: 'Respuesta inmediata', desc: 'Revisamos tu NTA y aseguramos tu audiencia.' },
      { titulo: 'Estrategia de alivio', desc: 'Evaluamos cancelación, asilo, ajuste u otras vías.' },
      { titulo: 'Fianza si aplica', desc: 'Pedimos tu libertad mientras tu caso avanza.' },
      { titulo: 'Defensa en corte', desc: 'Te representamos en cada audiencia hasta la decisión.' },
    ],
    plazos: 'Los casos en corte pueden durar años, pero las fechas límite son inmediatas. No esperes para buscar ayuda.',
    costos: 'Dependen de las audiencias y el alivio. Te explicamos el plan y el costo por etapa desde el inicio.',
    faqs: [
      { pregunta: '¿Puedo salir bajo fianza?', respuesta: 'Muchas personas detenidas pueden pedir fianza ante el juez. Revisamos tu caso y preparamos la petición con pruebas de arraigo.' },
      { pregunta: '¿Qué pasa si no voy a mi audiencia?', respuesta: 'El juez puede ordenar tu deportación en ausencia. Si recibiste un aviso, busca orientación de inmediato y no faltes.' },
    ],
  },
];
