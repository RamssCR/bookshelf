import type { ComponentProps } from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { classMerger } from "@utils/classMerger"

export const Switch = ({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={classMerger(
        "peer data-[state=checked]:bg-neutral-900 hover:cursor-pointer data-[state=unchecked]:bg-neutral-200 focus-visible:border-neutral-950 focus-visible:ring-neutral-950/50 dark:data-[state=unchecked]:bg-neutral-800 inline-flex h-[1.3rem] w-9 shrink-0 items-center rounded-full border border-neutral-200 shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 dark:data-[state=checked]:bg-neutral-50 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:dark:data-[state=unchecked]:bg-neutral-800/80 dark:border-neutral-800",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={classMerger(
          "bg-white dark:data-[state=unchecked]:bg-neutral-950 dark:data-[state=checked]:bg-neutral-50 pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%+1px)] data-[state=unchecked]:translate-x-0.25 dark:bg-neutral-950 dark:dark:data-[state=unchecked]:bg-neutral-50 dark:dark:data-[state=checked]:bg-neutral-900"
        )}
      />
    </SwitchPrimitive.Root>
  )
}
