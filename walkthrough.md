# Laxa Company Website - Walkthrough

I have successfully built the "Laxa" company website using React and Tailwind CSS, following the requested Apple-like design principles.

## Project Overview

The project is a single-page React application with smooth scrolling navigation. It features a minimalist, elegant design with high-quality animations and a focus on user experience.

### Tech Stack
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Components Implemented

1.  **Navbar**: Sticky, glassmorphism effect (blur), responsive mobile menu.
2.  **Hero**: Large typography, fade-in animations, "Think Different" inspired headline.
3.  **About**: Mission, history, and team section with clean typography.
4.  **Services**: Grid layout with minimalist icons and hover effects.
5.  **Portfolio**: Filterable project grid with hover overlays.
6.  **Testimonials**: Client review cards with quote icons.
7.  **Contact**: Split layout with contact info and a clean form.
8.  **Footer**: Navigation links, social icons, and copyright.

## Design Features (Apple-Style)

- **Typography**: Uses a system font stack (San Francisco style) with careful hierarchy.
- **Color Palette**: Minimalist black (`#1d1d1f`), white, gray (`#f5f5f7`), and a signature blue (`#0071e3`).
- **Animations**: Subtle fade-ins (`framer-motion`) and smooth scrolling.
- **Whitespace**: Ample spacing to reduce cognitive load.

## Recent Updates

- **Favicon**: Updated to a circular version of the logo (`laxa_logo_circle.png`).
- **Services**: Removed hover scale effect from icons for a cleaner look.
- **Testimonials**: Temporarily hidden (commented out) in `App.jsx`.
- **Portfolio**: Fixed image paths and file extensions.

## How to Run

1.  Open the terminal in the project directory.
2.  Run `npm install` (if you haven't already).
3.  Run `npm run dev` to start the local development server.
4.  Open the provided localhost URL in your browser.

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
└── main.jsx
```
