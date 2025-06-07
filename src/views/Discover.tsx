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
import { useId } from "react"
import { usePagination } from "@hooks/usePagination"
import { usePaginationFilter } from '@hooks/usePaginationFilter'
import { useQuery } from "@hooks/useQuery"
import { useQuery as useReactQuery } from '@tanstack/react-query'
import { getGenres } from "@services/genres"

const EmptyMessage = () => (
  <section className="w-full flex flex-col items-center justify-center gap-4 mt-4">
    <EmptyDiscoverBooks />
  </section>
)

export const Discover = () => {
  const paginationId = useId()
  const query = useQuery()
  const genre = query.get("genre")
  const genreQuery = genre ? `&genre=${genre}` : ""

  const {
    data,
    status,
  } = usePaginationFilter({
    query: query.get("page"),
    limit: 10,
    genre
  })

  const { 
    data: { data: { data: genres } } = { data: { data: [] } },
  } = useReactQuery({
    queryKey: ['genres'],
    queryFn: () => getGenres()
  })

  const {
    pageActive,
    nextLimit,
    previousLimit
  } = usePagination({
    query: query.get("page"),
    limit: data?.totalPages,
    path: "discover"
  })

  return (
    <Layout>
      <ContentContainer>
        <section className="w-full flex flex-col items-start">
          <Title className="text-2xl font-semibold text-primary">Discover</Title>
          <p className="text-muted-foreground font-medium">Have a look at the books that might interest you.</p>
        </section>
        <section className="mt-4 w-full flex flex-col items-start gap-3 pb-8 border-b border-b-border">
          <Title as="h2" className="text-lg font-semibold text-primary">Filter by</Title>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="w-full flex flex-col items-start gap-3">
              <Label htmlFor="genre">Genre</Label>
              <Combobox
                items={genres}
                initialValue={query.get("genre")}
                name="genre"
                id="genre"
              />
            </div>
          </section>
        </section>
        {status === 'pending' ? (
          <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:gap-y-7 xl:grid-cols-5">
            {Array.from({ length: 10 }, (_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </section>
        ) : status === 'error' ? (
          <EmptyMessage />
        ) : (
          <>
            <ShowResults
              page={data?.page}
              total={data?.total}
            />
            {Array.isArray(data?.books) && data?.books?.length !== 0
              ? (
                <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:gap-y-7 xl:grid-cols-5">
                  {data?.books?.map((book) => (
                    <BookCard
                      key={book.slug}
                      {...book}
                    />
                  ))}
                </section>
              )
              : <EmptyMessage />
            }
            <InnerPagination
              path="discover"
              previous={`discover?page=${previousLimit()}${genreQuery}`}
              next={`discover?page=${nextLimit()}${genreQuery}`}
              pagination={Array.from({ length: data?.totalPages }, (_, index) => ({
                id: `${paginationId}-${index}`,
                current: index + 1,
                isActive: pageActive(index + 1),
              }))}
            />
          </>
        )}
      </ContentContainer>
    </Layout>
  )
}