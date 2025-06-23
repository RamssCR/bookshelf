import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@components/ui/card'
import { AppLink } from '@components/ui/AppLink'
import { LoginForm } from '@components/login/LoginForm'
import { Notification } from '@components/notification/Notification'
import { SignLayout } from '@layouts/SignLayout'
import { TitleContent } from '@components/signing/TitleContent'
import { currentYear } from '@utils/currentYear'

export const Login = () => {
  return (
    <SignLayout path="login">
      <Card className="w-full max-w-[30em] lg:max-w-full h-full bg-background lg:rounded-none flex flex-col items-center gap-4">
        <CardHeader className="w-full">
          <TitleContent
            title="Log back into your account"
            description="Log into your account and continue your reading journey!"
          />
        </CardHeader>
        <CardContent className="space-y-4 w-full">
          <Notification />
          <LoginForm />
          <p className="text-center text-sm font-medium text-muted-foreground">
            Don't have an account yet?{' '}
            <AppLink className="hover:underline" to="/register">
              Sign up
            </AppLink>
          </p>
        </CardContent>
        <CardFooter className="mt-auto text-xs font-medium text-muted-foreground">
          Copyright © {currentYear()} Bookshelf. All rights reserved.
        </CardFooter>
      </Card>
    </SignLayout>
  )
}