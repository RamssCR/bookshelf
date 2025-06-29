import { 
  Toaster as Sonner, 
  type ToasterProps 
} from "sonner"
import type { CSSProperties } from 'react'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as CSSProperties
      }
      position="bottom-right"
      toastOptions={{
        classNames: {
          description: "text-popover-foreground",
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
