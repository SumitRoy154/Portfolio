# Portfolio Website — Build Prompt (for Google Antigravity)

Give this to an agent in Antigravity as its task. Let it plan first, implement, then use its browser subagent to click through and verify against the checklist at the end before calling it done.

---

## Project Brief

Build a **simple, modern, premium-feeling one-page portfolio website** for a personal resume. Dark, editorial, understated luxury — think a boutique design studio's site, not a generic template. Content-forward, generous whitespace, restrained motion.

## Tech Stack

- **React 18 + Vite** — component structure, fast dev/build
- **Tailwind CSS** — utility styling, custom theme tokens for the palette below
- **Framer Motion** — all animation/transitions
- **lucide-react** — icon set (thin, minimal icons only)
- **react-scroll** or native `scrollIntoView` — smooth anchor navigation
- Single-page app, fully responsive, deployable as static output (Vercel/Netlify)

## Design System

### Color Palette (60 / 30 / 10 rule — apply precisely)

| Role | Hex | Usage (60%) |
|---|---|---|
| Background | `#1A1A1A` | Body canvas, full-bleed hero/section backgrounds |

| Role | Hex | Usage (30%) |
|---|---|---|
| Accent | `#D4AF37` | Thin 1px dividers, icon strokes, section eyebrows/subtitles, hover underlines |

| Role | Hex | Usage (10%) |
|---|---|---|
| Primary | `#E5E7EB` | Large headings, body copy, CTA button fill (text on button = `#1A1A1A`) |

Define as Tailwind theme tokens, not hardcoded hex in components:
```js
colors: {
  canvas: '#1A1A1A',
  gold: '#D4AF37',
  ivory: '#E5E7EB',
}
```

### Typography (Google Fonts)

- **Headings** — `Syne`, weight 700–800, tight letter-spacing, large scale (clamp for responsive sizing)
- **Body** — `Plus Jakarta Sans`, weight 400 (500 for nav/labels), 16–18px base, 1.6 line-height for readability on dark backgrounds
- Eyebrow/subtitle labels (e.g. "01 — About") in `#D4AF37`, small caps or letter-spaced uppercase, Plus Jakarta Sans 500

### Motion Principles

Keep it simple and purposeful — no gimmicks:
- **On scroll**: sections/cards fade + slide up (16–24px) into view once, using Framer Motion `whileInView`, staggered children (~0.08–0.12s delay each)
- **Hero load**: headline reveals in staggered word/line animation, subtitle and CTA fade in slightly after
- **Nav links**: gold underline animates in from left on hover, active-section indicator on scroll
- **Buttons**: subtle scale (1.02) + brightness lift on hover, smooth 200–300ms ease
- **Cards** (projects/certificates): gentle lift + border glow (gold) on hover, no heavy shadows
- **Section dividers**: thin gold line draws left-to-right on scroll into view
- Respect `prefers-reduced-motion`

## Site Structure — 6 Sections

### 1. Main / Hero
- Full-viewport, `#1A1A1A` background
- Headline: **Sumit Roy** (large Syne Extra Bold)
- Gold eyebrow above name: `AI/ML ENGINEER · FULL-STACK DEVELOPER`
- One-line subtitle (body font, ivory): "Computer Science undergraduate building AI-driven computer vision systems and scalable full-stack applications."
- Primary CTA (ivory fill, dark text): "Get in Touch" → scrolls to Contact
- Secondary ghost button (gold border/text): "View Projects" → scrolls to Projects
- Fixed/sticky nav: initials **SR** as logo + links (About, Projects, Experience, Certificates, Contact) + a "Resume" button (link to a downloadable PDF, or omit if not provided)

