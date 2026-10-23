"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { business } from "@/data/business";

export type ContactItem = { icon: string; title: string; href?: string; text: string };

type FormData = Record<"form_name" | "form_email" | "form_subject" | "form_phone" | "form_message" | "form_botcheck", string>;

const EMPTY: FormData = {
  form_name: "",
  form_email: "",
  form_subject: "",
  form_phone: "",
  form_message: "",
  form_botcheck: "",
};

const FIELDS: {
  name: keyof FormData;
  type: string;
  label: string;
  required: boolean;
  autoComplete?: string;
  placeholder: string;
}[] = [
  { name: "form_name", type: "text", label: "Name", required: true, autoComplete: "name", placeholder: "Your name" },
  { name: "form_email", type: "email", label: "Email", required: true, autoComplete: "email", placeholder: "you@example.com" },
  { name: "form_subject", type: "text", label: "Subject", required: true, placeholder: "What is this about?" },
  { name: "form_phone", type: "tel", label: "Phone / WhatsApp", required: false, autoComplete: "tel", placeholder: "+62 …" },
];

/** The message the live site pre-fills in WhatsApp from the form. */
function whatsappMessage(f: FormData) {
  const subject = f.form_subject.trim();
  const lines = [subject ? `Hi Spa Bali Moon, I'd like to ask about ${subject}.` : "Hi Spa Bali Moon, I would like to make an enquiry."];
  const message = f.form_message.trim();
  if (message) lines.push("", message);
  const who = [
    f.form_name.trim() && `Name: ${f.form_name.trim()}`,
    f.form_email.trim() && `Email: ${f.form_email.trim()}`,
    f.form_phone.trim() && `Phone: ${f.form_phone.trim()}`,
  ].filter(Boolean) as string[];
  if (who.length) lines.push("", ...who);
  return lines.join("\n");
}

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3276299088775!2d115.15814147462666!3d-8.678060388355467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2471415de2293%3A0xe1802d70253e801f!2sSpa%20Bali%20Moon!5e1!3m2!1sen!2sid!4v1778467217568!5m2!1sen!2sid";
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Spa Bali Moon, Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan, Kuta Utara, Badung, Bali 80361");

/**
 * Contact page body — the live "contact-details--rail" form beside the
 * contact details, the map card, and the WhatsApp prompt. As on the live site
 * the form sends nothing itself: submitting opens a prompt that continues on
 * WhatsApp with the message pre-filled.
 */
