import { XIcon } from 'lucide-react'

export const ErrorNotification = ({ message }: { message?: string }) => {
  return (
    <article className="py-3 px-3 rounded-md border border-border flex items-center gap-3">
      <XIcon className="size-7 text-destructive" />
      <p className="text-destructive text-xs lg:text-sm font-medium">
        {message}
      </p>
    </article>
  )
}