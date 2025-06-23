export type BookContent = {
  readonly id: string
  title: string
  book: string
  chapterNumber: number
  content: string
  slug: string
  panel: {
    next: number
    previous: number
  }
}