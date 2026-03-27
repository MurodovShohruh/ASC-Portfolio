# 🌌 ASC Portfolio — MurodovShohruh

> **Architect of Scalable Code** — React + Vite + Three.js + Framer Motion

---

## ⚡ Ishga tushirish

```bash
# 1. O'rnatish
npm install

# 2. Dev server
npm run dev

# 3. Build
npm run build
```

---

## 📁 Fayl tuzilmasi

```
src/
├── app/
│   └── layout.jsx          # Navbar + Footer (multi-language)
├── components/
│   ├── ui/
│   │   ├── Button.jsx       # Primary + Ghost tugmalar
│   │   ├── Card.jsx         # Hover animatsiyali karta
│   │   └── Container.jsx    # Section wrapper
│   ├── sections/
│   │   ├── Hero.jsx         # Bosh sahifa
│   │   ├── About.jsx        # Skills + Stats
│   │   ├── Projects.jsx     # GitHub API proyektlar
│   │   └── Contact.jsx      # Contact form + social links
│   └── 3d/
│       └── Scene.jsx        # Three.js yulduzlar
├── hooks/
│   ├── useGithubRepos.js    # GitHub API hook
│   └── useScrollAnimation.js
├── store/
│   └── useStore.js          # Zustand state
├── services/
│   └── githubService.js     # GitHub API service
├── utils/
│   └── constants.js         # Skills, Stats, i18n (UZ/EN/RU)
├── styles/
│   └── globals.css
├── App.jsx                  # Root + lazy loading
└── main.jsx
```

---

## 🌍 Multi-language

`src/utils/constants.js` ichidagi `LANG` obyektiga tarjimalar qo'shilgan:
- 🇺🇿 O'zbekcha (`uz`)
- 🇬🇧 English (`en`)
- 🇷🇺 Русский (`ru`)

Navbar'dagi tugmalar orqali almashtiriladi.

---

## 🔗 GitHub API sozlash

`src/services/githubService.js` faylida username'ni o'zgartiring:

```js
USERNAME: 'MurodovShohruh', // ← shu yerda
```

---

## 📬 Contact Form ulash

`src/components/sections/Contact.jsx` ichidagi `handleSubmit` funksiyasida:

**Variant 1 — Formspree:**
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Variant 2 — FormSubmit:**
```html
<!-- index.html ichiga qo'shing -->
<form action="https://formsubmit.co/your@email.com" method="POST">
```

---

## 🚀 Stack

| Texnologiya | Maqsad |
|---|---|
| React 18 + Vite | Ultra-fast SPA |
| Three.js / R3F | 3D yulduzlar fon |
| Framer Motion | Smooth animatsiyalar |
| Zustand | Global state |
| TailwindCSS | Utility styling |
| GitHub API | Real proyektlar |
| Axios | HTTP so'rovlar |

---

## 🌐 Deploy (Vercel)

```bash
npm run build
# dist/ papkasini Vercel'ga yuklang
# yoki: vercel --prod
```

---

🚀 **ASC — Architect of Scalable Code**
