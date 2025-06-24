import type { AxiosError, AxiosResponse } from 'axios'
import type { Auth } from '@@types/authentication'
import type { User } from '@@types/user'
import { Field, type FieldProps } from '@components/signing/Field'
import { Button } from '@components/ui/button'
import { ErrorNotification } from '@components/notification/ErrorNotification'
import { register as registerUser } from '@services/authentication'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { userStore } from '@stores/userStore'

const autoComplete = {
  username: 'username',
  email: 'email',
  password: 'new-password',
}

const fields: Omit<FieldProps, 'register'>[] = [
  { id: 'username', label: 'Username', placeholder: 'e.g John Doe' },
  { id: 'email', label: 'Email', placeholder: 'e.g example@example.com' },
  { id: 'password', label: 'Password', type: 'password', placeholder: 'e.g ***********' },
]

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<Auth>()
  const { setUser } = userStore()
  const navigateTo = useNavigate()

  const {
    mutateAsync: registerUserAsync,
    error,
    isPending
  } = useMutation<
    AxiosResponse<{ data: User }, unknown>,
    AxiosError<{ message: string }>,
    Record<string, unknown>,
    unknown
  >({
    mutationFn: registerUser
  })

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      const response = await registerUserAsync(data)
      setUser(response?.data?.data as User)
      navigateTo('/bookshelf')
      reset()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form
      role="form"
      aria-labelledby="register-form-title"
      className='w-full flex flex-col gap-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 id="register-form-title" className="sr-only">Sign Up Form</h2>
      {error && <ErrorNotification message={error?.response?.data?.message} />}
      {fields.map(({ id, ...rest }) => (
        <Field
          key={id}
          id={id}
          {...rest}
          register={register}
          autoComplete={autoComplete[id]}
        />
      ))}
      <Button 
        type="submit" 
        className="w-full mt-2"
        disabled={isPending}
        aria-busy={isPending}
      >
        {isPending ? 'Signing up...' : 'Sign Up'}
      </Button>
    </form>
  )
}