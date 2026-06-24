import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const TOOLS = [
  { href: "/insect-bite-identifier", emoji: "🩺", title: "Insect Bite Identifier", desc: "Identify insect bites & stings from photos. Get symptoms, first aid, and danger level instantly.", color: "#7f1d1d", bg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80" },
  { href: "/spider-identifier", emoji: "🕷️", title: "Spider Identifier", desc: "Identify 48,000+ spider species. Know if it's venomous before getting close.", color: "#1e1b4b", bg: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80" },
  { href: "/beetle-identifier", emoji: "🪲", title: "Beetle Identifier", desc: "Identify from 400,000+ beetle species. Find if they harm plants, wood, or are beneficial.", color: "#14532d", bg: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400&q=80" },
  { href: "/fly-identifier", emoji: "🪰", title: "Fly Identifier", desc: "Identify flies, gnats, and midges. Know if the fly carries disease or is just a nuisance.", color: "#374151", bg: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400&q=80" },
  { href: "/ant-identifier", emoji: "🐜", title: "Ant Identifier", desc: "Identify ant species. Know if they bite, sting, farm crops or damage wooden structures.", color: "#7c2d12", bg: "https://images.unsplash.com/photo-1563459802257-2a97df940f11?w=400&q=80" },
  { href: "/bee-identifier", emoji: "🐝", title: "Bee Identifier", desc: "Identify bees, bumblebees, and honey bees. Understand sting risk and their vital role.", color: "#713f12", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { href: "/wasp-identifier", emoji: "🟡", title: "Wasp Identifier", desc: "Identify wasps, hornets, and yellow jackets. Assess aggression levels before nest removal.", color: "#854d0e", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { href: "/caterpillar-identifier", emoji: "🐛", title: "Caterpillar Identifier", desc: "Identify caterpillar species. Know which are toxic, rare, or beneficial to your garden.", color: "#365314", bg: "https://images.unsplash.com/photo-1550159930-40066082a4fc?w=400&q=80" },
  { href: "/butterfly-identifier", emoji: "🦋", title: "Butterfly Identifier", desc: "Identify butterfly species by wing patterns, colors, and markings with high accuracy.", color: "#581c87", bg: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=400&q=80" },
  { href: "/moth-identifier", emoji: "🌙", title: "Moth Identifier", desc: "Identify moth species including those that damage clothing, crops, or are rare specimens.", color: "#1e1b4b", bg: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80" },
  { href: "/mosquito-identifier", emoji: "🦟", title: "Mosquito Identifier", desc: "Identify mosquito species. Know which carry dengue, malaria, Zika, or West Nile virus.", color: "#4c1d95", bg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80" },
  { href: "/tick-identifier", emoji: "🕷️", title: "Tick Identifier", desc: "Identify tick species and assess Lyme disease and other tick-borne disease risks.", color: "#450a0a", bg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80" },
];

const INSECTS = [
  { emoji: "🐜", name: "Ants" }, { emoji: "🪲", name: "Beetles" }, { emoji: "🦋", name: "Butterflies" },
  { emoji: "🐛", name: "Caterpillars" }, { emoji: "🪳", name: "Cockroaches" }, { emoji: "🦗", name: "Crickets" },
  { emoji: "🐉", name: "Dragonflies" }, { emoji: "🪰", name: "Flies" }, { emoji: "🦗", name: "Grasshoppers" },
  { emoji: "🐞", name: "Ladybugs" }, { emoji: "🦟", name: "Mosquitoes" }, { emoji: "🌙", name: "Moths" },
  { emoji: "🕷️", name: "Spiders" }, { emoji: "🪵", name: "Termites" }, { emoji: "🟡", name: "Wasps" },
  { emoji: "🐝", name: "Bees" }, { emoji: "🦂", name: "Centipedes" }, { emoji: "🐛", name: "Millipedes" },
];

const FAQS = [
  { q: "How accurate is Bug Identifier AI?", a: "Our AI achieves 90–98% accuracy on clear, well-lit close-up photos. The system analyzes dozens of visual features simultaneously including color patterns, body structure, wing venation, antenna shape, and relative proportions to deliver highly accurate results." },
  { q: "Is Bug Identifier completely free?", a: "Yes, all 12 tools on BugIdentifier.ai are completely free forever. No signup required, no subscription fees, no hidden costs. Simply upload a photo and get instant, detailed results." },
  { q: "What image formats are supported?", a: "We support JPG, JPEG, PNG, and WEBP image formats up to 10MB. For best results, use close-up photos taken in natural daylight where the insect is clearly visible and in sharp focus." },
  { q: "Can it identify dangerous or venomous insects?", a: "Yes. Every identification includes a danger level rating from Harmless to Dangerous, along with specific safety information about venom, bites, stings, disease transmission, and when to seek medical attention." },
  { q: "Does it work for insect bites on skin?", a: "Yes! Use our dedicated Insect Bite Identifier tool to upload a photo of a bite or sting. It identifies the likely cause, provides detailed first aid steps, lists symptoms, and tells you exactly when to seek medical attention." },
  { q: "Does it identify spiders and arachnids?", a: "Yes. Our Spider Identifier tool covers 48,000+ spider species including dangerous ones like Black Widows, Brown Recluses, and Funnel-web spiders. Every result includes venom information and bite first aid." },
  { q: "How do I get the best identification results?", a: "Take a clear, focused close-up photo in good natural lighting. Make sure the insect fills most of the frame and is in sharp focus. Include the full body of the insect if possible. Avoid blurry, dark, or heavily edited images." },
  { q: "Can it help with pest control decisions?", a: "Yes. Our results include prevention and control tips specific to each species, helping you understand whether professional pest control is needed, whether the insect is actually beneficial, and how to safely manage it." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Bug Identifier – Identify Insects and Bugs by Picture Online</title>
        <meta name="description" content="Identify insects and bug bite instantly with our free Bug Identifier tool. Upload a picture to recognize spiders, beetles, caterpillars, and other bugs with AI-powered identification." />
        <meta name="keywords" content="bug identifier, insect identifier, free bug identification, spider identifier, beetle identifier, butterfly identifier, mosquito identifier, insect bite identifier, what bug is this, identify insect by photo, bug identification app" />
        <meta property="og:title" content="Bug Identifier – Free AI Insect Identification Tool" />
        <meta property="og:description" content="Identify any bug, insect or bite from a photo instantly. Free AI tool covering 1M+ species." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bug-identifier.org" />
    <meta name="google-site-verification" content="c-hBDZ6r9me_2eqdKkOdhTGHuQVNVq2RDrjZnD4P-W4" />
    </Head>
      <Nav active="/" />

      {/* HERO with background image */}
      <section className="hero" style={{ minHeight: "95vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url('butterfly.jpg')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg, rgba(10,46,26,.92) 0%, rgba(10,30,15,.85) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-green">🤖 AI-Powered • 100% Free • No Signup Required</div>
          <h1>Identify Any <span style={{ color: "#22c55e" }}>Bug or Insect</span><br />Instantly with AI</h1>
          <p className="sub">Upload a photo of any bug, insect, spider, or bite and our AI gives you the species name, danger level, habitat, diet, prevention tips and more — in under 5 seconds.</p>
          <UploadTool apiRoute="/api/identify" accentColor="#22c55e" dropLabel="Drop any insect or bug photo here" btnLabel="🔍 Identify This Bug Now" />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[["1M+", "Insect Species Covered"], ["12", "Free AI Tools"], ["98%", "Identification Accuracy"], ["<5s", "Average Result Time"], ["0", "Signup Required"]].map(([n, l]) => (
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      {/* ALL TOOLS */}
      <section className="section sec-white">
        <div className="container">
          <div className="sec-head">
            <h2>12 Free AI Identifier Tools</h2>
            <p>Specialized AI tools for every type of insect — from spiders to butterflies to insect bites</p>
          </div>
          <div className="grid-3" style={{ gap: "1.1rem" }}>
            {TOOLS.map(t => (
              <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
                <div className="tool-card" style={{ overflow: "hidden" }}>
                  <div className="tool-icon" style={{ background: t.color }}>
                    <span style={{ fontSize: "1.4rem" }}>{t.emoji}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontSize: ".95rem", fontWeight: 700, color: "#1e293b", marginBottom: ".3rem" }}>{t.title}</div>
                    <div style={{ color: "#64748b", fontSize: ".82rem", lineHeight: 1.55 }}>{t.desc}</div>
                    <div style={{ marginTop: ".5rem", color: "#22c55e", fontSize: ".82rem", fontWeight: 700 }}>Use Free Tool →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS with images */}
      <section className="section sec-cream">
        <div className="container">
          <div className="sec-head">
            <h2>How Does Bug Identification Work?</h2>
            <p>Our advanced AI image recognition analyzes your photo and compares it with thousands of insect species in seconds</p>
          </div>
          <div className="grid-3">
            {[
              { step: "Step 1", icon: "📸", title: "Upload a Clear Picture", desc: "Take a photo of the insect or upload an existing image from your device. JPG, PNG and WEBP formats supported up to 10MB. For best results, use a close-up in natural daylight.", img: "/alll.jpg" },
              { step: "Step 2", icon: "🤖", title: "AI Analyzes the Image", desc: "Our smart AI system examines the shape, colors, patterns, wing structure, antenna type, body segmentation, and dozens of other features of the insect simultaneously.", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80" },
              { step: "Step 3", icon: "📋", title: "Get Instant Results", desc: "Receive the insect name along with scientific classification, physical characteristics, habitat, diet, danger level, geographic range, fun facts, and prevention tips.", img: "/result.png" },
            ].map(s => (
              <div className="step-card" key={s.step}>
                <div className="step-num">{s.step.replace("Step ", "0")}</div>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10, marginBottom: "1rem" }} />
                <div style={{ fontSize: "1.6rem", marginBottom: ".4rem" }}>{s.icon}</div>
                <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: "#1e293b", marginBottom: ".4rem" }}>{s.title}</div>
                <div style={{ color: "#64748b", fontSize: ".875rem", lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* What you get in results */}
          <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", padding: "2rem", marginTop: "2rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#1e293b" }}>What You Get in Every Identification Result</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem" }}>
              {[
                ["🔬", "Scientific & Common Names", "Full species taxonomy"],
                ["📏", "Physical Characteristics", "Size, color, markings"],
                ["🌿", "Habitat & Distribution", "Where it lives globally"],
                ["🍽️", "Diet & Behavior", "What it eats and how"],
                ["⚠️", "Danger Level", "Harmless to Dangerous rating"],
                ["🛡️", "Prevention & Control", "How to manage safely"],
                ["💡", "Fun Facts", "Fascinating species facts"],
                ["🖨️", "Print-Ready Report", "Save or share your result"],
              ].map(([icon, title, sub]) => (
                <div key={title} style={{ display: "flex", gap: ".75rem", alignItems: "flex-start", padding: ".85rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <div style={{ fontSize: "1.25rem", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".85rem", color: "#1e293b" }}>{title}</div>
                    <div style={{ fontSize: ".75rem", color: "#64748b" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES with image */}
      <section className="section sec-white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#1e293b", letterSpacing: "-.02em", marginBottom: "1rem" }}>Features of Our Free Bug Identifier</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
                {[
                  ["🆓", "100% Free to Use", "No cost, no subscription, no hidden fees — ever."],
                  ["⚡", "Instant AI-Powered Identification", "Get full results in under 5 seconds."],
                  ["🌍", "Supports Thousands of Insect Species", "Coverage of 1M+ known species worldwide."],
                  ["📱", "Mobile and Desktop Friendly", "Works perfectly on any device or screen size."],
                  ["🚫", "No Registration Required", "Just upload a photo. No account needed."],
                  ["🎯", "Fast and Accurate Results", "98% accuracy on clear, well-lit photos."],
                  ["📸", "Easy Photo Upload", "Drag & drop or click to upload from any device."],
                  ["🛡️", "Danger Level Ratings", "Know instantly if an insect is safe or dangerous."],
                ].map(([icon, title, desc]) => (
                  <div key={title} style={{ display: "flex", gap: ".85rem", alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "#f0fdf4", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: ".9rem", color: "#1e293b" }}>{title}</div>
                      <div style={{ fontSize: ".82rem", color: "#64748b", marginTop: "1px" }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/girl.jpg" alt="Butterfly being identified by AI" style={{ width: "100%", borderRadius: 20, objectFit: "cover", height: 480, boxShadow: "0 20px 60px rgba(0,0,0,.12)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT INSECTS CAN YOU IDENTIFY */}
      <section className="section sec-cream">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <img src="/insects.jpg" alt="Various insects identified by AI" style={{ width: "100%", borderRadius: 20, objectFit: "cover", height: 420, boxShadow: "0 20px 60px rgba(0,0,0,.1)" }} />
            </div>
            <div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#1e293b", letterSpacing: "-.02em", marginBottom: "1rem" }}>What Insects Can You Identify?</h2>
              <p style={{ color: "#64748b", marginBottom: "1.5rem", lineHeight: 1.75 }}>Our tool can recognize many types of insects and related creatures — from common household pests to rare tropical species:</p>
              <div className="insect-grid">
                {INSECTS.map(ins => (
                  <div className="insect-item" key={ins.name}>
                    <div className="ico">{ins.emoji}</div>
                    <p>{ins.name}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: "#64748b", fontSize: ".875rem", marginTop: "1rem", fontStyle: "italic" }}>…and hundreds of thousands more species worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE + TIPS */}
      <section className="section sec-white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#1e293b", letterSpacing: "-.02em", marginBottom: "1rem" }}>Why Use Our Bug Identification Tool?</h2>
              <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1.25rem" }}>Identifying insects can help gardeners, homeowners, students, researchers, and nature enthusiasts understand the environment around them. Whether you found an unknown bug inside your home, in your garden, or while exploring outdoors, our AI-powered insect identifier provides reliable information in seconds.</p>
              <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1e293b", marginBottom: ".85rem" }}>Benefits of Identifying Insects</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                {["Learn about different insect species and their roles in the ecosystem.", "Determine whether a bug is dangerous or completely harmless.", "Protect your plants and garden from destructive pest species.", "Make smarter, more informed pest control decisions.", "Support educational and scientific learning for students.", "Explore biodiversity and wildlife in your local environment."].map(b => (
                  <div key={b} style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ color: "#64748b", fontSize: ".9rem", lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontWeight: 800, color: "#1e293b", letterSpacing: "-.02em", marginBottom: "1rem" }}>Tips for Better Identification</h2>
              <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "1.25rem" }}>For the most accurate results, follow these simple photography tips:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🎯", tip: "Take a clear and focused picture", detail: "Make sure the insect is in sharp focus, not blurry." },
                  { icon: "☀️", tip: "Capture the insect in good lighting", detail: "Natural daylight works best. Avoid harsh flash." },
                  { icon: "📷", tip: "Include the entire body", detail: "Show the full insect body — head, thorax, abdomen, and legs." },
                  { icon: "✅", tip: "Avoid blurry or heavily edited images", detail: "Do not use filters or heavy editing on the photo." },
                  { icon: "📱", tip: "Get physically close", detail: "Move your camera close rather than using digital zoom." },
                ].map(t => (
                  <div key={t.tip} style={{ display: "flex", gap: ".85rem", alignItems: "flex-start", background: "#f8fafc", borderRadius: 12, padding: "1rem", border: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: "1.25rem", flexShrink: 0 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: ".88rem", color: "#1e293b", marginBottom: "2px" }}>{t.tip}</div>
                      <div style={{ fontSize: ".8rem", color: "#64748b" }}>{t.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO PROSE CONTENT */}
      <section className="section sec-cream">
        <div className="container prose">
          <h2>Free AI Bug Identification by Photo — Identify Any Insect Instantly</h2>
          <p>BugIdentifier.ai is the world's most comprehensive free insect identification platform. Whether you've discovered a mysterious bug crawling across your kitchen floor, spotted an unusual insect damaging your garden plants, received a strange bite you can't explain, or simply want to learn more about the incredible insect life around you — our AI tools give you expert-level answers in seconds, completely free.</p>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Bee identification using AI technology" className="prose-img" />
          <p>Our AI system analyzes your uploaded photo against a database covering over 1 million known insect species, including beetles, butterflies, moths, flies, ants, bees, wasps, caterpillars, mosquitoes, ticks, and spiders. Each identification includes the common name, scientific name, family, order, habitat, diet, geographic range, danger level, prevention tips, and fascinating species facts.</p>

          <h2>Why Accurate Insect Identification Matters for Safety</h2>
          <p>Correctly identifying an insect can literally be the difference between life and death in extreme cases. Venomous spiders like the <Link href="/spider-identifier">Black Widow and Brown Recluse</Link> are often mistaken for completely harmless species. <Link href="/tick-identifier">Ticks carrying Lyme disease</Link> look nearly identical to harmless varieties. Fire ant stings can trigger life-threatening anaphylaxis in sensitive individuals. <Link href="/mosquito-identifier">Disease-carrying mosquitoes</Link> like Aedes aegypti, which transmits dengue fever, Zika, and chikungunya, are visually similar to harmless Culex mosquitoes.</p>
          <img src="/lll.jpg" alt="Mosquito identification and disease prevention" className="prose-img" />

          <h2>Bug Identification for Gardeners and Homeowners</h2>
          <p>For homeowners, identifying <Link href="/beetle-identifier">wood-boring beetles</Link> or <Link href="/ant-identifier">carpenter ants</Link> early can prevent thousands of dollars in structural damage. Termites alone cause an estimated $5 billion in property damage annually in the United States. For gardeners, knowing which <Link href="/caterpillar-identifier">caterpillars</Link> will become beneficial butterflies prevents inadvertent pesticide harm to pollinator species that are vital for food production.</p>
          <p>Understanding whether a <Link href="/wasp-identifier">wasp nest</Link> belongs to a beneficial species (like mud daubers that control spiders) or an aggressive species (like yellow jackets) determines whether removal is urgent and what safety precautions are needed. Our identification results include specific prevention and control tips for every species identified.</p>

          <h2>How Our AI Insect Identification Technology Works</h2>
          <p>Our system uses a state-of-the-art multimodal vision AI model that processes dozens of visual features simultaneously: wing venation patterns, body segmentation, antenna morphology, leg structure, color patterns, body markings, and relative size ratios. Unlike single-feature comparison systems that might only look at color or general shape, our multi-feature approach dramatically reduces misidentification — especially for look-alike species that frequently confuse even experienced naturalists.</p>
          <p>The AI returns a structured report with a confidence percentage so you always know exactly how certain the identification is. For ambiguous images, it identifies the most likely candidate and provides a detailed description to help you confirm visually. The entire process takes under 5 seconds from upload to result.</p>

          <h2>Free Bug Identification vs. Paid Apps — Why Choose BugIdentifier?</h2>
          <p>Many insect identification apps charge monthly subscription fees of $5–15 per month, require creating an account, or rely on crowdsourced community identification that can be slow, inconsistent, and sometimes inaccurate. BugIdentifier.ai offers AI-powered identification with up to 98% accuracy, completely free, with no registration, no waiting for community responses, and no subscription fees — ever. Our 12 specialized tools cover every major insect category, giving you targeted accuracy that general-purpose apps cannot match.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sec-white">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Everything you need to know about Bug Identifier AI</p></div>
          {FAQS.map((f, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? "▲" : "▼"}</span></div>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/" />
      <Footer />
    </>
  );
}
