import type { BookCardProps } from "@@types/bookCard"
import { Badge } from "@components/ui/badge"
import { BookDescription } from "@components/book-details/BookDescription"
import { BookSummary } from "@components/book-details/BookSummary"
import { ComingSoon } from "@components/coming-soon/ComingSoon"
import { Image } from "@components/ui/image"
import { RedirectTo } from "@components/book-details/RedirectTo"
import { Title } from '@components/ui/title'

type BookDetailsLayoutProps = {
  book?: BookCardProps
  isYourBooks: boolean
}

export const BookDetailsLayout = ({ book, isYourBooks }: BookDetailsLayoutProps) => {
  return (
    <>
      {/* Book Details */}
      <section className="w-full flex flex-col items-center gap-4 md:flex-row md:items-start">
        <Image
          src={book?.cover}
          alt={book?.title}
          className="w-[15em] rounded-xs aspect-[9_16] shadow"
        />
        <section className="flex w-full flex-col items-center gap-2 text-center md:text-left md:items-start md:mt-1">
          <Title className="text-2xl font-semibold text-primary w-full md:text-3xl">{book?.title}</Title>
          <p className="text-muted-foreground font-medium w-full">Book created by {book?.author}</p>
          <RedirectTo
            isYourBooks={isYourBooks}
            slug={book?.slug}
          />
          <Title as="h2" className="text-xl font-semibold text-primary mt-4 pb-3 border-b border-b-border w-full">Book Summary</Title>
          <article className="mt-1 w-full inline-flex items-center gap-2">
            <Badge>{book?.genre}</Badge>
          </article>
          <BookSummary
            subtitle={book?.subtitle}
            pages={book?.pages}
            chapters={book?.chapters}
          />
        </section>
      </section>
      {/* Book Description and Reviews */}
      <BookDescription synopsis={book?.synopsis} />
      <section className="w-full flex flex-col items-start gap-4">
        <Title as="h3" className="text-xl font-semibold text-primary">Book Reviews</Title>
        <ComingSoon />
      </section>
    </>
  )
}