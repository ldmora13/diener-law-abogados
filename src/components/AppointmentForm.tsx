import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ui, type Lang } from '../data/i18n.ts';

const inputCls = 'w-full h-[52px] px-4 bg-paper border border-steel rounded-[4px] font-body text-[16px] text-slate-ink placeholder:text-quiet-slate focus:border-[2px] focus:border-authority-blue focus:outline-none';

export default function AppointmentForm({ lang = 'es' }: { lang?: Lang }) {
  const t = ui[lang].form;
  const schema = z.object({
    nombre: z.string().min(2, t.errName),
    telefono: z.string().min(7, t.errPhone),
    email: z.string().email(t.errEmail),
    estado: z.string().min(1, t.errState),
    caso: z.string().min(1, t.errCase),
    contacto: z.string().min(1),
    idioma: z.string().min(1),
    mensaje: z.string().max(2000).optional(),
    consent: z.literal(true, { message: t.errConsent }),
  });
  type Form = z.infer<typeof schema>;

  const [ok, setOk] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { contacto: t.contactOpts[0], idioma: t.langOpts[0] },
  });

  const onSubmit = (_data: Form) => {
    setOk(true);
  };

  if (ok) {
    return (
      <div role="status" className="bg-[#e1f2ea] border border-approved-green rounded-[4px] p-8 text-center">
        <p className="font-heading text-[24px] text-approved-green">{t.successTitle}</p>
        <p className="font-body text-[14px] text-slate-ink mt-2">{t.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 md:grid-cols-2">
      <div>
        <label htmlFor="nombre" className="block font-body text-[14px] font-semibold mb-2">{t.name} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="nombre" autoComplete="name" placeholder={t.namePh} className={inputCls} {...register('nombre')} aria-describedby="err-nombre" aria-invalid={!!errors.nombre} />
        {errors.nombre && <p id="err-nombre" role="alert" className="font-body text-[13px] text-alert-red mt-1">{errors.nombre.message}</p>}
      </div>
      <div>
        <label htmlFor="telefono" className="block font-body text-[14px] font-semibold mb-2">{t.phone} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="telefono" type="tel" autoComplete="tel" placeholder={t.phonePh} className={inputCls} {...register('telefono')} aria-describedby="err-tel" aria-invalid={!!errors.telefono} />
        {errors.telefono && <p id="err-tel" role="alert" className="font-body text-[13px] text-alert-red mt-1">{errors.telefono.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block font-body text-[14px] font-semibold mb-2">{t.email} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="email" type="email" autoComplete="email" placeholder={t.emailPh} className={inputCls} {...register('email')} aria-describedby="err-email" aria-invalid={!!errors.email} />
        {errors.email && <p id="err-email" role="alert" className="font-body text-[13px] text-alert-red mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="estado" className="block font-body text-[14px] font-semibold mb-2">{t.state} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <select id="estado" className={inputCls} {...register('estado')} aria-invalid={!!errors.estado}>
          <option value="">{t.selectOne}</option>
          {t.states.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        {errors.estado && <p role="alert" className="font-body text-[13px] text-alert-red mt-1">{errors.estado.message}</p>}
      </div>
      <div>
        <label htmlFor="caso" className="block font-body text-[14px] font-semibold mb-2">{t.case} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <select id="caso" className={inputCls} {...register('caso')} aria-invalid={!!errors.caso}>
          <option value="">{t.selectOne}</option>
          {t.cases.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        {errors.caso && <p role="alert" className="font-body text-[13px] text-alert-red mt-1">{errors.caso.message}</p>}
      </div>
      <div>
        <span id="contacto-label" className="block font-body text-[14px] font-semibold mb-2">{t.contactPref}</span>
        <div role="radiogroup" aria-labelledby="contacto-label" className="flex gap-4 min-h-[52px] items-center">
          {t.contactOpts.map((v) => (
            <label key={v} className="inline-flex items-center gap-2 font-body text-[16px] min-h-[44px] cursor-pointer">
              <input type="radio" value={v} {...register('contacto')} className="w-5 h-5 accent-[#2a4a82]" />{v}
            </label>
          ))}
        </div>
      </div>
      <div>
        <span id="idioma-label" className="block font-body text-[14px] font-semibold mb-2">{t.language}</span>
        <div role="radiogroup" aria-labelledby="idioma-label" className="flex gap-4 min-h-[52px] items-center">
          {t.langOpts.map((v) => (
            <label key={v} className="inline-flex items-center gap-2 font-body text-[16px] min-h-[44px] cursor-pointer">
              <input type="radio" value={v} {...register('idioma')} className="w-5 h-5 accent-[#2a4a82]" />{v}
            </label>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="mensaje" className="block font-body text-[14px] font-semibold mb-2">{t.message}</label>
        <textarea id="mensaje" rows={4} placeholder={t.messagePh} className="w-full min-h-[120px] p-4 bg-paper border border-steel rounded-[4px] font-body text-[16px]" {...register('mensaje')} />
      </div>
      <div className="md:col-span-2">
        <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
          <input type="checkbox" {...register('consent')} className="w-5 h-5 mt-1 accent-[#2a4a82]" aria-describedby="err-consent" />
          <span className="font-body text-[13px] text-quiet-slate">{t.consentA}<a href="#cita" className="underline">{t.privacy}</a>{t.consentB} <span aria-hidden="true" className="text-alert-red">*</span></span>
        </label>
        {errors.consent && <p id="err-consent" role="alert" className="font-body text-[13px] text-alert-red mt-1">{errors.consent.message}</p>}
      </div>
      <div className="md:col-span-2">
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
          {isSubmitting ? t.sending : t.submit}
        </button>
        <p className="font-body text-[13px] text-quiet-slate mt-3 text-center">{t.noRelation}</p>
      </div>
    </form>
  );
}
