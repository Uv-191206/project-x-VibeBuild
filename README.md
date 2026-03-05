# 🚀 VibeBuild — AI Driven Solutions & Vibe Coding

A premium, interactive workshop platform renovated with a **Claymorphism** aesthetic. Built for hackathon-style AI workshops, it features soft 3D UI elements, tactile interactions, and a modern 'Outfit' typography. Participants can manage teams, submit projects, and showcase their work from a stunning 3D dashboard.

**Main Repository:** [https://github.com/Uv-191206/project-x-VibeBuild.git](https://github.com/Uv-191206/project-x-VibeBuild.git)  
**Live Platform:** [https://project-x-vibe-build.vercel.app/](https://project-x-vibe-build.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-FF0055?logo=framer)
![Aesthetic](https://img.shields.io/badge/Theme-Claymorphism-blue?style=flat&color=4834d4)

---

## 🌍 Participant Showcases

The following projects were built during the workshop:

| Participant | Project Repo | Live Deployment |
|-------------|--------------|-----------------|
| **Yogi Patel** | [Clone-Yogi](https://github.com/Uv-191206/clone-yogi-1-digital-bridge-project.git) | [Live Demo](https://clone-yogi-1-digital-bridge-project.vercel.app/) |
| **Smeet** | [Clone-Smeet](https://github.com/Uv-191206/clone-smeet-project.git) | [Live Demo](https://clone-smeet-project.vercel.app/) |
| **Prashant** | [Clone-Prashant](https://github.com/Uv-191206/clone-prashant-project.git) | [Live Demo](https://clone-prashant-project.vercel.app/) |
| **Hitansh** | [Clone-Hitansh](https://github.com/Uv-191206/clone-hitansh-project.git) | [Live Demo](https://clone-hitansh-project.vercel.app/) |
| **Yuvraj & Jeet** | [BharatAgri-AI](https://github.com/jeetptl1503/BharatAgri-AI.git) | [Live Demo](https://bharatagri-ai.vercel.app/) |
| **Dev** | [Clone-Dev-Data](https://github.com/Uv-191206/clone-dev-data.git) | *Pending* |
| **Rohan** | [Clone-Rohan](https://github.com/Uv-191206/clone-rohan_testproj12.git) | [Live Demo](https://clone-rohan-testproj12.vercel.app/) |
| **Harsh** | [Clone-Harsh](https://github.com/Uv-191206/clone-harsh-supreme-education-website.git) | [Live Demo](https://clone-harsh-supreme-education-websi.vercel.app/) |
| **Pransu** | [Clone-VeriLearn](https://github.com/Uv-191206/clone-verilearn-pransu.git) | [Live Demo](https://clone-verilearn-pransu.vercel.app/) |
| **Richa** | [Clone-Academic-Hub](https://github.com/Uv-191206/clone-academic_hub-richa.git) | [Live Demo](https://clone-academic-hub-richa.vercel.app/) |
| **Vraj & Yash** | *N/A* | [Live Demo](https://skillbridge-career-path.lovable.app/dashboard) |

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Individual Auth** | JWT login via User ID or Email, rate-limited (5 attempts/15min), HTTP-only cookies |
| 👥 **Self-Service Teams** | Participants create teams from the dashboard (team name, members, domain) |
| 📊 **Dashboard** | Countdown timer, progress tracker, team creation, project submission with confetti |
| 🌍 **Project Showcase** | Public grid with domain filters, search, hover animations & student submission form |
| 🤖 **AI Chatbot** | Floating assistant with OpenAI integration + built-in fallback guides for GitHub & Vercel deployment |
| 📈 **LOC Counter** | Real-time tracking of lines of code written across all participant projects |
| 🖼️ **Gallery** | Masonry layout with lightbox, video model & admin upload/approval system |
| 📋 **Attendance** | Admin CRUD with first/second half toggles & CSV export |
| 🎓 **Certificates** | Admin-issued certificates (name, ID, type) with PDF generation & QR code |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 + Custom CSS |
| **Animations** | Framer Motion |
| **Database** | MongoDB via Mongoose (optional — falls back to in-memory store) |
| **Auth** | JWT (jose + jsonwebtoken) + bcryptjs |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and edit as needed:

```bash
cp .env.local.example .env.local
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🚢 Deployment

### Vercel + MongoDB Atlas (Recommended)

1. **MongoDB Atlas** (free): Create a cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. **GitHub**: Push your code
3. **Vercel**: Import repo and add `MONGODB_URI` and `JWT_SECRET`.

---

## 📄 License

MIT
