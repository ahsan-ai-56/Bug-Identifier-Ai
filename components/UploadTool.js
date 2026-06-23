import { useState, useRef } from "react";

const DANGER_MAP = {
  Harmless: { cls: "d-safe", emoji: "✅", label: "Harmless" },
  "Mildly Irritating": { cls: "d-mild", emoji: "⚠️", label: "Mildly Irritating" },
  "Can Bite/Sting": { cls: "d-sting", emoji: "🔶", label: "Can Bite/Sting" },
  Venomous: { cls: "d-venom", emoji: "☠️", label: "Venomous" },
  Dangerous: { cls: "d-danger", emoji: "🚨", label: "Dangerous" },
};

export default function UploadTool({ apiRoute = "/api/identify", accentColor = "#22c55e", dropLabel = "Drop an insect photo here", btnLabel = "🔍 Identify Now" }) {
  const [image, setImage] = useState(null);
  const [b64, setB64] = useState(null);
  const [mime, setMime] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef(null);
  const resultRef = useRef(null);

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    setResult(null); setError(null); setMime(file.type);
    const r = new FileReader();
    r.onload = e => { setImage(e.target.result); setB64(e.target.result.split(",")[1]); };
    r.readAsDataURL(file);
  }

  async function identify() {
    if (!b64) return;
    setLoading(true); setError(null); setResult(null);
    try {
      const res = await fetch(apiRoute, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ image: b64, mimeType: mime }) });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (e) { setError(e.message || "Analysis failed. Please try again."); }
    finally { setLoading(false); }
  }

  function reset(e) { e?.stopPropagation(); setImage(null); setB64(null); setResult(null); setError(null); }
  const danger = result?.found ? (DANGER_MAP[result.dangerLevel] || DANGER_MAP["Harmless"]) : null;

  return (
    <>
      <div className="upload-card">
        <div className={`drop-zone${drag ? " drag" : ""}`} style={drag ? { borderColor: accentColor } : {}}
          onDragOver={e => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
          onDrop={e => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => !image && fileRef.current?.click()}>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
          {image ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={image} alt="Preview" className="preview-img" />
              <button onClick={reset} style={{ marginTop: "8px", background: "none", border: "none", color: accentColor, cursor: "pointer", fontSize: ".82rem", textDecoration: "underline" }}>✕ Choose different photo</button>
            </div>
          ) : (
            <>
              <div className="drop-icon">📸</div>
              <p>{dropLabel}</p>
              <p>or <strong style={{ color: accentColor }}>click to browse</strong></p>
              <small>JPG, PNG, WEBP — max 10 MB</small>
            </>
          )}
        </div>
        <button className="btn btn-primary btn-full btn-lg" style={{ marginTop: "1rem", background: accentColor }} onClick={identify} disabled={!b64 || loading}>
          {loading ? <><div className="spinner" /> Analyzing your photo...</> : btnLabel}
        </button>
      </div>

      {(result || error) && (
        <div className="result-wrap" ref={resultRef}>
          {error && <div className="error-box"><div style={{ fontSize: "2rem" }}>⚠️</div><p style={{ fontWeight: 600, marginTop: ".5rem" }}>{error}</p><button className="btn btn-outline" style={{ marginTop: "1rem" }} onClick={reset}>Try Again</button></div>}
          {result && !result.found && <div className="error-box"><div style={{ fontSize: "2.5rem", marginBottom: ".5rem" }}>🔍</div><p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: ".4rem" }}>No Match Found</p><p style={{ color: "#64748b", fontSize: ".9rem" }}>{result.message}</p><button className="btn btn-outline" style={{ marginTop: "1rem" }} onClick={reset}>Try Another Photo</button></div>}

          {result && result.found && (
            <div className="result-card">
              {/* HEADER */}
              <div className="result-head">
                <div className="result-ico">🔬</div>
                <div style={{ flex: 1 }}>
                  <div className="result-name">{result.commonName}</div>
                  <div className="result-sci">{result.scientificName}</div>
                  <div className="conf-row">
                    <div className="conf-bar"><div className="conf-fill" style={{ width: `${result.confidence}%` }} /></div>
                    <span className="conf-txt">{result.confidence}% Match</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                    {result.dangerLevel && <span className={`d-badge ${danger.cls}`}>{danger.emoji} {danger.label}</span>}
                    {result.order && <span style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.8)", padding: "3px 10px", borderRadius: "100px", fontSize: ".72rem", fontWeight: 600 }}>{result.order}</span>}
                    {result.family && <span style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.6)", padding: "3px 10px", borderRadius: "100px", fontSize: ".72rem", fontWeight: 600 }}>{result.family}</span>}
                  </div>
                </div>
              </div>

              {/* PHOTO + INTRO */}
              {image && (
                <div style={{ padding: "1.5rem 1.75rem 0", background: "#fff", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <img src={image} alt="Uploaded insect" style={{ width: 130, height: 130, objectFit: "cover", borderRadius: 12, border: "2px solid #e2e8f0", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#1e293b", marginBottom: ".3rem" }}>✅ Identification Complete!</div>
                    <div style={{ fontSize: ".88rem", color: "#64748b", lineHeight: 1.7 }}>Our AI analyzed your photo and found a <strong style={{ color: "#22c55e" }}>{result.confidence}% match</strong> with <em>{result.commonName}</em>. Here is a complete breakdown including physical characteristics, habitat, diet, danger level, and expert tips.</div>
                  </div>
                </div>
              )}

              <div className="result-body">
                {/* Full Description */}
                {result.description && (
                  <div className="r-block full" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <div className="r-lbl" style={{ color: "#15803d" }}>📋 Full Description</div>
                    <div className="r-val" style={{ fontSize: ".95rem", lineHeight: 1.75 }}>{result.description}</div>
                  </div>
                )}

                {/* Scientific Classification */}
                <div className="r-block full">
                  <div className="r-lbl">🔬 Scientific Classification</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "12px", marginTop: "8px" }}>
                    {[["Common Name", result.commonName], ["Scientific Name", result.scientificName], ["Order", result.order], ["Family", result.family], ["Size", result.size]].filter(([, v]) => v).map(([k, v]) => (
                      <div key={k} style={{ background: "#f8fafc", borderRadius: "8px", padding: ".6rem .85rem", border: "1px solid #e2e8f0" }}>
                        <div style={{ fontSize: ".65rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", marginBottom: "2px" }}>{k}</div>
                        <div style={{ fontWeight: 700, fontSize: ".85rem", color: "#1e293b" }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physical Characteristics */}
                {result.size && (
                  <div className="r-block">
                    <div className="r-lbl">📏 Physical Characteristics</div>
                    <div className="r-val">
                      <div style={{ marginBottom: "4px" }}><strong>Size:</strong> {result.size}</div>
                      {result.family && <div style={{ marginBottom: "4px" }}><strong>Family:</strong> {result.family}</div>}
                      {result.order && <div><strong>Order:</strong> {result.order}</div>}
                    </div>
                  </div>
                )}

                {/* Habitat */}
                {result.habitat && (
                  <div className="r-block">
                    <div className="r-lbl">🌿 Habitat & Distribution</div>
                    <div className="r-val" style={{ lineHeight: 1.7 }}>
                      <div style={{ marginBottom: "6px" }}>{result.habitat}</div>
                      {result.region && <div style={{ fontSize: ".82rem", color: "#64748b" }}>📍 Found in: {result.region}</div>}
                    </div>
                  </div>
                )}

                {/* Diet */}
                {result.diet && (
                  <div className="r-block">
                    <div className="r-lbl">🍽️ Diet & Behavior</div>
                    <div className="r-val" style={{ lineHeight: 1.7 }}>{result.diet}</div>
                  </div>
                )}

                {/* Region */}
                {result.region && (
                  <div className="r-block">
                    <div className="r-lbl">🗺️ Geographic Range</div>
                    <div className="r-val" style={{ lineHeight: 1.7 }}>{result.region}</div>
                  </div>
                )}

                {/* Danger Level */}
                {result.dangerLevel && (
                  <div className="r-block" style={["Venomous", "Dangerous"].includes(result.dangerLevel) ? { background: "#fef2f2", border: "1px solid #fecaca" } : { background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                    <div className="r-lbl" style={{ color: result.dangerLevel === "Harmless" ? "#15803d" : "#dc2626" }}>{danger.emoji} Danger Level & Safety</div>
                    <span className={`d-badge ${danger.cls}`} style={{ marginBottom: "8px" }}>{danger.label}</span>
                    <div className="r-val" style={{ lineHeight: 1.7, fontSize: ".88rem", marginTop: "6px" }}>
                      {result.dangerLevel === "Harmless" && "This species poses no known threat to humans. It is completely safe to observe closely and is beneficial to the ecosystem."}
                      {result.dangerLevel === "Mildly Irritating" && "This species may cause mild skin irritation or allergic reaction in sensitive individuals. Avoid direct contact. Wash hands if touched."}
                      {result.dangerLevel === "Can Bite/Sting" && "This species can bite or sting when provoked or threatened. Keep a safe distance. Do not handle without protective equipment."}
                      {result.dangerLevel === "Venomous" && "⚠️ VENOMOUS — This species can inject venom through a bite or sting. Do NOT handle this insect. Seek immediate medical attention if bitten or stung."}
                      {result.dangerLevel === "Dangerous" && "🚨 DANGER — This species poses a serious risk to human health. Avoid contact immediately. If exposure occurs, contact emergency services."}
                    </div>
                  </div>
                )}

                {/* Prevention */}
                {result.prevention && (
                  <div className="r-block full" style={{ background: "#eff6ff", border: "1px solid #bae6fd" }}>
                    <div className="r-lbl" style={{ color: "#0369a1" }}>🛡️ Prevention & Control Tips</div>
                    <div className="r-val" style={{ lineHeight: 1.75 }}>{result.prevention}</div>
                  </div>
                )}

                {/* Bite specific fields */}
                {result.biteType && (
                  <div className="r-block full" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                    <div className="r-lbl" style={{ color: "#dc2626" }}>🩺 Bite / Sting Type</div>
                    <div className="r-val">{result.biteType} — Likely caused by: {result.likelyCause || result.commonName}</div>
                  </div>
                )}
                {result.symptoms && (
                  <div className="r-block full">
                    <div className="r-lbl">🤒 Symptoms</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                      {(Array.isArray(result.symptoms) ? result.symptoms : [result.symptoms]).map(s => (
                        <span key={s} style={{ background: "#fee2e2", color: "#dc2626", padding: "3px 10px", borderRadius: "100px", fontSize: ".78rem", fontWeight: 600 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
                {result.immediateAction && (
                  <div className="r-block full" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                    <div className="r-lbl" style={{ color: "#92400e" }}>⚡ Immediate First Aid Action</div>
                    <div className="r-val" style={{ lineHeight: 1.75 }}>{result.immediateAction}</div>
                  </div>
                )}
                {result.whenToSeekHelp && (
                  <div className="r-block full" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                    <div className="r-lbl" style={{ color: "#dc2626" }}>🏥 When to Seek Medical Help</div>
                    <div className="r-val" style={{ color: "#7f1d1d", lineHeight: 1.75 }}>{result.whenToSeekHelp}</div>
                  </div>
                )}
                {result.healingTime && (
                  <div className="r-block">
                    <div className="r-lbl">⏱️ Expected Healing Time</div>
                    <div className="r-val">{result.healingTime}</div>
                  </div>
                )}
                {result.transmitsDiseases && result.possibleDiseases?.length > 0 && (
                  <div className="r-block full" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                    <div className="r-lbl" style={{ color: "#dc2626" }}>🦠 Possible Disease Risks</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                      {result.possibleDiseases.map(d => <span key={d} style={{ background: "#fee2e2", color: "#dc2626", padding: "3px 10px", borderRadius: "100px", fontSize: ".78rem", fontWeight: 600 }}>{d}</span>)}
                    </div>
                  </div>
                )}

                {/* Fun Fact */}
                {result.funFact && (
                  <div className="fact-box">
                    <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>💡</span>
                    <div>
                      <div className="r-lbl" style={{ color: "#92400e" }}>Did You Know? — Fun Fact</div>
                      <div className="r-val" style={{ lineHeight: 1.75, fontSize: ".95rem" }}>{result.funFact}</div>
                    </div>
                  </div>
                )}

                {/* Disclaimer for bites */}
                {result.biteType && (
                  <div className="r-block full" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
                    <div className="r-val" style={{ fontSize: ".82rem", color: "#7f1d1d" }}>⚠️ <strong>Medical Disclaimer:</strong> This result is for educational purposes only and is not a substitute for professional medical advice. If you experience severe symptoms, seek emergency care immediately.</div>
                  </div>
                )}

                {/* Buttons */}
                <div className="r-block full" style={{ background: "transparent", border: "none", textAlign: "center", paddingTop: "4px" }}>
                  <button className="btn btn-outline" onClick={reset} style={{ marginRight: "12px" }}>🔄 Identify Another Bug</button>
                  <button className="btn btn-primary" onClick={() => window.print()} style={{ background: accentColor }}>🖨️ Print Result</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
