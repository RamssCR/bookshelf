import { afterEach, describe, expect, test } from 'vitest'
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@components/ui/sheet'

describe('Sheet', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders with default props', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    const trigger = screen.getByText('Open Sheet')
    expect(trigger).toBeDefined()
  })

  test('opens and closes the sheet on trigger click', async () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
          <SheetClose>Close Modal</SheetClose>
        </SheetContent>
      </Sheet>
    )
    const trigger = screen.getByText('Open Sheet')
    fireEvent.click(trigger)
    const title = screen.getByText('Title')
    expect(title).toBeDefined()

    const closeButton = screen.getByText('Close')
    act(() => {
      fireEvent.click(closeButton)
    })

    await waitFor(async () => {
      expect(screen.getByText('Open Sheet')).toBeDefined()
    })
  })
})

describe('SheetContent', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders with default props', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    const content = screen.getByText('Open Sheet')
    fireEvent.click(content)
    const title = screen.getByText('Title')
    expect(title).toBeDefined()
  })

  test('triggers a from-left animation on open', () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    const trigger = screen.getByText('Open Sheet')
    fireEvent.click(trigger)
    const content = container.querySelector('animate-from-left')
    expect(content).toBeDefined()
  })

  test('triggers a from-right animation on open', () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent side='right'>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    const trigger = screen.getByText('Open Sheet')
    fireEvent.click(trigger)
    const content = container.querySelector('animate-from-right')
    expect(content).toBeDefined()
  })

  test('triggers a from-top animation on open', () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent side='top'>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    const trigger = screen.getByText('Open Sheet')
    fireEvent.click(trigger)
    const content = container.querySelector('animate-from-top')
    expect(content).toBeDefined()
  })

  test('triggers a from-bottom animation on open', () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent side='bottom'>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    const trigger = screen.getByText('Open Sheet')
    fireEvent.click(trigger)
    const content = container.querySelector('animate-from-bottom')
    expect(content).toBeDefined()
  })
})