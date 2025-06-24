import { useMutation } from '@tanstack/react-query'
import {
  addBookToShelf,
  removeFromShelf as removeFromShelf
} from '@services/bookshelves'

export const useShelfMutation = (slug: string) => {
  const { mutateAsync: addToShelfAsync } = useMutation({
    mutationKey: ['addBookToShelf', slug],
    mutationFn: () => addBookToShelf(slug),
  })

  const { mutateAsync: removeFromShelfAsync } = useMutation({
    mutationKey: ['removeFromShelf', slug],
    mutationFn: () => removeFromShelf(slug),
  })

  return {
    addToShelfAsync,
    removeFromShelfAsync,
  }
}