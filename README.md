# Shadcn — React + Vite UI Demo

A small React project scaffolded with Vite showcasing components and utilities inspired by the shadcn/ui approach. It includes a set of reusable components, routing, and basic Firebase usage.

## Features

- React 19 + Vite
- Reusable UI components under `src/components/ui`
- Example pages and routes in `src/screen` and `src/routes/Router.jsx`
- Firebase integration in `src/firebase/firebase.js`
- Tailwind / Radix UI utilities (config in package.json dependencies)

## Prerequisites

- Node.js (LTS recommended, >=16)
- npm (or pnpm/yarn if you prefer; instructions below use npm)

## Quick start

1. Install dependencies

	npm install

2. Start development server (Vite)

	npm run dev

3. Build for production

	npm run build

4. Preview the production build locally

	npm run preview

5. Lint the project

	npm run lint

The `scripts` available in this project (from `package.json`) are:

- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview a production build locally
- `lint` — run ESLint

## Project structure (important files)

- `index.html` — Vite entry
- `src/main.jsx` — React entry
- `src/index.js` / `src/index.css` — app boot and global styles
- `src/App.jsx` — top-level app component
- `src/routes/Router.jsx` — react-router routes
- `src/components/` — app components (UI and demo components)
- `src/components/ui/` — small reusable UI primitives (button, input, card, dropdown, etc.)
- `src/firebase/firebase.js` — Firebase configuration and helpers
- `src/context/ContextProvider.jsx` — React context provider
- `public/` — static assets

Example components included:

- `Button`, `Avatar`, `Card`, `DropdownMenu`, `Input`, `Label`, `Separator`, `Spinner`
- Demo components: `Navmenu`, `RelatedProducts`, `SingleProductCart`, `DropdownMenuDemo`, `ButtonGroup`

## Notes on Tailwind / UI

This project includes Tailwind-related packages and Radix UI primitives. If you're adding Tailwind configuration, ensure `tailwind.config.js` and the PostCSS pipeline are present.

## Firebase

Firebase is included under `src/firebase`. Keep secrets out of source control; use environment variables for API keys when preparing production deployments.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description

## License

This project doesn't include an explicit license file. Add a `LICENSE` (for example, MIT) if you want to permit reuse.

## Contact / Next steps

If you'd like, I can:

- Add a short `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`
- Add a small CI workflow (GitHub Actions) to run ESLint and the Vite build
- Add a `LICENSE` file (MIT by default)

If you want specific changes to the README (branding, badges, screenshots, or a longer usage guide), tell me what to include and I'll update it.
