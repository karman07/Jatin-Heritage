"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    title: "Framing",
    desc: "Structural framing built to code, from foundation to roofline.",
    icon: "M3 21V9l9-6 9 6v12M3 21h18M9 21V12h6v9",
  },
  {
    title: "Drywall",
    desc: "Clean drywall installs and taping, finished smooth and ready for paint.",
    icon: "M4 4h16v16H4z M4 10h16M10 4v16",
  },
  {
    title: "Paint",
    desc: "Interior and exterior painting with an even, lasting finish.",
    icon: "M18 3l3 3-9 9-4 1 1-4 9-9z M4 21h6",
  },
  {
    title: "Tiles",
    desc: "Precision tile work for kitchens, bathrooms, and floors.",
    icon: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z",
  },
  {
    title: "Floors",
    desc: "Hardwood, laminate, and vinyl flooring installed right the first time.",
    icon: "M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6",
  },
  {
    title: "Bathroom Remodelling",
    desc: "Full bathroom renovations, from layout redesign to final fixture.",
    icon: "M4 12h16M6 12V6a2 2 0 012-2h1M4 12l1 8h14l1-8",
  },
  {
    title: "Basement Renovation",
    desc: "Turn unfinished space into livable, code-ready square footage.",
    icon: "M3 21V11l9-7 9 7v10H3z M9 21v-6h6v6",
  },
  {
    title: "Deck",
    desc: "Custom decks designed and built to handle every Ontario season.",
    icon: "M3 9h18M3 15h18M6 9v10M12 9v10M18 9v10",
  },
  {
    title: "Fence",
    desc: "Durable fencing for privacy, security, and curb appeal.",
    icon: "M4 21V5M4 5l4 3-4 3M12 21V5M12 5l4 3-4 3M20 21V5M20 5l0 0",
  },
  {
    title: "And More",
    desc: "Additions, repairs, and custom projects — just ask.",
    icon: "M3 18h18M5 18l2-8h10l2 8M9 10V6a3 3 0 016 0v4",
  },
];

const whyItems = [
  {
    title: "Licensed & Insured",
    desc: "Every project covered, every crew member qualified for the job.",
    icon: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
  },
  {
    title: "Clear, Upfront Pricing",
    desc: "A detailed quote before work starts — no surprise costs later.",
    icon: "M9 14l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "On-Schedule Delivery",
    desc: "We plan the job properly up front, then hold the timeline.",
    icon: "M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Craftsmanship That Lasts",
    desc: "Built the right way, not the fast way — finished to a standard.",
    icon: "M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z",
  },
];

const galleryItems = [
  { src: "/images/deck-3.jpg", tag: "Deck Build", tall: true },
  { src: "/images/fence-1.jpg", tag: "Fence Install", tall: false },
  { src: "/images/deck-1.jpg", tag: "Full Privacy Fence", tall: false },
  { src: "/images/fence-2.jpg", tag: "Composite Deck", tall: true },
  { src: "/images/deck-2.jpg", tag: "Wooden Deck & Railing", tall: false },
];

const CONTACT_EMAIL = "heritageconstrution1@gmail.com";
const INSTAGRAM_HANDLE = "@heritage.constrution";
const INSTAGRAM_URL = "https://instagram.com/heritage.constrution";