export default function ContactSection({
  formSubTitle,
  formTitle,
  infoSubTitle,
  infoTitle,
  infoText,
  contactItems,
}: {
  formSubTitle: string;
  formTitle: string;
  infoSubTitle: string;
  infoTitle: string;
  infoText: string;
  contactItems: ContactItem[];
}) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [prompt, setPrompt] = useState(false);
  const message = whatsappMessage(form).trim();
  const href = message ? `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}` : `https://wa.me/${business.whatsappNumber}`;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <>
      <link rel="preconnect" href="https://challenges.cloudflare.com" />
      <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
      <section className="contact-details contact-details--rail pt-100 pb-100">
        <div className="jsx-contact container cf-tail">
          <div className="jsx-contact cf-rail">
            <aside className="jsx-contact cf-rail__info">
              <img src="/images/logo/sbm.webp" alt="" aria-hidden="true" className="jsx-contact cf-rail__mark" />
              <span className="jsx-contact cf-rail__eyebrow">{infoSubTitle}</span>
              <h2 className="jsx-contact cf-rail__title">{infoTitle}</h2>
              <p className="jsx-contact cf-rail__text">{infoText}</p>
              <ul className="jsx-contact cf-rail__list">
                {contactItems.map((item) => (
                  <li key={item.title} className="jsx-contact">
                    <span aria-hidden="true" className="jsx-contact cf-rail__icon">
                      <i className={`jsx-contact fa-classic fa-light ${item.icon} fa-fw`} />
                    </span>
                    <div className="jsx-contact">
                      <h3 className="jsx-contact">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="jsx-contact">
                          {item.text}
                        </a>
                      ) : (
                        <span className="jsx-contact">{item.text}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="jsx-contact cf-rail__form">
              <span className="jsx-contact cf-rail__eyebrow cf-rail__eyebrow--dark">{formSubTitle}</span>
              <h2 className="jsx-contact cf-rail__formtitle">{formTitle}</h2>
              <form
                id="contact_form"
                name="contact_form"
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setPrompt(true);
                }}
                onReset={() => setForm(EMPTY)}
                className="jsx-contact"
              >
                <div className="jsx-contact cf-grid">
                  {FIELDS.map((f) => (
                    <div key={f.name} className="jsx-contact cf-field">
                      <label htmlFor={`rail-${f.name}`} className="jsx-contact">
                        {f.label}
                        {f.required ? (
                          <span aria-hidden="true" className="jsx-contact">
                            {" *"}
                          </span>
                        ) : null}
                      </label>
                      <input
                        id={`rail-${f.name}`}
                        name={f.name}
                        type={f.type}
                        value={form[f.name]}
                        onChange={onChange}
                        required={f.required}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        className="jsx-contact"
                      />
                    </div>
                  ))}
                </div>
                <div className="jsx-contact cf-field cf-field--area">
                  <label htmlFor="rail-form_message" className="jsx-contact">
                    Message
                    <span aria-hidden="true" className="jsx-contact">
                      {" *"}
                    </span>
                  </label>
                  <textarea
                    id="rail-form_message"
                    name="form_message"
                    rows={5}
                    value={form.form_message}
                    onChange={onChange}
                    required
                    placeholder="Tell us what you need and when you would like to come in."
                    className="jsx-contact"
                  />
                </div>
                <input name="form_botcheck" type="hidden" value={form.form_botcheck} onChange={onChange} className="jsx-contact" />
                <div className="jsx-contact cf-actions">
                  <button type="submit" className="jsx-contact btn-one">
                    <span className="jsx-contact btn-title">Send message</span>
                  </button>
                  <button type="reset" className="jsx-contact cf-reset">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="jsx-contact-form map-section map-section--contact section__decoration-top section__decoration-bottom pt-130 pb-130">
        <div className="jsx-contact-form container">
          <div className="jsx-contact-form cf-map">
            <div className="jsx-contact-form cf-map__frame">
              <iframe
                src={MAP_EMBED}
                height="450"
                style={{ border: 0 }}
                title="Map showing Spa Bali Moon in Seminyak, Bali"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="jsx-contact-form map w-100"
              />
            </div>
            <div className="jsx-contact-form cf-map__card">
              <span className="jsx-contact-form cf-map__eyebrow">Find Us</span>
              <h3 className="jsx-contact-form cf-map__name">
                <img src="/images/logo/sbm.webp" alt="" aria-hidden="true" className="jsx-contact-form cf-map__mark" />
                Spa Bali Moon
              </h3>
              <p className="jsx-contact-form cf-map__addr">
                Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan, Kuta Utara, Badung, Bali 80361
              </p>
              <p className="jsx-contact-form cf-map__hours">Open daily · 9am–11pm</p>
              <a href={DIRECTIONS} target="_blank" rel="noreferrer" className="jsx-contact-form cf-map__btn">
                Get Directions
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="jsx-contact-form">
                  <path
                    d="M13.8 5.2h5v5M19 5.4 11.6 12.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="jsx-contact-form"
                  />
                  <path
                    d="M18 14.4v3.4a1.9 1.9 0 0 1-1.9 1.9H6.4a1.9 1.9 0 0 1-1.9-1.9V8.1a1.9 1.9 0 0 1 1.9-1.9h3.4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="jsx-contact-form"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppPrompt open={prompt} onClose={() => setPrompt(false)} href={href} />
    </>
  );
}

/** "We reply on WhatsApp" dialog: focus trapped, Escape closes, page scroll locked. */
function WhatsAppPrompt({ open, onClose, href }: { open: boolean; onClose: () => void; href: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const returnTo = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;
    returnTo.current = document.activeElement;
    buttonRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = cardRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!items?.length) return;
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
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      (returnTo.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div role="presentation" onClick={onClose} className="jsx-wa-prompt wa-prompt">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-prompt-title"
        aria-describedby="wa-prompt-text"
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className="jsx-wa-prompt wa-prompt__card"
      >
        <button type="button" onClick={onClose} aria-label="Close" className="jsx-wa-prompt wa-prompt__close">
          <i aria-hidden="true" className="jsx-wa-prompt fa-solid fa-xmark" />
        </button>
        <span aria-hidden="true" className="jsx-wa-prompt wa-prompt__mark">
          <i className="jsx-wa-prompt fa-brands fa-whatsapp" />
        </span>
        <h3 id="wa-prompt-title" className="jsx-wa-prompt wa-prompt__title">
          We reply on WhatsApp
        </h3>
        <p id="wa-prompt-text" className="jsx-wa-prompt wa-prompt__text">
          For now all bookings and enquiries go through WhatsApp — it is the quickest way to reach our therapists. Your
          message is ready to send, just tap below.
        </p>
        <a href={href} target="_blank" rel="noopener noreferrer" ref={buttonRef} onClick={onClose} className="jsx-wa-prompt wa-prompt__btn">
          <i aria-hidden="true" className="jsx-wa-prompt fa-brands fa-whatsapp" />
          Continue on WhatsApp
        </a>
        <button type="button" onClick={onClose} className="jsx-wa-prompt wa-prompt__cancel">
          Not now
        </button>
      </div>
    </div>
  );
}
