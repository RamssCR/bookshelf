import { Title } from "@components/ui/title"
import { User as UserIcon } from 'lucide-react'
import { AppLink } from "@components/ui/AppLink"
import { classMerger } from "@utils/classMerger"

export const User = ({ username, className }: { username?: string, className?: string }) => {
  return (
    <AppLink 
      to="/profile" 
      className={classMerger(className)}
    >
      <div className="p-2.5 border-2 border-input rounded-full">
        <UserIcon className="fill-primary" />
      </div>
      <div className="flex flex-col items-start">
        <Title as="h6" className="text-base font-medium text-primary">{username}</Title>
        <p className="text-muted-foreground font-medium text-xs">Bookaholic</p>
      </div>
    </AppLink>
  )
}