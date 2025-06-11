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
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={`/${previous}`} />
        </PaginationItem>
        {pagination?.map(item => (
          <PaginationItem key={`${paginationId}-${item.id}`}>
            <PaginationLink
              to={`/${path}?page=${item.current}`}
              isActive={item.isActive}
            >
              {item.current}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext to={`/${next}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}