# React TypeScript Assignment Showcase

## Overview
**React TypeScript Assignment Showcase** is a **React + TypeScript + Vite** multi-page application demonstrating a variety of front-end features. It leverages **React Router** for navigation and includes interactive components such as editable/deletable lists.

This project serves as a collection of small, self-contained exercises or assignments, showcasing modern React patterns, routing, and TypeScript-based component development.

## Why this project exists
The project was built to:
- Demonstrate proficiency in **React** and **TypeScript**.
- Showcase **React Router** for client-side navigation.
- Implement CRUD functionality in a reusable component (`MyLi`).
- Provide a portfolio-ready example of organizing multiple small apps within a single codebase.

## Features
- **Multi-Page Navigation** — Switch between Home, About, and assignment pages.
- **CRUD Person List** — Add, edit, and delete entries via an interactive table row component.
- **Reusable Components** — Modular structure for assignment-specific pages.
- **React Router Integration** — Uses `<Link>` and `<Outlet>` for clean, maintainable routing.

> Key modules:
> - `src/App.tsx` — Root layout with navigation and outlet.
> - `src/components/MyLi.tsx` — Editable/deletable list item component.
> - `src/components/Assignment3App.tsx` / `Assignment5App.tsx` — Self-contained assignment pages.
> - `src/components/Home.tsx` / `About.tsx` — Static informational pages.

## Quick start (clone & run)
```bash
# 1) Clone the repository
git clone <https://github.com/DennisNHanrieder/onm6.git>
cd onm6-main/onm6-main

# 2) Install dependencies
npm install

# 3) Start the development server
npm run dev
```

## Dependencies & setup
- **Core tech stack:** Node.js (v18+), React, TypeScript, Vite, React Router.
- **Package manager:** npm (pnpm/yarn also supported).
- **Recommended:** Use `nvm` or `asdf` to ensure Node version compatibility.

### Direct dependencies
- `react` — Component-based UI library.
- `react-dom` — DOM rendering for React components.
- `react-router-dom` — Client-side routing.

### Dev dependencies
- `typescript` — Static typing.
- `@vitejs/plugin-react` — Vite plugin for React.
- `eslint` + React plugins — Code style enforcement.
- `vite` — Development server and build tool.

## Common scripts
- **Install:** `npm install`
- **Development (HMR):** `npm run dev`
- **Build (production):** `npm run build`
- **Preview build:** `npm run preview`
- **Lint code:** `npm run lint`

## How to run tests
No tests are configured. Suggested setup:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
# Add to package.json:
# "test": "vitest"
npm test
```

## How to contribute
1. Fork the repository and create a feature branch.
2. Keep code style consistent and modular.
3. Document any new features or assignment pages.
4. Open a pull request describing your changes.

## What powers the core functionality?
- **React + TypeScript** — Type-safe, component-based architecture.
- **React Router** — Declarative navigation and nested routing.
- **Vite** — Fast development server and modern build tooling.

---

