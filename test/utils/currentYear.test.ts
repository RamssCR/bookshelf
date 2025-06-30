import { describe, expect, test } from 'vitest'
import { currentYear } from '@utils/currentYear'

describe('currentYear', () => {
  test('returns the current year', () => {
    const now = new Date()
    const expectedYear = now.getFullYear()
    expect(currentYear()).toBe(expectedYear)
  })

  test('returns a number', () => {
    expect(typeof currentYear()).toBe('number')
  })
})