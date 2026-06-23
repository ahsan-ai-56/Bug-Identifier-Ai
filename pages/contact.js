import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleSubmit(e) { e.preventDefault(); setSent(true); }

  return (
    <>
      <Head>
        <title>Contact Us – BugIdentifier AI</title>
        <meta name="description" content="Contact the BugIdentifier team. Send questions, feedback, identification errors, or partnership inquiries. We reply within 24 hours." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav active="contact" />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <section className="hero" style={{ minHeight: "45vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(15,23,42,.95) 0%,rgba(30,41,59,.90) 100%)" }} />
        <div className="hero-content">
          <h1>Contact <span style={{ color: "#22c55e" }}>Us</span></h1>
          <p className="sub">Questions, feedback, or found a wrong identification? We'd love to hear from you. We reply within 24 hours.</p>
        </div>
      </section>

      <section className="section sec-white">
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Get in Touch</h2>
              {[
                { icon: "📧", title: "Email Us", info: "hello@bugidentifier.ai", sub: "We reply within 24 hours" },
                { icon: "🐛", title: "Report an Error", info: "Identification wrong?", sub: "Help us improve our AI accuracy" },
                { icon: "🤝", title: "Partnerships", info: "Business & API inquiries", sub: "White-label & integration options" },
                { icon: "🎓", title: "Educational Use", info: "Schools & universities", sub: "Special educational partnerships" },
              ].map(c => (
                <div key={c.title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: 46, height: 46, background: "#f0fdf4", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".9rem", color: "#1e293b" }}>{c.title}</div>
                    <div style={{ fontSize: ".85rem", color: "#22c55e", fontWeight: 600 }}>{c.info}</div>
                    <div style={{ fontSize: ".78rem", color: "#94a3b8" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
              <div className="info-box info-amber">
                <strong>Quick Links:</strong><br />
                <Link href="/disclaimer">Disclaimer</Link> · <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/about">About Us</Link>
              </div>
            </div>

            <div style={{ background: "#f8fafc", borderRadius: 20, padding: "2rem", border: "1px solid #e2e8f0" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                  <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#1e293b", marginBottom: ".5rem" }}>Message Sent!</h3>
                  <p style={{ color: "#64748b", marginBottom: "1.25rem" }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Send a Message</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div className="form-group"><label>Your Name *</label><input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required /></div>
                    <div className="form-group"><label>Email Address *</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required /></div>
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a subject</option>
                      <option>General Question</option>
                      <option>Report Identification Error</option>
                      <option>Technical Issue</option>
                      <option>Partnership / API Access</option>
                      <option>Educational Use</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group"><label>Message *</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." required /></div>
                  <button type="submit" className="btn btn-primary btn-full">📧 Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
