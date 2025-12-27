# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance. Supports light and dark modes.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Experience, Education, Header, Footer, ThemeToggle)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: `accentColor` and `darkAccentColor` in config propagate throughout the site via CSS custom properties (`--accent-color`)

## Dark Mode Implementation

The site supports automatic and manual dark mode toggling:

- **System Detection**: Automatically detects `prefers-color-scheme: dark` on first visit
- **Manual Toggle**: Desktop toggle in header nav (right side), mobile floating button (bottom-right via `ThemeToggle.astro`)
- **Persistence**: User preference saved to localStorage only when explicitly toggled; otherwise follows system preference dynamically
- **No Flash**: Blocking inline script in `<head>` applies theme before page renders

### Key Files for Dark Mode

- `src/styles/global.css`: Contains `@custom-variant dark` directive for Tailwind v4 class-based dark mode
- `src/pages/index.astro`: Blocking theme init script + CSS variables for accent colors
- `src/components/Header.astro`: Desktop toggle button
- `src/components/ThemeToggle.astro`: Mobile floating toggle button

### Dark Mode Classes Pattern

All components use Tailwind's `dark:` variant for styling:
- Light backgrounds (`bg-white`, `bg-gray-50`) → Dark backgrounds (`dark:bg-slate-900`, `dark:bg-slate-800`)
- Light text (`text-gray-900`) → Dark text (`dark:text-slate-50`)
- Project cards use inverted hover effects in dark mode (darken + white glow shadow)

## Hero Contact Cards

The Hero section displays contact links as card-style buttons (email, GitHub, LinkedIn):

- **Email Button**: Copies email to clipboard instead of mailto link
  - Shows email address + mail icon by default
  - On hover: mail icon → copy icon (accent colored)
  - On click: text changes to "Copied!", checkmark icon appears, reverts after 2s
- **GitHub/LinkedIn**: Card buttons that link to respective profiles, icons show accent color on hover

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:

1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Always add `dark:` variants for dark mode support
4. Maintain the existing monospace font aesthetic
5. Use Tabler Icons for consistency with existing icons
6. Use `var(--accent-color)` for accent colors (auto-switches between light/dark)

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:

- Basic info: name, title, description, accentColor, darkAccentColor
- Social links: email, linkedin, github (all optional)
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, skills}
- experience: array of {company, title, dateRange, bullets}
- education: array of {school, degree, dateRange, achievements}
