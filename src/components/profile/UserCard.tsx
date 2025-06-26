import type { User } from '@@types/user'
import { Title } from '@components/ui/title'
import { UserIcon } from 'lucide-react'

export const UserCard = ({ user }: { user: User }) => (
  <section className="w-full flex flex-col items-center gap-3 md:flex-row md:gap-5">
    <div className="p-2.5 size-36 flex items-center justify-center border-2 border-input rounded-full md:size-24">
      <UserIcon
        className="fill-primary size-16 md:size-12"
        aria-hidden="true"
        role="img"
        focusable="false"
      />
    </div>
    <article className="flex flex-col items-center gap-1 md:items-start">
      <Title as="h5" className="text-xl font-medium text-primary">{user?.username}</Title>
      <p className="text-muted-foreground font-medium text-sm">Bookaholic</p>
      <p className="-mt-1 text-muted-foreground font-medium text-sm">{user?.email}</p>
    </article>
  </section>
)