# Diener Law Abogados

Sitio bilingüe (ES/EN) del despacho de inmigración Diener Law — Carolina del Norte, California, Arizona y Texas. Construido con [Astro](https://astro.build) + React (islas) + Tailwind CSS v4 + GSAP.

## Requisitos

- Node.js >= 22.12.0
- `npm install` para dependencias

## Comandos

| Comando | Acción |
| :------ | :----- |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Sitio de producción en `./dist/` |
| `npm run preview` | Vista previa del build |
| `npm run astro ...` | CLI de Astro (`astro check`, etc.) |

> Usa el dev server en segundo plano: `npx astro dev --background` (gestionar con `astro dev stop` / `status` / `logs`).

## Estructura

```text
src/
├── assets/            # Imágenes optimizadas (WebP): hero, abogados, logos
├── components/        # Astro estáticos + islas React (*.tsx)
│   ├── CitaModal.tsx       # Modal global de citas (isla client:load en Layout)
│   ├── AppointmentForm.tsx # Formulario de consulta (vive dentro del modal)
│   ├── FaqAccordion.tsx    # Acordeón FAQ
│   ├── ChatWidget.tsx      # Widget de chat flotante
│   ├── Hero.astro           # Héroe de portada (foto + parallax doble capa)
│   ├── LawyerCard.astro    # Tarjeta de abogado (foto, bio, cita)
│   └── ...                 # Button, Header, Footer, SectionHeading, etc.
├── data/
│   ├── i18n.ts            # TODO el texto UI es/en (única fuente de traducciones)
│   ├── content-en.ts      # Contenido EN espejo (servicios, equipo, casos…)
│   ├── abogados.ts / servicios.ts / detalle-servicios.ts / faq.ts / …
│   └── site.ts / schemas.ts  # Dominio, teléfono, JSON-LD
├── layouts/Layout.astro   # SEO/hreflang, progreso de scroll, modal, transición ES⇄EN
├── pages/
│   ├── index.astro en/index.astro                 # Portadas ES/EN
│   ├── about-us.astro / en/about-us.astro         # Equipo (7 abogados)
│   ├── privacidad.astro / en/privacy.astro        # Política de privacidad
│   ├── servicios/[slug].astro / en/services/[slug].astro
│   └── 404.astro
└── scripts/motion.ts     # Animación global GSAP (reveals, parallax, header, scrollspy)
```

## Convenciones

- **Bilingüe por construcción**: cada página ES tiene su espejo `/en/…` con `lang`, `hreflang` y `switchHref` cruzados. Todo texto nuevo va a `src/data/i18n.ts` (ambos idiomas).
- **Modal de citas**: cualquier botón/enlace con `data-open-cita` (o prop `openCita` en `Button.astro`) abre `CitaModal`. No existen secciones `#cita`: no crear anclas a ellas.
- **React solo como isla**: formularios, FAQ, chat y modal usan `client:load`/`client:visible`; el resto es Astro estático prerenderizado.
- **Estética institucional** (`DESIGN.md` en `.agents/`): navy `#1f3461` + dorado `#fdd04b` (un solo CTA dorado por vista), Oswald/Open Sans, sin sombras ni píldoras, transiciones ≤200 ms, `prefers-reduced-motion` respetado.
- **Decisiones**: desviaciones y supuestos se registran en `.agents/DECISIONS.md` (p. ej. dominio provisional `https://www.dienerlaw.com` en `astro.config.mjs` y `site.ts`: reemplazar al publicar).

## Documentación del proyecto

En `.agents/` (ignorado por git): `DESIGN.md` (sistema de diseño), `DECISIONS.md` (bitácora), `about-us.md` y `privacity-policy.txt` (fuentes de contenido).
