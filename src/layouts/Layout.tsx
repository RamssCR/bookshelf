import type { ReactNode } from "react"
import { Header } from "@components/header/Header"
import { Sidebar } from "@components/sidebar/Sidebar"
import { AccountContainer } from "@components/ui/containers/AccountContainer"

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <AccountContainer>
      <Header />
      <section className="mt-[4.25em] lg:mt-[5rem] w-full min-h-[calc(100dvh-4.25em)] lg:min-h-[calc(100dvh-5rem)] grid grid-cols-1 lg:grid-cols-[1fr_3fr]">
        <Sidebar />
        {children}
      </section>
    </AccountContainer>
  )
}