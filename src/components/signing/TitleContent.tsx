import { AppLink } from '@components/ui/AppLink'
import { CardTitle, CardDescription } from '@components/ui/card'
import { ChevronLeft } from 'lucide-react'

type TitleContentProps = {
  title: string
  description: string
}

export const TitleContent = ({ title, description }: TitleContentProps) => {
  return (
    <>
      <CardTitle className="flex flex-col items-start gap-4">
        <AppLink to="/" className="flex items-center gap-1 font-medium text-primary text-sm">
          <ChevronLeft className="fill-primary size-4" />
          Back to the landing page
        </AppLink>
        {title}
      </CardTitle>
      <CardDescription className="text-sm font-medium text-muted-foreground">
        {description}
      </CardDescription>
    </>
  )
}