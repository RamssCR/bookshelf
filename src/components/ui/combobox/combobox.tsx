import type { Item } from "@@types/combobox"
import { Check, ChevronsUpDown } from "lucide-react"
import { classMerger } from "@utils/classMerger"
import { Button } from "@components/ui/button/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@components/ui/command/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover/popover"
import { useComboboxFilter } from "@hooks/useComboboxFilter"
import type { InputHTMLAttributes } from "react"

type ComboboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
  items: Item[]
  name: string
}

export const Combobox = ({ items, name, ...props }: ComboboxProps) => {
  const {
    open,
    setOpen,
    value,
    foundItem,
    handleSelect,
  } = useComboboxFilter(items)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? foundItem
            : `Select ${name}...`
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput 
            placeholder={`Search ${name}...`}
            {...props}
          />
          <CommandList>
            <CommandEmpty>{`No ${name} found.`}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={classMerger(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
