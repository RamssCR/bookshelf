import { Title } from "@components/ui/title/title"

export const EmptyDiscoverBooks = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-2 h-[11rem] lg:h-[20rem]">
      <Title as="h2" className="text-xl lg:text-2xl font-semibold text-primary">No books found</Title>
      <p className="text-sm lg:text-base text-muted-foreground font-medium">Try changing the filters or search for a specific book.</p>
    </section>
  )
}