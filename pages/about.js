import Head from "next/head";
import Link from "next/link";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us – BugIdentifier AI | Free Insect Identification</title>
        <meta name="description" content="Learn about BugIdentifier.ai — our mission to make insect identification free, accurate and accessible to everyone using advanced AI technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav active="about" />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="hero page-hero" style={{ minHeight: "55vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550159930-40066082a4fc?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(10,46,26,.93) 0%,rgba(5,20,10,.85) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-green">🐛 Our Mission</div>
          <h1>About <span style={{ color: "#22c55e" }}>BugIdentifier</span></h1>
          <p className="sub">Making insect identification free, accurate, and accessible to everyone — from curious children to professional entomologists worldwide.</p>
        </div>
      </section>

      <section className="section sec-white">
        <div className="container prose">
          <h2>Who We Are</h2>
          <p>BugIdentifier.ai is a free AI-powered insect identification platform built to help everyday people understand the insects they encounter in their daily lives. Whether you are a homeowner concerned about a potential pest infestation, a gardener trying to protect beneficial insects, a hiker who just received a mysterious bite, a student studying entomology, or simply a curious nature lover — our 12 specialized AI tools are built for you.</p>
          <img src="/about.jpg" alt="Beautiful butterfly identified by BugIdentifier AI" className="prose-img" />
          <p>We believe that understanding the natural world should not require expensive apps, specialist knowledge, or university degrees. With modern AI vision technology, we can now provide the same quality of identification that once required a trained entomologist — instantly, from your smartphone, completely free of charge.</p>

          <h2>Our Mission</h2>
          <p>Our mission is simple: <strong>make insect identification free and accessible to everyone, everywhere, forever.</strong> We cover over 1 million known insect species across 12 specialized identification tools — from <Link href="/spider-identifier">spiders</Link> and <Link href="/beetle-identifier">beetles</Link> to <Link href="/butterfly-identifier">butterflies</Link> and <Link href="/tick-identifier">ticks</Link>. Every single tool is completely free to use, with no account required, no subscription fees, and no hidden costs.</p>

          <h2>Our Technology</h2>
          <p>BugIdentifier.ai uses advanced multimodal AI vision models to analyze insect photographs. Our system evaluates dozens of visual features simultaneously — wing venation patterns, body segmentation, antenna morphology, leg structure, color patterns, body markings, and relative size proportions — to deliver identifications with up to 98% accuracy on clear, well-lit photographs.</p>
          <p>Unlike apps that rely on crowdsourced community identification (which can be slow and inconsistent), our AI delivers complete, detailed results in under 5 seconds, 24/7, with no human bottleneck. Every result is accompanied by a confidence percentage so you always know exactly how certain the identification is.</p>

          <h2>Safety and Medical Disclaimer</h2>
          <p>While our insect identification tools achieve high accuracy, they are intended for educational and informational purposes only. Our <Link href="/insect-bite-identifier">Bite Identifier tool</Link> is not a substitute for professional medical advice, diagnosis, or treatment. If you experience a severe reaction to an insect bite or sting — especially difficulty breathing, widespread rash, or swelling of the throat — seek emergency medical care immediately. Please read our full <Link href="/disclaimer">Disclaimer</Link> for important information.</p>

          <h2>Contact Us</h2>
          <p>Have questions, suggestions, partnership inquiries, or found an identification error? We would love to hear from you. Visit our <Link href="/contact">Contact page</Link> to send us a message and we will respond within 24 hours.</p>
        </div>
      </section>

      <section className="section sec-cream">
        <div className="container">
          <div className="sec-head"><h2>All 12 Free AI Tools</h2><p>Complete suite of specialized insect identification tools</p></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1rem" }}>
            {[
              ["/", "🐛", "Bug Identifier"], ["/insect-bite-identifier", "🩺", "Bite Identifier"],
              ["/spider-identifier", "🕷️", "Spider Identifier"], ["/beetle-identifier", "🪲", "Beetle Identifier"],
              ["/fly-identifier", "🪰", "Fly Identifier"], ["/ant-identifier", "🐜", "Ant Identifier"],
              ["/bee-identifier", "🐝", "Bee Identifier"], ["/wasp-identifier", "🟡", "Wasp Identifier"],
              ["/caterpillar-identifier", "🐛", "Caterpillar Identifier"], ["/butterfly-identifier", "🦋", "Butterfly Identifier"],
              ["/moth-identifier", "🌙", "Moth Identifier"], ["/mosquito-identifier", "🦟", "Mosquito Identifier"],
              ["/tick-identifier", "🕷️", "Tick Identifier"],
            ].map(([href, emoji, label]) => (
              <Link key={href} href={href} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "1.1rem", display: "block", textAlign: "center", textDecoration: "none", transition: "all .2s" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: ".4rem" }}>{emoji}</div>
                <div style={{ fontSize: ".82rem", fontWeight: 700, color: "#1e293b" }}>{label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
