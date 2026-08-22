import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "How do I identify dog worms using this tool?", a: "Upload a clear, close-up photo of the worm found in your dog's stool, vomit, or fur to our Dog Worm Identifier tool above. The AI analyzes the shape, color, size, and structure to identify the parasite type within seconds." },
  { q: "Is the Dog Worm Identifier tool free?", a: "Yes, completely free. No signup, no account, no subscription fees. Just upload a photo and get instant results including worm type, health risks, and recommended next steps." },
  { q: "What photo works best for dog worm identification?", a: "A clear, well-lit close-up photo in natural daylight where the worm fills most of the frame works best. Place the worm on a white surface like a paper towel for the clearest contrast and most accurate identification." },
  { q: "Can this tool replace a vet diagnosis?", a: "No. Our Dog Worm Identifier provides educational information only and is NOT a substitute for professional veterinary diagnosis and treatment. Always consult your vet if you suspect your dog has worms." },
  { q: "How accurate is the Dog Worm Identifier?", a: "Our AI achieves 90-98% accuracy on clear, well-lit photos. It analyzes body shape, segmentation, color, size, and texture to identify the most common dog parasites including roundworms, tapeworms, hookworms, and whipworms." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Dog Worm Identifier – Free AI Dog Worm Identification Tool | BugIdentifier</title>
        <meta name="description" content="Identify dog worms instantly from a photo. Know the worm type, health risks to your dog and family, treatment options, and prevention tips. Free AI dog worm identifier — always consult a vet for treatment." />
        <meta name="keywords" content="dog worm identifier, identify dog worm by photo, what worm is in my dog, free dog worm identification, dog parasite identifier, roundworm identifier dog, tapeworm identifier dog, hookworm dog identifier" />
        <meta property="og:title" content="Dog Worm Identifier – Free AI Tool | BugIdentifier" />
        <meta property="og:description" content="Identify dog worms instantly from a photo. Know the worm type, health risks, treatment options, and prevention tips. Free AI dog worm identification tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bug-identifier.org/dog-worm-identifier" />
        <meta property="og:image" content="https://bug-identifier.org/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bug-identifier.org/dog-worm-identifier" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Dog Worm Identifier",
          "url": "https://bug-identifier.org/dog-worm-identifier",
          "description": "Free AI-powered dog worm identification tool. Identify any dog parasite from a photo instantly.",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })}} />
      </Head>
      <Nav active="dog-worm" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Dog Worm Identifier"}]} />

      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(120,53,15,.93) 0%,rgba(5,5,5,.80) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-amber">🪱 Free AI Dog Worm Identifier</div>
          <h1>Free AI <span style={{ color: "#f59e0b" }}>Dog Worm Identifier</span></h1>
          <p className="sub">Identify dog worms instantly from a photo. Know the parasite type, health risks to your dog and family, and recommended treatment approach. Upload a clear photo for instant AI-powered results. Always consult a veterinarian for treatment.</p>
          <UploadTool apiRoute="/api/identify" accentColor="#f59e0b" dropLabel="Drop a dog worm photo here" btnLabel="🪱 Identify Dog Worm Now" />
        </div>
      </section>

      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      <section className="section sec-white">
        <div className="container prose">
          <h2>How to Use the Dog Worm Identifier</h2>
          <p>Using our free Dog Worm Identifier is straightforward. If you find a worm in your dog's stool, vomit, or on their fur, place it carefully on a white paper towel and take a clear, close-up photo in natural daylight. Upload the photo to our tool above and click Identify. Our AI will analyze the worm's physical characteristics and deliver an identification within seconds.</p>
          <img src="/alll.jpg" alt="Dog worm identification using AI" className="prose-img" />
          <p>For best identification results, make sure the full body of the worm is visible in the photo and the image is sharp and well-lit. A white background like a paper towel gives the AI the clearest contrast to analyze body shape, segmentation, color, and size accurately.</p>

          <h2>Common Dog Worm Types Our AI Can Identify</h2>
          <ul>
            <li><strong>Roundworms (Toxocara canis)</strong> — The most common dog parasite. Long, smooth, spaghetti-like worms 3–18 cm in length. White to pale yellow color. Found in stool or vomited up. Puppies are especially vulnerable and can be born infected.</li>
            <li><strong>Tapeworms (Dipylidium caninum / Taenia spp.)</strong> — Flat, segmented worms. Segments look like small grains of rice or cucumber seeds, often seen moving near the dog's tail or in fresh stool. Dogs get tapeworms from swallowing infected fleas.</li>
            <li><strong>Hookworms (Ancylostoma caninum)</strong> — Small, thin worms 1–2 cm long that attach to the intestinal wall. Rarely seen directly but cause dark, tarry stools, anemia, and weakness. Can infect humans through skin contact with contaminated soil.</li>
            <li><strong>Whipworms (Trichuris vulpis)</strong> — Thread-like worms shaped like a whip. Live in the large intestine. Cause bloody diarrhea and weight loss. Difficult to see in stool but eggs are detected in fecal tests.</li>
            <li><strong>Heartworms (Dirofilaria immitis)</strong> — Not visible in stool. Transmitted by mosquitoes. Cause serious heart and lung disease. Require veterinary blood test for diagnosis and are a life-threatening condition if untreated.</li>
          </ul>

          <h2>Warning Signs Your Dog Has Worms</h2>
          <ul>
            <li>Visible worms or worm segments in stool, vomit, or around the tail</li>
            <li>Pot-bellied or bloated appearance (especially in puppies)</li>
            <li>Weight loss despite normal or increased appetite</li>
            <li>Dull, rough coat that lacks normal shine</li>
            <li>Scooting or dragging rear on the ground</li>
            <li>Diarrhea — sometimes bloody or mucus-filled</li>
            <li>Coughing (can indicate roundworm larvae in lungs or heartworm)</li>
            <li>Lethargy and weakness</li>
          </ul>

          <h2>Can Dog Worms Infect Humans?</h2>
          <p>Yes — several dog worm species are zoonotic, meaning they can infect humans. <strong>Roundworms (Toxocara canis)</strong> can cause Toxocariasis in humans, particularly children who play in contaminated soil. Larvae can migrate to the eyes (ocular larva migrans) and cause vision damage. <strong>Hookworms</strong> can penetrate human skin through contaminated soil, causing Cutaneous Larva Migrans — an itchy, moving rash. Always wash hands thoroughly after handling dog stool or soil in areas where dogs defecate.</p>
          <p>This is why prompt dog worm identification and treatment is important not just for your dog's health, but for your entire family's safety. Use our <Link href="/">Bug Identifier</Link> for general insect identification or our <Link href="/insect-bite-identifier">Insect Bite Identifier</Link> if you notice unusual skin reactions.</p>

          <h2>What Our Dog Worm Identifier Results Include</h2>
          <ul>
            <li><strong>Worm Type</strong> — Common name and scientific classification of the parasite</li>
            <li><strong>Physical Description</strong> — Size, color, shape, and distinguishing features</li>
            <li><strong>Health Risk Level</strong> — Risk to your dog and potential risk to humans</li>
            <li><strong>Infection Route</strong> — How dogs typically contract this parasite</li>
            <li><strong>Common Symptoms</strong> — What signs to watch for in your dog</li>
            <li><strong>Treatment Approach</strong> — General information about dewormers used (always confirm with vet)</li>
            <li><strong>Prevention Tips</strong> — How to reduce risk of reinfection</li>
          </ul>

          <div style={{background:"rgba(220,38,38,0.08)",border:"1px solid rgba(220,38,38,0.25)",borderRadius:"12px",padding:"1.2rem 1.4rem",margin:"2rem 0"}}>
            <p style={{margin:0,color:"#f87171",fontWeight:600}}>⚠️ Important Veterinary Disclaimer</p>
            <p style={{margin:".5rem 0 0",color:"rgba(255,255,255,0.75)",fontSize:".9rem"}}>Our Dog Worm Identifier provides educational information only. It is NOT a substitute for professional veterinary diagnosis and treatment. If you suspect your dog has worms, consult a licensed veterinarian promptly. Do not administer deworming medications without veterinary guidance, as incorrect treatment can be ineffective or harmful.</p>
          </div>

          <p>Also try: <Link href="/insect-bite-identifier">Insect Bite Identifier</Link> · <Link href="/spider-identifier">Spider Identifier</Link> · <Link href="/ant-identifier">Ant Identifier</Link> · <Link href="/">Main Bug Identifier</Link></p>
        </div>
      </section>

      <section className="section sec-cream">
        <div className="container" style={{maxWidth:780}}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Common questions about our Dog Worm Identifier</p></div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/dog-worm-identifier" />
      <Footer />
    </>
  );
}
