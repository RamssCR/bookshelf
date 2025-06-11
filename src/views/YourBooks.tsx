import type { BookCardProps } from "@@types/bookCard"
import type { BookFetch } from "@@types/fetchers"
import { BOOKS_PER_PAGE } from '@utils/constants'
import { BookGridView } from "@layouts/BookGridView"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { InnerPagination } from "@components/discover/InnerPagination"
import { Layout } from "@layouts/Layout"
import { Title } from "@components/ui/title"
import { getBookshelf } from "@services/bookshelves"
import { useId } from "react"
import { usePagination } from "@hooks/usePagination"
import { usePaginationFilter } from "@hooks/usePaginationFilter"
import { useQuery } from "@hooks/useQuery"

const Header = () => (
  <section className="w-full flex flex-col items-start">
    <Title className="text-2xl font-semibold text-primary">Your Books</Title>
    <p className="text-muted-foreground font-medium">Have a look at the books you're already reading, or perhaps, start a new one</p>
  </section>
)

export const YourBooks = () => {
  const paginationId = useId()
  const query = useQuery()
  const {
    pageActive,
    nextLimit,
    previousLimit
  } = usePagination({
    query: query.get("page"),
    path: 'your-books',
    limit: 5
  })

  const { data, status, refetch } = usePaginationFilter<BookCardProps, BookFetch>({
    fetcher: getBookshelf,
    page: query.get("page"),
    limit: BOOKS_PER_PAGE,
    functionKey: 'your-books'
  })

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