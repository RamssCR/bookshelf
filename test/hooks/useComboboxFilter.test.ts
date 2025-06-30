import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useComboboxFilter } from '@hooks/useComboboxFilter'

describe('useComboboxFilter', () => {
  const items = [
    { name: 'Item 1', id: '1' },
    { name: 'Item 2', id: '2' },
    { name: 'Item 3', id: '3' },
  ]

  test('should initialize with correct default values', () => {
    const { result } = renderHook(() => useComboboxFilter(items))
    expect(result.current.open).toBe(false)
    expect(result.current.value).toBe('')
    expect(result.current.foundItem).toBeUndefined()
  })

  test('should find item by name', () => {
    const { result } = renderHook(() => useComboboxFilter(items))
    act(() => {
      result.current.handleSelect('Item 1')
    })
    
    expect(result.current.foundItem).toBe('Item 1')
  })

  test('should handle select and toggle value', () => {
    const { result } = renderHook(() => useComboboxFilter(items))

    act(() => {
      result.current.handleSelect('Item 1')
    })

    expect(result.current.value).toBe('Item 1')
    expect(result.current.open).toBe(false)

    act(() => {
      result.current.handleSelect('Item 1')
    })

    expect(result.current.value).toBe('')
    expect(result.current.open).toBe(false)
  })
})