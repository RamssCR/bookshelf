import { cva, type VariantProps } from 'class-variance-authority'

export const linkVariants = cva(
  'hover:cursor-pointer transition-colors',
  {
    variants: {
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
        muted: 'text-muted-foreground',
      },
      variant: {
        default: 'bg-transparent border-none',
        background: 'bg-background rounded-md',
        foreground: 'bg-foreground rounded-md',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground rounded-md',
        muted: 'bg-transparent hover:bg-accent'
      },
      size: {
        default: 'px-0 py-0',
        sm: 'px-2 py-1',
        md: 'px-3 py-2',
        lg: 'px-4 py-3',
      }
    },
    defaultVariants: {
      color: 'primary',
      variant: 'default',
      size: 'default',
    },
  }
)

export type LinkVariants = VariantProps<typeof linkVariants>