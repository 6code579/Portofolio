import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle, Send } from 'lucide-react';
import { availability, contactInfo, socials } from '../data/content';
import PageHeader from '../components/PageHeader';
import { Reveal, Slide } from '../components/Reveal';
import Magnetic from '../components/Magnetic';

const field =
  'w-full border-b border-secondary/30 bg-transparent py-3 text-lg text-light outline-none transition-colors placeholder:text-light/45 focus:border-primary';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('https://formspree.io/f/xjkrldwl', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        lead="Me"
        accent="Contacter"
        subtitle="Vous avez un projet en tête ? Une question technique ? N'hésitez pas à me contacter, je serais ravi de discuter avec vous !"
      />

      <section className="container-x pb-24 md:pb-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Slide from="left" className="space-y-16 lg:col-span-5">
            <Reveal>
              <h2 className="eyebrow mb-6">Informations de Contact</h2>
              <ul>
                {contactInfo.map((c) => (
                  <li key={c.title} className="border-t hairline py-5">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-light/60">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block break-all text-xl text-light transition-colors hover:text-primary md:text-2xl">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-xl text-light md:text-2xl">{c.value}</p>
                    )}
                    <p className="mt-1 text-sm text-light/60">{c.description}</p>
                  </li>
                ))}
                <li className="border-t hairline" />
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="eyebrow mb-6">Réseaux Sociaux</h2>
              <ul>
                {socials.map((s) => (
                  <li key={s.name} className="border-t hairline">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <span>
                        <span className="block text-xl text-light transition-colors group-hover:text-primary md:text-2xl">{s.name}</span>
                        <span className="text-sm text-light/60">{s.description}</span>
                      </span>
                      <ArrowUpRight className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
                <li className="border-t hairline" />
              </ul>
            </Reveal>

            <Reveal>
              <div className="rounded-md border border-primary/40 bg-primary-deep/10 p-7">
                <h2 className="eyebrow mb-5">Disponibilité</h2>
                <ul className="space-y-3">
                  {availability.map((a) => (
                    <li key={a.label} className="text-light/80">
                      <span className="text-light">{a.label} :</span> {a.value}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Slide>

          <Slide from="right" className="lg:col-span-7">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-none tracking-tight">Envoyez-moi un message</h2>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="mt-8 flex items-center gap-3 rounded-md border border-primary/50 bg-primary-deep/15 p-4 text-sm text-light">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  Message envoyé avec succès ! Redirection en cours...
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="mt-8 flex items-center gap-3 rounded-md border border-secondary/40 p-4 text-sm text-light">
                  <AlertCircle className="h-5 w-5 shrink-0 text-light" />
                  Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email.
                </p>
              )}
            </div>

            <form action="https://formspree.io/f/xjkrldwl" method="POST" onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow block">Nom complet *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow block">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="eyebrow block">Sujet *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Objet de votre message" className={field} />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow block">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande en quelques mots..."
                  className={`${field} resize-none`}
                />
              </div>

              <Magnetic>
                <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg/30 border-t-bg" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </Magnetic>
              <p className="text-sm text-light/60">* Champs obligatoires. Je m'engage à répondre dans les 24h.</p>
            </form>
          </Reveal>
          </Slide>
        </div>
      </section>
    </>
  );
}
