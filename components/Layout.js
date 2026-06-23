import Link from "next/link";
import { useState } from "react";

export function Nav({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
       <Link href="/" className="nav-logo">
  <img
    src="/favicon2.png"
    alt="Bug Identifier"
    width="32"
    height="32"
  />
  Bug<span className="ac">Identifier</span>
</Link>
        <ul className="nav-links">
          <li><Link href="/" className={active === "/" ? "on" : ""}>Home</Link></li>
          <li><Link href="/insect-bite-identifier" className={active === "bite" ? "on" : ""}>Insect Bite</Link></li>
          <li><Link href="/spider-identifier" className={active === "spider" ? "on" : ""}>Spider</Link></li>
          <li><Link href="/butterfly-identifier" className={active === "butterfly" ? "on" : ""}>Butterfly</Link></li>
          <li><Link href="/mosquito-identifier" className={active === "mosquito" ? "on" : ""}>Mosquito</Link></li>
          <li><Link href="/about" className={active === "about" ? "on" : ""}>About</Link></li>
          <li><Link href="/contact" className={active === "contact" ? "on" : ""}>Contact</Link></li>
          <li><Link href="/" className="nav-cta">🔍 Identify Now</Link></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mob-menu${open ? " open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>🏠 Home</Link>
        <Link href="/insect-bite-identifier" onClick={() => setOpen(false)}>🩺 Bite Identifier</Link>
        <Link href="/spider-identifier" onClick={() => setOpen(false)}>🕷️ Spider Identifier</Link>
        <Link href="/beetle-identifier" onClick={() => setOpen(false)}>🪲 Beetle Identifier</Link>
        <Link href="/fly-identifier" onClick={() => setOpen(false)}>🪰 Fly Identifier</Link>
        <Link href="/ant-identifier" onClick={() => setOpen(false)}>🐜 Ant Identifier</Link>
        <Link href="/bee-identifier" onClick={() => setOpen(false)}>🐝 Bee Identifier</Link>
        <Link href="/wasp-identifier" onClick={() => setOpen(false)}>🟡 Wasp Identifier</Link>
        <Link href="/caterpillar-identifier" onClick={() => setOpen(false)}>🐛 Caterpillar Identifier</Link>
        <Link href="/butterfly-identifier" onClick={() => setOpen(false)}>🦋 Butterfly Identifier</Link>
        <Link href="/moth-identifier" onClick={() => setOpen(false)}>🌙 Moth Identifier</Link>
        <Link href="/mosquito-identifier" onClick={() => setOpen(false)}>🦟 Mosquito Identifier</Link>
        <Link href="/tick-identifier" onClick={() => setOpen(false)}>🕷️ Tick Identifier</Link>
        <Link href="/about" onClick={() => setOpen(false)}>ℹ️ About Us</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>📧 Contact</Link>
        <Link href="/privacy-policy" onClick={() => setOpen(false)}>🔒 Privacy Policy</Link>
        <Link href="/disclaimer" onClick={() => setOpen(false)}>⚠️ Disclaimer</Link>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" style={{ color: "#fff", fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.25rem" }}>🐛 Bug<span style={{ color: "#22c55e" }}>Identifier</span></Link>
          <p>Free AI-powered insect identification. Identify any bug, spider, beetle, butterfly, or insect bite instantly from a photo. Covering 1M+ species worldwide.</p>
        </div>
        <div className="footer-col">
          <h4>Identifier Tools</h4>
          <Link href="/insect-bite-identifier">Bite Identifier</Link>
          <Link href="/spider-identifier">Spider Identifier</Link>
          <Link href="/beetle-identifier">Beetle Identifier</Link>
          <Link href="/fly-identifier">Fly Identifier</Link>
          <Link href="/ant-identifier">Ant Identifier</Link>
          <Link href="/bee-identifier">Bee Identifier</Link>
        </div>
        <div className="footer-col">
          <h4>More Tools</h4>
          <Link href="/wasp-identifier">Wasp Identifier</Link>
          <Link href="/caterpillar-identifier">Caterpillar Identifier</Link>
          <Link href="/butterfly-identifier">Butterfly Identifier</Link>
          <Link href="/moth-identifier">Moth Identifier</Link>
          <Link href="/mosquito-identifier">Mosquito Identifier</Link>
          <Link href="/tick-identifier">Tick Identifier</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 BugIdentifier.ai — All rights reserved</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {i > 0 && <span>›</span>}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span style={{ color: "#1e293b" }}>{item.label}</span>}
        </span>
      ))}
    </div>
  );
}

export function RelatedTools({ current }) {
  const all = [
    { href: "/", label: "Bug Identifier", emoji: "🐛" },
    { href: "/insect-bite-identifier", label: "Bite Identifier", emoji: "🩺" },
    { href: "/spider-identifier", label: "Spider Identifier", emoji: "🕷️" },
    { href: "/beetle-identifier", label: "Beetle Identifier", emoji: "🪲" },
    { href: "/fly-identifier", label: "Fly Identifier", emoji: "🪰" },
    { href: "/ant-identifier", label: "Ant Identifier", emoji: "🐜" },
    { href: "/bee-identifier", label: "Bee Identifier", emoji: "🐝" },
    { href: "/wasp-identifier", label: "Wasp Identifier", emoji: "🟡" },
    { href: "/caterpillar-identifier", label: "Caterpillar Identifier", emoji: "🐛" },
    { href: "/butterfly-identifier", label: "Butterfly Identifier", emoji: "🦋" },
    { href: "/moth-identifier", label: "Moth Identifier", emoji: "🌙" },
    { href: "/mosquito-identifier", label: "Mosquito Identifier", emoji: "🦟" },
    { href: "/tick-identifier", label: "Tick Identifier", emoji: "🕷️" },
  ].filter(t => t.href !== current);
  return (
    <section className="section sec-cream">
      <div className="container">
        <div className="sec-head"><h2>Explore More Free Tools</h2><p>Our complete suite of AI-powered insect identification tools</p></div>
        <div className="related-grid">
          {all.map(t => (
            <Link key={t.href} href={t.href} className="rel-card">
              <div className="r-ico">{t.emoji}</div>
              <h4>{t.label}</h4>
              <p>Free AI Tool</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
