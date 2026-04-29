# Data Engineer Portfolio — SPEC.md

## 1. Concept & Vision

A sleek, dark-themed portfolio that feels like a well-architected data pipeline — clean, efficient, and powerful. The aesthetic evokes terminal interfaces and data flow diagrams, with subtle animations that suggest data moving through systems. This isn't a generic portfolio; it feels like a premium data platform dashboard.

## 2. Design Language

### Aesthetic Direction
Dark mode inspired by terminal UIs and data monitoring dashboards. Matrix-like depth with glowing accents suggesting data in motion.

### Color Palette
- **Background**: `#0a0a0f` (deep void)
- **Surface**: `#12121a` (elevated panels)
- **Border**: `#1e1e2e` (subtle dividers)
- **Primary**: `#6366f1` (indigo glow — data flow)
- **Secondary**: `#22d3ee` (cyan — pipeline accent)
- **Accent**: `#10b981` (emerald — success/completion)
- **Text Primary**: `#e2e8f0` (off-white)
- **Text Muted**: `#64748b` (slate)

### Typography
- **Headings**: `JetBrains Mono` — monospace, technical feel
- **Body**: `Inter` — clean, readable
- **Code snippets**: `Fira Code`

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical, responsive horizontal
- Card padding: 24px
- Gap between elements: 16px / 24px

### Motion Philosophy
- Subtle glow pulses on interactive elements (suggesting data activity)
- Smooth fade-in on scroll (elements "load" like data fetching)
- Typing effect on hero tagline
- Card hover: subtle lift + border glow

### Visual Assets
- Icons: Lucide React (consistent stroke weight)
- Decorative: CSS grid patterns, subtle gradient orbs, terminal-style borders
- No images needed — typography and icons carry the design

## 3. Layout & Structure

### Page Structure
1. **Navigation** — Fixed top, minimal, logo + nav links
2. **Hero** — Full viewport height, name, title with typing effect, CTA
3. **About** — Brief intro with stats (years exp, projects, technologies)
4. **Skills** — Tech stack grid with icon + name, organized by category
5. **Projects** — Featured projects with tech tags, descriptions, links
6. **Experience** — Timeline of roles
7. **Contact** — Simple CTA with links

### Responsive Strategy
- Desktop: Full layouts, side-by-side content
- Tablet: Adjusted grids, maintained hierarchy
- Mobile: Stacked layouts, preserved impact

## 4. Features & Interactions

### Hero Section
- Name with subtle glow animation
- Title with typing cursor effect
- "View Projects" and "Contact" CTAs with hover glow

### Skills Section
- Categories: Languages, Cloud & Data Platforms, Orchestration, Databases
- Each skill: icon + label in a card
- Hover: border glow intensifies

### Projects Section
- 3 featured projects
- Each shows: title, description, tech stack tags, links (GitHub/Live)
- Hover: lift + glow border

### Contact Section
- Email link
- LinkedIn, GitHub icons
- Simple, direct

## 5. Component Inventory

### NavBar
- Logo (text-based, monospace)
- Links: About, Skills, Projects, Contact
- States: default, scrolled (adds backdrop blur)

### Hero
- Large heading with glow
- Animated tagline
- Two CTA buttons

### SkillCard
- Icon + label
- States: default (dark surface), hover (glowing border)

### ProjectCard
- Title, description, tech tags, links
- States: default, hover (lift + glow)

### TimelineItem
- Year range, role, company, description
- Connected with vertical line

### Button
- Primary (filled glow)
- Secondary (outline)
- States: default, hover (intensified glow), active (pressed)

## 6. Technical Approach

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Fonts**: Google Fonts (JetBrains Mono, Inter, Fira Code)
- **Icons**: Lucide React
- **Animations**: CSS animations + Tailwind transitions
- **No backend needed** — static portfolio

### File Structure
```
/app
  /page.tsx          — Main landing page
  /layout.tsx        — Root layout with fonts
  /globals.css       — Tailwind + custom styles
/components
  /Navbar.tsx
  /Hero.tsx
  /About.tsx
  /Skills.tsx
  /Projects.tsx
  /Experience.tsx
  /Contact.tsx
  /Footer.tsx
```