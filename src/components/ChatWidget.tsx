import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ui, type Lang } from '../data/i18n.ts';

export default function ChatWidget({ lang = 'es' }: { lang?: Lang }) {
  const t = ui[lang].chat;
  const [open, setOpen] = useState(false);
  return (
    <div data-chat className="fixed bottom-20 lg:bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      {open && (
        <div role="dialog" aria-label={t.dialog} className="bg-paper border border-mist rounded-[4px] p-6 w-[300px]">
          <p className="font-heading text-[18px] text-authority-blue">{t.title}</p>
          <p className="font-body text-[14px] mt-2">{t.text}</p>
          <a href="tel:+19195550100" className="btn-primary w-full mt-4 !min-h-[44px] !py-3 text-center">{t.call}</a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? t.close : t.open}
        className="chat-shadow w-[88px] h-[88px] lg:w-[104px] lg:h-[104px] rounded-full bg-counsel-navy border-4 border-gold-deep inline-flex items-center justify-center text-paper cursor-pointer"
      >
        <MessageCircle size={32} strokeWidth={2} aria-hidden="true" />
      </button>
      <span className="bg-counsel-navy text-paper font-heading text-[14px] uppercase px-3 py-1 rounded-[2px]">{t.badge}</span>
    </div>
  );
}
