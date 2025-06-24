import { useLocation, useNavigate, useParams } from "react-router-dom"
import { BookReaderError } from "@components/book-reader/Error"
import { ChapterPagination } from "@components/book-reader/ChapterPagination"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Layout } from "@layouts/Layout"
import { SkeletonReader } from "@components/book-reader/Skeleton"
import { Title } from "@components/ui/title"
import { useEffect } from "react"
import { useBookChapterByNumber } from "@hooks/useBookByChapter"

export const BookReader = () => {
  const navigateTo = useNavigate()
  const { slug, chapter } = useParams()
  const { pathname } = useLocation()
  const basePath = pathname.split("/")[1]

  useEffect(() => {
    if (!chapter || isNaN(Number(chapter))) {
      navigateTo(`/${basePath}/books/read/${slug}/1`, { replace: true })
    }
  }, [chapter, navigateTo, slug, basePath])

  const { chapterContent, error, isLoading } = useBookChapterByNumber(slug, chapter)
  const renderContent = () => {
    if (isLoading) return <SkeletonReader />
    if (error) return <BookReaderError chapter={chapter} />

    const paragraphs = chapterContent?.content.split('|')
    return (
      <>
        <Title className="text-primary text-2xl lg:text-3xl">{chapterContent?.book}</Title>
        <section className="w-full flex flex-col items-start gap-1">
          <Title as="h2" className="text-primary text-xl lg:text-2xl">Chapter {chapter ?? 1}</Title>
          <Title as="h3" className="text-muted-foreground text-sm font-medium lg:text-base">
            {chapterContent?.title}
          </Title>
        </section>
        <section className="w-full flex flex-col items-start gap-5">
          {paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-primary">
              {paragraph.trim()}
            </p>
          ))}
        </section>
        <section className="w-full flex items-center justify-center mt-5">
          <ChapterPagination
            bookSlug={slug ?? ""}
            basePath={basePath}
            previous={chapterContent?.panel.previous ?? 1}
            next={chapterContent?.panel.next ?? 1}
          />
        </section>
      </>
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