function BusinessLinks({ email, instaHandle, instaUrl }: { email: string; instaHandle: string; instaUrl: string }) {
  return (
    <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div className="contact-links">
        <a href={`mailto:${email}`}>
          <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M4 6l8 7 8-7" /></svg>
          {email}
        </a>
        <a href={instaUrl} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
          {instaHandle}
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  function handleQuoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value ?? "";
    const phone = phoneRef.current?.value ?? "";
    const type = typeRef.current?.value ?? "";
    const msg = msgRef.current?.value ?? "";
    const subject = encodeURIComponent(`Quote Request: ${type} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nProject Type: ${type}\n\nDetails:\n${msg}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const navLinks = (
    <>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#gallery">Our Work</a>
      <a href="#why">Why Us</a>
      <a href="#contact">Contact</a>
    </>
  );

  return (
    <>
      <header>
        <nav>
          <a href="#top" className="brand">
            <svg className="brand-mark" viewBox="0 0 40 40" fill="none">
              <path d="M4 24 L14 15 L20 20 L28 11 L36 24" stroke="#c9a227" strokeWidth="2.2" strokeLinejoin="round" />
              <rect x="16.5" y="20.5" width="7" height="6" fill="#c9a227" />
            </svg>
            <span className="brand-word">Heritage<small>Construction</small></span>
          </a>
          <div className="nav-links">{navLinks}</div>
          <div className="nav-cta">
            <a className="nav-call" href="tel:+12265598274">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" /></svg>
              Call Now
            </a>
            <a href="#contact" className="btn btn-gold" style={{ padding: "10px 20px", fontSize: 13 }}>Get a Quote</a>
          </div>
          <button className="burger" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </nav>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)}>
          {navLinks}
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="grid-dots"></div>
          <div className="hero-inner">
            <div className="hero-tag">Heritage Construction</div>
            <h1>Built on trust.<br /><em>Crafted</em> to last.</h1>
            <p className="sub">Full-service construction and renovation — from framing to finishing — handled by a crew that treats your project like it&apos;s their own.</p>
            <div className="hero-location">
              <svg viewBox="0 0 24 24"><path d="M12 21s-7-6.1-7-11a7 7 0 0114 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              Proudly serving London, Ontario &amp; the surrounding areas, Canada
            </div>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-gold">Get a Free Quote</a>
              <a href="tel:+12265598274" className="btn btn-outline">Call (226) 559-8274</a>
            </div>
          </div>

          <div className="hero-logo-wrap">
            <Image src="/images/logo.jpg" alt="Heritage Construction" width={1600} height={730} priority />
          </div>

          <svg className="roofline-divider" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 L0,40 L200,10 L400,40 L600,15 L800,40 L1000,10 L1200,40 L1200,60 Z" fill="#f6f3ec" />
          </svg>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">All Kind of Construction</div>
              <h2>We build. We renovate. We transform.</h2>
            </div>
            <div className="services-grid">
              <div>
                {services.slice(0, 5).map((s) => (
                  <div className="service-row" key={s.title}>
                    <div className="service-badge"><svg viewBox="0 0 24 24"><path d={s.icon} /></svg></div>
                    <div className="service-copy"><h3>{s.title}</h3><p>{s.desc}</p></div>
                  </div>
                ))}
              </div>
              <div>
                {services.slice(5).map((s) => (
                  <div className="service-row" key={s.title}>
                    <div className="service-badge"><svg viewBox="0 0 24 24"><path d={s.icon} /></svg></div>
                    <div className="service-copy"><h3>{s.title}</h3><p>{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="why dark" id="why">
          <div className="wrap">
            <div className="eyebrow">Why Heritage</div>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.6vw,40px)", fontWeight: 600, marginTop: 16, maxWidth: 560, lineHeight: 1.2 }}>A crew that treats your home like it matters</h2>
            <div className="why-grid">
              {whyItems.map((w) => (
                <div className="why-item" key={w.title}>
                  <svg viewBox="0 0 24 24"><path d={w.icon} /></svg>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="wrap about-grid">
            <div className="about-photo bracket">
              <Image src="/images/deck-1.jpg" alt="Heritage Construction deck and railing build" fill sizes="(max-width: 980px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              <div className="exp-badge">
                <span className="num">5+</span>
                <span className="label">Years of Experience</span>
              </div>
            </div>
            <div className="about-copy">
              <div className="eyebrow" style={{ color: "var(--gold-deep)" }}>About Heritage Construction</div>
              <h2>Work you&apos;d trust in your own home</h2>
              <p>Heritage Construction was built on a simple idea: every job — big or small — deserves the same craftsmanship, honesty, and straight answers you&apos;d want in your own house. With over 5 years of hands-on experience, we plan carefully, communicate clearly, and stand behind what we build.</p>
              <p>Based in Ontario, we proudly serve London and the surrounding communities. No shortcuts, no vague estimates, no disappearing after the deposit. Just construction that&apos;s built on trust and crafted to last.</p>
              <div className="about-quote">&quot;We build. We renovate. We transform.&quot;</div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery" id="gallery">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Our Work</div>
              <h2>Recent builds around London &amp; area</h2>
            </div>
            <div className="gallery-grid">
              {galleryItems.map((g) => (
                <div className={`gallery-item${g.tall ? " tall" : ""}`} key={g.src}>
                  <Image src={g.src} alt={g.tag} fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  <span className="tag">{g.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact dark" id="contact">
          <div className="grid-dots"></div>
          <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
            <div className="contact-top">
              <div className="eyebrow">Get In Touch</div>
              <h2>Let&apos;s build something.</h2>
              <p className="loc">Serving London, Ontario and the surrounding areas, Canada.</p>
            </div>
            <div className="contact-grid">

              <div className="contact-card bracket">
                <div className="role">Contact</div>
                <h3>Jatinder</h3>
                <div className="contact-links">
                  <a href="tel:+12265598274">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" /></svg>
                    +1 (226) 559-8274
                  </a>
                  <a href="https://wa.me/12265598274" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 21l2.1-5.5A8.5 8.5 0 1121 11.5z" /></svg>
                    WhatsApp
                  </a>
                </div>
                <BusinessLinks email={CONTACT_EMAIL} instaHandle={INSTAGRAM_HANDLE} instaUrl={INSTAGRAM_URL} />
              </div>

              <div className="contact-card bracket">
                <div className="role">Contact</div>
                <h3>Madhav Kaushal</h3>
                <div className="contact-links">
                  <a href="tel:+15488810713">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" /></svg>
                    +1 (548) 881-0713
                  </a>
                  <a href="https://wa.me/15488810713" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 21l2.1-5.5A8.5 8.5 0 1121 11.5z" /></svg>
                    WhatsApp
                  </a>
                </div>
                <BusinessLinks email={CONTACT_EMAIL} instaHandle={INSTAGRAM_HANDLE} instaUrl={INSTAGRAM_URL} />
              </div>

              <form className="quote-form" id="quoteForm" onSubmit={handleQuoteSubmit}>
                <h3>Request a Free Quote</h3>
                <p className="hint">Fill this out and it&apos;ll open a pre-filled email to send us.</p>
                <label htmlFor="qname">Name</label>
                <input type="text" id="qname" ref={nameRef} required />
                <label htmlFor="qphone">Phone</label>
                <input type="tel" id="qphone" ref={phoneRef} required />
                <label htmlFor="qtype">Project Type</label>
                <select id="qtype" ref={typeRef} defaultValue="Framing">
                  <option>Framing</option>
                  <option>Drywall</option>
                  <option>Paint</option>
                  <option>Tiles</option>
                  <option>Floors</option>
                  <option>Bathroom Remodelling</option>
                  <option>Basement Renovation</option>
                  <option>Deck</option>
                  <option>Fence</option>
                  <option>Other</option>
                </select>
                <label htmlFor="qmsg">Project Details</label>
                <textarea id="qmsg" ref={msgRef} placeholder="Tell us a bit about the project..."></textarea>
                <button type="submit" className="btn btn-gold">Send Request</button>
                <p className="form-note">Opens your email app addressed to {CONTACT_EMAIL}</p>
              </form>

            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <a href="#top" className="brand">
            <svg className="brand-mark" viewBox="0 0 40 40" fill="none">
              <path d="M4 24 L14 15 L20 20 L28 11 L36 24" stroke="#c9a227" strokeWidth="2.2" strokeLinejoin="round" />
              <rect x="16.5" y="20.5" width="7" height="6" fill="#c9a227" />
            </svg>
            <span className="brand-word">Heritage<small>Construction</small></span>
          </a>
          <div className="foot-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Our Work</a>
            <a href="#contact">Contact</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 20 }}>
          <p className="foot-copy">&copy; {new Date().getFullYear()} Heritage Construction. Serving London, Ontario &amp; area, Canada. Built on trust. Crafted to last.</p>
        </div>
      </footer>
    </>
  );
}
