import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@components/ui/card'
import { AppLink } from '@components/ui/AppLink'
import { Image } from '@components/ui/image'
import { Notification } from '@components/notification/Notification'
import { RegisterForm } from '@components/register/RegisterForm'
import { SignContainer } from '@components/ui/containers/SignContainer'
import { TitleContent } from '@components/signing/TitleContent'
import { currentYear } from '@utils/currentYear'

export const Register = () => {
  return (
    <SignContainer>
      <Image
        src="/images/sign-banner.jpg"
        alt="Sign up banner"
        className="hidden lg:block w-full h-screen"
      />
      <Card className="w-full max-w-[30em] lg:max-w-full h-full bg-background lg:rounded-none flex flex-col items-center gap-4">
        <CardHeader className='w-full'>
          <TitleContent
            title="Create an account"
            description="And start your reading journey with us!"
          />
        </CardHeader>
        <CardContent className="space-y-4 w-full">
          <Notification />
          <RegisterForm />
          <p className="text-center text-sm font-medium text-muted-foreground">
            Already have an account?{' '}
            <AppLink className="hover:underline" to="/login">
              Log In
            </AppLink>
          </p>
        </CardContent>
        <CardFooter className="mt-auto text-xs font-medium text-muted-foreground">
          Copyright © {currentYear()} Bookshelf. All rights reserved.
        </CardFooter>
      </Card>
    </SignContainer>
  )
}