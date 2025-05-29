import type { Item } from '@@types/combobox'
import { useState } from 'react'

export const useComboboxFilter = (items: Item[]) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const foundItem = items.find(item => item.value.toLocaleLowerCase() === value.toLocaleLowerCase())?.label

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? '' : currentValue)
    setOpen(false)
  }

  return {
    open,
    setOpen,
    value,
    foundItem,
    handleSelect,
  }
}