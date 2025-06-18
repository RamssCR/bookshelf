export type BookCardProps = {
  readonly id: string
  slug: string
  title: string
  subtitle: string
  synopsis: string
  pages: number
  chapters: number
  author: string
  genre: string
  cover: string
  status?: string
}