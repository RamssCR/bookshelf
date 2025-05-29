import type { ComponentProps } from "react"
import { Slot } from "@radix-ui/react-slot"
import {
  type ButtonVariants,
  buttonVariants,
} from './buttonVariants'
import { classMerger } from "@utils/classMerger"

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean
  }) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={classMerger(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}