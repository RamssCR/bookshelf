import type { ImgHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

export const Image = ({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      className={classMerger(className)}
      {...props}
    />
  )
}