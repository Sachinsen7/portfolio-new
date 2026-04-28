# Portfolio Structure Guide

This guide extracts the reusable non-brand design language from the portfolio codebase. It focuses on motion, spacing, layout, borders, and shadows so the same visual structure can be moved into a separate project.

## Motion System

### Libraries and animation systems in use

- `framer-motion` drives route wrappers, accordions, floating UI, and reveal animations.
- The native View Transition API powers route, theme, project, modal, and scroll transitions via [`src/utils/viewTransitions.js`](./src/utils/viewTransitions.js) and [`src/index.css`](./src/index.css).
- CSS transitions handle most hover, press, border, shadow, and opacity changes on everyday interactive surfaces.
- `tw-animate-css` appears in the Radix dialog implementation for utility-driven open/close states in [`src/components/ui/DIalog.jsx`](./src/components/ui/DIalog.jsx).

### Dominant animation styles

- Fade + small slide for entrances:
  `opacity` with `y: 10` to `20` or `x: 15` to `30`
- Subtle scale for page and modal transitions:
  `scale: 0.99` to `1`, `0.8` to `1`, `0.95` to `1.05`
- Hover lift instead of large transforms:
  `translateY(-1px)` for icons and `translateY(-2px)` for surfaces
- Press feedback:
  `scale(0.98)` or `scale(0.96)` on active/tap
- Expand/collapse motion:
  `height: 0 -> auto` with opacity fade

### Repeated timing and easing values

- `0.1s ease` for theme color/background swaps
- `0.18s ease` for text links, buttons, underline effects, and active press feedback
- `0.2s ease` for hover-lift surfaces and icon transitions
- `0.2s easeInOut` for `PageTransition` and `SlideTransition`
- `0.22s easeOut` for header enter/exit
- `0.25s cubic-bezier(0.4, 0, 0.2, 1)` for default View Transition route changes
- `0.28s cubic-bezier(0.22, 1, 0.36, 1)` for nav expansion and accordion content
- `0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` for modal scale transitions
- `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)` for CSS fallback route transitions
- `0.5s` for `scaleIn`
- `0.8s` for the reusable `fadeIn` section reveal

### Source references

- [`src/index.css`](./src/index.css)
- [`src/lib/animations.js`](./src/lib/animations.js)
- [`src/components/common/PageTransition.jsx`](./src/components/common/PageTransition.jsx)
- [`src/components/layout/Header.jsx`](./src/components/layout/Header.jsx)
- [`src/components/sections/About.jsx`](./src/components/sections/About.jsx)

## Spacing and Layout System

### Common shell pattern

- Home sections consistently use:
  `container mx-auto max-w-4xl px-4 sm:px-6`
- Secondary/detail pages consistently widen to:
  `container mx-auto max-w-6xl px-4 sm:px-6`
- Blog/article content narrows to:
  `max-w-3xl`

### Section rhythm

- Tight sections: `py-8`
- Standard sections: `py-10`
- Roomier sections: `py-12`
- Large page bottoms: `pb-16`
- Heading groups commonly use:
  `mb-8` or `mb-10`, `gap-3`, and a `max-w-2xl` text column

### Dominant spacing tokens found across JSX

- Most common gaps:
  `gap-2`, `gap-3`, `gap-4`, `gap-5`
- Most common padding:
  `p-4`, `p-5`, `p-6`, `px-4`, `px-5`, `px-6`, `py-2`, `py-3`
- Common chip/meta padding:
  `px-2.5 py-1`, `px-3 py-1.5`, `px-3.5 py-3`
- Common vertical spacing:
  `mt-2`, `mt-3`, `mt-4`, `mt-5`, `mt-6`

### Surface construction rules

- Base cards are usually:
  `rounded-sm border border-gray-200/80 bg-white/70 p-4 or p-5`
- Nested sub-cards often use:
  `rounded-sm border ... bg-gray-50/80 p-4`
- Premium/floating panels add shadow and sometimes blur:
  nav, chatbot, project hero sidebars
- Media blocks usually follow:
  `overflow-hidden rounded-sm border ... bg-gradient-to-br ...`

### Grid tendencies

- Single-column stacks with `space-y-4` or `space-y-5`
- Two-column editorial grids on larger screens
- Metrics/cards frequently use:
  `grid gap-3` or `grid gap-5`

### Source references

- [`src/components/sections/Projects.jsx`](./src/components/sections/Projects.jsx)
- [`src/components/sections/ProofSection.jsx`](./src/components/sections/ProofSection.jsx)
- [`src/components/sections/NotesSection.jsx`](./src/components/sections/NotesSection.jsx)
- [`src/components/sections/About.jsx`](./src/components/sections/About.jsx)
- [`src/components/layout/Header.jsx`](./src/components/layout/Header.jsx)

## Borders, Radius, and Shadows

### Border pattern

- Default border width is effectively `1px`
- Dominant light border:
  `border-gray-200/80`
- Dominant dark border:
  `dark:border-white/10`
- Hover state often strengthens border contrast rather than changing layout

### Radius pattern

- Primary card radius:
  `rounded-sm` and it is the most repeated radius in the codebase
- Pills/meta badges:
  `rounded-full`
- Softer inner highlight blocks:
  `rounded-xl` or `rounded-2xl`
- Distinct showcase exception:
  `rounded-[28px]` in `TasteSection`

### Shadow pattern

- Everyday elevated shell:
  `0 10px 24px rgba(15, 23, 42, 0.08)`
- Standard card lift:
  `0 18px 45px rgba(15, 23, 42, 0.05)`
- Stronger floating shell:
  `0 16px 40px rgba(15, 23, 42, 0.1)`
- Large overlay/panel:
  `0 24px 60px rgba(15, 23, 42, 0.16)`
- Glass helper:
  `0 4px 30px rgba(0, 0, 0, 0.1)`

## Generated Reusable Assets

- Structural token file:
  [`src/styles/portfolio-structure.css`](./src/styles/portfolio-structure.css)
- Sample reusable base card:
  [`src/components/ui/PortfolioStructureCard.jsx`](./src/components/ui/PortfolioStructureCard.jsx)

These assets intentionally skip the portfolio's font and accent choices, but they preserve the structural rhythm, border language, shadow depth, and motion feel that define the portfolio.
