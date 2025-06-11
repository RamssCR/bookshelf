import type { AxiosError, AxiosResponse } from 'axios'
import type { Auth } from '@@types/authentication'
import type { User } from '@@types/user'
import { Field, type FieldProps } from '@components/signing/Field'
import { Button } from '@components/ui/button'
import { ErrorNotification } from '@components/notification/ErrorNotification'
import { login } from '@services/authentication'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { userStore } from '@stores/userStore'

const autoComplete = {
  email: 'email',
  password: 'current-password',
}

const fields: Omit<FieldProps, 'register'>[] = [
  { id: 'email', label: 'Email', placeholder: 'e.g example@example.com' },
  { id: 'password', label: 'Password', type: 'password', placeholder: 'e.g ***********' },
]

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<Auth>()
  const { setUser } = userStore()
  const navigateTo = useNavigate()

  const {
    mutateAsync: loginAsync,
    error,
    isPending
  } = useMutation<
    AxiosResponse<{ data: User }, unknown>,
    AxiosError<{ message: string }>,
    Record<string, unknown>,
    unknown
  >({
    mutationFn: login
  })

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      const response = await loginAsync(data)
      setUser(response?.data?.data as User)
      navigateTo('/bookshelf')
      reset()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <ErrorNotification message={error?.response?.data?.message} />}
      {fields.map(({ id, ...rest }) => {
        return (
          <Field
            key={id}
            id={id}
            {...rest}
            autoComplete={autoComplete[id as keyof typeof autoComplete]}
            register={register}
          />
        )
      })}
      <Button className="w-full mt-2">
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}