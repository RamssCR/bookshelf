import type { ComponentProps } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { classMerger } from "@utils/classMerger"

const Dialog = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

const DialogTrigger = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Trigger>) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

const DialogPortal = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Portal>) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

const DialogClose = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Close>) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

const DialogOverlay = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) => {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={classMerger(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

const DialogContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content>) => {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={classMerger(
          "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-neutral-200 p-6 shadow-lg duration-200 sm:max-w-lg dark:bg-neutral-950 dark:border-neutral-800",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-white focus:ring-neutral-950 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

const DialogHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-header"
      className={classMerger("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

const DialogFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={classMerger(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

const DialogTitle = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={classMerger("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

const DialogDescription = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={classMerger("text-neutral-500 text-sm dark:text-neutral-400", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
