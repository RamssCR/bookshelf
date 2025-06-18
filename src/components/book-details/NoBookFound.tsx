import { AppLink } from "@components/ui/AppLink"
import { Title } from "@components/ui/title"

export const NoBookFound = ({ path = 'discover' }: { path?: 'your-books' | 'discover' }) => {
  const GoBack = () => {
    return (
      <AppLink 
        to={`/${path}`} 
        className="mt-2 text-sm font-medium text-primary hover:underline"
      >
        Go back to {path === 'your-books' ? 'your Bookshelf' : 'Discover'}
      </AppLink>
    )
  }

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-1">
      <Title className="text-2xl text-primary lg:text-3xl">Book not found!</Title>
      <p className="text-sm text-muted-foreground">We couldn't find the book you were looking for.</p>
      <GoBack />
    </section>
  )
}