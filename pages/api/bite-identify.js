import Groq from "groq-sdk";
export const config = { api: { bodyParser: { sizeLimit: "10mb" } } };
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { image, mimeType } = req.body;
  if (!image) return res.status(400).json({ error: "No image provided" });
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const prompt = `You are an expert dermatologist and entomologist specializing in insect bites and stings identification. Analyze this image carefully.

Respond ONLY in this exact JSON format with NO extra text:
{
  "found": true,
  "biteType": "Mosquito Bite",
  "likelyCause": "Culex mosquito (Culicidae family)",
  "severity": "Mild",
  "dangerLevel": "Low",
  "symptoms": ["Small raised red bump", "Intense localized itching", "Minor swelling around bite site", "Possible redness spreading 1-2cm"],
  "appearance": "Detailed description of how this bite or sting looks on the skin.",
  "immediateAction": "Write 3-4 detailed first aid steps to take right now to treat this bite or sting.",
  "whenToSeekHelp": "Describe specific warning signs that require immediate medical attention for this type of bite.",
  "healingTime": "3-5 days",
  "transmitsDiseases": false,
  "possibleDiseases": [],
  "prevention": "Write 3-4 specific prevention tips to avoid this type of bite or sting in the future.",
  "funFact": "One interesting educational fact about this insect or its bite."
}

severity options: "Mild", "Moderate", "Severe", "Critical"
dangerLevel options: "Low", "Medium", "High", "Critical"

If no bite/sting is visible: {"found": false, "message": "No insect bite or sting detected. Please upload a clear, close-up photo of the affected skin area in good lighting."}

IMPORTANT: This is strictly for educational purposes only. Always recommend professional medical advice for serious symptoms.`;
  try {
    const response = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: `data:${mimeType || "image/jpeg"};base64,${image}` } }, { type: "text", text: prompt }] }],
      temperature: 0.1, max_tokens: 1200,
    });
    const text = response.choices[0]?.message?.content || "";
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return res.status(200).json({ found: false, message: "Could not analyze. Please try a clearer photo of the bite area in good lighting." });
    return res.status(200).json(JSON.parse(match[0]));
  } catch (e) { console.error(e); return res.status(500).json({ error: "Analysis failed. Please try again." }); }
}
