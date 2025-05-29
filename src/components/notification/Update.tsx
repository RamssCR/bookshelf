import { Milestone } from 'lucide-react'
import { Title } from "@components/ui/title/title"
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
    >
      <Milestone className="text-primary size-6" />
      <section className="flex flex-col items-start gap-1">
        <Title as="h5" className="text-sm text-primary font-medium">{title}</Title>
        <p className="text-xs font-medium text-muted-foreground">{description}</p>
      </section>
    </article>
  )
}