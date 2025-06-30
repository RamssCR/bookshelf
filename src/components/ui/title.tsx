import type { HTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ 
  as: Tag = "h1", 
  className, 
  ...props 
}: TitleProps) => {
  return (
    <Tag
      className={classMerger(
        'text-2xl font-semibold',
        className
      )}
      {...props}
    />
  )
}