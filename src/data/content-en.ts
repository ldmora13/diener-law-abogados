// Contenido en inglés — espejo de src/data/*.ts
export const serviciosEn = [
  { slug: 'visas-trabajo', titulo: 'Work visas', icono: 'briefcase', descripcion: 'H-1B, L-1, O-1, TN options and EB categories with PERM certification. We review whether your job and profile fit and what your employer can sponsor.' },
  { slug: 'visas-familiares', titulo: 'Family visas', icono: 'users', descripcion: 'I-130 petitions for spouses, children, and parents. We explain adjustment of status and each step before USCIS.' },
  { slug: 'visas-estudiante', titulo: 'Student visas', icono: 'cap', descripcion: 'F-1, M-1, and J-1 visas, OPT/CPT, and extensions. We help you maintain your status while you study.' },
  { slug: 'ciudadania-green-card', titulo: 'Citizenship & Green Card', icono: 'id-card', descripcion: 'N-400 naturalization, residency renewal, and removal of conditions. We prepare your interview so you arrive confident.' },
  { slug: 'defensa-deportacion', titulo: 'Deportation defense', icono: 'scale', descripcion: 'Court hearings, bonds, and relief such as cancellation or asylum. We act fast because every deadline counts.' },
];

export const abogadosEn = [
  {
    nombre: 'Richard “Bert” Diener', cargo: 'Founder · Attorney', idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'More than 20 years guiding families through family petitions, naturalization, and defense.',
    credenciales: ['University of North Carolina at Chapel Hill', 'UNC National Trial Team member'], destacado: true,
  },
  {
    nombre: 'Elaine Hartman', cargo: 'Senior associate · Attorney', idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Focused on work visas and adjustment of status. Explains every form in plain language.',
    credenciales: ['University of North Carolina at Chapel Hill', 'North Carolina Review editor'],
  },
  {
    nombre: 'Russell Johnson', cargo: 'Senior associate · Personal Injury Attorney', idiomas: ['ESPAÑOL', 'ENGLISH'],
    bio: 'Board Certified Specialist in North Carolina Workers’ Compensation Law, also licensed in California, Arizona, and Texas.',
    credenciales: ['Executive Editor, First Amendment Law Review', 'Golden Key National Honor Society member'],
  },
];

export const faqsEn = [
  { tema: 'Eligibility', pregunta: 'Am I eligible for a green card?', respuesta: 'It depends on your situation: family, employment, asylum, or other categories. In a consultation we review your background and explain the possible paths and their requirements, without promising an outcome.' },
  { tema: 'Family', pregunta: 'Can I immigrate with my family to the United States?', respuesta: 'In many cases, yes: spouses, children, and parents of citizens or residents may qualify for family petitions. Each case has different timelines and forms (for example, I-130).' },
  { tema: 'Deportation', pregunta: 'Can a deportation be stopped?', respuesta: 'Defenses such as cancellation of removal, asylum, or adjustment of status exist depending on the case. Deadlines are strict, so it is best to seek legal guidance as soon as possible.' },
  { tema: 'Costs', pregunta: 'How much does an immigration case cost?', respuesta: 'It varies by case type and USCIS fees. At the first consultation we give you a written estimate of fees and government costs before starting.' },
  { tema: 'Timelines', pregunta: 'How long does a USCIS case take?', respuesta: 'From months to several years depending on the category and the processing office. We share current estimated timelines and how to track your case.' },
];

export const testimoniosEn = [
  { cita: 'They explained every step to us and accompanied us to every appointment. Thanks to them, we obtained our Green Card.', nombre: 'Gilberto D.', caso: 'Family green card · Charlotte, NC' },
  { cita: 'Thanks to your help, I obtained my work visa and can now work legally in the United States.', nombre: 'Daniel', caso: 'Work visa · Raleigh, NC' },
  { cita: 'They prepared my citizenship interview with patience until I felt ready.', nombre: 'Martha R.', caso: 'Naturalization · Phoenix, AZ' },
];

export const casosEn = [
  {
    tipo: 'Student visa', titulo: 'From student visa to permanent residency',
    situacion: 'F-1 student with a job offer upon graduation.',
    estrategia: 'We coordinated OPT, H-1B sponsorship, and a later EB petition.',
    resultado: 'Residency approved after a multi-stage process.',
  },
  {
    tipo: 'Family petition', titulo: 'Reuniting spouse and children',
    situacion: 'Resident with family outside the country.',
    estrategia: 'Concurrent I-130 petitions and consular follow-up.',
    resultado: 'Immigrant visas issued and family reunited.',
  },
  {
    tipo: 'Naturalization', titulo: 'Citizenship after long-term residency',
    situacion: 'Long-term resident unsure about eligibility.',
    estrategia: 'History review, N-400, and interview preparation.',
    resultado: 'Citizenship oath completed.',
  },
];

