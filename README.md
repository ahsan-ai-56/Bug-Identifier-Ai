# 🐛 BugIdentifier AI — Complete Website

Full AI-powered insect identification website with 17 pages, SEO content, background images, and detailed results.

## 📄 Pages Included
- `/` — Home (main bug identifier + full SEO content)
- `/insect-bite-identifier` — Bite Identifier + 8-type guide
- `/spider-identifier` — Spider Identifier
- `/beetle-identifier` — Beetle Identifier
- `/fly-identifier` — Fly Identifier
- `/ant-identifier` — Ant Identifier
- `/bee-identifier` — Bee Identifier
- `/wasp-identifier` — Wasp Identifier
- `/caterpillar-identifier` — Caterpillar Identifier
- `/butterfly-identifier` — Butterfly Identifier
- `/moth-identifier` — Moth Identifier
- `/mosquito-identifier` — Mosquito Identifier
- `/tick-identifier` — Tick Identifier
- `/about` — About Us
- `/contact` — Contact Us (with form)
- `/privacy-policy` — Privacy Policy
- `/disclaimer` — Disclaimer

---

## 🚀 DEPLOY ON VERCEL

### Step 1 — Get Groq API Key (Free)
1. Go to https://console.groq.com
2. Sign up free (Google login works)
3. Click "API Keys" → "Create API Key"
4. Copy your key (starts with gsk_...)

### Step 2 — Upload to GitHub
1. Go to https://github.com → New Repository
2. Name it `bug-identifier` → Create
3. Click "uploading an existing file"
4. **IMPORTANT:** Extract the ZIP first, then drag ALL files inside into GitHub
5. Make sure `package.json` is visible at the TOP LEVEL (not inside any folder)
6. Commit changes

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com → Sign in with GitHub
2. Click "Add New Project" → Import your repo
3. **BEFORE clicking Deploy** → scroll to "Environment Variables"
4. Add:
   - Name: `GROQ_API_KEY`
   - Value: `gsk_your_key_here`
5. Click **Deploy** ✅

Your site will be live in ~60 seconds!

---

## 🖥️ Local Development

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local and add your GROQ_API_KEY
npm run dev
```
Open http://localhost:3000

---

## 📁 File Structure (MUST match exactly on GitHub)
```
/ (root — package.json must be HERE)
├── package.json ✅
├── next.config.js ✅
├── .env.local.example
├── components/
│   ├── Layout.js
│   └── UploadTool.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── insect-bite-identifier.js
│   ├── spider-identifier.js
│   ├── beetle-identifier.js
│   ├── fly-identifier.js
│   ├── ant-identifier.js
│   ├── bee-identifier.js
│   ├── wasp-identifier.js
│   ├── caterpillar-identifier.js
│   ├── butterfly-identifier.js
│   ├── moth-identifier.js
│   ├── mosquito-identifier.js
│   ├── tick-identifier.js
│   ├── about.js
│   ├── contact.js
│   ├── privacy-policy.js
│   ├── disclaimer.js
│   └── api/
│       ├── identify.js
│       └── bite-identify.js
└── styles/
    └── globals.css
```
