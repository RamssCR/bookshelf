import type { AxiosResponse } from 'axios'
import type {
  QueryObserverResult,
  RefetchOptions
} from '@tanstack/react-query'
import { useShelfMutation } from './useShelfMutation'
import { toast } from 'sonner'

type UseBookshelfHandler = {
  isAdded: boolean
  slug: string
  refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<AxiosResponse<{ data: unknown }, unknown>, Error>>
}

type ToastProps = {
  type?: 'success' | 'error'
  title: string
  description?: string
}

const triggerToast = ({ title, type = "success", description }: ToastProps) => {
  toast[type](title, {
    description,
    duration: 3000,
    action: {
      label: 'Dismiss',
      onClick: () => toast.dismiss(),
    }
  })
}

export const useBookshelfHandler = ({
  isAdded,
  slug,
  refetch
}: UseBookshelfHandler) => {
  const { addToShelfAsync, removeFromShelfAsync } = useShelfMutation(slug)

  return async () => {
    try {
      if (isAdded) {
        console.log('Removing book from shelf:', slug)
        await removeFromShelfAsync()
        triggerToast({
          title: 'Book removed from shelf',
          type: 'success',
          description: 'You can always add it back later!'
        })
      } else {
        await addToShelfAsync()
        triggerToast({
          title: 'Book added to shelf',
          type: 'success',
          description: 'Go to your shelf to check it out!'
        })
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error updating book shelf:', error.message)
      }
      triggerToast({
        title: 'Error updating book shelf',
        type: 'error',
        description: 'Please try again later.'
      })
    }

    if (refetch) await refetch()
  }
}