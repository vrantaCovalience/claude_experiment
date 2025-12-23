## Icon Libraries

### Lucide Icons (Recommended)

```tsx
import {
  Home,
  Settings,
  User,
  Mail,
  Search,
  ChevronDown,
  Check,
  X,
  Plus,
  Minus,
  Edit,
  Trash,
  Download,
  Upload,
  Eye,
  EyeOff,
} from "lucide-react"

// Usage
<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
```

## Performance Optimization

### Lazy Loading Components

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/heavy-component"), {
  loading: () => <Skeleton className="h-[400px]" />,
  ssr: false,
});
```

### Memoization

```tsx
import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ListItem = memo(function ListItem({ item }: { item: any }) {
  return (
    <Card>
      <CardContent>{item.title}</CardContent>
    </Card>
  );
});
```

## Best Practices

1. **Component Organization**

   - Keep shadcn/ui components in `components/ui/`
   - Create custom composed components in `components/`
   - Use clear, descriptive names

2. **Styling Approach**

   - Use Tailwind utilities first
   - Create CSS variables for theme values
   - Use the `cn()` utility for conditional classes
   - Avoid inline styles unless absolutely necessary

3. **Type Safety**

   - Always use TypeScript
   - Define proper prop types
   - Leverage type inference from Zod schemas

4. **Accessibility**

   - Test with keyboard navigation
   - Verify screen reader compatibility
   - Ensure proper ARIA labels
   - Maintain sufficient color contrast

5. **Performance**

   - Lazy load heavy components
   - Memoize expensive computations
   - Optimize images with Next.js Image
   - Use React Server Components where possible

6. **Dark Mode**

   - Always test both light and dark modes
   - Use semantic color variables
   - Provide smooth theme transitions

7. **Mobile First**
   - Start with mobile designs
   - Use responsive Tailwind classes
   - Test on various screen sizes
   - Ensure touch targets are 44x44px minimum
