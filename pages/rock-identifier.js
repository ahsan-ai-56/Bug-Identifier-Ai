import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav, Footer, Breadcrumb, RelatedTools } from "../components/Layout";
import UploadTool from "../components/UploadTool";

const FAQS = [
  { q: "Is the Rock Identifier free to use?", a: "Yes, completely free. No signup, no account, no subscription fees. You can upload a photo and identify rocks, minerals, crystals, and gemstones instantly without needing any geology experience." },
  { q: "How accurate is the Rock Identifier?", a: "Our AI achieves 90–98% accuracy on clear, well-lit photos. Accuracy depends on image quality — clear, focused, well-lit photos taken from multiple angles generally provide the best results." },
  { q: "Can it identify minerals and gemstones?", a: "Yes. The Rock Identifier can recognize hundreds of common minerals, crystals, and gemstones in addition to all major rock types including igneous, sedimentary, and metamorphic rocks." },
  { q: "Can I use this tool on my phone?", a: "Yes. The Rock Identifier works perfectly on both mobile devices and desktop browsers. Simply take a photo with your phone camera and upload it directly from your device." },
  { q: "Why didn't I get the correct result?", a: "Some rocks look similar to each other. Uploading a sharper, clearer image from multiple angles usually improves accuracy significantly. Clean dust or mud from the rock and photograph it in natural daylight on a plain background." },
  { q: "Do I need to create an account?", a: "No. You can use the Rock Identifier directly without creating an account, registering, or providing any personal information. It is 100% free and anonymous." },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <Head>
        <title>Rock Identifier – Free AI Rock Identification Tool | Identify Rocks, Minerals & Gemstones</title>
        <meta name="description" content="Identify rocks, minerals, crystals, and gemstones instantly from a photo. Get rock type, mineral composition, hardness, formation process, and value. Free AI rock identifier — no signup required." />
        <meta name="keywords" content="rock identifier, identify rock by photo, what rock is this, free rock identification, mineral identifier, gemstone identifier, crystal identifier, geology tool, rock type identifier, igneous sedimentary metamorphic rock identifier" />
        <meta property="og:title" content="Rock Identifier – Free AI Rock Identification Tool | BugIdentifier" />
        <meta property="og:description" content="Identify rocks, minerals, and gemstones instantly from a photo. Free AI rock identifier covering igneous, sedimentary, and metamorphic rocks plus crystals and gemstones." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bug-identifier.org/rock-identifier" />
        <meta property="og:image" content="https://bug-identifier.org/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bug-identifier.org/rock-identifier" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              "name": "Rock Identifier",
              "url": "https://bug-identifier.org/rock-identifier",
              "description": "Free AI-powered rock, mineral, and gemstone identification tool. Identify any rock from a photo instantly.",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Web Browser",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }
          ]
        })}} />
      </Head>
      <Nav active="rock" />
      <Breadcrumb items={[{label:"Home",href:"/"},{label:"Rock Identifier"}]} />

      {/* HERO */}
      <section className="hero page-hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(78,67,50,.95) 0%,rgba(5,5,5,.82) 100%)" }} />
        <div className="hero-content">
          <div className="hero-badge bg-amber">🪨 Free AI Rock Identifier</div>
          <h1>Free AI <span style={{ color: "#f59e0b" }}>Rock Identifier</span></h1>
          <p className="sub">
            Found an interesting rock but don't know what it is? Our free Rock Identifier helps you identify rocks, minerals, crystals, and gemstones in just seconds. Simply upload a clear photo and the AI analyzes its visible features to provide the species name, mineral composition, hardness, formation process, and value — completely free, no signup required.
          </p>
          <UploadTool apiRoute="/api/identify" accentColor="#f59e0b" dropLabel="Drop a rock, mineral, or gemstone photo here" btnLabel="🪨 Identify This Rock Now" />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[["Free","No Cost Ever"],["AI","Powered Analysis"],["<5s","Result Time"],["98%","Accuracy Rate"]].map(([n,l])=>(
          <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <section className="section sec-white">
        <div className="container prose">

          <h2>Identify Rocks Instantly with Our Free Rock Identifier</h2>
          <p>Found an interesting rock but don't know what it is? Our <strong>Rock Identifier</strong> helps you identify rocks, minerals, crystals, and gemstones in just a few seconds. Simply upload a clear photo, and the AI tool analyzes its visible features — color, luster, texture, crystal structure, and surface patterns — to provide the most likely identification along with detailed geological information.</p>
          <p>Whether you're a student studying geology, a collector building a rock and mineral collection, a hiker who found an unusual specimen, or simply curious about a rock in your garden, our free Rock Identifier makes professional-level identification fast, simple, and completely accessible. No geology degree required — just upload a photo and let our AI do the work.</p>

          <img src="/alll.jpg" alt="Rock Identifier AI tool analyzing mineral specimen" className="prose-img" />

          <h2>How to Use the Rock Identifier</h2>
          <p>Using our free Rock Identifier tool is easy and only takes a few simple steps:</p>
          <ul>
            <li><strong>Step 1:</strong> Take a clear, close-up photo of your rock, mineral, or gemstone in natural daylight.</li>
            <li><strong>Step 2:</strong> Upload the photo to our tool using the upload area above.</li>
            <li><strong>Step 3:</strong> Click Identify and wait a few seconds while the AI analyzes the image.</li>
            <li><strong>Step 4:</strong> View your complete identification result including rock type, mineral name, hardness, and properties.</li>
          </ul>
          <p>For the best results, use a well-lit, high-quality image and capture the rock from different angles if possible. Clean dust or mud from the surface before photographing and place the specimen on a plain white or neutral background for maximum contrast and accuracy.</p>

          <h2>What Can the Rock Identifier Tool Identify?</h2>
          <p>Our Rock Identifier can recognize a wide variety of natural geological specimens across all three major rock categories, plus minerals, crystals, and gemstones:</p>

          <h3>Igneous Rocks</h3>
          <p>Rocks formed from cooled magma or volcanic lava. Our Rock Identifier covers granite, basalt, obsidian, pumice, diorite, rhyolite, gabbro, andesite, tuff, and many other igneous rock types. Igneous rocks are classified by their silica content and whether they formed above ground (extrusive) or below ground (intrusive).</p>

          <h3>Sedimentary Rocks</h3>
          <p>Rocks formed from layers of compressed sediment over millions of years. The Rock Identifier recognizes sandstone, limestone, shale, mudstone, conglomerate, breccia, chalk, coal, gypsum, and rock salt. Sedimentary rocks often contain fossils and form in characteristic layered patterns called bedding or stratification.</p>

          <h3>Metamorphic Rocks</h3>
          <p>Rocks transformed by heat and pressure deep within the Earth's crust. Our tool identifies marble, slate, quartzite, schist, gneiss, phyllite, hornfels, and other metamorphic rocks. These rocks often show distinctive foliation (layered mineral alignment) and are prized in construction and sculpture.</p>

          <h3>Minerals & Crystals</h3>
          <p>Individual mineral species and crystalline formations. The Rock Identifier covers quartz, calcite, mica, feldspar, pyrite, fluorite, hematite, magnetite, olivine, tourmaline, selenite, labradorite, and hundreds of other minerals. Our tool also works as a <Link href="/crystal-identifier">Crystal Identifier</Link> for specific crystal specimens.</p>

          <h3>Gemstones</h3>
          <p>Precious and semi-precious stones used in jewelry and collected for their beauty. Identifiable gemstones include amethyst, agate, jasper, garnet, rose quartz, citrine, topaz, turquoise, malachite, lapis lazuli, tiger's eye, opal, and many more. For detailed gem identification and valuation, also try our dedicated <Link href="/crystal-identifier">Crystal Identifier</Link> tool.</p>

          <h2>Key Features of Our Rock Identifier</h2>
          <ul>
            <li><strong>AI-powered rock identification</strong> — Advanced machine learning trained on thousands of rock and mineral images</li>
            <li><strong>Recognizes rocks, minerals, crystals, and gemstones</strong> — Comprehensive coverage across all geological specimen types</li>
            <li><strong>Fast and easy image analysis</strong> — Results in under 5 seconds from a single photo</li>
            <li><strong>Beginner-friendly</strong> — No geology knowledge required to use or understand the results</li>
            <li><strong>Works on desktop and mobile devices</strong> — Use it in the field on your phone or at home on your computer</li>
            <li><strong>Educational information with each result</strong> — Learn about the rock's formation, properties, and uses</li>
            <li><strong>Completely free</strong> — No subscription, no account, no hidden fees</li>
          </ul>

          <h2>What Our Rock Identifier Results Include</h2>
          <ul>
            <li><strong>Rock or Mineral Name</strong> — Common name and scientific mineral name</li>
            <li><strong>Rock Type</strong> — Igneous, sedimentary, or metamorphic classification</li>
            <li><strong>Mineral Composition</strong> — What minerals make up this rock specimen</li>
            <li><strong>Mohs Hardness</strong> — Where it falls on the 1–10 hardness scale</li>
            <li><strong>Formation Process</strong> — How and where this rock or mineral forms in nature</li>
            <li><strong>Geographic Distribution</strong> — Regions and countries where this specimen is commonly found</li>
            <li><strong>Color and Luster</strong> — Typical color variations and surface shine characteristics</li>
            <li><strong>Common Uses</strong> — Industrial, decorative, or collector applications</li>
            <li><strong>Estimated Value</strong> — Approximate collector or commercial value for the specimen type</li>
            <li><strong>Fun Facts</strong> — Interesting geological facts about the specimen</li>
          </ul>

          <h2>Why Use Our Rock Identifier?</h2>
          <p>Our Rock Identifier tool is designed to make geological identification quick and convenient for everyone — from complete beginners to experienced collectors and geology students. Here's why thousands of people use our tool every day:</p>
          <ul>
            <li><strong>Identify unknown rocks in seconds</strong> — No more hours of flipping through field guides</li>
            <li><strong>Learn about geology</strong> — Each identification comes with accurate scientific descriptions and formation information</li>
            <li><strong>Save time compared to manual searches</strong> — AI analysis is faster and more comprehensive than keyword searches</li>
            <li><strong>Great for school projects and research</strong> — Get accurate geological information for assignments and projects</li>
            <li><strong>Useful for hikers, travelers, and collectors</strong> — Use it in the field to identify specimens on the spot</li>
            <li><strong>Helps organize rock and mineral collections</strong> — Identify and catalog your collection with accurate species names</li>
          </ul>

          <h2>Tips for Better Rock Identification Results</h2>
          <p>To improve identification accuracy and get the best results from our Rock Identifier, follow these photography tips before uploading your image:</p>
          <ul>
            <li><strong>Take photos in natural lighting</strong> — Natural daylight reveals true colors and surface textures far better than artificial lighting or flash</li>
            <li><strong>Clean the rock first</strong> — Remove dust, mud, or dirt from the surface so the AI can analyze the actual rock properties</li>
            <li><strong>Keep the image in sharp focus</strong> — A blurry photo will significantly reduce accuracy. Use your camera's macro or close-up mode</li>
            <li><strong>Use a plain background</strong> — Place the rock on a white paper towel or neutral surface to maximize contrast</li>
            <li><strong>Capture close-up details</strong> — Get close enough that the rock fills most of the frame</li>
            <li><strong>Try multiple angles</strong> — Crystal faces, cleavage planes, and surface textures all provide useful identification data</li>
            <li><strong>Include a size reference</strong> — A coin or ruler next to the specimen helps the AI estimate physical dimensions</li>
          </ul>
          <p>Following these tips helps the AI analyze important visual features — color, luster, cleavage, fracture, crystal habit, and surface texture — far more accurately, resulting in more reliable identifications.</p>

          <h2>Rock Identification for Students and Collectors</h2>
          <p>Our Rock Identifier is an invaluable tool for geology students, rock collectors, and outdoor enthusiasts. Geology students can use it to identify specimens for class assignments and lab work, while collectors can catalog their existing collections with accurate species names and information.</p>
          <p>Hikers and travelers often encounter fascinating rocks and minerals on trails, riverbeds, and beaches without knowing what they have found. Our tool lets you identify specimens instantly using just your phone, turning every outdoor adventure into an educational geological experience. For insect encounters on the same hike, use our <Link href="/">Bug Identifier</Link> or <Link href="/insect-bite-identifier">Insect Bite Identifier</Link> for any bites or stings you encounter outdoors.</p>

          <p>Also try: <Link href="/crystal-identifier">Crystal Identifier</Link> · <Link href="/insect-bite-identifier">Insect Bite Identifier</Link> · <Link href="/spider-identifier">Spider Identifier</Link> · <Link href="/butterfly-identifier">Butterfly Identifier</Link> · <Link href="/">Main Bug Identifier</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sec-cream">
        <div className="container" style={{maxWidth:780}}>
          <div className="sec-head">
            <h2>Rock Identifier — Frequently Asked Questions</h2>
            <p>Common questions about our free Rock Identifier tool</p>
          </div>
          {FAQS.map((f,i)=>(
            <div className="faq-item" key={i}>
              <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f.q}<span>{openFaq===i?"▲":"▼"}</span></div>
              {openFaq===i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <RelatedTools current="/rock-identifier" />
      <Footer />
    </>
  );
}
