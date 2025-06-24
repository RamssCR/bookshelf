import type { PaginationProps } from '@@types/pagination'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination'
import { useId } from 'react'

type InnerPaginationProps = {
  path: string
  previous: string
  next: string
  pagination: PaginationProps[]
}

export const InnerPagination = ({ path, pagination, previous = "", next = "" }: InnerPaginationProps) => {
  const paginationId = useId()

  return (
    <Pagination role="navigation" aria-label="Pagination">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            to={`/${previous}`} 
            aria-label="Go to previous page"
          />
        </PaginationItem>
        {pagination?.map(item => (
          <PaginationItem key={`${paginationId}-${item.id}`}>
            <PaginationLink
              to={`/${path}?page=${item.current}`}
              isActive={item.isActive}
              aria-current={item.isActive ? 'page' : undefined}
              aria-label={`Go to page ${item.current}`}
            >
              {item.current}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis aria-hidden="true" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext 
            to={`/${next}`}
            aria-label="Go to next page"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}