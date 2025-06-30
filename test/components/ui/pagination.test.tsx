import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
  PaginationContent,
} from '@components/ui/pagination'
import { MemoryRouter } from 'react-router-dom'

describe('Pagination', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    )
    const pagination = screen.getByRole('navigation', { name: /pagination/i })
    expect(pagination).toBeDefined()
  })
})

describe('PaginationContent', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <PaginationContent />
      </MemoryRouter>
    )
    const content = screen.getByRole('list')
    expect(content).toBeDefined()
  })
})

describe('PaginationItem', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <PaginationItem />
      </MemoryRouter>
    )
    const item = screen.getByRole('listitem')
    expect(item).toBeDefined()
  })
})

describe('PaginationLink', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <PaginationLink to="/" />
      </MemoryRouter>
    )
    const link = screen.getByRole('link')
    expect(link).toBeDefined()
  })

  test('applies active state when isActive is true', () => {
    render(
      <MemoryRouter>
        <PaginationLink to="/" isActive />
      </MemoryRouter>
    )
    const link = screen.getByRole('link')
    expect(link.getAttribute('aria-current')).toBe('page')
  })
})

describe('PaginationEllipsis', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <PaginationEllipsis />
      </MemoryRouter>
    )
    const ellipsis = screen.getByText(/more pages/i)
    expect(ellipsis).toBeDefined()
  })
})

describe('PaginationNext', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <PaginationNext to="/next" />
      </MemoryRouter>
    )
    const next = screen.getByLabelText(/go to next page/i)
    expect(next).toBeDefined()
  })
})

describe('PaginationPrevious', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <PaginationPrevious to="/previous" />
      </MemoryRouter>
    )
    const previous = screen.getByLabelText(/go to previous page/i)
    expect(previous).toBeDefined()
  })
})