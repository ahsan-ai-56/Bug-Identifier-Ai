import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "How do I identify a Butterfly Identifier?", a: "Upload a clear, close-up photo to our Butterfly Identifier tool above. The AI analyzes shape, color, size, patterns and structural features to identify the species within seconds with up to 98% accuracy." },
  { q: "Is the Butterfly Identifier tool free?", a: "Yes, completely free. No signup, no account, no subscription fees. Just upload a photo and get instant detailed results including species info, danger level, and prevention tips." },
  { q: "What photo works best for Butterfly Identifier identification?", a: "A clear, well-lit close-up in natural daylight where the subject fills most of the frame works best. Avoid blurry, dark, or zoomed-in photos. Getting physically closer works better than digital zoom." },
  { q: "Can it tell if a Butterfly is dangerous?", a: "Yes. Every result includes a danger level from Harmless to Dangerous, specific venom or bite information, and safety guidance for what to do if you encounter this species." },
  { q: "How accurate is the Butterfly Identifier?", a: "Our AI achieves 90-98% accuracy on clear, well-lit photos. It analyzes dozens of visual features simultaneously for much higher accuracy than single-feature comparison systems." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Butterfly Identifier – Free AI Butterfly Identifier | BugIdentifier</title>
        <meta name="description" content="Identify butterfly species by wing patterns, colors, and markings. Discover migration patterns, lifecycle, and conservation status." />
        <meta name="keywords" content="butterfly identifier, identify butterfly by photo, what butterfly is this, butterfly species identification" />
        <meta property="og:title" content="Butterfly Identifier – Free AI Tool | BugIdentifier" />
        <meta property="og:description" content="Identify butterfly species by wing patterns, colors, and markings. Discover migration patterns, lifecycle, and conservation status." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bugidentifier.ai/butterfly-identifier" />
      </Head>
      <Nav active="butterfly" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Butterfly Identifier"}]} />

      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/but.jpeg')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(88,28,135,.93) 0%,rgba(5,5,5,.80) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-purple">🦋 Free AI Butterfly Identifier</div>
          <h1>Free AI <span style={{ color: "'#c084fc'" }}>{`Butterfly Identifier`}</span></h1>
          <p className="sub">Identify butterfly species by wing patterns, colors, and markings. Discover migration patterns, lifecycle, and conservation status. Upload a photo for instant AI-powered results with full species details.</p>
          <UploadTool apiRoute="/api/identify" accentColor="#c084fc" dropLabel="Drop a butterfly photo here" btnLabel="🦋 Identify Now" />
        </div>
      </section>

      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      <section className="section sec-white">
        <div className="container prose">
          <h2>How to Use the Butterfly Identifier</h2>
          <p>Using our free Butterfly Identifier is simple: upload a clear photo of the butterfly, click Identify, and receive a complete detailed report within seconds. Our AI model analyzes dozens of visual features to deliver reliable identifications across hundreds of species worldwide.</p>
          <img src="/but.jpeg" alt="Butterfly identification using AI" className="prose-img" />
          <p>For best results, photograph the butterfly from above or to the side in natural daylight. Make sure the subject fills most of the frame and is in sharp focus. The AI performs best when the full body of the butterfly is visible in the photo.</p>
          <h2>Why Identifying Butterflies Matters</h2>
          <p>Accurate butterfly identification helps you understand whether the specimen poses any risk to your health or property, whether it is beneficial and worth protecting, or whether it requires pest control intervention. Our tool gives you expert-level answers instantly and completely free.</p>
          <h2>What Our Butterfly Identifier Results Include</h2>
          <ul>
            <li><strong>Scientific and Common Name</strong> — Full species taxonomy and classification</li>
            <li><strong>Physical Characteristics</strong> — Size, color patterns, body structure, and distinctive markings</li>
            <li><strong>Habitat and Distribution</strong> — Where this species lives and which regions worldwide it is found</li>
            <li><strong>Diet and Behavior</strong> — What this species eats and how it behaves</li>
            <li><strong>Danger Level</strong> — Clear rating from Harmless to Dangerous with specific safety guidance</li>
            <li><strong>Prevention and Control Tips</strong> — How to safely manage this species if it becomes a problem</li>
            <li><strong>Fun Facts</strong> — Fascinating facts about this species</li>
          </ul>
          <p>Also try: <Link href="/insect-bite-identifier">Insect Bite Identifier</Link> · <Link href="/spider-identifier">Spider Identifier</Link> · <Link href="/butterfly-identifier">Butterfly Identifier</Link> · <Link href="/">Main Bug Identifier</Link></p>
        </div>
      </section>

      <section className="section sec-cream">
        <div className="container" style={{maxWidth:780}}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Common questions about our Butterfly Identifier</p></div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/butterfly-identifier" />
      <Footer />
    </>
  );
}
