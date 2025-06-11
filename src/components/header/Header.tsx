import { Title } from "@components/ui/title"
import { MobileNavbar } from "./MobileNavbar"
import { User } from "./User"
import { userStore } from "@stores/userStore"

export const Header = () => {
  const { user } = userStore()

  return (
    <header className="fixed z-10 w-full bg-background border-b border-b-input flex items-center justify-between py-4 px-5 lg:pr-8 lg:pl-6">
      <Title as="h2" className="text-primary text-xl">Bookshelf</Title>
      <section className="lg:hidden">
        <MobileNavbar />
      </section>
      <User 
        username={user?.username ?? 'Unknown User'}
        className="hidden lg:flex items-center gap-3"
      />
    </header>
  )
}