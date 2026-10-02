// Motion global — Diener Law.
// Corporate sobrio: una sola firma (power2.out), reveals de 12px/400ms según DESIGN.md.
// Solo transform + autoAlpha. Sin JS = contenido visible (gsap.from, progressive enhancement).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

// Rama con movimiento: solo si NO hay preferencia de reducir movimiento.
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // 1. Entrada del héroe: timeline corto, stagger < 500ms total.
  const heroItems = document.querySelectorAll('[data-hero]');
  if (heroItems.length) {
    gsap.from(heroItems, {
      y: 12,
      autoAlpha: 0,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.08,
      clearProps: 'transform,opacity,visibility',
    });
  }

  // 2. Reveals por scroll: fundido + 12px, una sola vez.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { y: 12, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.06,
          overwrite: true,
          clearProps: 'transform,opacity,visibility',
        },
      );
    },
  });

  // 3. Contadores de stats: solo numéricos (data-count), 1s, sin overshoot.
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    if (Number.isNaN(target)) return;
    const prefix = el.dataset.prefix ?? '';
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.v)}`;
          },
        });
      },
    });
  });

  // 4. Chat: entrada única tardía, sin loops.
  const chat = document.querySelector('[data-chat]');
  if (chat) {
    gsap.from(chat, {
      scale: 0.95,
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power2.out',
      delay: 1,
      clearProps: 'transform,opacity,visibility',
    });
  }

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
});

// Parallax del héroe — doble capa ligada al scroll (scrub), solo transform, sin fade.
// El fondo (foto) baja lento, el contenido sube 60px: profundidad sin romper contraste.
// Entrada y scrub van en elementos anidados distintos para no pelear por el transform.
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Entrada cinematográfica del fondo: zoom-out sutil una sola vez.
  const media = document.querySelector('[data-hero-media]');
  if (media) {
    gsap.from(media, {
      scale: 1.06,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'transform,opacity,visibility',
    });
  }
  const hero = document.querySelector('[data-hero-parallax]');
  const heroSection = hero?.closest('section');
  if (hero && heroSection) {
    const bg = heroSection.querySelector('[data-hero-bg]');
    if (bg) {
      gsap.fromTo(
        bg,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: true },
        },
      );
    }
    gsap.to(hero, {
      y: -60,
      ease: 'none',
      scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: true },
    });
  }
});

// Barra de progreso de lectura — dorada 3px, ligada al scroll.
mm.add('(prefers-reduced-motion: no-preference)', () => {
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    });
  }
});

// Header autohide + scrollspy: funcional, corre siempre.
// El ocultado se desactiva con reduced-motion (queda fijo).
(function headerBehavior() {
  const header = document.getElementById('site-header');
  const menuBtn = document.getElementById('menu-btn');
  if (!header) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    const menuOpen = menuBtn?.getAttribute('aria-expanded') === 'true';
    if (!reduceMotion && !menuOpen) {
      const hide = y > 240 && y > lastY;
      header.classList.toggle('site-header--hidden', hide);
    } else {
      header.classList.remove('site-header--hidden');
    }
    lastY = y;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // Scrollspy: subraya en dorado la sección visible (desktop y móvil).
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('#site-header nav a[href^="#"]'),
  );
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map<string, HTMLAnchorElement[]>();
  for (const a of links) {
    const id = a.getAttribute('href')?.slice(1);
    if (!id) continue;
    byId.set(id, [...(byId.get(id) ?? []), a]);
  }
  const paint = (a: HTMLAnchorElement, active: boolean) => {
    if (a.classList.contains('border-b-[3px]')) {
      // Nav desktop: subrayado dorado.
      a.classList.toggle('border-verdict-gold', active);
      a.classList.toggle('border-transparent', !active);
      if (active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    } else {
      // Nav móvil: subrayado dorado.
      a.classList.toggle('underline', active);
      a.classList.toggle('decoration-verdict-gold', active);
      a.classList.toggle('decoration-[3px]', active);
      a.classList.toggle('underline-offset-8', active);
    }
  };
  const setActive = (id: string | undefined) => {
    byId.forEach((group, key) => group.forEach((a) => paint(a, key === id)));
  };
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) setActive(e.target.id);
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  byId.forEach((group, id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
})();
