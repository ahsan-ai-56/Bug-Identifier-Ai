import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "How do I identify a Spider Identifier?", a: "Upload a clear, close-up photo to our Spider Identifier tool above. The AI analyzes shape, color, size, patterns and structural features to identify the species within seconds with up to 98% accuracy." },
  { q: "Is the Spider Identifier tool free?", a: "Yes, completely free. No signup, no account, no subscription fees. Just upload a photo and get instant detailed results including species info, danger level, and prevention tips." },
  { q: "What photo works best for Spider Identifier identification?", a: "A clear, well-lit close-up in natural daylight where the subject fills most of the frame works best. Avoid blurry, dark, or zoomed-in photos. Getting physically closer works better than digital zoom." },
  { q: "Can it tell if a Spider is dangerous?", a: "Yes. Every result includes a danger level from Harmless to Dangerous, specific venom or bite information, and safety guidance for what to do if you encounter this species." },
  { q: "How accurate is the Spider Identifier?", a: "Our AI achieves 90-98% accuracy on clear, well-lit photos. It analyzes dozens of visual features simultaneously for much higher accuracy than single-feature comparison systems." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Spider Identifier – Free AI Spider Identifier | BugIdentifier</title>
        <meta name="description" content="Identify any spider species instantly. Know if it is venomous, where it lives, and what to do if bitten. Covering 48,000+ spider species worldwide." />
        <meta name="keywords" content="spider identifier, identify spider by photo, venomous spider identifier, what spider is this, free spider identification" />
        <meta property="og:title" content="Spider Identifier – Free AI Tool | BugIdentifier" />
        <meta property="og:description" content="Identify any spider species instantly. Know if it is venomous, where it lives, and what to do if bitten. Covering 48,000+ spider species worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bugidentifier.ai/spider-identifier" />
      </Head>
      <Nav active="spider" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Spider Identifier"}]} />

      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/spider.jpeg')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(30,27,75,.93) 0%,rgba(5,5,5,.80) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-purple">🕷️ Free AI Spider Identifier</div>
          <h1>Free AI <span style={{ color: "'#a78bfa'" }}>{`Spider Identifier`}</span></h1>
          <p className="sub">Identify any spider species instantly. Know if it is venomous, where it lives, and what to do if bitten. Covering 48,000+ spider species worldwide. Upload a photo for instant AI-powered results with full species details.</p>
          <UploadTool apiRoute="/api/identify" accentColor="#a78bfa" dropLabel="Drop a spider photo here" btnLabel="🕷️ Identify Now" />
        </div>
      </section>

      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      <section className="section sec-white">
        <div className="container prose">
          <h2>How to Use the Spider Identifier</h2>
          <p>Using our free Spider Identifier is simple: upload a clear photo of the spider, click Identify, and receive a complete detailed report within seconds. Our AI model analyzes dozens of visual features to deliver reliable identifications across hundreds of species worldwide.</p>
          <img src="/spid.jpg" alt="Spider identification using AI" className="prose-img" />
          <p>For best results, photograph the spider from above or to the side in natural daylight. Make sure the subject fills most of the frame and is in sharp focus. The AI performs best when the full body of the spider is visible in the photo.</p>
          <h2>Why Identifying Spiders Matters</h2>
          <p>Accurate spider identification helps you understand whether the specimen poses any risk to your health or property, whether it is beneficial and worth protecting, or whether it requires pest control intervention. Our tool gives you expert-level answers instantly and completely free.</p>
          <h2>What Our Spider Identifier Results Include</h2>
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
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Common questions about our Spider Identifier</p></div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/spider-identifier" />
      <Footer />
    </>
  );
}
