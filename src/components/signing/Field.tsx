import type { InputHTMLAttributes } from 'react'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import type { UseFormRegister } from 'react-hook-form'
import type { Auth } from '@@types/authentication'

export type FieldProps = {
  readonly id: keyof Auth
  label: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder: string
  autoComplete?: string
  register: UseFormRegister<Auth>
  required?: boolean
}

export const Field = ({ 
  id, 
  label, 
  placeholder, 
  autoComplete, 
  register, 
  required = true,
  type = "text" 
}: FieldProps) => (
  <section className="grid w-full gap-3">
    <Label htmlFor={id}>
      {label} {required && <span aria-hidden="true" className="-ml-1 text-destructive">*</span>}
    </Label>
    <Input 
      type={type} 
      id={id}
      aria-required={required} 
      placeholder={placeholder} 
      autoComplete={autoComplete === 'username' ? 'name' : autoComplete} 
      {...register(id as keyof Auth, { required: false })}
    />
  </section>
)