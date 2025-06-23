import type { ReactNode } from "react"
import { Image } from "@components/ui/image"
import { SignContainer } from "@components/ui/containers/SignContainer"

type SignLayoutProps = {
  children: ReactNode
  path?: 'login' | 'register'
}

export const SignLayout = ({ children, path = "register" }: SignLayoutProps) => {
  const alt = path === 'register' ? 'Register Banner' : 'Login Banner'

  return (
    <SignContainer>
      <Image
        src="/images/sign-banner.jpg"
        alt={alt}
        className="hidden lg:block w-full h-screen"
      />
      {children}
    </SignContainer>
  )
}