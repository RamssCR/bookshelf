import type { ComponentProps } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { classMerger } from "@utils/classMerger"
import { Button } from "@components/ui/button/button"
import { buttonVariants } from '@components/ui/button/buttonVariants'
import { Link, type LinkProps } from "react-router-dom"

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={classMerger("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

const PaginationContent = ({
  className,
  ...props
}: ComponentProps<"ul">) => {
  return (
    <ul
      data-slot="pagination-content"
      className={classMerger("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

const PaginationItem = ({ ...props }: ComponentProps<"li">) => {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ComponentProps<typeof Button>, "size"> &
  LinkProps

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={classMerger(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={classMerger("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={classMerger("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={classMerger("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
