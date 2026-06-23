import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const BITE_GUIDE = [
  { name: "Mosquito Bite", emoji: "🦟", severity: "Low", look: "Small round red bump, dark dot at center, itchy welt", treat: "Cold compress, antihistamine cream, hydrocortisone lotion", diseases: ["Malaria", "Dengue", "Zika", "West Nile Virus"], color: "#0e7490" },
  { name: "Bee / Wasp Sting", emoji: "🐝", severity: "Medium", look: "Red swollen area with white center, stinger may be visible", treat: "Remove stinger, ice pack, antihistamine, monitor for allergy", diseases: ["Anaphylaxis (if allergic)"], color: "#b45309" },
  { name: "Spider Bite", emoji: "🕷️", severity: "High", look: "Two small puncture marks, redness, possible blistering or necrosis", treat: "Clean wound, ice, seek immediate medical care for venomous species", diseases: ["Necrosis (Brown Recluse)", "Severe pain (Black Widow)"], color: "#7f1d1d" },
  { name: "Tick Bite", emoji: "🦠", severity: "High", look: "Small red mark or bull's-eye rash, tick may still be attached", treat: "Remove tick with fine-tip tweezers, clean area, see doctor for testing", diseases: ["Lyme Disease", "Rocky Mountain Spotted Fever", "Ehrlichiosis"], color: "#166534" },
  { name: "Fire Ant Sting", emoji: "🐜", severity: "Medium", look: "Cluster of white pustules within 24 hours, intense burning itch", treat: "Do not burst blisters, antihistamine, cold compress, see doctor if severe", diseases: ["Anaphylaxis (rare)"], color: "#dc2626" },
  { name: "Bed Bug Bite", emoji: "🛏️", severity: "Low", look: "Small red welts in a straight line or cluster on exposed skin", treat: "Soap and water, antihistamine cream, treat home infestation", diseases: ["No diseases transmitted"], color: "#6b21a8" },
  { name: "Flea Bite", emoji: "🐾", severity: "Low", look: "Tiny red spots in groups of 3, often around ankles and feet", treat: "Antihistamine, calamine lotion, treat pets and home for fleas", diseases: ["Typhus", "Plague (very rare)"], color: "#9a3412" },
  { name: "Hornet Sting", emoji: "⚡", severity: "High", look: "Raised red welt, large swelling, immediate sharp burning pain", treat: "Ice pack, antihistamine, emergency care if allergic reaction occurs", diseases: ["Anaphylaxis (if allergic)"], color: "#a16207" },
];

const SEV_STYLE = {
  Low: { bg: "#dcfce7", color: "#15803d" },
  Medium: { bg: "#fef3c7", color: "#d97706" },
  High: { bg: "#fee2e2", color: "#dc2626" },
};

const FAQS = [
  { q: "How do I identify what bit me?", a: "Upload a clear, close-up photo of the bite area to our tool above. The AI analyzes the pattern, shape, size, color, and surrounding skin reaction to identify the most likely cause. Good lighting and a sharp, close-up photo give the best results." },
  { q: "Is the bite identifier medically accurate?", a: "Our tool is designed for educational purposes to help you understand what may have bitten you. It is not a substitute for professional medical advice. Always consult a doctor for severe reactions, spreading redness, fever, or any serious symptoms." },
  { q: "When should I go to the emergency room?", a: "Go immediately if you experience: difficulty breathing, swelling of the throat or tongue, rapid heartbeat, severe dizziness, loss of consciousness, or a widespread rash after a sting. These are signs of anaphylaxis — a life-threatening emergency." },
  { q: "What if the tick is still attached?", a: "Use fine-tip tweezers to grasp the tick as close to the skin surface as possible. Pull upward with steady, even pressure. Do not twist or jerk. Clean the bite area with rubbing alcohol or soap and water. See a doctor within 24-48 hours for testing." },
  { q: "How do I tell a spider bite from a mosquito bite?", a: "Spider bites typically show two small puncture marks and may have a blister or darkening center within 24-48 hours. Mosquito bites appear as a single raised, round bump with intense itching. Our AI can help distinguish between bite types from photos." },
];

