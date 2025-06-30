import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Combobox } from '@components/ui/combobox'
import { useComboboxFilter } from '@hooks/useComboboxFilter'

vi.mock('@hooks/useComboboxFilter')

describe('Combobox', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders with default props', () => {
    (useComboboxFilter as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      open: false,
      setOpen: vi.fn(),
      value: '',
      foundItem: null,
      handleSelect: vi.fn(),
    })

    render(<Combobox items={[]} name="Test" />)
    const button = screen.getByRole('combobox')
    expect(button).toBeDefined()
    expect(button.textContent).toContain('Select Test...')
  })

  test('opens the combobox on button click', () => {
    const mockSetOpen = vi.fn()
    ;(useComboboxFilter as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      open: false,
      setOpen: mockSetOpen,
      value: 'Selected Item',
      foundItem: null,
      handleSelect: vi.fn(),
    })

    render(<Combobox items={[]} name="Test" />)
    const button = screen.getByRole('combobox')
    fireEvent.click(button)
    expect(mockSetOpen).toHaveBeenCalledWith(true)
  })

  test('displays selected item when an item is selected', () => {
    const mockHandleSelect = vi.fn()
    ;(useComboboxFilter as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      open: false,
      setOpen: vi.fn(),
      value: 'Selected Item',
      foundItem: 'Selected Item',
      handleSelect: mockHandleSelect,
    })

    render(
      <Combobox 
        items={[
          { id: '1', name: 'Selected Item' }, 
          { id: '2', name: 'Another Item' }
        ]} 
        name="Test" />
    )
    const button = screen.getByRole('combobox')
    expect(button.textContent).toContain('Selected Item')
  })
})