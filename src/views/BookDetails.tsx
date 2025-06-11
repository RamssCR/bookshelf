import { AppLink } from "@components/ui/AppLink"
import { Book, ChevronRight, ListOrdered, Scroll } from "lucide-react"
import { ComingSoon } from "@components/coming-soon/ComingSoon"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Image } from "@components/ui/image"
import { Layout } from "@layouts/Layout"
import { Title } from '@components/ui/title'
import { useLocation } from "react-router-dom"
import { Badge } from "@components/ui/badge"

type RedirectToProps = {
  isYourBooks: boolean
  slug: string
}

const RedirectTo = ({ isYourBooks, slug }: RedirectToProps) => (
  <AppLink
    to={`/${isYourBooks ? 'your-books' : 'discover'}/books/read/${slug}`}
    className="mt-3 w-fit group inline-flex items-center gap-0.5 text-base font-medium text-primary transition-all hover:underline"
  >
    {isYourBooks ? 'Continue Reading' : 'Read Book'}
    <ChevronRight className="text-primary size-5 duration-100 group-hover:translate-x-1" />
  </AppLink>
)

export const BookDetails = () => {
  const { pathname } = useLocation()
  const isYourBooks = pathname.includes('/your-books/books')

  return (
    <Layout>
      <ContentContainer>
        <section className="w-full flex flex-col items-center gap-4 md:flex-row md:items-start">
          <Image
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2slMjBjb3ZlZXxlbnwwfHx8fDE2ODQ5NTY1NzA&ixlib=rb-4.0.3&q=80&w=400"
            alt="The Great Gatsby"
            className="w-[15em] rounded-xs aspect-[9_16] shadow"
          />
          <section className="flex w-full flex-col items-center gap-2 text-center md:text-left md:items-start md:mt-1">
            <Title className="text-2xl font-semibold text-primary w-full md:text-3xl">The Great Gatsby</Title>
            <p className="text-muted-foreground font-medium w-full">Book created by F. Scott Fitzgerald</p>
            <RedirectTo
              isYourBooks={isYourBooks}
              slug="the-great-gatsby"
            />
            <Title as="h2" className="text-xl font-semibold text-primary mt-4 pb-3 border-b border-b-border w-full">Book Summary</Title>
            <article className="mt-1 w-full inline-flex items-center gap-2">
              <Badge>Classic</Badge>
              <Badge>Fiction</Badge>
            </article>
            <section className="w-full flex flex-col items-start gap-2 mt-2">
              <article className="inline-flex items-center gap-2">
                <Scroll className="text-primary size-5" />
                <p className="text-primary">No subtitle provided.</p>
              </article>
              <article className="inline-flex items-center gap-2">
                <Book className="text-primary size-5" />
                <p className="text-primary">180 Pages</p>
              </article>
              <article className="inline-flex items-center gap-2">
                <ListOrdered className="text-primary size-5" />
                <p className="text-primary">9 Chapters</p>
              </article>
            </section>
          </section>
        </section>
        <section className="w-full flex flex-col items-start gap-4 mt-2">
          <Title as="h3" className="text-xl font-semibold text-primary">Book Description</Title>
          <p className="text-base font-medium text-primary">The Great Gatsby is a novel written by American author F. Scott Fitzgerald that was first published in 1925. It is set in the Jazz Age on Long Island and follows the story of Jay Gatsby, a mysterious millionaire, and his obsession with the beautiful Daisy Buchanan.</p>
          <p className="text-base font-medium text-primary">The novel explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Roaring Twenties and a cautionary tale about the American Dream.</p>
          <p className="text-base font-medium text-primary">The Great Gatsby is widely regarded as one of the greatest works of American literature and has been adapted into numerous films, stage productions, and other media.</p>
        </section>
        <section className="w-full flex flex-col items-start gap-4">
          <Title as="h3" className="text-xl font-semibold text-primary">Book Reviews</Title>
          <ComingSoon />
        </section>
      </ContentContainer>
    </Layout>
  )
}