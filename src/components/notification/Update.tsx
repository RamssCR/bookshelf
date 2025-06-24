import { Milestone } from 'lucide-react'
import { Title } from "@components/ui/title"
import { classMerger } from '@utils/classMerger'

type UpdateProps = {
  title: string
  description: string
  className?: string
}

export const Update = ({ title, description, className }: UpdateProps) => {
  return (
    <article 
      className={classMerger(
        'mt-auto w-full border border-input py-2.5 px-3 rounded-lg flex items-center gap-3',
        className
      )}
      role="region"
      aria-labelledby="update-title"
      aria-describedby="update-description"
    >
      <Milestone className="text-primary size-6" aria-hidden="true" />
      <section className="flex flex-col items-start gap-1">
        <Title 
          as="h5" 
          className="text-sm text-primary font-medium"
          id="update-title"
        >
          {title}
        </Title>
        <p 
          className="text-xs font-medium text-muted-foreground"
          id="update-description"
        >
          {description}
        </p>
      </section>
    </article>
  )
}