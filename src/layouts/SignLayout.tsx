import type { ReactNode } from "react"
import { Image } from "@components/ui/image"
import { SignContainer } from "@components/ui/containers/SignContainer"

export const SignLayout = ({ children }: { children: ReactNode }) => (
  <SignContainer>
    <Image
      src="/images/sign-banner.jpg"
      alt="Sign up banner"
      className="hidden lg:block w-full h-screen"
    />
    {children}
  </SignContainer>
)