import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@components/ui/pagination/pagination'

export const InnerPagination = ({ path }: { path: string }) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious to={`/${path}`} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to={`/${path}`} isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to={`/${path}`}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to={`/${path}`}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext to={`/${path}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}