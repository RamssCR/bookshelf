import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
    CardFooter,
} from '@components/ui/card'

describe('Card', () => {
  test('renders with default props', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Default Card Title</CardTitle>
          <CardDescription>Default Card Description</CardDescription>
          <CardAction>Default Card Action</CardAction>
        </CardHeader>
        <CardContent>Default Card Content</CardContent>
        <CardFooter>Default Card Footer</CardFooter>
      </Card>
    )
    const card = screen.getByText('Default Card Title')
    expect(card).toBeDefined()
    expect(card.getAttribute('class')).toContain('leading-none')
  })

  test('renders with custom className', () => {
    render(
      <Card className="custom-class">
        <CardHeader>
          <CardTitle>Custom Class Card Title</CardTitle>
          <CardDescription>Custom Class Card Description</CardDescription>
        </CardHeader>
        <CardContent>Custom Class Card Content</CardContent>
        <CardFooter>Custom Class Card Footer</CardFooter>
      </Card>
    )
    const card = screen.getByText('Custom Class Card Title')
    expect(card.getAttribute('class')).toContain('leading-none')
  })
})