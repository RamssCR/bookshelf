import type { BookCardProps } from "@@types/bookCard"
import type { Item } from "@@types/combobox"
import { BookCard } from "@components/book-card/BookCard"
import { BookCardSkeleton } from '@components/book-card/BookCardSkeleton'
import { Combobox } from "@components/ui/combobox/combobox"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { EmptyDiscoverBooks } from '@components/empty-cards/EmptyDiscoverBooks'
import { InnerPagination } from "@components/discover/InnerPagination"
import { Label } from "@components/ui/label/label"
import { Layout } from "@layouts/Layout"
import { ShowResults } from "@components/show-results/ShowResults"
import { Title } from "@components/ui/title/title"
import { getGenres } from "@services/genres"
import { useId } from "react"
import { usePagination } from "@hooks/usePagination"
import { usePaginationFilter } from '@hooks/usePaginationFilter'
import { useQuery as useReactQuery } from '@tanstack/react-query'
import { useQuery } from "@hooks/useQuery"

const BOOKS_PER_PAGE = 10

const EmptyMessage = () => (
  <section className="w-full flex flex-col items-center justify-center gap-4 mt-4">
    <EmptyDiscoverBooks />
  </section>
)

const Header = () => (
  <section className="w-full flex flex-col items-start">
    <Title className="text-2xl font-semibold text-primary">Discover</Title>
    <p className="text-muted-foreground font-medium">
      Have a look at the books that might interest you.
    </p>
  </section>
)

const FilterSection = ({ genres }: { genres: Item[] }) => (
  <section className="mt-4 w-full flex flex-col items-start gap-3 pb-8 border-b border-b-border">
    <Title as="h2" className="text-lg font-semibold text-primary">
      Filter by
    </Title>
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
      <div className="w-full flex flex-col items-start gap-3">
        <Label htmlFor="genre">Genre</Label>
        <Combobox items={genres} name="genre" id="genre" />
      </div>
    </section>
  </section>
)

const BookGrid = ({ books }: { books: BookCardProps[] }) => (
  <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:gap-y-7 xl:grid-cols-5">
    {books.map((book) => (
      <BookCard key={book.slug} {...book} />
    ))}
  </section>
)

const LoadingSkeleton = () => (
  <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:gap-y-7 xl:grid-cols-5">
    {Array.from({ length: BOOKS_PER_PAGE }, (_, index) => (
      <BookCardSkeleton key={index} />
    ))}
  </section>
)

export const Discover = () => {
  const paginationId = useId()
  const query = useQuery()
  const genre = query.get("genre")

  const { data, status } = usePaginationFilter({
    query: query.get("page"),
    limit: BOOKS_PER_PAGE,
    genre
  })

  const { data: genresData } = useReactQuery({
    queryKey: ['genres'],
    queryFn: getGenres
  })

  const { pageActive, nextLimit, previousLimit } = usePagination({
    query: query.get("page"),
    limit: data?.totalPages,
    path: "discover"
  })

  const genres = genresData?.data?.data ?? []

  const renderContent = () => {
    if (status === 'pending') return <LoadingSkeleton />
    if (status === 'error') return <EmptyMessage />

    return (
      <>
        <ShowResults page={data?.page} total={data?.totalPages} />
        {Array.isArray(data?.books) && data.books.length > 0 
          ? <BookGrid books={data.books} /> 
          : <EmptyMessage />
        }
        <InnerPagination
          path="discover"
          previous={`discover?page=${previousLimit()}`}
          next={`discover?page=${nextLimit()}`}
          pagination={Array.from({ length: data?.totalPages }, (_, index) => ({
            id: `${paginationId}-${index}`,
            current: index + 1,
            isActive: pageActive(index + 1),
          }))}
        />
      </>
    )
  }

  return (
    <Layout>
      <ContentContainer>
        <Header />
        <FilterSection genres={genres} />
        {renderContent()}
      </ContentContainer>
    </Layout>
  )
}