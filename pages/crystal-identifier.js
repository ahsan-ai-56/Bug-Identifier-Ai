import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "How do I identify a crystal using this tool?", a: "Upload a clear, well-lit close-up photo of your crystal to our Crystal Identifier tool above. The AI analyzes color, transparency, luster, crystal shape, and surface texture to identify the mineral species within seconds with high accuracy." },
  { q: "Is the Crystal Identifier tool free?", a: "Yes, completely free. No signup, no account, no subscription fees. Just upload a photo and get instant detailed results including crystal name, mineral composition, hardness, properties, and value information." },
  { q: "What photo works best for crystal identification?", a: "A clear, well-lit close-up in natural daylight works best. Place the crystal on a white or neutral background and photograph it from multiple angles if possible. Avoid flash photography which creates glare on crystal surfaces." },
  { q: "Can the Crystal Identifier tell me how much my crystal is worth?", a: "Yes, our results include estimated collector and retail value ranges based on species, quality, size, and current market data. However, for high-value specimens, we recommend professional gemological appraisal for precise valuation." },
  { q: "How accurate is the Crystal Identifier?", a: "Our AI achieves 90-98% accuracy on clear, well-lit photos. It analyzes color, luster, transparency, crystal habit, surface features, and dozens of other visual properties for reliable mineral identification." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Crystal Identifier – Free AI Crystal Identification Tool | BugIdentifier</title>
        <meta name="description" content="Identify crystals and minerals instantly from a photo. Get crystal name, mineral composition, Mohs hardness, chakra properties, metaphysical meaning, and estimated value. Free AI crystal identifier — no signup required." />
        <meta name="keywords" content="crystal identifier, identify crystal by photo, what crystal is this, free crystal identification, mineral identifier, gemstone identifier, crystal meaning, crystal healing identifier, rose quartz identifier, amethyst identifier" />
        <meta property="og:title" content="Crystal Identifier – Free AI Tool | BugIdentifier" />
        <meta property="og:description" content="Identify crystals and minerals instantly from a photo. Get crystal name, properties, hardness, and value. Free AI crystal identification tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bug-identifier.org/crystal-identifier" />
        <meta property="og:image" content="https://bug-identifier.org/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bug-identifier.org/crystal-identifier" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Crystal Identifier",
          "url": "https://bug-identifier.org/crystal-identifier",
          "description": "Free AI-powered crystal and mineral identification tool. Identify any crystal from a photo instantly.",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })}} />
      </Head>
      <Nav active="crystal" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Crystal Identifier"}]} />

      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(107,33,168,.93) 0%,rgba(5,5,5,.80) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-green">💎 Free AI Crystal Identifier</div>
          <h1>Free AI <span style={{ color: "#a855f7" }}>Crystal Identifier</span></h1>
          <p className="sub">Identify any crystal or mineral instantly from a photo. Get the crystal name, mineral composition, Mohs hardness, chakra associations, metaphysical properties, and estimated value — completely free, no signup required.</p>
          <UploadTool apiRoute="/api/identify" accentColor="#a855f7" dropLabel="Drop a crystal or mineral photo here" btnLabel="💎 Identify Crystal Now" />
        </div>
      </section>

      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      <section className="section sec-white">
        <div className="container prose">
          <h2>How to Use the Crystal Identifier</h2>
          <p>Using our free Crystal Identifier is simple. Place your crystal on a clean white or neutral surface and take a clear, close-up photo in natural daylight — avoid using flash as it creates glare on crystal surfaces. Upload the photo to our tool above and click Identify. Our AI analyzes dozens of visual features and delivers a complete crystal identification report in under 5 seconds.</p>
          <img src="/alll.jpg" alt="Crystal identification using AI tool" className="prose-img" />
          <p>For the most accurate results, photograph your crystal from multiple angles and in good lighting. Include a size reference if possible — a coin or ruler next to the crystal helps the AI estimate physical dimensions for more precise identification. Clear, raw, and tumbled stones can all be identified effectively.</p>

          <h2>Common Crystals Our AI Can Identify</h2>
          <ul>
            <li><strong>Quartz Varieties</strong> — Clear Quartz, Rose Quartz, Smoky Quartz, Amethyst, Citrine, Aventurine, Chalcedony, Agate, Jasper, Tiger's Eye, Carnelian, Onyx</li>
            <li><strong>Feldspars</strong> — Labradorite, Moonstone, Sunstone, Amazonite, Orthoclase</li>
            <li><strong>Micas and Silicates</strong> — Lepidolite, Muscovite, Biotite, Tourmaline, Kyanite, Selenite, Desert Rose</li>
            <li><strong>Carbonates</strong> — Calcite, Aragonite, Malachite, Azurite, Rhodochrosite, Rhodonite</li>
            <li><strong>Oxides and Hydroxides</strong> — Hematite, Magnetite, Corundum (Ruby/Sapphire), Rutile</li>
            <li><strong>Sulfates and Sulfides</strong> — Gypsum, Barite, Pyrite (Fool's Gold), Celestite, Fluorite</li>
            <li><strong>Phosphates</strong> — Apatite, Turquoise, Variscite, Lazulite</li>
            <li><strong>Organic Gemstones</strong> — Amber, Jet, Pearl, Coral</li>
          </ul>

          <h2>What Our Crystal Identifier Results Include</h2>
          <ul>
            <li><strong>Crystal Name</strong> — Common name and full scientific mineral name</li>
            <li><strong>Mineral Classification</strong> — Chemical formula, crystal system (cubic, hexagonal, orthorhombic, etc.)</li>
            <li><strong>Mohs Hardness</strong> — Hardness rating from 1 (softest) to 10 (diamond)</li>
            <li><strong>Luster and Transparency</strong> — Vitreous, metallic, pearly, silky, or other luster types</li>
            <li><strong>Color Varieties</strong> — Natural color range and common treatments or enhancements</li>
            <li><strong>Geographic Origins</strong> — Countries and regions where this crystal is mined</li>
            <li><strong>Metaphysical Properties</strong> — Chakra associations, healing traditions, and spiritual uses</li>
            <li><strong>Estimated Value</strong> — Retail price range per gram or per specimen based on quality</li>
            <li><strong>Care Tips</strong> — How to clean, store, and protect your crystal</li>
          </ul>

          <h2>Crystal Identification for Collectors and Healers</h2>
          <p>Whether you are building a crystal collection, practicing crystal healing, sorting through an estate sale, or simply found an interesting rock on a hike, our AI Crystal Identifier delivers instant professional-level mineral identification. Knowing the exact mineral species, hardness, and properties helps collectors make informed purchasing decisions and healers choose the right stones for their practice.</p>
          <p>Crystal markets are unfortunately full of mislabeled or artificially dyed stones sold under incorrect names. Our Crystal Identifier helps you verify what you have actually purchased. Common deceptions include dyed Howlite sold as Turquoise, heat-treated Amethyst sold as Citrine, and glass sold as natural crystals. Our AI analyzes optical properties that help distinguish natural crystals from treated or synthetic imitations.</p>

          <h2>Crystal Hardness Guide — Mohs Scale</h2>
          <ul>
            <li><strong>1–2 (Very Soft)</strong> — Talc, Gypsum, Selenite — can be scratched by a fingernail</li>
            <li><strong>3–4 (Soft)</strong> — Calcite, Fluorite — can be scratched by a copper coin</li>
            <li><strong>5–6 (Medium)</strong> — Apatite, Feldspar, Moonstone, Labradorite — scratched by a steel knife</li>
            <li><strong>7 (Hard)</strong> — Quartz, Amethyst, Citrine, Rose Quartz, Tiger's Eye — scratches glass</li>
            <li><strong>8–9 (Very Hard)</strong> — Topaz, Corundum, Ruby, Sapphire — scratched only by diamond</li>
            <li><strong>10 (Hardest)</strong> — Diamond — scratches all other minerals</li>
          </ul>

          <p>Also try: <Link href="/insect-bite-identifier">Insect Bite Identifier</Link> · <Link href="/spider-identifier">Spider Identifier</Link> · <Link href="/butterfly-identifier">Butterfly Identifier</Link> · <Link href="/">Main Bug Identifier</Link></p>
        </div>
      </section>

      <section className="section sec-cream">
        <div className="container" style={{maxWidth:780}}>
          <div className="sec-head"><h2>Frequently Asked Questions</h2><p>Common questions about our Crystal Identifier</p></div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/crystal-identifier" />
      <Footer />
    </>
  );
}
