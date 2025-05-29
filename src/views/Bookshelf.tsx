import { ComingSoon } from "@components/coming-soon/ComingSoon"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Layout } from "@layouts/Layout"
import { Title } from "@components/ui/title/title"

export const Bookshelf = () => {
  return (
    <Layout>
      <ContentContainer>
        <Title className="text-2xl font-semibold text-primary">Bookshelf</Title>
        <section className="flex flex-col items-start gap-3 w-full">
          <Title as="h2" className="text-lg font-medium text-primary lg:text-xl">Recently Read</Title>
          <ComingSoon />
        </section>
        <section className="flex flex-col items-start gap-3 w-full">
          <Title as="h2" className="text-lg font-medium text-primary lg:text-xl">Friends</Title>
          <ComingSoon />
        </section>
      </ContentContainer>
    </Layout>
  )
}

/*
  Snippet to render the BookCard and BookCardSkeleton components
  <section className="w-full overflow-x-auto">
    <div className="flex items-center gap-7 pl-1 py-3 min-w-max">

    </div>
  </section>
*/