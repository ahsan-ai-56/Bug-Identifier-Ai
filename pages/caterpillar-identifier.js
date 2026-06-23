import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "How do I identify a Caterpillar Identifier?", a: "Upload a clear, close-up photo to our Caterpillar Identifier tool above. The AI analyzes shape, color, size, patterns and structural features to identify the species within seconds with up to 98% accuracy." },
  { q: "Is the Caterpillar Identifier tool free?", a: "Yes, completely free. No signup, no account, no subscription fees. Just upload a photo and get instant detailed results including species info, danger level, and prevention tips." },
  { q: "What photo works best for Caterpillar Identifier identification?", a: "A clear, well-lit close-up in natural daylight where the subject fills most of the frame works best. Avoid blurry, dark, or zoomed-in photos. Getting physically closer works better than digital zoom." },
  { q: "Can it tell if a Caterpillar is dangerous?", a: "Yes. Every result includes a danger level from Harmless to Dangerous, specific venom or bite information, and safety guidance for what to do if you encounter this species." },
  { q: "How accurate is the Caterpillar Identifier?", a: "Our AI achieves 90-98% accuracy on clear, well-lit photos. It analyzes dozens of visual features simultaneously for much higher accuracy than single-feature comparison systems." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Caterpillar Identifier – Free AI Caterpillar Identifier | BugIdentifier</title>
        <meta name="description" content="Identify caterpillar species and know which are toxic to touch, which become beautiful butterflies, and which damage your crops." />
        <meta name="keywords" content="caterpillar identifier, identify caterpillar by photo, what caterpillar is this, toxic caterpillar identifier" />
        <meta property="og:title" content="Caterpillar Identifier – Free AI Tool | BugIdentifier" />
        <meta property="og:description" content="Identify caterpillar species and know which are toxic to touch, which become beautiful butterflies, and which damage your crops." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bugidentifier.ai/caterpillar-identifier" />
      </Head>
      <Nav active="caterpillar" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Caterpillar Identifier"}]} />

      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url(\'https://images.unsplash.com/photo-1550159930-40066082a4fc?w=1600&q=80\')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(54,83,20,.93) 0%,rgba(5,5,5,.80) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-green">🐛 Free AI Caterpillar Identifier</div>
          <h1>Free AI <span style={{ color: "'#86efac'" }}>{`Caterpillar Identifier`}</span></h1>
          <p className="sub">Identify caterpillar species and know which are toxic to touch, which become beautiful butterflies, and which damage your crops. Upload a photo for instant AI-powered results with full species details.</p>
          <UploadTool apiRoute="/api/identify" accentColor="#86efac" dropLabel="Drop a caterpillar photo here" btnLabel="🐛 Identify Now" />
        </div>
      </section>

      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      <section className="section sec-white">
        <div className="container prose">
          <h2>How to Use the Caterpillar Identifier</h2>
          <p>Using our free Caterpillar Identifier is simple: upload a clear photo of the caterpillar, click Identify, and receive a complete detailed report within seconds. Our AI model analyzes dozens of visual features to deliver reliable identifications across hundreds of species worldwide.</p>
          <img src="https://images.unsplash.com/photo-1550159930-40066082a4fc?w=1600&q=80" alt="Caterpillar identification using AI" className="prose-img" />
          <p>For best results, photograph the caterpillar from above or to the side in natural daylight. Make sure the subject fills most of the frame and is in sharp focus. The AI performs best when the full body of the caterpillar is visible in the photo.</p>
          <h2>Why Identifying Caterpillars Matters</h2>
          <p>Accurate caterpillar identification helps you understand whether the specimen poses any risk to your health or property, whether it is beneficial and worth protecting, or whether it requires pest control intervention. Our tool gives you expert-level answers instantly and completely free.</p>
          <h2>What Our Caterpillar Identifier Results Include</h2>
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
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Common questions about our Caterpillar Identifier</p></div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{}{}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/caterpillar-identifier" />
      <Footer />
    </>
  );
}
