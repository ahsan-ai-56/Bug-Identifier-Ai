import Groq from "groq-sdk";
export const config = { api: { bodyParser: { sizeLimit: "10mb" } } };
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { image, mimeType, insectType } = req.body;
  if (!image) return res.status(400).json({ error: "No image provided" });
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const hint = insectType ? `This is likely a ${insectType}. ` : "";
  const prompt = `You are an expert entomologist with 30 years of experience. ${hint}Carefully analyze this image and identify the insect, bug, spider, or arthropod.

Respond ONLY in this exact JSON format with NO extra text:
{
  "found": true,
  "commonName": "Full common name",
  "scientificName": "Genus species",
  "order": "Scientific order name",
  "family": "Scientific family name",
  "confidence": 94,
  "dangerLevel": "Harmless",
  "description": "Write 3-4 detailed sentences describing this species, its appearance, behavior, lifecycle, and ecological importance.",
  "habitat": "Describe the specific habitats and environments where this species is commonly found.",
  "diet": "Describe in detail what this species eats, how it feeds, and its role in the food chain.",
  "size": "Adult size range with measurement unit",
  "region": "List all major geographic regions and countries where this species is found worldwide.",
  "funFact": "Write one fascinating, surprising, or little-known fact about this species that would amaze people.",
  "prevention": "Provide 3-4 practical tips to prevent this insect from becoming a pest, or how to safely coexist with it."
}

dangerLevel must be one of: "Harmless", "Mildly Irritating", "Can Bite/Sting", "Venomous", "Dangerous"
confidence must be a number between 60-99.

If no insect, bug or arthropod is visible in the image:
{"found": false, "message": "No insect detected in the image. Please upload a clear, close-up photo of the insect you want to identify."}`;

  try {
    const response = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: `data:${mimeType || "image/jpeg"};base64,${image}` } }, { type: "text", text: prompt }] }],
      temperature: 0.1, max_tokens: 1200,
    });
    const text = response.choices[0]?.message?.content || "";
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return res.status(200).json({ found: false, message: "Could not analyze the image. Please try a clearer, well-lit photo." });
    return res.status(200).json(JSON.parse(match[0]));
  } catch (e) { console.error(e); return res.status(500).json({ error: "Analysis failed. Please try again in a moment." }); }
}
