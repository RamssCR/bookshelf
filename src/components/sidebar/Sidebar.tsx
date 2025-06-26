import { AppLink } from '@components/ui/AppLink'
import { DarkModeToggler } from "@components/dark-mode-toggler/DarkModeToggler"
import { Title } from "@components/ui/title"
import { Update } from '@components/notification/Update'
import { classMerger } from '@utils/classMerger'
import links from '@data/internal.links.json'
import { logout } from '@services/authentication'
import { useLocation } from 'react-router-dom'
import { userStore } from '@stores/userStore'

export const Sidebar = () => {
  const { clearUser } = userStore()
  const { pathname } = useLocation()

  const handleClick = async () => {
    await logout()
    clearUser()
  }

  return (
    <aside className="hidden w-full lg:flex flex-col items-start gap-6 px-6 py-5 sticky top-[4.25em] lg:top-[5rem] self-start h-[calc(100dvh-4.25em)] lg:h-[calc(100dvh-5rem)] overflow-y-auto border-r border-r-border">
      <section className="w-full flex flex-col items-start">
        <Title 
          as="h5" 
          className="text-lg font-medium"
          id="sidebar-navigation-title"
        >
          Menu
        </Title>
        <p className="text-sm font-medium text-muted-foreground">Discover new books, manage your bookshelf, and more.</p>
      </section>
      <nav 
        role="navigation"
        aria-labelledby="sidebar-navigation-title"
        className="w-full flex flex-col items-start"
      >
        {links.map(link => (
          <AppLink
            key={link.id}
            to={`/${link.value}`}
            variant="muted"
            size="md"
            aria-current={pathname.split('/').includes(link.value) ? 'page' : undefined}
            className={classMerger(
              "px-3 transition-all hover:px-3 w-full rounded-md",
              pathname.split('/').includes(link.value) ? "px-3 bg-accent" : ""
            )}
          >
            {link.title}
          </AppLink>
        ))}
        <section aria-label="Logout and preferences" className="w-full flex flex-col items-start">
          <AppLink
            to="/login"
            variant="muted"
            size="md"
            className={classMerger(
              "px-3 transition-all hover:px-3 w-full rounded-md",
              pathname === '/login' ? "px-3 bg-accent" : ""
            )}
            onClick={handleClick}
            aria-label="Logout from your account"
          >
            Logout
          </AppLink>
          <DarkModeToggler className="mt-2 pl-3" />
        </section>
      </nav>
      <Update
        title="Befriending Update"
        description="Stay tuned for version 1.1!"
      />
    </aside>
  )
}