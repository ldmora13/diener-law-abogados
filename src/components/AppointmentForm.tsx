import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ui, type Lang } from '../data/i18n.ts';

const inputCls = 'w-full h-[52px] px-4 bg-paper border border-steel rounded-[4px] font-body text-[16px] text-slate-ink placeholder:text-quiet-slate focus:border-[2px] focus:border-authority-blue focus:outline-none';
const labelCls = 'block font-body text-[14px] font-semibold mb-2';
const errCls = 'font-body text-[13px] text-alert-red mt-1';
const radioCard = 'inline-flex items-center gap-2 font-body text-[15px] min-h-[48px] px-4 border border-steel rounded-[4px] cursor-pointer transition-[border-color,background-color] duration-200 ease-out has-checked:border-authority-blue has-checked:bg-sky-mist';

// Envoltorio con entrada escalonada (lo anima el modal vía `revealed`).
function F({ i, on, wide, children }: { i: number; on: boolean; wide?: boolean; children: ReactNode }) {
  return (
    <div
      className={`${wide ? 'md:col-span-2' : ''} transition-all duration-300 ease-out ${on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      style={{ transitionDelay: on ? `${60 + i * 45}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

export default function AppointmentForm({ lang = 'es', revealed = true, onDone }: { lang?: Lang; revealed?: boolean; onDone?: () => void }) {
  const t = ui[lang].form;
  const schema = z.object({
    nombre: z.string().min(2, t.errName),
    apellido: z.string().min(2, t.errLastName),
    telefono: z.string().min(7, t.errPhone),
    email: z.string().email(t.errEmail),
    estado: z.string().min(1, t.errState),
    caso: z.string().min(1, t.errCase),
    situacion: z.string().min(1, t.errStatus),
    urgencia: z.string().min(1, t.errUrgency),
    contacto: z.string().min(1),
    idioma: z.string().min(1),
    mensaje: z.string().max(2000).optional(),
    consent: z.literal(true, { message: t.errConsent }),
  });
  type Form = z.infer<typeof schema>;

  const [ok, setOk] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { contacto: t.contactOpts[0], idioma: t.langOpts[0] },
  });
  const urgencia = watch('urgencia');

  const onSubmit = (_data: Form) => {
    setOk(true);
  };

  if (ok) {
    return (
      <div role="status" className="bg-[#e1f2ea] border border-approved-green rounded-[4px] p-8 text-center">
        <p className="font-heading text-[24px] text-approved-green">{t.successTitle}</p>
        <p className="font-body text-[14px] text-slate-ink mt-2">{t.successSub}</p>
        {onDone && (
          <button type="button" onClick={onDone} className="btn-primary w-full mt-6">
            {t.close}
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 md:grid-cols-2">
      <F i={0} on={revealed}>
        <label htmlFor="cta-nombre" className={labelCls}>{t.name} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="cta-nombre" autoComplete="given-name" placeholder={t.namePh} className={inputCls} {...register('nombre')} aria-describedby="err-nombre" aria-invalid={!!errors.nombre} />
        {errors.nombre && <p id="err-nombre" role="alert" className={errCls}>{errors.nombre.message}</p>}
      </F>
      <F i={1} on={revealed}>
        <label htmlFor="cta-apellido" className={labelCls}>{t.lastName} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="cta-apellido" autoComplete="family-name" placeholder={t.lastNamePh} className={inputCls} {...register('apellido')} aria-describedby="err-apellido" aria-invalid={!!errors.apellido} />
        {errors.apellido && <p id="err-apellido" role="alert" className={errCls}>{errors.apellido.message}</p>}
      </F>
      <F i={2} on={revealed}>
        <label htmlFor="cta-telefono" className={labelCls}>{t.phone} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="cta-telefono" type="tel" autoComplete="tel" placeholder={t.phonePh} className={inputCls} {...register('telefono')} aria-describedby="err-tel" aria-invalid={!!errors.telefono} />
        {errors.telefono && <p id="err-tel" role="alert" className={errCls}>{errors.telefono.message}</p>}
      </F>
      <F i={3} on={revealed}>
        <label htmlFor="cta-email" className={labelCls}>{t.email} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <input id="cta-email" type="email" autoComplete="email" placeholder={t.emailPh} className={inputCls} {...register('email')} aria-describedby="err-email" aria-invalid={!!errors.email} />
        {errors.email && <p id="err-email" role="alert" className={errCls}>{errors.email.message}</p>}
      </F>
      <F i={4} on={revealed}>
        <label htmlFor="cta-estado" className={labelCls}>{t.state} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <select id="cta-estado" className={inputCls} {...register('estado')} aria-invalid={!!errors.estado}>
          <option value="">{t.selectOne}</option>
          {t.states.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        {errors.estado && <p role="alert" className={errCls}>{errors.estado.message}</p>}
      </F>
      <F i={5} on={revealed}>
        <label htmlFor="cta-caso" className={labelCls}>{t.case} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <select id="cta-caso" className={inputCls} {...register('caso')} aria-invalid={!!errors.caso}>
          <option value="">{t.selectOne}</option>
          {t.cases.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        {errors.caso && <p role="alert" className={errCls}>{errors.caso.message}</p>}
      </F>
      <F i={6} on={revealed}>
        <label htmlFor="cta-situacion" className={labelCls}>{t.status} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <select id="cta-situacion" className={inputCls} {...register('situacion')} aria-invalid={!!errors.situacion}>
          <option value="">{t.selectOne}</option>
          {t.statusOpts.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
        {errors.situacion && <p role="alert" className={errCls}>{errors.situacion.message}</p>}
      </F>
      <F i={7} on={revealed}>
        <label htmlFor="cta-urgencia" className={labelCls}>{t.urgency} <span aria-hidden="true" className="text-alert-red">*</span></label>
        <select id="cta-urgencia" className={inputCls} {...register('urgencia')} aria-invalid={!!errors.urgencia}>
          <option value="">{t.selectOne}</option>
          {t.urgencyOpts.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
        {errors.urgencia && <p role="alert" className={errCls}>{errors.urgencia.message}</p>}
      </F>
      {urgencia === t.urgencyOpts[2] && (
        <div className="md:col-span-2 bg-sky-mist border-l-4 border-authority-blue rounded-[4px] px-4 py-3">
          <p className="font-body text-[14px] font-semibold text-authority-blue">{t.urgencyHelp} <a href="tel:+19195550100" className="underline underline-offset-4">(888) 574-1286</a></p>
        </div>
      )}
      <F i={8} on={revealed}>
        <span id="cta-contacto-label" className={labelCls}>{t.contactPref}</span>
        <div role="radiogroup" aria-labelledby="cta-contacto-label" className="flex flex-wrap gap-2 min-h-[52px] items-center">
          {t.contactOpts.map((v) => (
            <label key={v} className={radioCard}>
              <input type="radio" value={v} {...register('contacto')} className="w-5 h-5 accent-[#2a4a82]" />{v}
            </label>
          ))}
        </div>
      </F>
      <F i={9} on={revealed}>
        <span id="cta-idioma-label" className={labelCls}>{t.language}</span>
        <div role="radiogroup" aria-labelledby="cta-idioma-label" className="flex flex-wrap gap-2 min-h-[52px] items-center">
          {t.langOpts.map((v) => (
            <label key={v} className={radioCard}>
              <input type="radio" value={v} {...register('idioma')} className="w-5 h-5 accent-[#2a4a82]" />{v}
            </label>
          ))}
        </div>
      </F>
      <F i={10} on={revealed} wide>
        <label htmlFor="cta-mensaje" className={labelCls}>{t.message}</label>
        <textarea id="cta-mensaje" rows={4} placeholder={t.messagePh} className="w-full min-h-[120px] p-4 bg-paper border border-steel rounded-[4px] font-body text-[16px]" {...register('mensaje')} />
      </F>
      <F i={11} on={revealed} wide>
        <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
          <input type="checkbox" {...register('consent')} className="w-5 h-5 mt-1 accent-[#2a4a82]" aria-describedby="err-consent" />
          <span className="font-body text-[13px] text-quiet-slate">{t.consentA}<a href={lang === 'es' ? '/privacidad' : '/en/privacy'} className="underline underline-offset-4">{t.privacy}</a>{t.consentB} <span aria-hidden="true" className="text-alert-red">*</span></span>
        </label>
        {errors.consent && <p id="err-consent" role="alert" className={errCls}>{errors.consent.message}</p>}
      </F>
      <F i={12} on={revealed} wide>
        <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
          {isSubmitting ? t.sending : t.submit}
        </button>
        <p className="font-body text-[13px] text-quiet-slate mt-3 text-center">{t.noRelation}</p>
      </F>
    </form>
  );
}
