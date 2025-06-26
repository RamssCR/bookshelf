import type { BookCardProps } from "@@types/bookCard"
import { BOOKS_PER_PAGE } from '@utils/constants'
import { BookGridView } from "@layouts/BookGridView"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { InnerPagination } from "@components/discover/InnerPagination"
import { Layout } from "@layouts/Layout"
import { Title } from "@components/ui/title"
import { useId } from "react"
import { useYourBooks } from "@hooks/useYourBooks"

const Header = () => (
  <section className="w-full flex flex-col items-start">
    <Title className="text-2xl font-semibold text-primary">Your Books</Title>
    <p className="text-muted-foreground font-medium">Have a look at the books you're already reading, or perhaps, start a new one</p>
  </section>
)

export const YourBooks = () => {
  const paginationId = useId()
  const {
    data,
    status,
    refetch,
    pageActive,
    nextLimit,
    previousLimit,
  } = useYourBooks()

  return (
    <Layout>
      <ContentContainer>
        <Header />
        <BookGridView
          books={data?.books as BookCardProps[]}
          location="your-books"
          skeletonCount={BOOKS_PER_PAGE}
          status={status}
          isAdded={() => true}
          refetch={refetch}
        />
        <InnerPagination
          path="your-books"
          previous={`your-books?page=${previousLimit()}`}
          next={`your-books?page=${nextLimit()}`}
          pagination={Array.from({ length: data?.totalPages ?? 0 }, (_, index) => ({
            id: `${paginationId}-${index}`,
            current: index + 1,
            isActive: pageActive(index + 1),
          }))}
        />
      </ContentContainer>
    </Layout>
  )
}