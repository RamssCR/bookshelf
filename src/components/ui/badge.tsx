import type { ComponentProps } from "react"
import { Slot } from "@radix-ui/react-slot"
import { classMerger } from "@utils/classMerger"
import { 
  type BadgeVariants, 
  badgeVariants 
} from '@variants/badge'

export const Badge = ({
  className,
  variant,
  asChild = false,
  ...props
}: ComponentProps<"span"> &
  BadgeVariants & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={classMerger(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}