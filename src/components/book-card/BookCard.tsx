import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@components/ui/tooltip/tooltip'
import type { MouseEventHandler } from 'react'
import type { BookCardProps } from '@@types/bookCard'
import { ChevronRight, PlusIcon } from 'lucide-react'
import { AppLink } from "@components/ui/app-link/AppLink"
import { Button } from '@components/ui/button/button'
import { Image } from "@components/ui/image/image"
import { Title } from "@components/ui/title/title"
import { useLocation } from 'react-router-dom'

const BookTooltip = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger onClick={onClick}>
        <PlusIcon className="hidden text-background bg-primary rounded-full lg:flex items-center justify-center font-medium size-7 p-1 opacity-0 group-hover:opacity-100 transition-all hover:cursor-pointer hover:scale-105" />
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-background">Add to your shelf</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const BookCard = ({
  title,
  Author,
  cover,
  slug,
  Genre
}: Omit<BookCardProps, 'id'>) => {
  const { pathname } = useLocation()
  const isYourBooks = pathname.includes('/your-books')

  return (
    <article className="w-full flex flex-col items-start gap-3 group">
      <AppLink 
        to={isYourBooks ? `/your-books/books/${slug}` : `/discover/books/${slug}`}
        className="w-full"
      >
        <Image
          src={cover}
          alt={title}
          className="w-full rounded-xs aspect-[9_16] max-h-[17.9em] md:max-h-[18.6em] shadow transition-transform hover:scale-105"
        />
      </AppLink>
      <section className="w-full flex flex-col items-start">
        <section className="w-full flex items-baseline justify-between lg:items-end">
          <div className="w-full flex flex-col items-start gap-1">
            <p className="text-xs text-primary font-semibold">{Genre.name}</p>
            <AppLink to={`/books/${slug}`} className="w-full">
              <Title
                as="h3"
                className="text-base line-clamp-1 font-medium text-primary transition-colors hover:underline"
              >
                {title}
              </Title>
            </AppLink>
          </div>
          <BookTooltip />
          <Button variant="none" size="none" className="hover:cursor-pointer lg:hidden">Add</Button>
        </section>
        <p className="text-xs line-clamp-1 font-medium text-muted-foreground transition-colors">{Author.name}</p>
        {isYourBooks && (
          <AppLink 
            to={`/books/read/${slug}`}
            className="mt-3 w-fit group inline-flex items-center gap-0.5 text-sm font-medium text-primary transition-all hover:underline"
          >
            Keep reading
            <ChevronRight className="text-primary size-4 duration-100 group-hover:translate-x-1" />
          </AppLink>
        )}
      </section>
    </article>
  )
}