### 2. About
Bio (rewrite naturally in first or third person, don't copy verbatim):
> Computer Science engineering undergraduate specializing in AI/ML, with hands-on experience across full-stack development and AI-driven computer vision systems. Comfortable building scalable backend architectures and responsive interfaces, with a strong grounding in database systems and software engineering fundamentals — and a growing focus on GenAI engineering for enterprise-scale AI software.

Key facts row (gold-labeled stats):
- **Education**: B.Tech, Computer Science Engineering — Pillai College of Engineering, University of Mumbai (2023–2027)
- **CGPA**: 7.99 / 10
- **Location**: Navi Mumbai, Maharashtra

Skills, grouped (as pill badges or columns, thin gold border):
- **Languages**: Python, JavaScript, TypeScript, C++, HTML/CSS
- **AI / ML & Computer Vision**: OpenCV, Generative AI (LLMs, RAG), PyTorch, TensorFlow, Pandas, NumPy
- **Frameworks & Libraries**: FastAPI, React.js, Next.js, Node.js
- **Databases**: PostgreSQL, MySQL, MongoDB
- **Tools**: Git, GitHub, Docker, REST APIs
- **Core Concepts**: Data Structures & Algorithms, OOP, DBMS, Operating Systems

### 3. Projects
Two project cards, each with title, tag chips for tech stack, date, and rewritten (not copy-pasted) bullet points:

**AI-Powered Knowledge Navigator Agent** — *Dec 2025*
`React` `FastAPI` `Python` `Docker`
- Full-stack AI agent using LLM-based architectures and semantic retrieval for context-aware, domain-specific responses
- Scalable FastAPI backend with modular architecture, API routing, and schema validation
- Course discovery and personalized roadmap generation to improve recommendation relevance
- Responsive React chat interface; backend performance optimized with Docker containerization and async processing

**EventTree** — *April 2025*
`React` `Next.js` `TypeScript` `Node.js` `PostgreSQL`
- Full-stack event management platform with Role-Based Access Control (Admin, Committee, Student tiers)
- Complete event lifecycle: creation, scheduling, registration, attendance tracking, participation rewards
- Centralized admin dashboard with responsive UI and scalable backend APIs for relational data handling

Link icons (GitHub/live demo) should point to `github.com/SumitRoy154` where a specific repo isn't given — use judgment or leave as a generic GitHub icon linking to the profile.

### 4. Experience
Vertical timeline, thin gold connecting line, single entry:

**Computer Vision Intern** — Pillai College of Engineering, Panvel, Maharashtra
*Dec 2024 – Jan 2025*
- Developed an end-to-end computer vision pipeline for automated manufacturing drawing analysis, enabling intelligent dimension detection and classification
- Built an entity detection system using image processing and OCR, with preprocessing (grayscale, thresholding, morphology) to improve text extraction accuracy
- Designed algorithms to classify dimensions (diameter, radius, linear) and visualize results using bounding boxes and labeled outputs; applied edge detection for structural analysis
- Tech stack: Python, OpenCV, Tesseract OCR

### 5. Certificates & Achievements
Certificate cards (small badge/icon per card):
- **MATLAB Course** — Certification
- **CSI Coding Essentials** — Certification
- **Modern Sensors Technology & Industrial Applications** — Certification

Below the cards, a compact "Achievements" list or secondary row:
- Participated in Smart India Hackathon and Mumbai Hacks Hackathon
- Led a 13-member team building an AI-based Library Management System (NLP mini project) — full evaluation marks
- Attended E-Summit'25 at IIT Bombay
- 1st Rank, Alegria Treasure Hunt · 3rd Rank, Ad Mad Competition · 2nd Rank, Collegiate Throwball and Collegiate Basketball

### 6. Contact
Closing line: "Open to AI/ML and full-stack opportunities — feel free to reach out."
Icon-labeled links:
- Email: `sumit.roy.152004@gmail.com`
- Phone: `+91 81458 65949`
- GitHub: `github.com/SumitRoy154`
- LinkedIn: `linkedin.com/in/sumit-roy-a73098309`
- Location: Navi Mumbai, Maharashtra

Optional static contact form (name, email, message) — no backend required unless specified.
Footer: "Sumit Roy · © 2026"

## Other Requirements

- Mobile-first responsive breakpoints (sm/md/lg/xl), hamburger nav under `md`
- Accessible: sufficient contrast (verify `#E5E7EB` on `#1A1A1A` and `#D4AF37` on `#1A1A1A`), alt text on images, visible focus states in gold
- Semantic HTML (`<section>`, `<nav>`, `<header>`, `<footer>`)
- Meta tags: title, description, Open Graph basics
- Clean file structure: `components/`, one component per section, shared `Nav` and `Footer`
