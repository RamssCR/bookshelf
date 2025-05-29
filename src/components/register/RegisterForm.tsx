import { Field, type FieldProps } from '@components/sign-field/Field'
import { Button } from '@components/ui/button/button'

export const RegisterForm = () => {
  const fields: FieldProps[] = [
    { id: 'name', label: 'Username', placeholder: 'e.g John Doe' },
    { id: 'email', label: 'Email', placeholder: 'e.g example@example.com' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'e.g ***********' },
  ]

  return (
    <form className='w-full flex flex-col gap-5'>
      {fields.map(({ id, label, placeholder, type }) => {
        const autoComplete = {
          name: 'username',
          email: 'email',
          password: 'new-password',
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
        Sign Up
      </Button>
    </form>
  )
}