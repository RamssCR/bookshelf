import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ChapterPagination } from "@components/book-reader/ChapterPagination"
import { ContentContainer } from "@components/ui/containers/ContentContainer"
import { Layout } from "@layouts/Layout"
import { Title } from "@components/ui/title"
import { useEffect } from "react"

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

  return (
    <Layout>
      <ContentContainer>
        <Title className="text-primary text-2xl lg:text-3xl">Don Quixote</Title>
        <section className="w-full flex flex-col items-start gap-1">
          <Title as="h2" className="text-primary text-xl lg:text-2xl">Chapter {chapter ?? 1}</Title>
          <Title as="h3" className="text-muted-foreground text-sm font-medium lg:text-base">
            The Adventures of Don Quixote
          </Title>
        </section>
        <section className="w-full flex flex-col items-start gap-5">
            <p className="text-primary">
              In a village of La Mancha, the name of which I have no desire to call to mind, there 
              lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, 
              a lean hack, and a greyhound for coursing.
            </p>
            <p className="text-primary">
              An olla of rather more beef than mutton, a salad on most nights, some lean chorizo,
              and a pigeon or so, constituted his whole diet. The age of this gentleman was about fifty,
              he was of a hardy habit, spare, gaunt-featured, a very early riser, and a great sportsman.
            </p>
            <p className="text-primary">
              The story of Don Quixote is one of the most famous in literature, chronicling the adventures
              of a man who becomes so enamored with chivalric tales that he decides to become a knight-errant
              himself. His journey is filled with both comedic and poignant moments, as he battles windmills
              he believes to be giants and seeks to revive the ideals of knighthood in a world that has moved on.
            </p>
            <p className="text-primary">
              The good squire Sancho Panza, who accompanied him on his adventures, tried in vain to bring his master 
              back to reality. Yet Don Quixote persisted in his delusions, seeing castles where there were inns, and 
              armies where there were sheep.
            </p>
            <p className="text-primary">
              Through heat and cold, rain and shine, master and squire traversed the Spanish countryside, seeking 
              glory and righting what Don Quixote perceived as wrongs. Their misadventures became legendary throughout 
              the land, though not always for the reasons the knight had hoped.
            </p>
            <p className="text-primary">
              His library, which had been the source of his madness, contained hundreds of books about knights and 
              their deeds. These volumes had so filled his mind with extraordinary notions that he could no longer 
              distinguish between reality and the fantastic world of chivalric romance.
            </p>
            <p className="text-primary">
              Ultimately, Don Quixote's story is a reflection on the nature of reality, the power of imagination,
              and the enduring quest for meaning in a world that often seems indifferent to our dreams.
            </p>
        </section>
        <section className="w-full flex items-center justify-center mt-5">
          <ChapterPagination
            bookSlug={slug ?? ""}
            basePath={basePath}
            previous={Math.max(1, Number(chapter) - 1)}
            next={Number(chapter) + 1}
          />
        </section>
      </ContentContainer>
    </Layout>
  )
}