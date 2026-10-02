import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import AppointmentForm from './AppointmentForm.tsx';
import { ui, type Lang } from '../data/i18n.ts';

// Modal global de citas: se abre desde cualquier `[data-open-cita]` o con `window.dispatchEvent(new CustomEvent('cita:open'))`.
export default function CitaModal({ lang = 'es' }: { lang?: Lang }) {
  const t = ui[lang].form;
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const doOpen = useCallback(() => {
    opener.current = document.activeElement as HTMLElement | null;
    setMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  }, []);

  const doClose = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => {
      setMounted(false);
      opener.current?.focus?.();
    }, 320);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest?.('[data-open-cita]');
      if (!el) return;
      e.preventDefault();
      doOpen();
    };
    const onCustom = () => doOpen();
    document.addEventListener('click', onClick);
    window.addEventListener('cita:open', onCustom);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('cita:open', onCustom);
    };
  }, [doOpen]);

  // Escape + trampa de foco sencilla dentro del diálogo.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        doClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      ).filter((el) => !el.hasAttribute('disabled'));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted, doClose]);

  // Bloqueo de scroll + foco inicial.
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const id = window.setTimeout(() => closeRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(id);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center sm:p-6" role="presentation">
      {/* Velo */}
      <div
        aria-hidden="true"
        onClick={doClose}
        className={`absolute inset-0 bg-night-deep/80 transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cita-modal-title"
        className={`relative w-full sm:max-w-[640px] max-h-[92dvh] flex flex-col bg-paper rounded-t-[4px] sm:rounded-[4px] overflow-hidden transition-all duration-300 ease-out ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.98]'}`}
      >
        {/* Cabecera institucional */}
        <div className="bg-counsel-navy px-6 py-5 pr-16 shrink-0">
          <p className="font-body text-[13px] font-bold uppercase tracking-[0.08em] text-verdict-gold">{t.modalEyebrow}</p>
          <h2 id="cita-modal-title" className="font-heading font-semibold text-[24px] md:text-[28px] text-paper mt-1">{t.modalTitle}</h2>
          <p className="font-body text-[14px] text-paper/80 mt-1">{t.modalSub}</p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={doClose}
          aria-label={t.close}
          className="absolute top-4 right-4 w-11 h-11 inline-flex items-center justify-center rounded-[2px] text-paper/80 hover:text-verdict-gold hover:bg-white/10 transition-colors duration-200 ease-out"
        >
          <X size={24} strokeWidth={2} aria-hidden="true" />
        </button>
        {/* Formulario */}
        <div className="overflow-y-auto px-6 py-6 md:px-8">
          <AppointmentForm lang={lang} revealed={open} onDone={doClose} />
        </div>
      </div>
    </div>
  );
}
