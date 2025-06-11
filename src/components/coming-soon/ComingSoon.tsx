import { Title } from "@components/ui/title"

export const ComingSoon = () => {
  return (
    <article className="w-full border-2 rounded-lg border-dashed border-border flex flex-col items-center justify-center gap-1 py-5 px-6 lg:py-7">
      <Title as="h2" className="text-lg text-center font-medium text-primary lg:text-xl">
        Coming Soon
      </Title>
      <p className="text-muted-foreground text-xs text-center lg:text-sm">
        This feature is not available yet. Stay tuned for updates!
      </p>
    </article>
  )
}