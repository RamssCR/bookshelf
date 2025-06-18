import {
  Book,
  ListOrdered,
  Scroll
} from "lucide-react"
import type { BookCardProps } from "@@types/bookCard";

export const BookSummary = ({ subtitle, pages, chapters }: Partial<BookCardProps>) => (
  <section className="w-full flex flex-col items-start gap-2 mt-2">
    <article className="inline-flex items-center gap-2">
      <Scroll className="text-primary size-5" />
      <p className="text-primary">{subtitle ?? 'No subtitle provided.'}</p>
    </article>
    <article className="inline-flex items-center gap-2">
      <Book className="text-primary size-5" />
      <p className="text-primary">{pages} Pages</p>
    </article>
    <article className="inline-flex items-center gap-2">
      <ListOrdered className="text-primary size-5" />
      <p className="text-primary">{chapters} Chapters</p>
    </article>
  </section>
)