export default function BiteIdentifier() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Insect Bite Identifier – Identify Bug Bites & Stings Free | BugIdentifier</title>
        <meta name="description" content="Identify insect bites and stings from photos. Get symptoms, first aid treatment, disease risks, danger level, and when to see a doctor. Free AI bite identification tool — no signup needed." />
        <meta name="keywords" content="insect bite identifier, bug bite identification, what bit me, mosquito bite identifier, spider bite, tick bite identifier, bee sting identifier, identify bite by photo" />
        <meta property="og:title" content="Insect Bite Identifier – Free AI Tool | BugIdentifier" />
        <meta property="og:description" content="Identify insect bites and stings from photos. Get symptoms, first aid, and danger level instantly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bugidentifier.ai/insect-bite-identifier" />
      </Head>
      <Nav active="bite" />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insect Bite Identifier" }]} />

      {/* HERO */}
      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/lll.jpg" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(26,5,5,.95) 0%,rgba(59,10,10,.88) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-red">🩺 AI Bite Analysis • Educational Only</div>
          <h1>Insect <span style={{ color: "#f87171" }}>Bite Identifier</span></h1>
          <p className="sub">Upload a photo of a bite or sting for instant AI identification — including symptoms, first aid steps, disease risks, and exactly when to seek medical help.</p>
          <div className="info-box info-red" style={{ maxWidth: 520, marginBottom: "1.5rem", textAlign: "left" }}>
            ⚠️ <strong>Medical Disclaimer:</strong> This tool is for educational purposes only. Always seek professional medical advice for serious symptoms. Call emergency services for severe reactions.
          </div>
          <UploadTool apiRoute="/api/bite-identify" accentColor="#ef4444" dropLabel="Drop a photo of the bite area here" btnLabel="🩺 Identify This Bite" />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[["8", "Bite Types Covered"], ["Free", "No Cost Ever"], ["AI", "Powered Analysis"], ["⚠️", "See Doctor for Severe Cases"]].map(([n, l]) => (
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      {/* BITE GUIDE */}
      <section className="section sec-white">
        <div className="container">
          <div className="sec-head">
            <h2>Common Insect Bites & Stings Guide</h2>
            <p>Know what bit you, the risk level, symptoms, and exactly what to do</p>
          </div>
          <div className="grid-2" style={{ gap: "1.1rem" }}>
            {BITE_GUIDE.map(b => (
              <div className="card" key={b.name}>
                <div style={{ background: b.color, padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                    <span style={{ fontSize: "1.6rem" }}>{b.emoji}</span>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, color: "#fff", fontSize: ".95rem" }}>{b.name}</div>
                  </div>
                  <span style={{ padding: "2px 9px", borderRadius: "100px", fontSize: ".72rem", fontWeight: 700, background: SEV_STYLE[b.severity].bg, color: SEV_STYLE[b.severity].color }}>{b.severity} Risk</span>
                </div>
                <div className="card-body">
                  <div style={{ marginBottom: ".75rem" }}>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", color: "#94a3b8", marginBottom: "3px" }}>Appearance</div>
                    <div style={{ fontSize: ".85rem", color: "#475569", lineHeight: 1.6 }}>{b.look}</div>
                  </div>
                  <div style={{ marginBottom: ".75rem" }}>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", color: "#94a3b8", marginBottom: "3px" }}>Treatment</div>
                    <div style={{ fontSize: ".85rem", color: "#475569", lineHeight: 1.6 }}>{b.treat}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", color: "#dc2626", marginBottom: "4px" }}>Disease Risks</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {b.diseases.map(d => <span key={d} style={{ background: "#fee2e2", color: "#dc2626", padding: "2px 8px", borderRadius: "100px", fontSize: ".72rem", fontWeight: 600 }}>{d}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section sec-cream">
        <div className="container prose">
          <h2>How to Identify Insect Bites and Stings</h2>
          <p>Identifying the source of a bite or sting quickly is essential — different insects require completely different treatment approaches. Most bites from <Link href="/mosquito-identifier">mosquitoes</Link>, <Link href="/ant-identifier">ants</Link>, and fleas are harmless and resolve within days. However, bites from <Link href="/spider-identifier">spiders</Link>, <Link href="/tick-identifier">ticks</Link>, and stings from bees or wasps may require prompt medical attention, especially in individuals who are allergic.</p>
          <img src="/asss.jpg" alt="Insect bite identification guide" className="prose-img" />
          <p>Key visual indicators our AI looks for include: the number and pattern of marks (single vs. clusters or rows), the shape and color of the welt, whether a stinger or tick remains embedded, and the appearance of the surrounding skin reaction. The more clearly you can photograph these features, the more accurate the identification will be.</p>
          <h2>When Is an Insect Bite a Medical Emergency?</h2>
          <p>Call emergency services immediately if you or someone nearby experiences difficulty breathing or swallowing, swelling of the face, lips, throat, or tongue, a rapid or irregular heartbeat, severe dizziness or fainting, a widespread rash or hives across the body, or loss of consciousness after a sting or bite. These symptoms indicate anaphylaxis — a potentially fatal allergic reaction that requires immediate epinephrine (EpiPen) treatment and emergency medical care.</p>
          <h2>Tick Bites and Lyme Disease — What to Know</h2>
          <p>For <Link href="/tick-identifier">tick bites</Link>, watch carefully for a bull's-eye rash (erythema migrans) in the days following the bite — this circular red rash expanding outward from the bite site is a hallmark sign of Lyme disease that requires immediate antibiotic treatment. Early-stage Lyme disease is highly treatable, but if left untreated it can cause serious joint, heart, and neurological complications. See a doctor within 48 hours of any tick bite for proper evaluation and testing.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sec-white">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Common questions about our Insect Bite Identifier</p></div>
          {FAQS.map((f, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? "▲" : "▼"}</span></div>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/insect-bite-identifier" />
      <Footer />
    </>
  );
}
