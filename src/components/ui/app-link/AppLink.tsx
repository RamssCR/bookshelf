import {
  type LinkProps,
  Link,
} from 'react-router-dom'
import {
  type LinkVariants,
  linkVariants,
} from './linkVariants'
import { classMerger } from '@utils/classMerger'

type AppLinkProps = LinkProps & LinkVariants

export const AppLink = ({
  className,
  color,
  variant,
  size,
  ...props
}: AppLinkProps) => {
  return (
    <Link
      className={classMerger(
        linkVariants({ color, variant, size }),
        className,
      )}
      {...props}
    />
  )
}