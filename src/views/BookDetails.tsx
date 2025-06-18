import {
  useLocation,
  useParams
} from "react-router-dom"
import type { BookCardProps } from "@@types/bookCard"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Layout } from "@layouts/Layout"
import { useQuery } from "@tanstack/react-query"
import { getBookBySlug } from "@services/books"
import { BookDetailsLayout } from "@layouts/BookDetailsLayout"
import { NoBookFound } from "@components/book-details/NoBookFound"
import { BookLoader } from "@layouts/BookLoader"

export const BookDetails = () => {
  const { pathname } = useLocation()
  const { slug } = useParams()
  const isYourBooks = pathname.includes('/your-books/books')

  const { data, isLoading, error } = useQuery<{ data: { data: BookCardProps } }>({
    queryKey: ['book', slug],
    queryFn: () => getBookBySlug(slug!),
  })

  const book = data?.data?.data

  const renderContent = () => {
    if (error) return <NoBookFound path={isYourBooks ? 'your-books' : 'discover'} />
    if (isLoading) return <BookLoader />
    
    return (
      <BookDetailsLayout
        book={book}
        isYourBooks={isYourBooks}
      />
    )
  }

  return (
    <Layout>
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </Layout>
  )
}