import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

type UsePaginationProps = {
  query: string | null
  path: string
  limit: number
}

export const usePagination = ({ query, path, limit }: UsePaginationProps) => {
  const navigateTo = useNavigate()

  useEffect(() => {
    if (!query) {
      navigateTo(`/${path}?page=1`)
    }
  }, [navigateTo, query, path])

  /**
   * Marks the current page as active based on the query parameter.
   */
  const pageActive = (page: number) => query === String(page)

  /**
   * Retroceeds to the previous page limit.
   * If the current page is 1, it returns 1.
   */
  const previousLimit = () => {
    const currentPage = Number(query)
    return currentPage - 1 < 1 ? 1 : currentPage - 1
  }

  /**
   * Advances to the next page limit.
   * If the current page is equal to or greater than the limit, 
   * it returns the limit.
   */
  const nextLimit = () => {
    const currentPage = Number(query)
    return currentPage + 1 > limit ? limit : currentPage + 1
  }

  return {
    pageActive,
    previousLimit,
    nextLimit,
  }
}