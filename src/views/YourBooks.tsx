import { BookCard } from "@components/book-card/BookCard"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Layout } from "@layouts/Layout"
import { Title } from "@components/ui/title/title"
import { InnerPagination } from "@components/discover/InnerPagination"

export const YourBooks = () => {
  return (
    <Layout>
      <ContentContainer>
        <section className="w-full flex flex-col items-start">
          <Title className="text-2xl font-semibold text-primary">Your Books</Title>
          <p className="text-muted-foreground font-medium">Have a look at the books you're already reading, or perhaps, start a new one</p>
        </section>
        <section className="w-full grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 15 }, (_, index) => (
            <BookCard
              key={index}
              category="Fiction"
              title="The Great Gatsby"
              author="F. Scott Fitzgerald"
              image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2slMjBjb3ZlZXxlbnwwfHx8fDE2ODQ5NTY1NzA&ixlib=rb-4.0.3&q=80&w=400"
              slug="the-great-gatsby"
            />
          ))}
        </section>
        <InnerPagination path="your-books" />
      </ContentContainer>
    </Layout>
  )
}