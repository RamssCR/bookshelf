import { BookCard } from "@components/book-card/BookCard"
import { Combobox } from "@components/ui/combobox/combobox"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { InnerPagination } from "@components/discover/InnerPagination"
import { Label } from "@components/ui/label/label"
import { Layout } from "@layouts/Layout"
import { Title } from "@components/ui/title/title"

export const Discover = () => {
  return (
    <Layout>
      <ContentContainer>
        <section className="w-full flex flex-col items-start">
          <Title className="text-2xl font-semibold text-primary">Discover</Title>
          <p className="text-muted-foreground font-medium">Have a look at the books that might interest you.</p>
        </section>
        <section className="mt-4 w-full flex flex-col items-start gap-4 pb-8 border-b border-b-border">
          <Title as="h2" className="text-lg font-semibold text-primary">Filter by</Title>
          <section className="w-full grid grid-cols-2 gap-x-4">
            <div className="w-full flex flex-col items-start gap-3">
              <Label htmlFor="genre">Genre</Label>
              <Combobox
                items={[
                  { value: "fiction", label: "Fiction" },
                  { value: "non-fiction", label: "Non-Fiction" },
                  { value: "fantasy", label: "Fantasy" },
                  { value: "mystery", label: "Mystery" },
                  { value: "romance", label: "Romance" },
                ]}
                name="genre"
                id="genre"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <Label htmlFor="category">Category</Label>
              <Combobox
                items={[
                  { value: "adventure", label: "Adventure" },
                  { value: "biography", label: "Biography" },
                  { value: "history", label: "History" },
                  { value: "science", label: "Science" },
                  { value: "technology", label: "Technology" },
                ]}
                name="category"
                id="category"
              />
            </div>
          </section>
        </section>
        <p className="-mt-2 text-muted-foreground text-sm font-medium">10 of 10 of 49 books</p>
        <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:gap-y-7 xl:grid-cols-5">
          {Array.from({ length: 10 }, (_, index) => (
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
        <InnerPagination path="discover" />
      </ContentContainer>
    </Layout>
  )
}