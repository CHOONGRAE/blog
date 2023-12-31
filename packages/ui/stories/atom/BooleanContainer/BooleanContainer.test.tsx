import { fireEvent, render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './BooleanContainer.stories'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const { Default, Example } = composeStories(stories)

test('Default', () => {
  render(<Default data-testid="DefaultBooleanContainer" />)
  const element = screen.getByTestId('DefaultBooleanContainer')
  expect(element).toBeInTheDocument()
})

describe('Test Stories', () => {
  it('props', () => {
    render(<Example />)

    const test1 = screen.getByText(/\{ init: true, propName: 'open' \}/i)
    expect(test1).toBeInTheDocument()
    expect(test1).toHaveTextContent(/open: true/)
    fireEvent.click(test1)
    expect(test1).toHaveTextContent(/open: false/)

    const test2 = screen.getByText(/\{ init: false, propName: 'rotate' \}/i)
    expect(test2).toBeInTheDocument()
    expect(test2).toHaveTextContent(/rotate: false/)
    fireEvent.click(test2)
    expect(test2).toHaveTextContent(/rotate: true/)
  })
})
