import {
  Book,
  ListOrdered,
  Scroll
} from "lucide-react"
import type { BookCardProps } from "@@types/bookCard"

export const BookSummary = ({ subtitle, pages, chapters }: Partial<BookCardProps>) => (
  <section 
    className="w-full flex flex-col items-start gap-2 mt-2"
    aria-labelledby="book-summary-title"
  >
    <article 
      className="inline-flex items-center gap-2"
      aria-label={`Book subtitle: ${subtitle ?? 'No subtitle provided.'}`}
    >
      <Scroll className="text-primary size-5" aria-hidden="true" />
      <p className="text-primary">{subtitle ?? 'No subtitle provided.'}</p>
    </article>
    <article 
      className="inline-flex items-center gap-2"
      aria-label={`Book pages: ${pages ?? 'No page count provided.'}`}
    >
      <Book className="text-primary size-5" aria-hidden="true" />
      <p className="text-primary">{pages} Pages</p>
    </article>
    <article 
      className="inline-flex items-center gap-2"
      aria-label={`Book chapters: ${chapters ?? 'No chapter count provided.'}`}
    >
      <ListOrdered className="text-primary size-5" aria-hidden="true" />
      <p className="text-primary">{chapters} Chapters</p>
    </article>
  </section>
)