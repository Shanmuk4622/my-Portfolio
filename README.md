# Bonala Shanmukesh — AI/ML Portfolio

> **Deep Learning Enthusiast | Computer Vision Developer | AI Researcher**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?logo=vite)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Live Demo**: [shanmukeshbonala.vercel.app](https://shanmukeshbonala.vercel.app/)

---

## Features

- **Dark/Light Mode** — Seamless theme switching with localStorage persistence
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Page Transitions** — Smooth AnimatePresence transitions with Framer Motion
- **Scroll-Reveal Animations** — Sections animate into view as you scroll
- **3D Tilt Cards** — Interactive perspective hover effects on project cards
- **Animated Counters** — Number animations on About page stats
- **Project Filtering** — Filter projects by technology tags
- **Research Section** — Academic research, publications, and peer review
- **Particle Hero Background** — Animated floating particles on homepage
- **Navbar Scroll Effect** — Navbar shrinks and gets shadow on scroll
- **Skeleton Loaders** — Content placeholders during page loading
- **Contact Form** — Functional email integration via EmailJS
- **Accessible** — ARIA labels, focus states, semantic HTML, skip-to-content link
- **SEO Optimized** — Open Graph meta tags, JSON-LD structured data, canonical URLs
- **Type Animation** — Dynamic role display on homepage

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, React Router 7, Framer Motion |
| **Styling** | CSS3 with CSS Variables, Responsive Design |
| **Build Tool** | Vite 7 |
| **Icons** | React Icons |
| **Email** | EmailJS |
| **Animations** | Framer Motion, React Type Animation |
| **Deployment** | Vercel |

---

## Project Structure

```
my-portfolio/
├── public/                     # Static assets (images, GIFs, PDFs)
├── src/
│   ├── assets/                 # Images, resume PDF
│   ├── components/             # Reusable React components
│   │   ├── Navbar.jsx          # Navigation with mobile menu + scroll shrink
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── ProjectCard.jsx     # Project display cards with 3D tilt
│   │   ├── SkillsGrid.jsx      # Skills display grid
│   │   ├── ActivityTimeline.jsx # Interactive activity timeline
│   │   ├── ExperienceTimeline.jsx # Professional experience timeline
│   │   ├── ScrollReveal.jsx    # Intersection observer scroll animations
│   │   ├── TiltCard.jsx        # 3D perspective tilt wrapper
│   │   ├── ScrollToTop.jsx     # Auto scroll-to-top on route change
│   │   ├── BackToTop.jsx       # Floating back-to-top button
│   │   └── LoadingSpinner.jsx  # Spinner + skeleton loaders
│   ├── context/                # React Context (Theme)
│   ├── data/                   # JSON data files
│   │   ├── projects.json       # Project portfolio entries
│   │   ├── skills.json         # Skills by category
│   │   ├── activity.json       # Activities, achievements, hackathons
│   │   ├── experience.json     # Professional experience
│   │   ├── certifications.json # Certification list
│   │   └── research.json       # Research papers and publications
│   ├── pages/                  # Page components
│   │   ├── HomePage.jsx        # Hero with particles, type animation, stats
│   │   ├── AboutPage.jsx       # Bio, animated stats, skills
│   │   ├── ProjectsPage.jsx    # Project grid with tag filtering
│   │   ├── ExperiencePage.jsx  # Professional experience timeline
│   │   ├── ActivityPage.jsx    # Activities with search filter
│   │   ├── ResearchPage.jsx    # Research & publications
│   │   ├── CertificationsPage.jsx # Certification cards
│   │   ├── ContactPage.jsx     # Contact form + social links
│   │   └── NotFoundPage.jsx    # 404 page
│   ├── App.jsx                 # Routes, page transitions, layout
│   ├── main.jsx                # Entry point with providers
│   └── index.css               # Global styles & CSS variables
├── scripts/                    # Utility scripts
├── templates/                  # Update templates
├── AGENTS.md                   # AI agent configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/Shanmuk4622/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SITE_URL=https://yourportfolio.com
```

---

## Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #007bff;
  --bg-color: #ffffff;
  --text-primary-color: #1a1a2e;
}

body.dark {
  --primary-color: #4fd1c5;
  --bg-color: #0f0f1a;
  --text-primary-color: #f5f6fa;
}
```

### Content Updates

Update portfolio content by editing JSON files in `src/data/`:

- `projects.json` — Projects with links, tags, images, and dates
- `skills.json` — Skills organized by category
- `activity.json` — Activities, achievements, hackathons
- `experience.json` — Professional experience entries
- `certifications.json` — Certification cards
- `research.json` — Research papers, publications, academic service

---

## Connect With Me

<p align="center">
  <a href="https://www.linkedin.com/in/shanmukesh-bonala/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/Shanmuk4622">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://x.com/Shanmukesh4622">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/>
  </a>
  <a href="mailto:shanmueksh.bonala@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
</p>

## Open to Opportunities

- AI/ML Research Internships
- Computer Vision Engineering Roles
- Full-Stack Development Positions
- Research Collaborations
- Open Source Contributions

## License

This project is open source under the [MIT License](LICENSE).