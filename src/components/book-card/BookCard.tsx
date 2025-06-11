import {
  useMutation,
  type RefetchOptions,
  type QueryObserverResult
} from '@tanstack/react-query'
import {
  addBookToShelf,
  removeFromShelf,
} from '@services/bookshelves'
import { AxiosError, type AxiosResponse } from 'axios'
import type { BookCardProps } from '@@types/bookCard'
import type { MouseEventHandler } from 'react'
import { AppLink } from "@components/ui/AppLink"
import { BookTooltip } from '@components/book-card/BookTooltip'
import { Button } from '@components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Image } from "@components/ui/image"
import { Title } from "@components/ui/title"
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'

type ToastProps = {
  type?: 'success' | 'error'
  title: string
  description?: string
}

const triggerToast = ({ title, type = "success", description }: ToastProps) => {
  toast[type](title, {
    description,
    duration: 3000,
    action: {
      label: 'Dismiss',
      onClick: () => toast.dismiss(),
    }
  })
}

export const BookCard = ({
  title,
  author,
  cover,
  slug,
  genre,
  isAdded = false,
  refetch
}: Omit<BookCardProps, 'id'> & {
  isAdded?: boolean
  refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<AxiosResponse<{ data: unknown }, unknown>, Error>>
}
) => {
  const { pathname } = useLocation()
  const isYourBooks = pathname.includes('/your-books')

  const { mutateAsync: addToShelfAsync } = useMutation({
    mutationKey: ['booksIds', slug],
    mutationFn: () => addBookToShelf(slug),
  })

  const { mutateAsync: removeFromShelfAsync } = useMutation({
    mutationKey: ['removeFromShelf', slug],
    mutationFn: (slug: string) => removeFromShelf(slug),
  })

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      if (isAdded) {
        await removeFromShelfAsync(slug)
        triggerToast({
          title: 'Book removed from shelf',
          type: 'success',
          description: 'You can always add it back later!'
        })
      } else {
        await addToShelfAsync()
        triggerToast({
          title: 'Book added to shelf',
          type: 'success',
          description: 'Go to your shelf to check it out!'
        })
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Error updating book shelf:', error.message)  
      }
      triggerToast({
        title: 'Error updating book shelf',
        type: 'error',
        description: 'Please try again later.'
      })
    }
    
    if (refetch) await refetch()
  }

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
            <p className="text-xs text-primary font-semibold">{genre}</p>
            <AppLink to={`/books/${slug}`} className="w-full">
              <Title
                as="h3"
                className="text-base line-clamp-1 font-medium text-primary transition-colors hover:underline"
              >
                {title}
              </Title>
            </AppLink>
          </div>
          <BookTooltip isAdded={isAdded} onClick={handleClick} />
          <Button
            variant="none"
            size="none"
            className="hover:cursor-pointer lg:hidden"
            onClick={handleClick}
          >
            {isAdded ? 'Remove' : 'Add'}
          </Button>
        </section>
        <p className="text-xs line-clamp-1 font-medium text-muted-foreground transition-colors">{author}</p>
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