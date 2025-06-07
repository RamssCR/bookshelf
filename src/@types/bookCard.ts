export type BookCardProps = {
  readonly id: string
  slug: string
  title: string
  Author: {
    id: string
    name: string
  }
  Genre: {
    id: string
    name: string
  }
  cover: string
}