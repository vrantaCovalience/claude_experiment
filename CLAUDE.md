# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 application using the App Router architecture with TypeScript, React 19, and Tailwind CSS v4.

## Development Commands

### Running the Development Server

```bash
npm run dev
```

Starts the Next.js development server at http://localhost:3000. The app auto-reloads on file changes.

### Building for Production

```bash
npm run build
```

Creates an optimized production build. Outputs to `.next` directory.

### Starting Production Server

```bash
npm start
```

Runs the production build. Must run `npm run build` first.

### Linting

```bash
npm run lint
```

Runs ESLint with Next.js presets (core-web-vitals + TypeScript rules).

## Architecture

### Next.js App Router Structure

This project uses the Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/layout.tsx` - Root layout with font configuration (Geist Sans + Geist Mono)
- `app/page.tsx` - Home page (root `/` route)
- `app/globals.css` - Global styles with Tailwind CSS v4 and CSS variables for theming

### Path Aliases

TypeScript is configured with `@/*` alias mapping to the project root:

```typescript
import Component from "@/app/component";
```

### Styling

- Tailwind CSS v4 (new @import syntax in globals.css)
- Uses CSS custom properties for theming with automatic dark mode support
- Geist font family (Sans + Mono variants) loaded via `next/font/google`

### TypeScript Configuration

- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (React 19 automatic runtime)
- Module resolution: bundler

## Important Notes

### Next.js App Router Conventions

- Server Components by default (use `"use client"` directive for client components)
- Route files must be named: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, etc.
- Colocation is encouraged - components can live alongside routes in `app/`

### Tailwind CSS v4 Changes

- Uses new `@import "tailwindcss"` syntax (not @tailwind directives)
- Theme configuration via `@theme inline` in globals.css
- No tailwind.config.js file - configuration in CSS

### shadcn/ui Integration

This project uses shadcn/ui for UI components with the "new-york" style variant:

- **Component Installation**: Use `npx shadcn@latest add <component-name>` to add new components
- **Component Location**: UI components are installed to `components/ui/`
- **Utility Function**: `lib/utils.ts` exports a `cn()` helper that merges Tailwind classes using `clsx` and `tailwind-merge`
- **Icon Library**: lucide-react is configured as the icon library
- **Path Aliases**: Configured in `components.json`:
  - `@/components` → components directory
  - `@/lib` → lib directory
  - `@/ui` → components/ui directory
  - `@/hooks` → hooks directory

**Component Usage Pattern**:
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

Components use class-variance-authority (CVA) for variant management and are built with Radix UI primitives.
