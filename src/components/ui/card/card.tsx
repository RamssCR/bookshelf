import type { ComponentProps } from "react"
import { classMerger } from "@utils/classMerger"

const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={classMerger(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={classMerger(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={classMerger("leading-none font-semibold", className)}
      {...props}
    />
  )
}

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={classMerger("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

const CardAction = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-action"
      className={classMerger(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={classMerger("px-6", className)}
      {...props}
    />
  )
}

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={classMerger("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
