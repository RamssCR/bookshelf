import {
  useLocation,
  useParams
} from "react-router-dom"
import { BookDetailsLayout } from "@layouts/BookDetailsLayout"
import { BookLoader } from "@layouts/BookLoader"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Layout } from "@layouts/Layout"
import { NoBookFound } from "@components/book-details/NoBookFound"
import { useBookBySlug } from "@hooks/useBookBySlug"

export const BookDetails = () => {
  const { pathname } = useLocation()
  const { slug } = useParams()
  const { book, error, isLoading } = useBookBySlug(slug)
  const isYourBooks = pathname.includes('/your-books/books')

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