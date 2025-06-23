import { AppLink } from "@components/ui/AppLink"
import { Title } from "@components/ui/title"

type BookReaderErrorProps = {
    chapter?: string
}

export const BookReaderError = ({ chapter = "" }: BookReaderErrorProps) => (
    <section className="w-full h-full flex flex-col items-center justify-center gap-2">
        <Title className="text-2xl text-primary lg:text-3xl">Chapter not found!</Title>
        <p className="text-muted-foreground font-medium text-sm lg:text-base">
            {`Chapter ${chapter} of this book does not exist or is not available.`}
        </p>
        <AppLink className="text-primary text-sm hover:underline" to="/your-books">Go back to your bookshelf</AppLink>
    </section>
)