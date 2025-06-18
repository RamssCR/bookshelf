import type { BookCardProps } from "@@types/bookCard"
import { Title } from "@components/ui/title"

export const BookDescription = ({ synopsis }: Partial<BookCardProps>) => {
  const splittedSynopsis = synopsis?.split('|')

  return (
    <section className="w-full flex flex-col items-start gap-4 mt-2">
      <Title as="h3" className="text-xl font-semibold text-primary">Book Description</Title>
      {splittedSynopsis?.map((paragraphs, index) => (
        <p
          className="text-base font-medium text-primary"
          key={index}
        >{paragraphs}</p>
      ))}
    </section>
  )
}