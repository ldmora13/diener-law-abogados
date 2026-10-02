import { useState } from 'react';
import { ui, type Lang } from '../data/i18n.ts';

interface Item { tema: string; pregunta: string; respuesta: string; }

export default function FaqAccordion({ items, lang = 'es', citaHref = '#contacto' }: { items: Item[]; lang?: Lang; citaHref?: string }) {
  const t = ui[lang].faq;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-[760px]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`border-b border-mist ${isOpen ? 'bg-paper border-l-[3px] border-l-verdict-gold' : ''}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left font-body text-[18px] font-semibold text-authority-blue px-6 py-5 min-h-[44px] cursor-pointer"
              >
                {f.pregunta}
                <span aria-hidden="true" className="text-[24px] leading-none shrink-0">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`grid transition-[grid-template-rows] duration-[250ms] ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 font-body text-[16px] leading-[1.6] text-slate-ink">{f.respuesta}</p>
              </div>
            </div>
          </div>
        );
      })}
      <p className="text-center mt-8 font-body text-[16px]">
        {t.notFound} <a href={citaHref} data-open-cita className="font-bold text-authority-blue underline decoration-verdict-gold decoration-2 underline-offset-4">{t.talk}</a>
      </p>
    </div>
  );
}
