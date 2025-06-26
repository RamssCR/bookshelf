import { Title } from "@components/ui/title"

export const EmptyDiscoverBooks = () => {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center gap-2 h-[11rem] lg:h-[20rem]"
      role="region"
      aria-labelledby="empty-discover-books-title"
    >
      <Title 
        as="h2" 
        className="text-xl lg:text-2xl font-semibold text-primary"
        id="empty-discover-books-title"
      >
        No books found
      </Title>
      <p className="text-sm lg:text-base text-muted-foreground font-medium">Try changing the filters or search for a specific book.</p>
    </section>
  )
}