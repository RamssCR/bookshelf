import { ChevronRight } from "lucide-react"
import { AppLink } from "@components/ui/AppLink"

type RedirectToProps = {
  isYourBooks: boolean
  slug?: string
}

export const RedirectTo = ({ isYourBooks, slug }: RedirectToProps) => (
  <AppLink
    to={`/${isYourBooks ? 'your-books' : 'discover'}/books/read/${slug}`}
    className="mt-3 w-fit group inline-flex items-center gap-0.5 text-base font-medium text-primary transition-all hover:underline"
  >
    {isYourBooks ? 'Continue Reading' : 'Read Book'}
    <ChevronRight className="text-primary size-5 duration-100 group-hover:translate-x-1" />
  </AppLink>
)