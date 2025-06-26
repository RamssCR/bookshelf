import type { BookCardProps } from "@@types/bookCard"
import type { Item } from "@@types/combobox"
import { BOOKS_PER_PAGE } from '@utils/constants'
import { BookGridView } from '@layouts/BookGridView'
import { Combobox } from "@components/ui/combobox"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { InnerPagination } from "@components/discover/InnerPagination"
import { Label } from "@components/ui/label"
import { Layout } from "@layouts/Layout"
import { ShowResults } from "@components/show-results/ShowResults"
import { Title } from "@components/ui/title"
import { useId } from "react"
import { useDiscoverBooks } from "@hooks/useDiscoverBooks"

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

export const Discover = () => {
  const paginationId = useId()
  const {
    data,
    status,
    genres,
    isAdded,
    refetch,
    pageActive,
    nextLimit,
    previousLimit,
  } = useDiscoverBooks()

  const renderContent = () => {
    return (
      <>
        <ShowResults page={data?.page} total={data?.totalPages} />
        <BookGridView
          books={data?.books as BookCardProps[]}
          location="discover"
          skeletonCount={BOOKS_PER_PAGE}
          status={status}
          isAdded={isAdded}
          refetch={refetch}
        />
        <InnerPagination
          path="discover"
          previous={`discover?page=${previousLimit()}`}
          next={`discover?page=${nextLimit()}`}
          pagination={Array.from({ length: data?.totalPages ?? 0 }, (_, index) => ({
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