import Head from "next/head";
import Link from "next/link";
import { Nav, Footer, Breadcrumb } from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – BugIdentifier AI</title>
        <meta name="description" content="BugIdentifier.ai Privacy Policy. Learn how we handle your photos, data, and personal information. We do not store your uploaded images." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <section className="hero" style={{ minHeight: "40vh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1600&q=80')" }} />
        <div className="hero-overlay" style={{ background: "linear-gradient(160deg,rgba(15,23,42,.95) 0%,rgba(30,41,59,.90) 100%)" }} />
        <div className="hero-content">
          <h1>Privacy <span style={{ color: "#22c55e" }}>Policy</span></h1>
          <p className="sub">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="section sec-white">
        <div className="container prose">
          <div className="info-box info-green">🔒 <strong>Summary:</strong> We do not store your uploaded photos. Images are processed in real-time and immediately discarded after analysis. We do not sell your data to any third parties.</div>

          <h2>1. Information We Collect</h2>
          <p><strong>Images you upload:</strong> Photos you upload for insect identification are transmitted securely to our AI processing server. Images are processed in real-time and are not stored, saved, logged, or retained after the analysis is complete. Your uploaded photos are permanently discarded after generating results.</p>
          <p><strong>Anonymous usage data:</strong> We collect anonymous, aggregated usage statistics including page views, tool usage frequency, and general geographic region at the country level only. This data cannot be used to identify you personally and is used solely to improve our services and understand which tools are most useful.</p>
          <p><strong>Contact form submissions:</strong> If you contact us via our <Link href="/contact">contact form</Link>, we collect your name, email address, subject, and message content. This information is used only to respond to your inquiry and is not shared with third parties.</p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide AI-powered insect identification services</li>
            <li>Improve the accuracy and performance of our identification tools</li>
            <li>Respond to contact form and support inquiries</li>
            <li>Analyze anonymous usage patterns to improve our website and tools</li>
          </ul>

          <h2>3. Image Processing and AI Analysis</h2>
          <p>Images you upload are transmitted securely using HTTPS encryption to our AI processing infrastructure. The AI model analyzes the visual features of your image and returns an identification result. <strong>Your images are never stored, logged, used for AI training without explicit consent, or shared with any third parties.</strong> The entire processing pipeline is designed with privacy-first principles.</p>

          <h2>4. Cookies</h2>
          <p>BugIdentifier.ai uses only essential functional cookies required for the website to operate correctly. We do not use advertising cookies, tracking pixels, third-party behavioral tracking technologies, or social media tracking. You can disable cookies in your browser settings without affecting the core identification functionality of our tools.</p>

          <h2>5. Third-Party Services</h2>
          <p>Our AI identification tools use a third-party AI API for image processing. Images are transmitted securely for analysis only and are subject to the API provider's privacy policies, which specify no long-term storage of user-submitted content. We do not use Google Analytics, Facebook Pixel, or similar advertising tracking platforms.</p>

          <h2>6. Children's Privacy</h2>
          <p>BugIdentifier.ai does not knowingly collect personal information from children under the age of 13. Our tools do not require account creation, personal data submission, or any form of registration. If you believe a child has submitted personal information through our contact form, please <Link href="/contact">contact us</Link> immediately and we will delete it promptly.</p>

          <h2>7. Data Security</h2>
          <p>All data transmissions between your browser and our servers are encrypted using HTTPS/TLS encryption. We implement industry-standard security practices to protect any data we process. However, no internet transmission is 100% secure — we encourage you not to submit sensitive personal or medical information beyond what is necessary for identification purposes.</p>

          <h2>8. Your Privacy Rights</h2>
          <p>Depending on your location, you may have rights under the GDPR (European Union), CCPA (California), or other applicable privacy laws. These rights may include the right to access, correct, delete, or port your personal data. Since we do not store your uploaded images, and contact form data is minimal, fulfilling most requests is straightforward. Contact us at hello@bugidentifier.ai for any privacy rights requests.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. Continued use of BugIdentifier.ai after any changes constitutes your acceptance of the revised Privacy Policy.</p>

          <h2>10. Contact</h2>
          <p>For privacy-related questions or concerns, contact us at <strong>hello@bugidentifier.ai</strong> or visit our <Link href="/contact">Contact page</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
