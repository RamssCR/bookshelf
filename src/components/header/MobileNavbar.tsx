import { Button } from "@components/ui/button/button"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet/sheet'
import { AppLink } from "@components/ui/app-link/AppLink"
import { User } from "./User"
import { DarkModeToggler } from "@components/dark-mode-toggler/DarkModeToggler"
import { Update } from "@components/notification/Update"
import { useLocation } from "react-router-dom"
import links from '@data/internal.links.json';
import { classMerger } from "@utils/classMerger"
import { userStore } from "@stores/userStore"
import { logout } from "@services/authentication"

export const MobileNavbar = () => {
  const { user, clearUser } = userStore()
  const { pathname } = useLocation()

  const handleClick = async () => {
    await logout()
    clearUser()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="text-sm">
            Discover new books, manage your bookshelf, and more.
          </SheetDescription>
        </SheetHeader>
        <User
          username={user?.username ?? 'Unknown User'}
          className="px-4 w-full flex items-center gap-3"
        />
        <nav className="py-4 px-2 w-full flex flex-col items-start">
          {links.map(link => (
            <AppLink
              key={link.id}
              to={`/${link.value}`}
              variant="muted"
              size="md"
              className={classMerger(
                "w-full rounded-md",
                pathname.split('/').includes(link.value) ? "bg-accent px-3" : ""
              )}
            >
              {link.title}
            </AppLink>
          ))}
          <AppLink
            to="/login"
            variant="muted"
            size="md"
            className={classMerger(
              "px-3 transition-all hover:px-3 w-full rounded-md",
              pathname === '/login' ? "px-3 bg-accent" : ""
            )}
            onClick={handleClick}
          >
            Logout
          </AppLink>
          <DarkModeToggler className="mt-2 px-2.75" />
        </nav>
        <div className="px-4 mt-auto mb-4">
          <Update
            title="Befriending Update"
            description="Stay tuned for version 1.1!"
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}