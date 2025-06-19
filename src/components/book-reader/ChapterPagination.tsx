import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination'

type ChapterPaginationProps = {
  basePath: string
  bookSlug: string
  previous: number
  next: number
}

export const ChapterPagination = ({ basePath, bookSlug, previous, next }: ChapterPaginationProps) => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious to={`/${basePath}/books/read/${bookSlug}/${previous}`} />
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext to={`/${basePath}/books/read/${bookSlug}/${next}`} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)