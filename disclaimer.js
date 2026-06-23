import Head from "next/head";
import Link from "next/link";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer – BugIdentifier AI</title>
        <meta name="description" content="Important disclaimer for BugIdentifier.ai. Our insect identification tool is for educational purposes only and is not a substitute for professional medical or pest control advice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />

      <section className="hero" style={{ minHeight: "40vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(26,5,5,.95) 0%,rgba(59,10,10,.90) 100%)" }} />
        <div className="hero-content">
          <h1>Disclaimer</h1>
          <p className="sub">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="section sec-white">
        <div className="container prose">
          <div className="info-box info-red">⚠️ <strong>Important:</strong> BugIdentifier.ai is an educational tool only. It is NOT a substitute for professional medical, pest control, or entomological advice. In any emergency, call your local emergency services immediately.</div>

          <h2>1. General Information Disclaimer</h2>
          <p>The information provided by BugIdentifier.ai, including all identification results, species information, habitat data, diet information, danger ratings, and safety guidance, is provided for general educational and informational purposes only. While we strive for the highest possible accuracy, AI-powered identification may not always be correct, particularly for rare species, unusual specimens, juvenile forms, or poor-quality photographs.</p>
          <p>BugIdentifier.ai makes no warranties or representations, express or implied, about the accuracy, completeness, reliability, or suitability of identification results for any particular purpose. Always use your own judgment and consult qualified professionals when safety is a concern.</p>

          <h2>2. Medical Disclaimer — Bite and Sting Identification</h2>
          <p>Our <Link href="/insect-bite-identifier">Insect Bite Identifier tool</Link> is strictly for <strong>educational purposes only</strong>. It is NOT intended to diagnose medical conditions, provide medical advice, replace professional medical evaluation, or substitute for emergency medical treatment.</p>
          <p><strong>Seek immediate emergency medical care if you or anyone nearby experiences:</strong></p>
          <ul>
            <li>Difficulty breathing or swallowing after a bite or sting</li>
            <li>Swelling of the face, lips, throat, or tongue</li>
            <li>A rapid, irregular, or weak heartbeat</li>
            <li>Severe dizziness, fainting, or loss of consciousness</li>
            <li>A widespread rash or hives across the body</li>
            <li>Severe, spreading pain or visible tissue darkening around a bite</li>
            <li>Fever, nausea, or vomiting following a bite or sting</li>
          </ul>
          <p>These symptoms may indicate anaphylaxis or severe envenomation — both life-threatening medical emergencies requiring immediate professional treatment. Do not use this tool as a substitute for emergency care. Call emergency services immediately.</p>

          <h2>3. Pest Control Disclaimer</h2>
          <p>Identification of an insect as a potential pest species does not constitute pest control advice. Always consult a licensed pest control professional before taking action to remove or exterminate insects, particularly for social insects like <Link href="/wasp-identifier">wasps</Link>, <Link href="/bee-identifier">bees</Link>, or <Link href="/ant-identifier">ants</Link>, which can pose significant safety risks if disturbed incorrectly. Many insects that appear to be pests are actually beneficial species — misidentification followed by pesticide use can cause serious ecological harm.</p>

          <h2>4. Accuracy Limitations</h2>
          <p>Our AI identification system achieves high accuracy on clear, well-lit, close-up photographs of common species. Accuracy may be significantly reduced for rare or regional species, blurry or dark photographs, juvenile or larval forms that differ from adults, species with high visual similarity to other species, and damaged or deceased specimens with altered coloration or structure. Always cross-reference important identifications with field guides or professional entomologists.</p>

          <h2>5. No Professional Relationship</h2>
          <p>Use of BugIdentifier.ai does not create any professional relationship of any kind — including medical, veterinary, legal, entomological, or pest control. The website and its operators accept no liability for any decisions made based on information provided by our tools.</p>

          <h2>6. Contact</h2>
          <p>If you have questions about this disclaimer, please <Link href="/contact">contact us</Link> at hello@bugidentifier.ai.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
