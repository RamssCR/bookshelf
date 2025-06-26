import { XIcon } from 'lucide-react'

export const ErrorNotification = ({ message }: { message?: string }) => {
  return (
    <article 
      className="py-3 px-3 rounded-md border border-border flex items-center gap-3"
      role="alert"
      aria-labelledby="error-notification-title"
      aria-describedby={message ? "error-notification-message" : undefined}
    >
      <h2 id="error-notification-title" className="sr-only">An error has ocurred</h2>
      <XIcon className="size-7 text-destructive" aria-hidden="true" />
      <p 
        className="text-destructive text-xs lg:text-sm font-medium"
        id="error-notification-message"
      >
        {message}
      </p>
    </article>
  )
}