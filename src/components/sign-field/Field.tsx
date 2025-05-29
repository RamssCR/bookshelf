import type { InputHTMLAttributes } from 'react'
import { Input } from '@components/ui/input/input'
import { Label } from '@components/ui/label/label'

export type FieldProps = {
  readonly id: string
  label: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder: string
  autoComplete?: string
}

export const Field = ({ id, label, placeholder, autoComplete, type = "text" }: FieldProps) => (
  <section className="grid w-full gap-3">
    <Label htmlFor={id}>{label}</Label>
    <Input type={type} id={id} placeholder={placeholder} autoComplete={autoComplete} />
  </section>
)