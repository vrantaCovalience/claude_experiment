## Project Setup

### Initial Installation

```bash
# Initialize shadcn/ui in a Next.js project
npx shadcn@latest init

# Or for other React projects
npx shadcn@latest init
```

**Configuration during init:**

- Choose TypeScript (recommended)
- Select style (Default or New York)
- Choose base color (Slate, Gray, Zinc, Neutral, Stone)
- Configure CSS variables for theming: Yes (recommended)

### Adding Components

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

# Add multiple components at once
npx shadcn@latest add button card dialog input label

# Add all components
npx shadcn@latest add --all
```

### Project Structure

```
├── components/
│   └── ui/              # shadcn components live here
│       ├── button.tsx
│       ├── card.tsx
│       └── dialog.tsx
├── lib/
│   └── utils.ts         # cn() utility for class merging
├── app/
│   └── globals.css      # Tailwind and CSS variables
└── components.json      # shadcn configuration
```

## Theme System

shadcn/ui uses CSS variables for theming, defined in `globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

## Advanced Customization

### Custom Color Schemes

To create a custom color scheme, modify the CSS variables:

```css
/* Blue Theme */
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
}

/* Green Theme */
:root {
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 355.7 100% 97.3%;
}

/* Purple Theme */
:root {
  --primary: 262.1 83.3% 57.8%;
  --primary-foreground: 210 40% 98%;
}
```

### Custom Component Variants

```tsx
// Extend button component with custom variants
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface CustomButtonProps extends ButtonProps {
  gradient?: boolean;
}

export function CustomButton({
  gradient,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        gradient &&
          "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
        className
      )}
      {...props}
    />
  );
}
```

### Responsive Design Patterns

```tsx
// Mobile-first responsive grid
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {items.map((item) => (
    <Card key={item.id}>
      {/* Card content */}
    </Card>
  ))}
</div>

// Responsive navigation
<nav className="hidden md:flex md:gap-6">
  {/* Desktop nav */}
</nav>
<Sheet>
  <SheetTrigger className="md:hidden">
    <Menu />
  </SheetTrigger>
  <SheetContent side="left">
    {/* Mobile nav */}
  </SheetContent>
</Sheet>

// Responsive typography
<h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```
