# AGENTS.md — AI Agent Configuration for my-portfolio

## Project Overview

This is Bonala Shanmukesh's academic/professional portfolio built with React 19 + Vite 7. It showcases AI/ML projects, research, experience, certifications, and skills through a modern single-page application with dark/light theming.

## Development Commands

```bash
npm run dev          # Start Vite dev server with HMR (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview the production build locally
npm run lint         # Run ESLint across the project
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (function components, hooks) |
| Build | Vite 7 |
| Routing | React Router 7 (lazy-loaded pages) |
| Animation | Framer Motion 12 (AnimatePresence, useInView, scroll-reveal) |
| Styling | Plain CSS with CSS custom properties (variables) |
| Icons | React Icons (Font Awesome) |
| Contact | EmailJS (browser SDK) |
| Type Animation | react-type-animation |
| Deploy | Vercel (SPA rewrites) |

## Architecture

```
App.jsx (Routes + Layout)
 ├── Navbar (sticky, scroll-aware)
 ├── <Suspense fallback={<LoadingSpinner />}>
 │    └── AnimatePresence
 │         └── Routes (lazy loaded pages)
 ├── Footer
 ├── ScrollToTop (route change listener)
 └── BackToTop (floating button)
```

### Key Patterns

1. **Theme management** — Context API via `ThemeContext`. Stores preference in localStorage, applies `body.light` / `body.dark` classes. CSS variables defined in `index.css`.

2. **Page transitions** — `AnimatePresence` wraps `Routes` with `key={location.pathname}`. Each page is wrapped in `AnimatedPage` with fade+slide variants.

3. **Data-driven content** — All portfolio content (projects, experience, activities, certifications, research, skills) is stored as JSON in `src/data/`. Components consume these imports directly.

4. **Lazy loading** — All page components use `React.lazy()` to enable code splitting. `LoadingSpinner` serves as the Suspense fallback.

5. **Scroll-reveal** — `ScrollReveal` component wraps content and uses `framer-motion`'s `whileInView` with configurable direction, delay, and distance.

6. **3D tilt** — `TiltCard` component provides perspective hover effects on cards.

7. **Responsive** — Mobile-first responsive design with `@media` breakpoints at 900px (navbar) and 768px (general).

## File Conventions

- Components: `PascalCase.jsx` + `PascalCase.css` in `src/components/`
- Pages: `PascalCase.jsx` + `PascalCase.css` in `src/pages/`
- Data: `kebab-case.json` in `src/data/`
- Context: `PascalCase.jsx` in `src/context/`
- Static assets: `public/` for images, GIFs, PDFs
- Imported assets: `src/assets/` for profile.png, resume.pdf

## Important Notes

- **Environment variables** must be prefixed with `VITE_` to be accessible via `import.meta.env.VITE_*`
- **EmailJS keys** are configured in `.env` — never commit `.env` to version control
- **Vercel deployment** uses `vercel.json` with SPA rewrite rules (all routes → index.html)
- **Certification images** with `file://` URLs get transformed to public path references
- **CSS variables** use `--bg-color`, `--text-primary-color`, `--primary-color`, etc. — always use these for theme compatibility
- **Timeline components** use CSS pseudo-elements for the vertical line and node dots

## Linting

ESLint config is in `eslint.config.js` with `react-hooks` and `react-refresh` plugins. Run `npm run lint` before committing.