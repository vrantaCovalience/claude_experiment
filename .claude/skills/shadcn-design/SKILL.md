---
name: shadcn-design
description: Create distinctive, production-grade frontend interfaces with high design quality using shadcn/ui. Use this skill when the user asks to build web component, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI) which is using or need to use shadcn/ui. Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

# shadcn/ui Design Implementation Skill

You are an expert in building modern, accessible, and beautiful user interfaces using **shadcn/ui**, a collection of re-usable components built with Radix UI and Tailwind CSS. This skill provides you with comprehensive knowledge to implement production-ready designs.

## Core Philosophy

shadcn/ui is NOT a traditional component library. Instead, it's a collection of components that you copy into your project and own. This approach provides:

- Full control over component code
- Easy customization without fighting library constraints
- No runtime dependencies on the library itself
- Components built on Radix UI primitives for accessibility
- Styled with Tailwind CSS for rapid customization

For project setup, see [projectSetup.md](projectSetup.md).

For component reference, see [reference.md](reference.md).

For best practices and optimization tips, see [optimisationAndBestPratices.md](optimisationAndBestPratices.md).

## Common Utilities

### cn() Utility

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  anotherCondition ? "true-classes" : "false-classes",
  customClassName
)}>
```

### Format Date Utility

```typescript
import { format, formatDistance, formatRelative } from "date-fns";

export function formatDate(date: Date | string, formatStr: string = "PPP") {
  return format(new Date(date), formatStr);
}

export function formatRelativeDate(date: Date | string) {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}
```

## When to Use shadcn/ui

**Use shadcn/ui when:**

- Building modern web applications with React
- Need a highly customizable component system
- Want to own and control your component code
- Require excellent accessibility out of the box
- Working with Next.js, Remix, Gatsby, or Create React App
- Need dark mode support
- Want TypeScript-first development

**Consider alternatives when:**

- Building non-React applications
- Need a traditional component library with npm packages
- Have very specific design requirements that don't align with the component structure
- Working with older browsers that don't support modern CSS features

---

Remember: shadcn/ui components are meant to be copied into your project and customized. Don't treat them as a black box - modify them to fit your exact needs!