export const statsEn = [
  { valor: '+20', etiqueta: 'years of experience', count: 20, prefix: '+' },
  { valor: 'Thousands', etiqueta: 'of families guided' },
  { valor: '4', etiqueta: 'states: NC, CA, AZ & TX', count: 4, prefix: '' },
];

export const pasosEn = [
  { n: 1, titulo: 'Initial consultation', desc: 'We hear your story and review your documents in your language.', tiempo: '1 business day' },
  { n: 2, titulo: 'Eligibility review', desc: 'We explain the possible paths and their requirements.', tiempo: '1–2 weeks' },
  { n: 3, titulo: 'Document preparation', desc: 'We build your file with clear checklists and full review.', tiempo: '2–4 weeks' },
  { n: 4, titulo: 'Filing with USCIS', desc: 'We submit your case and track every notice.', tiempo: 'Per USCIS' },
  { n: 5, titulo: 'Follow-up and outcome', desc: 'We stand with you at interviews until the final decision.', tiempo: 'Case by case' },
];

export const detalleEn = [
  {
    slug: 'visas-trabajo', titulo: 'Work visas',
    resumen: 'H-1B, L-1, O-1, TN options and EB categories with PERM certification. We review whether your job and profile fit and what your employer can sponsor.',
    paraQuien: ['Professionals with a U.S. job offer', 'Intra-company transfers (L-1)', 'People with extraordinary ability (O-1)', 'Mexican and Canadian citizens under treaty (TN)'],
    requisitos: ['Offer or sponsorship from a U.S. employer', 'Degree, experience, or achievements per the category', 'PERM labor certification for EB categories where it applies', 'Valid passport and reviewed background'],
    proceso: [
      { titulo: 'Category review', desc: 'We compare H-1B, L-1, O-1, TN, and EB for your profile.' },
      { titulo: 'Employer strategy', desc: 'We define who files what and in which order.' },
      { titulo: 'File and forms', desc: 'We prepare the I-129 or I-140 with supporting evidence.' },
      { titulo: 'Filing and follow-up', desc: 'We file with USCIS and answer every notice.' },
    ],
    plazos: 'From months to over a year depending on category and USCIS workload. H-1B lotteries have fixed annual dates.',
    costos: 'USCIS fees plus fees based on complexity. Written estimate before starting.',
    faqs: [
      { pregunta: 'Do I always need a sponsor?', respuesta: 'For most work categories, yes. Some EB categories allow self-petition based on your achievements; we review your case.' },
      { pregunta: 'What is PERM certification?', respuesta: 'It is the Department of Labor step where the employer shows no U.S. worker is available for the role. It applies to several EB categories.' },
    ],
  },
  {
    slug: 'visas-familiares', titulo: 'Family visas',
    resumen: 'I-130 petitions for spouses, children, and parents of citizens or residents, plus K-1 fiancé(e) visas. We guide you through adjustment of status or consular processing.',
    paraQuien: ['Spouses and children of citizens or residents', 'Parents of U.S. citizens', 'Fiancé(e)s of citizens (K-1)', 'Relatives adjusting status inside the country'],
    requisitos: ['Qualifying relationship and proof of the bond', 'I-130 or I-129F petition depending on the case', 'Medical exam and consular or USCIS interview', 'Current civil documents with translations'],
    proceso: [
      { titulo: 'We confirm the bond', desc: 'We review records, relationship evidence, and eligibility.' },
      { titulo: 'I-130 or K-1 petition', desc: 'We file the qualifying relative’s petition.' },
      { titulo: 'Adjustment or consular path', desc: 'We follow your route inside or outside the country.' },
      { titulo: 'Interview and decision', desc: 'We prepare you to answer with confidence.' },
    ],
    plazos: 'Months to several years depending on the relationship and country. Spouses of citizens usually move faster.',
    costos: 'Per-form fees (I-130, adjustment, or visa) plus legal fees. Written estimate from the first consultation.',
    faqs: [
      { pregunta: 'Can I petition for my fiancé(e)?', respuesta: 'Citizens can apply for a K-1 visa for their fiancé(e), with marriage required within 90 days of entry. We explain the evidence USCIS asks for.' },
      { pregunta: 'What is adjustment of status?', respuesta: 'It means seeking a green card without leaving the country, when you qualify. Not everyone qualifies; we review your entry and history.' },
    ],
  },
  {
    slug: 'visas-estudiante', titulo: 'Student visas',
    resumen: 'F-1, M-1, and J-1 visas, plus OPT/CPT, status changes, and extensions. We help you keep your status while you study.',
    paraQuien: ['Students admitted to schools, colleges, or universities', 'Vocational (M-1) or exchange (J-1) programs', 'Students seeking OPT or CPT', 'Those needing to extend their stay or change status'],
    requisitos: ['Acceptance letter and I-20 or DS-2019 form', 'Proof of funds for tuition and living costs', 'Ties to your home country and a clear study plan', 'Current immigration status if changing inside the country'],
    proceso: [
      { titulo: 'Admission review', desc: 'We verify your I-20 or DS-2019 and your funds.' },
      { titulo: 'Visa or change request', desc: 'We prepare the DS-160 or I-539 for your case.' },
      { titulo: 'Interview or wait', desc: 'We prepare you for the consular interview.' },
      { titulo: 'Keep your status', desc: 'We explain OPT, CPT, and timely extensions.' },
    ],
    plazos: 'Weeks to months. Consular appointments vary by country and season.',
    costos: 'SEVIS and visa fees plus legal fees if we handle your change or extension. Prior written estimate.',
    faqs: [
      { pregunta: 'Can I work on an F-1 visa?', respuesta: 'With limits: CPT during studies or OPT after completion, with authorization. Working outside those paths can affect your status.' },
      { pregunta: 'What is OPT?', respuesta: 'Optional on-the-job training after your studies, up to 12 months (plus STEM extension). We file it before your window closes.' },
    ],
  },
  {
    slug: 'ciudadania-green-card', titulo: 'Citizenship & Green Card',
    resumen: 'N-400 naturalization, residency renewal and replacement, and removal of conditions. We prepare your interview so you arrive confident.',
    paraQuien: ['Residents meeting time and presence requirements', 'Those renewing or replacing a green card', 'Conditional residents removing conditions (I-751)', 'People with questions about long trips or records'],
    requisitos: ['Required time as a resident and physical presence', 'Good moral character and English and civics knowledge', 'N-400 or I-90/I-751 form depending on the case', 'Travel history and taxes in order'],
    proceso: [
      { titulo: 'Eligibility check', desc: 'We review timing, travel, and background.' },
      { titulo: 'N-400 or other filing', desc: 'We submit your form with evidence.' },
      { titulo: 'Biometrics and study', desc: 'We share civics material in Spanish and English.' },
      { titulo: 'Interview and oath', desc: 'We rehearse your interview before the real day.' },
    ],
    plazos: 'Naturalization often takes 8 to 18 months depending on the office. Renewals vary.',
    costos: 'USCIS per-form fees plus flat legal fees. Always in writing, no surprises.',
    faqs: [
      { pregunta: 'Must my English be perfect?', respuesta: 'No. Basic reading, writing, and speaking are required, with exceptions by age and time as a resident. We assess you before filing.' },
      { pregunta: 'Does travel affect my case?', respuesta: 'Long trips can break continuous residence. We review your departures before filing the N-400.' },
    ],
  },
  {
    slug: 'defensa-deportacion', titulo: 'Deportation defense',
    resumen: 'Immigration court hearings, bonds, and relief such as cancellation of removal or asylum. We act fast because every deadline counts.',
    paraQuien: ['People with an immigration court hearing', 'Detained individuals seeking bond', 'Those fearing persecution in their country (asylum)', 'Cases with a removal order seeking reopening'],
    requisitos: ['Hearing notice (NTA) and court calendar', 'Proof of ties, family, and good character', 'Declarations and country evidence in asylum cases', 'Immediate attention to every deadline'],
    proceso: [
      { titulo: 'Immediate response', desc: 'We review your NTA and secure your hearing.' },
      { titulo: 'Relief strategy', desc: 'We assess cancellation, asylum, adjustment, or other paths.' },
      { titulo: 'Bond where available', desc: 'We seek your release while your case proceeds.' },
      { titulo: 'Court defense', desc: 'We represent you at every hearing through the decision.' },
    ],
    plazos: 'Court cases can last years, but deadlines are immediate. Do not wait to seek help.',
    costos: 'Depends on hearings and relief. We explain the plan and per-stage cost from the start.',
    faqs: [
      { pregunta: 'Can I be released on bond?', respuesta: 'Many detained people can request bond before the judge. We review your case and prepare the request with proof of ties.' },
      { pregunta: 'What if I miss my hearing?', respuesta: 'The judge may order your deportation in absence. If you received a notice, seek guidance immediately and do not miss it.' },
    ],
  },
];
