import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@components/ui/tooltip'
import { PlusIcon, MinusIcon } from 'lucide-react'
import type { MouseEventHandler } from 'react'

type BookTooltipProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  isAdded?: boolean
}

export const BookTooltip = ({ onClick, isAdded = false }: BookTooltipProps) => {
  const Icon = isAdded ? MinusIcon : PlusIcon
  const label = isAdded ? 'Remove from your shelf' : 'Add to your shelf'

  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        <Icon 
          aria-label={label}
          role="button"
          className="hidden text-background bg-primary rounded-full lg:flex items-center justify-center font-medium size-7 p-1 opacity-0 group-hover:opacity-100 transition-all hover:cursor-pointer hover:scale-105" 
        />
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-background">
          {label}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}