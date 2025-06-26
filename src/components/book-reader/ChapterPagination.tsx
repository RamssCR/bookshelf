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
  <Pagination role="navigation" aria-label="Chapter Pagination">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious 
          to={`/${basePath}/books/read/${bookSlug}/${previous}`}
          aria-label="Go to previous chapter"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis aria-hidden="true" />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext 
          to={`/${basePath}/books/read/${bookSlug}/${next}`}
          aria-label="Go to next chapter"
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)