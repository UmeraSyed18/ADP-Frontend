# AI Disaster Prediction — Frontend

A responsive React + Vite web app that predicts earthquake and wildfire risks using AI, offers safety guidance, and helps users prepare through interactive features.

## Features

- 🌍 Enter a city and get AI-predicted earthquake and wildfire risk (30 & 60 day probabilities)
- 📋 Safety Hub with actionable before, during, and after checklists for each disaster
- ✅ Interactive Quizzes for Earthquake and Wildfire safety (shows correct/incorrect answers with reasons)
- 📰 News & Awareness section to stay updated
- ♿ Accessibility support (Dark mode, Dyslexia font, Colorblind mode)
- 🔎 Fully responsive design optimized for mobile and desktop

## Tech Stack

- React 18 + Vite
- Framer Motion (animations)
- React Router v6
- Custom CSS with theme variables
- REST API integration (from backend)
- Deployed on Vercel

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/UmeraSyed18/ADP-Frontend.git
cd ADP-Frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment file**

```bash
cp .env.example .env
```

4. **Add your API base URL**

```bash
# Open .env and set:
VITE_API_BASE_URL=https://adp-backend-ecto.onrender.com
```

5. **Start the development server**

```bash
npm run dev
```

6. **Build for production**

```bash
npm run build
```

7. **Preview production build locally**

```bash
npm run preview
```

---

## Project Structure

```bash
src/
├── components/        # Navbar, Footer, Layout, UI blocks
├── pages/             # Home, Prediction, About, News, SafetyHub, Quizzes
├── styles/            # Global and scoped CSS
├── assets/            # Images and icons
├── utils/             # API helpers
├── main.jsx           # App entry point
public/                # Static assets
```

---

## Environment Variables

```bash
VITE_API_BASE_URL=https://adp-backend-ecto.onrender.com
```

---

## License

```bash
MIT License © 2024
```
