import { Field, type FieldProps } from '@components/sign-field/Field'
import { Button } from '@components/ui/button/button'

export const LoginForm = () => {
  const fields: FieldProps[] = [
    { id: 'email', label: 'Email', placeholder: 'e.g example@example.com' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'e.g ***********' },
  ]

  return (
    <form className="w-full flex flex-col gap-5">
      {fields.map(({ id, label, placeholder, type }) => {
        const autoComplete = {
          email: 'email',
          password: 'current-password',
        }

        return (
          <Field
            key={id}
            id={id}
            label={label}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete[id as keyof typeof autoComplete]}
          />
        )
      })}
      <Button className="w-full mt-2">
        Log In
      </Button>
    </form>
  )
}